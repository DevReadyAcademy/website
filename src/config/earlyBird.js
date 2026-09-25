// Early Bird Configuration
// Update these values to change early bird information across the entire app

export const earlyBirdConfig = {
  // Early bird availability
  spotsLeft: 4,
  isActive: true,
  earlyBirdPhase: 2,

  // Cohort dates (English and Greek)
  cohortDateRange: {
    en: "October 19–November 29, 2026",
    gr: "19 Οκτωβρίου–29 Νοεμβρίου 2026"
  },
  cohortStartDate: "2026-10-19",
  cohortEndDate: "2026-11-29",
  cohortYear: 2026,

  // Pricing
  originalPrice: "€599",
  earlyBirdPrice: "€419",

  // Early Bird deadline (used for countdown timer)
  earlyBirdDeadline: '2026-09-30T23:59:59+03:00',

  // Get cohort date range for specific language
  getCohortDateRange(lang = 'en') {
    return this.cohortDateRange[lang] || this.cohortDateRange.en;
  },

  // Get spots left text for specific language
  getSpotsLeftText(lang = 'en') {
    if (lang === 'gr') {
      return `Μόνο ${this.spotsLeft} Early Bird Phase ${this.earlyBirdPhase} Θέσεις`;
    }
    return `Only ${this.spotsLeft} Early Bird Phase ${this.earlyBirdPhase} Spots Left`;
  },
};

export default earlyBirdConfig;
