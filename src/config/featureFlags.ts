export const FEATURE_FLAGS = {
    CV_REVIEW: true, // Enable/disable CV review functionality
};

export type FeatureFlagKey = keyof typeof FEATURE_FLAGS;
