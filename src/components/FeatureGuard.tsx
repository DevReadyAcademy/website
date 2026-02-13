import React from 'react';
import { useFeatureFlag } from '../contexts/FeatureFlagContext';
import { FeatureFlagKey } from '../config/featureFlags';
import { Navigate } from 'react-router-dom';

interface FeatureGuardProps {
    flag: FeatureFlagKey;
    children: React.ReactNode;
    fallback?: React.ReactNode;
    redirectTo?: string;
}

const FeatureGuard: React.FC<FeatureGuardProps> = ({
    flag,
    children,
    fallback = null,
    redirectTo
}) => {
    const isEnabled = useFeatureFlag(flag);

    if (!isEnabled) {
        if (redirectTo) {
            return <Navigate to={redirectTo} replace />;
        }
        return <>{fallback}</>;
    }

    return <>{children}</>;
};

export default FeatureGuard;
