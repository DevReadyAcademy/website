import earlyBirdConfig from '../config/earlyBird';

/**
 * Replaces placeholders in translation strings with config values
 * Placeholders: {COHORT_DATE}, {PRICE}, {COHORT_YEAR}
 */
export const injectEarlyBirdValues = (translations, lang = 'en') => {
  const spots = earlyBirdConfig.spotsLeft;
  const spotsLabel = lang === 'gr'
    ? (spots === 1 ? 'θέση' : 'θέσεις')
    : (spots === 1 ? 'spot' : 'spots');
  const spotsVerb = lang === 'gr'
    ? (spots === 1 ? 'απομένει' : 'απομένουν')
    : (spots === 1 ? 'remains' : 'remain');

  const price = earlyBirdConfig.isActive ? earlyBirdConfig.earlyBirdPrice : earlyBirdConfig.originalPrice;

  const placeholders = {
    '{COHORT_DATE}': earlyBirdConfig.getCohortDateRange(lang),
    '{PRICE}': price,
    '{REGULAR_PRICE}': earlyBirdConfig.originalPrice,
    '{EARLY_BIRD_PRICE}': earlyBirdConfig.earlyBirdPrice,
    '{COHORT_YEAR}': earlyBirdConfig.cohortYear.toString(),
    '{SPOTS}': spots.toString(),
    '{SPOTS_LABEL}': spotsLabel,
    '{SPOTS_VERB}': spotsVerb,
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
