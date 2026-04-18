// Early Bird Configuration
// Update these values to change early bird information across the entire app

export const earlyBirdConfig = {
  // Early bird availability
  isActive: false,

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
  price: "€449",

  // Remaining spots
  remainingSpots: 1,

  // Registration deadline (used for countdown timer)
  cohortStartDate: '2026-09-01T00:00:00+03:00',

  // Get cohort date range for specific language
  getCohortDateRange(lang = 'en') {
    const startMonth = this.cohortStartMonth[lang] || this.cohortStartMonth.en;
    const endMonth = this.cohortEndMonth[lang] || this.cohortEndMonth.en;
    return `${startMonth}–${endMonth} ${this.cohortYear}`;
  }
};

export default earlyBirdConfig;
