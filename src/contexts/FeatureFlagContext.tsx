import React, { createContext, useContext, useState, useEffect } from 'react';
import { FEATURE_FLAGS, FeatureFlagKey } from '../config/featureFlags';

interface FeatureFlagContextType {
    flags: Record<FeatureFlagKey, boolean>;
    isFeatureEnabled: (key: FeatureFlagKey) => boolean;
}

const FeatureFlagContext = createContext<FeatureFlagContextType | undefined>(undefined);

export const FeatureFlagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize flags from config, potentially merging with localStorage overrides
    const [flags, setFlags] = useState<Record<FeatureFlagKey, boolean>>(() => {
        const storedFlags = localStorage.getItem('featureFlags');
        if (storedFlags) {
            try {
                const parsed = JSON.parse(storedFlags);
                return { ...FEATURE_FLAGS, ...parsed };
            } catch (e) {
                console.error('Failed to parse feature flags from localStorage', e);
                return FEATURE_FLAGS;
            }
        }
        return FEATURE_FLAGS;
    });

    // Optional: Listen for localStorage changes to update flags dynamically (for dev tools)
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'featureFlags' && e.newValue) {
                try {
                    setFlags({ ...FEATURE_FLAGS, ...JSON.parse(e.newValue) });
                } catch (e) {
                    console.error('Failed to parse feature flags update', e);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const isFeatureEnabled = (key: FeatureFlagKey) => {
        return !!flags[key];
    };

    return (
        <FeatureFlagContext.Provider value={{ flags, isFeatureEnabled }}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

export const useFeatureFlag = (key: FeatureFlagKey) => {
    const context = useContext(FeatureFlagContext);
    if (!context) {
        throw new Error('useFeatureFlag must be used within a FeatureFlagProvider');
    }
    return context.isFeatureEnabled(key);
};

export const useFeatureFlags = () => {
    const context = useContext(FeatureFlagContext);
    if (!context) {
        throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
    }
    return context;
};
