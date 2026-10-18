// Early Bird Configuration
// Update these values to change early bird information across the entire app

export const earlyBirdConfig = {
  // Early bird availability
  spotsLeft: 0,
  isActive: false,
  earlyBirdPhase: 2,

  // Cohort dates (English and Greek)
  cohortDateRange: {
    en: "February 1–May 31, 2027",
    gr: "1 Φεβρουαρίου–31 Μαΐου 2027"
  },
  cohortStartDate: "2027-02-01",
  cohortEndDate: "2027-05-31",
  cohortYear: 2027,

  // Pricing
  originalPrice: "€599",
  earlyBirdPrice: "€599",

  // Early Bird deadline (used for countdown timer)
  earlyBirdDeadline: '2027-02-01T23:59:59+03:00',

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
