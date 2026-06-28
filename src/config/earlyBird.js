// Early Bird Configuration
// Update these values to change early bird information across the entire app

export const earlyBirdConfig = {
  // Early bird availability
  spotsLeft: 10,
  isActive: true,

  // Cohort dates (English and Greek)
  cohortStartMonth: {
    en: "September",
    gr: "Σεπτέμβριος"
  },
  cohortEndMonth: {
    en: "October",
    gr: "Οκτώβριος"
  },
  cohortYear: 2026,

  // Pricing
  originalPrice: "€599",
  earlyBirdPrice: "€399",

  // Registration deadline (used for countdown timer)
  cohortStartDate: '2026-09-01T00:00:00+03:00',

  // Get cohort date range for specific language
  getCohortDateRange(lang = 'en') {
    const startMonth = this.cohortStartMonth[lang] || this.cohortStartMonth.en;
    const endMonth = this.cohortEndMonth[lang] || this.cohortEndMonth.en;
    return `${startMonth}–${endMonth} ${this.cohortYear}`;
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
