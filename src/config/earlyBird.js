// Early Bird Configuration
// Update these values to change early bird information across the entire app

export const earlyBirdConfig = {
  // Early bird availability
  spotsLeft: 5,
  isActive: true,
  
  // Cohort dates (English and Greek)
  cohortStartMonth: {
    en: "April",
    gr: "Απρίλιος"
  },
  cohortEndMonth: {
    en: "May",
    gr: "Μάιος"
  },
  cohortYear: 2026,
  
  // Pricing
  originalPrice: "€449",
  earlyBirdPrice: "€299",
  
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
  
  // Get urgency badge for specific language
  getUrgencyBadge(lang = 'en') {
    const nextCohort = lang === 'gr' ? 'Επόμενο Cohort' : 'Next Cohort';
    return `${nextCohort}: ${this.getCohortDateRange(lang)} · ⏰ ${this.getSpotsLeftText(lang)}`;
  }
};

export default earlyBirdConfig;
