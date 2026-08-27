import { ArrowRight, BadgeCheck, Briefcase, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const leaderMeta = [
  {
    image: "/assets/alex.jpg",
    linkedin: "https://www.linkedin.com/in/apavlidi/",
  },
  {
    image: "/assets/sam.webp",
    linkedin: "https://www.linkedin.com/in/vasilis-samoladas/",
  },
];

const CohortLeaders = () => {
  const { t } = useLanguage();
  const leadersData = t("cohortLeaders.leaders");
  const trustPointsData = t("cohortLeaders.trustPoints");
  const leaders = Array.isArray(leadersData) ? leadersData : [];
  const trustPoints = Array.isArray(trustPointsData) ? trustPointsData : [];

  return (
    <section className="py-20 px-4 bg-gradient-card" aria-labelledby="cohort-leaders-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <BadgeCheck className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary">{t("cohortLeaders.eyebrow")}</span>
          </div>
          <h2 id="cohort-leaders-title" className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-primary bg-clip-text text-transparent pb-2">
            {t("cohortLeaders.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("cohortLeaders.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {leaders.map((leader, index) => {
            const meta = leaderMeta[index];

            return (
              <article key={leader.name} className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-elegant">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <img
                    src={meta?.image}
                    alt={leader.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-primary/10 shadow-lg shrink-0"
                    width="112"
                    height="112"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-primary font-semibold mt-1">{leader.role}</p>
                    <p className="text-muted-foreground leading-relaxed mt-3">{leader.description}</p>
                    {meta?.linkedin && (
                      <a
                        href={meta.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium mt-4"
                      >
                        {t("cohortLeaders.linkedin")}
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-3 bg-background/70 border border-border/50 rounded-xl px-4 py-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{point}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            {t("team.learnMoreAboutTeam")}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CohortLeaders;
