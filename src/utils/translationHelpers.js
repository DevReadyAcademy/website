import earlyBirdConfig from '../config/earlyBird';

/**
 * Replaces placeholders in translation strings with early bird config values
 * Placeholders: {COHORT_DATE}, {SPOTS_LEFT}, {URGENCY_BADGE}, {ORIGINAL_PRICE}, {EARLY_BIRD_PRICE}
 */
export const injectEarlyBirdValues = (translations, lang = 'en') => {
  const placeholders = {
    '{COHORT_DATE}': earlyBirdConfig.getCohortDateRange(lang),
    '{SPOTS_LEFT}': earlyBirdConfig.getSpotsLeftText(lang),
    '{URGENCY_BADGE}': earlyBirdConfig.getUrgencyBadge(lang),
    '{ORIGINAL_PRICE}': earlyBirdConfig.originalPrice,
    '{EARLY_BIRD_PRICE}': earlyBirdConfig.earlyBirdPrice,
    '{COHORT_YEAR}': earlyBirdConfig.cohortYear.toString(),
  };

  const replaceInObject = (obj) => {
    if (typeof obj === 'string') {
      let result = obj;
      Object.entries(placeholders).forEach(([placeholder, value]) => {
        result = result.replace(new RegExp(placeholder, 'g'), value);
      });
      return result;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => replaceInObject(item));
    }

    if (obj && typeof obj === 'object') {
      const newObj = {};
      Object.entries(obj).forEach(([key, value]) => {
        newObj[key] = replaceInObject(value);
      });
      return newObj;
    }

    return obj;
  };

  return replaceInObject(translations);
};
