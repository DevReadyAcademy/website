import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    name: "Maria Balafouti",
    role: "Applied Informatics Student | STEM Educator",
    quote: "Πρέπει να πω ότι ξεκλείδωσαν πάρα πολλά κομμάτια του roadmap που είχα στο μυαλό μου και αναρίθμητες ερωτήσεις που κουβαλούσα εδώ και πολύ καιρό βρήκαν επιτέλους απαντήσεις.\n" +
        "Επίσης, λάτρεψα πραγματικά την απίστευτη χημεία που είχατε ως ομάδα — ήταν τόσο εμπνευστική και μεταδώσατε ακριβώς την ίδια ενέργεια και σε εμάς!\n",
    image: "/assets/students/maria_balafouti.jpeg",
  },
  {
    name: "Kostas Kotsis",
    role: "Frontend Developer",
    quote: "Μου φάνηκε πάρα πολύ χρήσιμο για την πορεία μου  στο software engineering, ως προς τις κατευθυντήριες γραμμές που πρέπει να ακολουθήσω.Δηλαδή σίγουρα θα ακολουθήσω τις συμβουλές και το υλικό  που μάς δώσατε, ειδικότερα σε cv branding και interviewing. Νομίζω ήταν οι ενότητες με τη μεγαλύτερη αξία (για μένα).",
    image: "/assets/students/kostas_kotsis.jpeg",
  },
  {
    name: "Maria Zavola",
    role: "Biomedical Engineer",
    quote: "βασικός μου στόχος ήταν να αποκτήσω μια εικόνα για το πώς λειτουργεί το industry. Η πληροφορία κάλυψε πολλά διαφορετικά κομμάτια, προσφέροντας μου μια καλή πρώτη γεύση.\n" +
        "\n" +
        "Το feedback των δικών σας εμπειριών, μαζί με ρεαλιστικά παραδείγματα, με βοήθησαν να διαχειριστώ το άγχος και να μπουστάρω την αυτοπεποίθησή μου, κάνοντας την πορεία πιο εφικτή.",
    image: "/assets/students/maria_zavola.jpeg",
  },
  {
    name: "Kostantinos Apostolidis",
    role: "Computer Science Student (UoM) | Front-End Development, IoT & Cybersecurity Enthusiast",
    quote: "Ως φοιτητής τρίτου έτους, το boost που πήρα από αυτό το πρόγραμμα ήταν τεράστιο. Με βγάλατε από το comfort zone μου, με προβληματίσατε θετικά και με βοηθήσατε να δω το μέλλον μου ενα τσικ πιο καθαρά. Οι γνώσεις που αποκόμισα είναι πάρα πολλές, και μάλιστα πολλές από αυτές είναι πράγματα που δύσκολα “μαθαίνονται” στο πανεπιστήμιο. Μου αφήσατε έναν από τους πιο όμορφους «πρώτους σταθμούς» στο ταξίδι μου στην τεχνολογία, και δεν το θεωρώ δεδομένο.",
    image: "/assets/students/kostas_apostolidis.jpeg",
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
          {/*<span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">*/}
          {/*  Success Stories*/}
          {/*</span>*/}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-card border border-border/50 p-8 md:p-12 shadow-elegant">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />

              <div className="min-h-[200px] flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 animate-fade-in">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex items-center gap-4 animate-fade-in">
                  <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 rounded-full shadow-lg bg-background"
                onClick={goToPrevious}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 rounded-full shadow-lg bg-background"
                onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                            ? "bg-primary w-8"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
