// Early Bird Configuration
// Update these values to change early bird information across the entire app

export const earlyBirdConfig = {
  // Early bird availability
  spotsLeft: 6,
  isActive: true,

  // Cohort start window (English and Greek)
  cohortDateRange: {
    en: "October–November 2026",
    gr: "Οκτώβριο-Νοέμβριο 2026"
  },
  cohortYear: 2026,

  // Pricing
  originalPrice: "€599",
  earlyBirdPrice: "€399",

  // Early Bird deadline (used for countdown timer)
  earlyBirdDeadline: '2026-09-19T23:59:59+03:00',

  // Get cohort date range for specific language
  getCohortDateRange(lang = 'en') {
    return this.cohortDateRange[lang] || this.cohortDateRange.en;
  },

  // Get spots left text for specific language
  getSpotsLeftText(lang = 'en') {
    if (lang === 'gr') {
      return `Μόνο ${this.spotsLeft} Early Bird Θέσεις`;
    }
    return `Only ${this.spotsLeft} Early Bird Spots Left`;
  },
};

export default earlyBirdConfig;
