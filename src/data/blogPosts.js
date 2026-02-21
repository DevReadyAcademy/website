export const blogPosts = [
  {
    id: 1,
    slug: "software-interviews-dos-and-donts",
    titleGr: "Software Interviews - Dos & Donts",
    excerptGr: "Έχω κάνει 500+ interviews και έχω πάρει interview σε 200+ software engineers σε όλα τα levels. Εδώ είναι τι πρέπει και τι δεν πρέπει να κάνεις για να αυξήσεις τις πιθανότητες να περάσεις software engineering interviews.",
    contentGr: `# 💼 Software Interviews - Dos & Donts

## 👋 Εισαγωγή

Έχω κάνει πάνω από 500 interviews και έχω πάρει interview σε περισσότερους από 200 software engineers σε διάφορους ρόλους, από junior έως staff engineers στην καριέρα μου. Πέρυσι βρέθηκα να κάνω coach πολλούς ανθρώπους στο δίκτυό μου σχετικά με interviews, οπότε σκέφτηκα να γράψω ένα blog post γι' αυτό. Η ιδέα του blog post είναι να σου δώσω συνοπτικές πληροφορίες για το πώς είναι τα interviews στο software engineering και τι πρέπει και τι δεν πρέπει να κάνεις για να αυξήσεις την πιθανότητα να περάσεις τα interviews σου. Κάθε εταιρεία το κάνει διαφορετικά και το επίπεδο δυσκολίας διαφέρει ανάλογα με τη θέση. Θα εστιάσω σε γενικές σημειώσεις που ισχύουν παντού, εκτός αν αναφέρεται διαφορετικά.

## 🗣️ Behavioural

Ένα behavioral interview εστιάζει σε ερωτήσεις που επιτρέπουν στους υποψηφίους να αναστοχαστούν και να μοιραστούν την προηγούμενη επαγγελματική τους συμπεριφορά. Ο interviewer χρησιμοποιεί αυτή την τεχνική interview για να προσδιορίσει τα skills, την προσωπικότητα και τις ικανότητες ενός επαγγελματία. Είναι επίσης γνωστά ως \`Value Assessment\` ή \`Cultural Interview\`.

Οι παρακάτω ερωτήσεις είναι μερικές behavioral ερωτήσεις που μπορεί να σου γίνουν:

- Πότε ήταν η τελευταία φορά που έλαβες constructive feedback?
- Πες μου ένα παράδειγμα σύγκρουσης που είχες με συνάδελφο και πώς κατάφερες να το λύσεις?
- Δώσε μου ένα παράδειγμα όπου η απόφασή σου επηρέασε τον τελικό χρήστη?
- Πες μου μια πρόκληση που είχες, όπου ο καλύτερος τρόπος δεν ήταν ξεκάθαρος. Πώς αποφάσισες τι να κάνεις?

Για πιο junior ανθρώπους ή undergrads, υπάρχει μεγάλη πιθανότητα αυτές οι ερωτήσεις να είναι γύρω από ένα υποθετικό σενάριο, για παράδειγμα, \`Τι θα έκανες αν εντόπιζες ένα πρόβλημα στο X;\`. Αυτό δεν είναι κανόνας και μπορεί να συμβεί σε πιο senior ανθρώπους, αλλά επειδή οι πιο junior άνθρωποι έχουν λιγότερη εμπειρία, το interview θα προσπαθήσει να εξαγάγει την πληροφορία δίνοντας ένα context.

## 💻 Technical

Τα technical interviews είναι σχεδιασμένα να αξιολογήσουν τις problem-solving ικανότητές σου και πώς προσεγγίζεις το πρόβλημα που παρουσιάζεται. Αυτά τα είδη interviews μπορεί να ποικίλλουν. Η παρακάτω λίστα περιέχει τα πιο συνηθισμένα που μπορεί να αντιμετωπίσεις κατά τη διαδικασία του interview σου:

- Verbal technical questions
- Algorithmics
- Take-home project
- Pair programming
- System design
- Συνδυασμός των παραπάνω, π.χ., Verbal technical questions & algorithmics

Αυτά εξαρτώνται επίσης από το seniority level. Για παράδειγμα, το system design δεν είναι κατάλληλο για junior θέση. Τείνει να είναι συνηθισμένο από mid έως πιο senior θέσεις.

## ✅ Dos & Donts

### 😊 Good vibes

Τα interviews δεν είναι μόνο για σένα. Προσπάθησε να κάνεις τον χρόνο των interviewer ευχάριστο. Ήδη επενδύουν χρόνο για να σε πάρουν interview, οπότε το να αφήσεις μια καλή εντύπωση όταν τελειώσει το interview είναι πολύ σημαντικό.

### ❓ Ask!

Πάντα κάνε ερωτήσεις! Αυτά είναι free points και δείχνουν ενδιαφέρον για τον εργοδότη. Μπορείς να κάνεις λίγη έρευνα για την εταιρεία πριν το interview σου.
Υπάρχουν διαφορετικά είδη ερωτήσεων που μπορείς να κάνεις:

1. Genuine Questions - Που πραγματικά θέλεις να ξέρεις την απάντηση
   - _Ποιοι είναι οι ρόλοι μέσα στην ομάδα;_
2. Insightful Questions - Δείχνουν τη γνώση σου ή την κατανόησή σου της τεχνολογίας
   - _Γιατί για το προϊόν A επιλέξατε να χρησιμοποιήσετε το X protocol αντί του Y protocol;_
3. Passion Questions - Δείχνουν το πάθος σου για την τεχνολογία
   - _Δεν γνωρίζω την τεχνολογία X, αλλά ακούγεται ενδιαφέρουσα. Μπορείτε να μου πείτε λίγα περισσότερα;_

### ⭐ Use STAR/PAR technique

Η STAR τεχνική είναι ένα κοινό σύστημα που χρησιμοποιείται για να απαντήσεις behavioral interview ερωτήσεις. Παρέχει μια δομή για να θυμάσαι να συμπεριλάβεις τα σωστά δεδομένα στις απαντήσεις σου.

- **S** – **Situation** - background info
- **T** – **Task** - τι έπρεπε να κάνεις
- **A** – **Activity** - τι έκανες - αυτό πρέπει να είναι το μεγαλύτερο μέρος της απάντησης
- **R** – **Results** - positive; quantifiable; τι έμαθες; τι θα έκανες διαφορετικά την επόμενη φορά

Αν σου κάνουν μια behavioral ερώτηση, απάντα περνώντας από τα γράμματα με τη σειρά.

### 👥 "We" vs "I"

Όταν απαντάς ερωτήσεις για την εμπειρία σου, πρέπει να προσπαθήσεις να ισορροπήσεις τις απαντήσεις σου χρησιμοποιώντας και _we_ και _I_. Το _we_ σε μια απάντηση δείχνει ότι είσαι team player και ότι είσαι ενεργό μέλος της ομάδας. Από την άλλη, το _I_ θα δείξει ότι παίρνεις περισσότερες πρωτοβουλίες και θα δείξει τα leadership skills σου. Το να απαντάς με μόνο μία από αυτές τις αντωνυμίες δεν θα έχει καλά αποτελέσματα γιατί είτε δεν είσαι self-independent είτε δεν είσαι team player. Είναι πολύ σημαντικό να δώσεις και τις δύο προοπτικές στον interviewer.

### 🤷 It's ok to say "I don't know"

Μην λες ψέματα σε πράγματα που δεν μπορείς να υποστηρίξεις. Αν σε ρωτήσουν για μια συγκεκριμένη τεχνολογία που δεν ξέρεις ή δεν έχεις ακούσει ποτέ, μην πεις ψέματα! Professional interviewers τελικά θα το καταλάβουν και πιθανώς θα απορριφθείς. Είναι εντάξει να μην ξέρεις κάποια πράγματα. Η ειλικρίνεια δεν είναι επιβλαβής. Μια πρόταση είναι να δείξεις ενδιαφέρον για πράγματα που δεν ξέρεις και να ζητήσεις περισσότερες λεπτομέρειες για το θέμα αν υπάρχει χρόνος.

### 📖 Prepare your stories

Ετοίμασε μερικά παραδείγματα challenges, conflicts, failures, leadership στην εργασιακή σου εμπειρία ή projects έτσι ώστε να έχεις κάτι να πεις. Είναι δύσκολο να αυτοσχεδιάσεις στο interview σε real-time.
Ο παρακάτω πίνακας είναι εμπνευσμένος από το βιβλίο [Cracking the Coding Interview](https://www.amazon.co.uk/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?adgrpid=56176823187&hvadid=259151807165&hvdev=c&hvlocphy=1006886&hvnetw=g&hvqmt=e&hvrand=14006929763397277600&hvtargid=kwd-297264693965&hydadcr=17616_1817786&keywords=cracking+the+coding+interview&qid=1645058943&sr=8-1) και μπορεί να σε βοηθήσει στην προετοιμασία σου.

| Ερωτήσεις                 | Project 1 | Project 2 |
| ------------------------- | --------- | --------- |
| Challenges                | ...       | ...       |
| Mistakes/Failures         | ...       | ...       |
| Enjoyed                   | ...       | ...       |
| Leadership                | ...       | ...       |
| Τι θα έκανες διαφορετικά  | ...       | ...       |

### 📝 Take notes

Αφού τελειώσει το interview, γράψε τα πάντα που έγιναν. Αυτό με βοηθάει με την self-assessment μου για να έχω καλύτερη κατανόηση της απόδοσής μου. Είναι επίσης χρήσιμο στα επόμενα ή μελλοντικά σου interviews. Φυσικά, μπορείς πάντα να ζητήσεις feedback, αλλά δεν παίρνουν όλες οι εταιρείες τον χρόνο να σου δώσουν.

### 🎭 Mock interviews

Τα mock interviews είναι ιδανικός τρόπος για να εξασκηθείς για πραγματικά job interviews γιατί είσαι σε μια κατάσταση που αντικατοπτρίζει ένα πραγματικό interview με μια εταιρεία. Όταν κάνεις review το interview σου με τον interviewer, θα μπορέσεις να τροποποιήσεις τις απαντήσεις σου και την interview συμπεριφορά σου, αν είναι απαραίτητο. Τα mock interviews σε εξοικειώνουν με τη διαδικασία του interview και σου επιτρέπουν να εξασκηθείς απαντώντας συνηθισμένες interview ερωτήσεις με αυτοπεποίθηση. Μερικές πλατφόρμες προσφέρουν αυτό ως υπηρεσία, αλλά μπορείς πάντα να βρεις έναν φίλο να σε βοηθήσει.

### 💪 Perseverance

Θα υπάρχουν στιγμές που το πρόβλημα που σου ζητείται να λύσεις μπορεί να είναι complex ή να μην υπάρχει straightforward λύση. Πρέπει πάντα να δείχνεις perseverance! Perseverance είναι η αποφασιστικότητα να συνεχίσεις να προχωράς απέναντι σε δυσκολίες και προκλήσεις. Όταν κολλήσεις, μην τα παρατάς. Συνέχισε να προσπαθείς να λύσεις το πρόβλημα και αυτό θα δείξει το grit και την ανεξαρτησία σου.

### 🎉 Enjoy it!

Βρίσκω τα interviews πραγματικά challenging και είναι fascinating για μένα. Είναι σχεδόν σαν να έχεις εξετάσεις μέσα στην καριέρα σου. Ξέρω ότι μπορεί να γίνει frustrating και stressful, αλλά νομίζω σίγουρα θα αποδώσει αν βάλεις τον κόπο.

## 🎯 Wrap up

Σε αυτό το blog post, παρουσίασα διαφορετικούς τύπους interviews και μοιράστηκα μερικά από τα μαθήματά μου μετά από τόσα πολλά interviews, μαζί με τεχνικές και tips που χρησιμοποιώ για να με βοηθήσουν να έχω καλύτερη απόδοση.

**Θέλεις να μάθεις περισσότερα;** Αυτό είναι μόνο η αρχή! Έχω συγκεκριμένα dos και don'ts για κάθε τύπο interview - από algorithmic challenges μέχρι system design interviews. Κάνε subscribe στο newsletter μας παρακάτω για να λαμβάνεις αυτά τα εις βάθος tips απευθείας στο inbox σου.

Στο DevReady, έχουμε βοηθήσει δεκάδες developers να αντιμετωπίσουν με επιτυχία αυτά τα interviews και να βρουν το dream role τους. Αν θέλεις personalized guidance για την προετοιμασία για interviews, δες το [6-week accelerator μας](/accelerator) όπου καλύπτουμε τα πάντα από technical preparation έως behavioral interview techniques.
    `,
    author: "Alexis Pavlidis",
    date: "2026-01-24",
    readTime: "5 min read",
    readTimeGr: "5 λεπτά διάβασμα",
    tags: ["Interviews", "Career", "Tips"],
    tagsGr: ["Interviews", "Career", "Tips"],
    image: "/assets/blogs/interview.jpg",
    published: true // Set to false to hide this post from DevPress
  },
  {
    id: 2,
    slug: "how-to-write-killer-cv",
    titleGr: "Πώς να Γράψεις ένα Killer CV (That Actually Gets Read)",
    excerptGr: "Το CV σου δεν διαβάζεται—σκανάρεται. Οι recruiters αφιερώνουν λιγότερο από 1 λεπτό. Εδώ είναι πώς να γράψεις ένα CV που δείχνει impact, σέβεται τον χρόνο τους και λειτουργεί σαν personal brand.",
    contentGr: `
## 👋 Εισαγωγή

Ας ξεκινήσουμε με μια άβολη αλήθεια: **Το CV σου δεν διαβάζεται. Σκανάρεται.**

Στις περισσότερες εταιρείες, recruiters αφιερώνουν λιγότερο από **1 λεπτό** για να αποφασίσουν αν θα προχωρήσουν ή όχι. Δεν διαβάζουν ιστορίες, δεν αναλύουν paragraphs και σίγουρα δεν ψάχνουν το «καλό σημείο» σου. Αν δεν το δουν άμεσα, απλά δεν υπάρχει και πηγαίνουν στον/στην επόμενο/η.

Σε αυτό το post θα δούμε πώς να γράψεις ένα **killer CV** που διαβάζεται γρήγορα, δείχνει impact, σέβεται τον χρόνο του recruiter και λειτουργεί σαν **personal brand**.

## 🧠 Πώς να Σκέφτεσαι το CV σου

Σκέψου το CV σου σαν **εφημερίδα**. Τα πιο σημαντικά νέα είναι πάνω, τα λιγότερο σημαντικά κάτω. Αν κάτι είναι σημαντικό, δεν το κρύβεις στη δεύτερη σελίδα ή το βάζεις κάτω κάτω.

## 📏 Rule #1: One Page (Ναι, σχεδόν πάντα)

Για το **90% των candidates**, το CV πρέπει να είναι **one-pager**.  Υπάρχουν εξαιρέσεις, όπως PhD candidates, ακαδημαϊκή καριέρα ή πολύ senior profiles. Για όλους τους άλλους ισχύει ένα πράγμα: **1 σελίδα.** Αν δεν χωράει, δεν είναι θέμα χώρου. Είναι θέμα **prioritization**.

## 🧩 Structure: Τι Μπαίνει και Πού

Η προτεινόμενη σειρά είναι: **Experience → Education → Skills → Projects (optional)**.  
Ο λόγος είναι απλός. Το **experience** απαντά πρώτο στο ερώτημα: «Μπορεί αυτός ο άνθρωπος να κάνει τη δουλειά;». Αν δεν έχετε experience no worries, εξακολουθείτε να ακουλουθείτε την ίδια σειρά.

## 💥 Use Strong Verbs (Όχι Παθητική Φωνή)

Απόφυγε εκφράσεις τύπου *Responsible for*, *Worked on*, *Helped with*. Δεν δείχνουν ownership ούτε impact.

Παράδειγμα:  
- Weak: Responsible for improving application performance  
- Strong: Improved application performance by optimizing database queries  

Strong action verbs όπως *built*, *designed*, *led*, *improved*, *optimized*, *delivered* δείχνουν ξεκάθαρα ότι **εσύ έκανες τη δουλειά** και ότι υπήρχε αποτέλεσμα.

Το CV δεν είναι περιγραφή καθηκόντων. Είναι proof of your impact.

## 🔢 The XYZ Formula (Show Impact)

Ένα από τα πιο δυνατά patterns για CV bullets είναι το **XYZ pattern**:  
Achieved **X** by doing **Y** resulting in **Z**.

Δες τη διαφορά:  
- Χωρίς XYZ: Worked on improving page performance  
- Με XYZ: Improved page load time **by 35%** by optimizing API calls and caching  

Άλλο παράδειγμα:  
- Χωρίς XYZ: Helped reduce bugs in production  
- Με XYZ: Reduced production bugs **by 20%** by introducing automated tests  

Οι αριθμοί τραβάνε το μάτι, δείχνουν αποτέλεσμα και κάνουν το CV πιο credible. Ακόμα κι αν είναι estimates, είναι πολύ καλύτερα από το τίποτα.

## 🧱 Formatting Is Not Decoration

Το formatting δεν είναι αισθητική επιλογή. Είναι εργαλείο ανάγνωσης. Χρησιμοποίησε bullets, απόφυγε μεγάλα paragraphs και κράτα consistent spacing και fonts.
Το CV σου είναι **brand artifact**. Αν είναι messy, αυτό επικοινωνεί.

## 🚩 Popular Issues We See in CVs

Κάποια λάθη εμφανίζονται ξανά και ξανά. Τα περισσότερα δεν είναι θέμα γνώσεων, αλλά **presentation και focus**.

- **Πάρα πολλές σελίδες και κακό formatting.** Δύο ή τρεις σελίδες χωρίς structure, μεγάλα paragraphs και no clear prioritisation of the information.
- **Μη ξεκάθαρος ρόλος.** Front-end engineer, Back-end engineer, real estate agent, lawyer (you get the vibe) στο ίδιο CV είναι no-no.
- **Generic soft skills.** “Communication”, “team player”, “problem solving” ειναι fluff, ολοι ειμαστε team-players και εχουμε communication skills.
- **Καμία ένδειξη impact.** Περιγραφές καθηκόντων without impact.
- **Πάρα πολλά projects χωρίς βάθος.** Ένα καλοφτιαγμένο project λέει περισσότερα από πέντε μισοτελειωμένα.

Αν αναγνωρίζεις τον εαυτό σου σε κάποιο από τα παραπάνω, μην ανησυχείς. Είναι προβλήματα που λύνονται σχετικά εύκολα με σωστή καθοδήγηση και feedback.

## ⚔️ Controversial (But Important) Questions

### Χρειάζομαι abstract / summary στην αρχή;

Up to you. Δεν υπάρχει hard rule. Αν το χρησιμοποιήσεις, κράτησέ το στις 2–3 γραμμές, συγκεκριμένο και χωρίς generic fluff τύπου “passionate software engineer”.

### Are internships work experience;

**Ναι.** Αν είσαι student ή junior, βάλε internships κανονικά στο Experience και highlight τι έκανες, όχι απλώς ότι «ήσουν intern».

### Χρειάζομαι μεγάλο project στο CV;

Τα projects έχουν αξία όσο είσαι junior. Καθώς αποκτάς εμπειρία, σταδιακά χάνουν βάρος και το industry experience ανεβαίνει. Εξαίρεση υπάρχει μόνο αν έχεις open-source project με σοβαρό adoption, π.χ. **10k GitHub stars**.

Διαφορετικά, μην προσπαθήσεις να φτιάξεις κάτι τεράστιο ή overly complex. Καλύτερα **ένα project**, σωστά δομημένο, που δείχνει τα **principles of good engineering**: καθαρό code, σωστό structure, tests, CI/CD, documentation και ξεκάθαρες αποφάσεις.

Ένα απλό αλλά καλοφτιαγμένο project λέει πολύ περισσότερα από ένα “μεγάλο” project χωρίς ποιότητα.

## 🎯 Wrap Up

Ένα καλό CV δεν προσπαθεί να εντυπωσιάσει. Προσπαθεί να **επικοινωνήσει καθαρά**. Στον πραγματικό κόσμο των interviews, το CV σου είναι απλά το εισιτήριο για την επόμενη συζήτηση.

**Θέλεις feedback στο CV σου;**  
Στο DevReady accelerator δουλεύουμε hands-on πάνω σε πραγματικά CVs, με review από working engineers και recruiters. Δες περισσότερα στο [6-week accelerator](/accelerator).
`,
    author: "Alexis Pavlidis",
    date: "2026-02-07",
    readTime: "6 min read",
    readTimeGr: "6 λεπτά διάβασμα",
    tags: ["CV", "Career", "Tips"],
    tagsGr: ["CV", "Career", "Tips"],
    image: "/assets/blogs/killer-cv.jpg",
    imageAlt: "Recruiter reviewing CVs on screen with magnifying glass; approved candidate with checkmark. How to write a killer CV that gets read.",
    imageAltGr: "Recruiter ελέγχει CV σε οθόνη με μεγεθυντικό φακό· επιλεγμένος υποψήφιος με checkmark. Πώς να γράψεις ένα killer CV που διαβάζεται.",
    published: true
  },
  {
    id: 3,
    slug: "a-project-that-gets-you-hired",
    titleGr: "Το Project που Πραγματικά σε Κάνει Hire στο Tech",
    excerptGr:
        "Τι project πρέπει να φτιάξω για να δείξω engineering abilities και να με κάνουν hire; Δεν χρειάζεσαι rocket science. Χρειάζεσαι ένα project που δείχνει engineering disciplines και practices.",
    contentGr: `

## 👋 Intro

Μία από τις πιο συχνές ερωτήσεις που δεχόμαστε είναι: **"Τι project πρέπει να φτιάξω για να δείξω engineering abilities και να με κάνουν hire;"**

Πολλοί πιστεύουν ότι η απάντηση είναι κάτι complex. Κάτι εντυπωσιακό. Like "rocket science" or something. Αυτό δεν ισχύει.

Δεν προσλαμβάνεσαι επειδή το project σου είναι complex. Προσλαμβάνεσαι επειδή δείχνει **engineering disciplines and practices**. Αυτό που κοιτάνε οι hiring managers είναι αν το project δείχνει ότι καταλαβαίνεις πώς χτίζεται software στον πραγματικό κόσμο: πώς ορίζεις scope, πώς παίρνεις αποφάσεις, πώς κρατάς τα πράγματα καθαρά, πώς τα τεκμηριώνεις και αν μπορείς να τα ολοκληρώσεις.

Σε αυτό το post θα δούμε τι είδους project σε βοηθάει να ξεχωρίσεις, τι πρέπει να περιλαμβάνει και ποια είναι συχνά λάθη που κάνουν junior engineers.

## 🧠 Η μεγαλύτερη παρεξήγηση για τα projects

Οι περισσότεροι προσπαθούν να εντυπωσιάσουν με πολυπλοκότητα. Περισσότερα features, περισσότερα εργαλεία, περισσότερα buzzwords.

Αυτό που ψάχνουν οι interviewers είναι πιο απλό: μπορείς να πάρεις ένα μικρό πρόβλημα και να το λύσεις σωστά;

Το πραγματικό engineering δεν έχει να κάνει με το πόσα ξέρεις, αλλά με τη σαφήνεια, τα trade-offs και τα principles.  
Ένα smaller project καλοφτιαγμένο λέει πολύ περισσότερα από ένα μεγάλο project μισοτελειωμένο.

Γι’ αυτό και πολλά GitHub profiles με πολλά repos δεν ξεχωρίζουν. Δείχνουν activity, όχι engineering maturity.

## ✅ Τι project πρέπει τελικά να φτιάξεις;

To be honest η απάντηση είναι ότι η ιδέα δεν έχει τόση σημασία. Σημασία έχει αν το project σου σου δίνει χώρο να δείξεις σωστά engineering practices.

Ένα πολύ καλό παράδειγμα είναι ένα **Kanban-style project ή task manager**. Όχι επειδή το Kanban είναι κάτι ιδιαίτερο, αλλά επειδή περιλαμβάνει φυσικά πράγματα που ενδιαφέρουν τις εταιρείες: state transitions, data modeling, business rules, UI state και edge cases.

Δεν αξιολογείσαι για την πρωτοτυπία. Αξιολογείσαι για την εκτέλεση.

## 🧱 Το blueprint: τι πρέπει να περιλαμβάνει

Εδώ αποτυγχάνουν τα περισσότερα projects. Όχι επειδή η ιδέα είναι κακή, αλλά επειδή λείπουν τα βασικά για να είναι production ready.

### 📖 Ένα σωστό README

Αυτό είναι non-negotiable.

Το README σου είναι ουσιαστικά το **documentation and the brand of the project (and yourself)**. Στον πραγματικό κόσμο, οι engineers βασίζονται στα READMEs για να καταλάβουν γρήγορα ένα σύστημα και να το τρέξουν locally. Ένα καλό README δείχνει professionalism και ότι σέβεσαι τον χρόνο των άλλων.

Πρέπει να εξηγεί καθαρά τι κάνει το project, πώς τρέχει και ποιες βασικές αποφάσεις ή assumptions έκανες. Αν κάποιος πρέπει να διαβάσει τον κώδικα για να καταλάβει το project, αυτό είναι ήδη πρόβλημα.

### 🌍 Deployment

Το deployment έχει σημασία γιατί το να κάνεις ship software είναι μέρος της δουλειάς.

Ένα deployed project δείχνει ότι καταλαβαίνεις environments, configuration και το whole lifecycle of a software development. Επίσης επιτρέπει σε κάποιον να δοκιμάσει το project χωρίς setup.

Ακόμα και ένα απλό free deployment αρκεί. Ο στόχος δεν είναι το scale, αλλά το ότι το project σου όντως να τρέχει σε κάποιο production environment.

### 🧹 Clean Code & Structure

Το να γράφεις clean code είναι skill.

Η δομή των φακέλων, τα ονόματα και το separation of responsibilities δείχνουν πώς σκέφτεσαι ως engineer. Στις ομάδες, ο κώδικας διαβάζεται πολύ περισσότερο απ’ όσο γράφεται.

Το clean code δείχνει ότι μπορείς να συνεργαστείς και να συντηρήσεις software σε βάθος χρόνου.

### 🧪 Testing

Δεν χρειάζεσαι τέλειο coverage ή δεκάδες tests.

Χρειάζεται να δείξεις ότι καταλαβαίνεις γιατί υπάρχουν τα tests και τι αξίζει να τεσταριστεί. Λίγα αλλά ουσιαστικά tests στο core logic είναι αρκετά για να δείξουν maturity.

### 🤖 Basic automation (CI)

Ακόμα και ένα απλό CI setup κάνει μεγάλη διαφορά.

Το να τρέχουν αυτόματα linting ή tests σε κάθε push δείχνει ότι είσαι εξοικειωμένος με σύγχρονα workflows και ότι σε νοιάζει η συνέπεια.

## ⚠️ Συχνά λάθη που κοστίζουν

Ένα συχνό λάθος είναι το overengineering. Πολλοί προσθέτουν features μόνο και μόνο για να φαίνεται μεγάλο το project, αλλά καταλήγουν με μισές υλοποιήσεις και ανολοκλήρωτη δουλειά.

Το να τρέχει το project μόνο locally το κάνει να μοιάζει περισσότερο με university assignment παρά με product και πολλοί reviewers δεν θα μπουν καν στη διαδικασία να το στήσουν.

Τέλος, messy commits ή copy-paste code φαίνονται εύκολα και συνήθως δείχνουν βιασύνη ή έλλειψη ownership.

## ❓ "Αλλά ποιο tech stack να χρησιμοποιήσω;"

Honestly, δεν έχει τόση σημασία.

Σημασία έχει αν το stack σου επιτρέπει να δείξεις όλα όσα αναφέραμε παραπάνω. Διάλεξε ένα σύγχρονο stack που σου είναι άνετο ή που ταιριάζει με τις θέσεις στις οποίες κάνεις apply.

Κανείς δεν θα σε προσλάβει επειδή διάλεξες trendy framework. Θα σε προσλάβει επειδή χρησιμοποίησες ό,τι διάλεξες σωστά.

## 🎯 Wrap up

Δεν χρειάζεσαι πολλά projects για να μπεις στο tech. Χρειάζεσαι ένα project που να δείχνει καθαρά πώς σκέφτεσαι και πώς δουλεύεις. Ένα project με σωστό scope, καλό README, deployment, clean code, testing και σωστές αποφάσεις είναι αρκετό για να ξεχωρίσεις.

Στο DevReady βοηθάμε developers να χτίσουν ακριβώς τέτοιου τύπου projects. Όχι portfolio fluff, αλλά ρεαλιστική engineering δουλειά που ενδιαφέρει τους hiring managers. Αν θέλεις καθοδήγηση, feedback από working engineers και βοήθεια να κάνεις το project σου πραγματικό hiring asset, δες το [6-week accelerator](/accelerator).

Δεν χρειάζεται να είσαι impressive. Χρειάζεται να είσαι ready.
`,
    author: "Alexis Pavlidis",
    date: "2026-02-13",
    readTime: "7 min read",
    readTimeGr: "7 λεπτά διάβασμα",
    tags: ["Projects", "Portfolio", "Career"],
    tagsGr: ["Projects", "Portfolio", "Career"],
    image: "/assets/blogs/project.jpg",
    imageAlt: "Project and portfolio concept: one strong project that demonstrates engineering practices can get you hired.",
    imageAltGr: "Ένα project που δείχνει engineering practices και σε κάνει hire: ιδέα για portfolio.",
    published: true
  }
];

