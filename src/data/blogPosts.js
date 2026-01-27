export const blogPosts = [
  {
    id: 1,
    slug: "software-interviews-dos-and-donts",
    title: "Software Interviews - Dos & Donts",
    titleGr: "Software Interviews - Dos & Donts",
    excerpt: "I've done 400+ interviews and interviewed 300+ engineers across all levels. Here's what you should and shouldn't do to increase your chances of passing software engineering interviews.",
    excerptGr: "Έχω κάνει 400+ interviews και έχω πάρει interview σε 300+ engineers σε όλα τα levels. Εδώ είναι τι πρέπει και τι δεν πρέπει να κάνεις για να αυξήσεις τις πιθανότητες να περάσεις software engineering interviews.",
    content: `# 💼 Software Interviews - Dos & Donts

## 👋 Intro

I've done more than 400 interviews and interviewed more than 300 engineers in various roles, from junior to staff engineers throughout my career. Last year I found myself coaching many people in my network regarding interviews, so I thought I could write a blog post about it. The idea of the blog post is to give you summarized information of what interviews look like in software engineering and what you should and shouldn't do to increase your chance of passing your interviews. Every company does this differently, and the difficulty level also differs based on the position. I will focus on general notes that do apply everywhere unless mentioned otherwise.

## 🗣️ Behavioural

A behavioral interview focuses on questions that allow candidates to reflect and share their past professional behavior. The interviewer uses this interview technique to determine a professional's skills, personality, and capabilities. They are also known as \`Value Assessment\` or \`Cultural Interview\`.

The following questions are some behavioral questions that you could be asked

- When was the last time you received constructive feedback?
- Tell me an example of a conflict you had with a colleague, and how did you manage to solve it?
- Give me an example of where your decision influenced the end-user?
- Tell me a challenge you had, where the best way forward was not clear cut. How did you decide what to do?

For more junior people or undergrads, there is a high chance that these questions could be around a hypothetical scenario, for example, \`What would you do if you identified an issue in X?\`. That's not a rule, and it could happen to more senior people, but since more junior people have less experience, the interview will try to extract the information given a context.

## 💻 Technical

Technical interviews are designed to assess your problem-solving abilities and how you approach the presented problem itself. Those kinds of interviews can vary. Below I listed the most common ones you might face during your interview process.

- Verbal technical questions
- Algorithmics
- Take-home project
- Pair programming
- System design
- A combination of the above mentioned, e.g., Verbal technical questions & algorithmics

These also depend on the seniority level. For example, system design is not appropriate for a junior position. It tends to be common from mid to more senior positions. Now let's dive deeper into those interview types.

### 💬 Verbal technical questions

In verbal technical interviews, the interviewer asks the candidate to describe a technical concept and tries to measure their fluency in said concept based on the quality of the conversation. You can find several articles for common questions for every technology or domain. For example, questions like below are pretty common:

- What is the difference between NoSQL and SQL?
- Name a couple of design patterns and explain one of your choice.
- What is a stack? What are the two basic operations of a stack?
- What is the difference between coupling and cohesion?

### 🧮 Algorithmics

These interviews are probably the most common ones and can be found in the first stages. They can be formed into an online or an offline coding challenge. They might ask you to solve an algorithmic problem live using your environment or in a coding platform, e.g., Codility, HackerRank. Alternatively, they will provide you with a link to the challenge on one of these platforms, and they will collect the results when you finish it. To ace these interviews, you will need to know data structures, sorting & searching algorithms, dynamic programming, etc. The knowledge depth required to succeed in this kind of interview depends on the barrier the company is setting. If you are applying for a FANK company, you need to know those concepts deeply; if not, a good understanding of each concept with a bit of practice would be fine.

### 🏠 Take-home project

Some companies will ask you to do a home test where they give you a project with some requirements and ask you to implement it offline. After you finish it, they will invite you to an interview to go through your approach. They will ask you a lot of whys and different ways of approaching the problem. The project is typically a CRUD application where you have to integrate with an API, test your solution, and follow software engineering principles like SOLID, simple design, etc.

The problem I am having with this interview is that it takes so much time. If you want to demonstrate your skills, you will probably need to test the code extensively, deploy it somewhere, write some documentation or at least a README file, and build a CI/CD pipeline. There is no definition of done, and if you are competing with other candidates, you have to give a lot of effort to stand out. All these things are time-consuming and require a lot of capacity. Working full-time is hard to invest in such an interview where there is a chance of rejection, so I always try to avoid this kind of interview.

### 👥 Pair programming

In a pair programming interview, you are asked to solve a software problem by either extending an existing project or by implementing a [coding kata](https://katalyst.codurance.com/). There is a high chance that you will be interviewed by more than one person as well. They will evaluate how you write code, communicate and approach problems. This is probably one of my favorite types, mainly because I love pairing, although it's not that common in the industry. I personally think it's a great way to evaluate a candidate, but it's not cost-efficient for the company. However, to be fair, it's not really pair programming. Your interviewer that acts as a colleague will give you feedback or try to direct you in a certain way, but it's far from how pair programming actually works.

### 🏗️ System design

These interviews can be found in more senior positions. They typically give you some functional requirements that require you to build a system at a high level. Many things are going around this interview on how to approach these interviews, what to study, but it is a blog on its own. Long story short, you have to learn about back-of-the-envelope calculation, scalability, availability, fault tolerance, cloud services, data replication, distributed messaging, caching, metrics & logs, data synchronization, and many more. It's a taught interview but personally is the one I enjoy the most.

Some system design interview questions could be the following:

- How would you make a search engine?
- Design Youtube
- How would you design a streaming service?
- Designing a URL shortening service

### 🔄 A Combination

Some companies might invite you for a technical interview where they will ask you some verbal technical questions and then give you an algorithmic problem to solve. Like I said previously, every company evaluates candidates differently; there is no specific formula for interviewing. So the possibility of a combination of the above interview types does exist as well.

## 💰 Know your value

Knowing your value is a taught one, mainly because many people have a hard time evaluating themselves. Most people tend to underestimate their skills. You will probably get asked about your salary expectation in your first interview with the recruiter to see if you match their budget. There are companies that have an extensive range of budgets, and depending on your performance, they will adjust the offer. You can better understand your value from talking to people in the industry or even getting another offer from another company. Getting an offer will give you some indication of what your value is. Please don't take it for granted, though; some companies have different budgets, your performance and negotiating skills are playing a leading part. To get more insights, you can always check glassdoor as well. Generally, their job is to get you hired with the minimum amount that will satisfy you, and your job is to get the maximum amount of money that will benefit both you and the company. I am not a negotiation expert, but you should always try to negotiate from what I know.

## ⭐ Great vs Good Interviewers

Interviewing someone is not an easy task, and it's not always done right. If you have a lot of interviews throughout your career, you will learn that there are more professional interviewers than others. One of the most important tasks an interviewer has is to build a comfortable environment for the candidate to be more of themselves. Also, good interviewers are conversationalists. Instead of going through the questions and answers directly, they try to make it feel more like a conversation and extract the answers they are looking for. They might, for example, comment on some of your answers, saying that they would agree or disagree so that you can take a breath and feel more like chatting. This way, it feels more natural and definitely more enjoyable.

In general, that's not always the case. I've had interviewers that asked silly old-school programming questions, they made it feel like an exam, and generally, they didn't have good vibes. All those mentioned above apply to both behavioral and technical interviews. So, in general you have to be aware that the results of your interview depend on the interviewer as well.

## ✅ Dos & Donts

### 😊 Good vibes

Interviews are not only about you. Try to make their time joyful. I mean, they are already investing time to interview you, and leaving a good taste when the interview finishes is really important.

### ❓ Ask!

Always ask questions! These are free points and shows interest in the employer. You can do some research about the company before your interview.
There are different kinds of questions you can ask

1. Genuine Questions - That you actually want to know the answer
   - _What are the roles within the team?_
2. Insightful Questions - Demonstrate your knowledge or understanding of technology
   - _Why for product A you choose to use the X protocol over the Y protocol?_
3. Passion Questions - Demonstrate your passion for technology
   - _I'm not familiar with technology X, but sounds interesting. Can you please tell me a bit more?_

### ⭐ Use STAR/PAR technique

The STAR technique is a common system used to answer behavioral interview questions. It provides a structure for you to remember to include the correct data in your answers.

- **S** – **Situation** - background info
- **T** – **Task** - what you had to do
- **A** – **Activity** - what you did - this should be the longest part of the answer
- **R** – **Results** - positive; quantifiable; what you learned; what you would do differently next time

If you get asked a behavioral question, answer by going through the letters in order.
The PAR technique is the same as STAR but combines the S and the T steps.

### 👥 "We" vs "I"

When answering questions about your experience, you should try balancing your answers by using both _we_ and _I_. Using the _we_ in an answer shows that you are a team player and you are an active member of the team. On the other hand, using _I_ will show that you are taking more initiatives and will show off your leadership skills. Answering with only one of those subject pronouns will not have good results because you are either not self-independent or are not a team player. It's pretty essential to give both perspectives to the interviewer.

### 🤷 It's ok to say "I don't know"

Don't lie in things that you cannot support. If you get asked about a specific technology that you don't know or never heard of, don't lie! Professional interviewers will eventually find out, and you will possibly get rejected. It's totally fine not to know some stuff; honesty is not harmful. One suggestion is to show some interest in things you don't know and ask for more details about the subject if there is time.

### 📖 Prepare your stories

Prepare some examples of challenges, conflicts, failures, leadership in your work experience or projects so that you can have something to talk about. It's challenging to improvise in the interview in real-time.
This is a table I think I've taken from the [Cracking the Coding Interview](https://www.amazon.co.uk/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?adgrpid=56176823187&hvadid=259151807165&hvdev=c&hvlocphy=1006886&hvnetw=g&hvqmt=e&hvrand=14006929763397277600&hvtargid=kwd-297264693965&hydadcr=17616_1817786&keywords=cracking+the+coding+interview&qid=1645058943&sr=8-1) book where it can be helpful.

| Questions                 | Project 1 | Project 2 |
| ------------------------- | --------- | --------- |
| Challenges                | ...       | ...       |
| Mistakes/Failures         | ...       | ...       |
| Enjoyed                   | ...       | ...       |
| Leadership                | ...       | ...       |
| What you'd do differently | ...       | ...       |

### 📝 Take notes

After finishing the interview, write down everything that happened. This is helping me with my self-assessment to have a better understanding of my performance. It is also helpful in your next or upcoming interviews. Of course, you can always ask for feedback, but not all companies take the time to give you any.

### 🎭 Mock interviews

Mock interviews are an ideal way to practice for real job interviews because you are in a situation that mirrors an actual interview with a company. When you review your interview with the interviewer, you'll be able to modify your responses and interview behavior, if necessary. Practice interviews familiarize you with the interview process and allow you to practice answering common interview questions with confidence. Some platforms offer this as a service, but you can always find a friend to help you out.

### 💪 Perseverance

There would be times when the problem you asked to solve might be complex, or there is no straightforward solution. You always have to demonstrate perseverance! Perseverance is determining to keep on going in the face of setbacks and challenges. When you are stuck, don't give up. Keep trying to solve the problem, and that will show off your grit and independence.

### 🎉 Enjoy it!

I find interviews really challenging, and it's fascinating to me. It's almost like having exams within your career. I know that it can get frustrating and stressful, but I think it will certainly pay off if you put in the effort.

## 🎯 Wrap up

In this blog, I discussed different types of interviews and dived a bit deeper into each type. I also shared some of my learnings after so many interviews and some techniques and tips that I use to help me perform better. 

At DevReady, we've helped dozens of developers successfully navigate these interviews and land their dream roles. If you want personalized guidance on preparing for interviews, check out our [6-week bootcamp](/bootcamp) where we cover everything from technical preparation to behavioral interview techniques.
    `,
    contentGr: `# 💼 Software Interviews - Dos & Donts

## 👋 Εισαγωγή

Έχω κάνει πάνω από 400 interviews και έχω πάρει interview σε περισσότερους από 300 engineers σε διάφορους ρόλους, από junior έως staff engineers στην καριέρα μου. Πέρυσι βρέθηκα να κάνω coach πολλούς ανθρώπους στο δίκτυό μου σχετικά με interviews, οπότε σκέφτηκα να γράψω ένα blog post γι' αυτό. Η ιδέα του blog post είναι να σου δώσω συνοπτικές πληροφορίες για το πώς είναι τα interviews στο software engineering και τι πρέπει και τι δεν πρέπει να κάνεις για να αυξήσεις την πιθανότητα να περάσεις τα interviews σου. Κάθε εταιρεία το κάνει διαφορετικά και το επίπεδο δυσκολίας διαφέρει ανάλογα με τη θέση. Θα εστιάσω σε γενικές σημειώσεις που ισχύουν παντού, εκτός αν αναφέρεται διαφορετικά.

## 🗣️ Behavioural

Ένα behavioral interview εστιάζει σε ερωτήσεις που επιτρέπουν στους υποψηφίους να αναστοχαστούν και να μοιραστούν την προηγούμενη επαγγελματική τους συμπεριφορά. Ο interviewer χρησιμοποιεί αυτή την τεχνική interview για να προσδιορίσει τα skills, την προσωπικότητα και τις ικανότητες ενός επαγγελματία. Είναι επίσης γνωστά ως \`Value Assessment\` ή \`Cultural Interview\`.

Οι παρακάτω ερωτήσεις είναι μερικές behavioral ερωτήσεις που θα μπορούσες να πάρεις:

- Πότε ήταν η τελευταία φορά που έλαβες constructive feedback?
- Πες μου ένα παράδειγμα σύγκρουσης που είχες με συνάδελφο και πώς κατάφερες να το λύσεις?
- Δώσε μου ένα παράδειγμα όπου η απόφασή σου επηρέασε τον τελικό χρήστη?
- Πες μου μια πρόκληση που είχες, όπου ο καλύτερος τρόπος δεν ήταν ξεκάθαρος. Πώς αποφάσισες τι να κάνεις?

Για πιο junior ανθρώπους ή undergrads, υπάρχει μεγάλη πιθανότητα αυτές οι ερωτήσεις να είναι γύρω από ένα υποθετικό σενάριο, για παράδειγμα, \`Τι θα έκανες αν εντόπιζες ένα πρόβλημα στο X;\`. Αυτό δεν είναι κανόνας και μπορεί να συμβεί σε πιο senior ανθρώπους, αλλά επειδή οι πιο junior άνθρωποι έχουν λιγότερη εμπειρία, το interview θα προσπαθήσει να εξαγάγει την πληροφορία δίνοντας ένα context.

## 💻 Technical

Τα technical interviews είναι σχεδιασμένα να αξιολογήσουν τις problem-solving ικανότητές σου και πώς προσεγγίζεις το πρόβλημα που παρουσιάζεται. Αυτά τα είδη interviews μπορεί να ποικίλλουν. Παρακάτω λίστα με τα πιο συνηθισμένα που μπορεί να αντιμετωπίσεις:

- Verbal technical questions
- Algorithmics
- Take-home project
- Pair programming
- System design
- Συνδυασμός των παραπάνω, π.χ., Verbal technical questions & algorithmics

Αυτά εξαρτώνται επίσης από το seniority level. Για παράδειγμα, το system design δεν είναι κατάλληλο για junior θέση. Τείνει να είναι συνηθισμένο από mid έως πιο senior θέσεις. Τώρα ας δούμε πιο αναλυτικά αυτούς τους τύπους interviews.

### 💬 Verbal technical questions

Στα verbal technical interviews, ο interviewer ζητά από τον υποψήφιο να περιγράψει μια τεχνική έννοια και προσπαθεί να μετρήσει την άνεσή του σε αυτή την έννοια βάσει της ποιότητας της συζήτησης. Μπορείς να βρεις αρκετά άρθρα για συνήθεις ερωτήσεις για κάθε τεχνολογία ή domain. Για παράδειγμα, ερωτήσεις όπως οι παρακάτω είναι αρκετά συνηθισμένες:

- Ποια είναι η διαφορά μεταξύ NoSQL και SQL?
- Ονόμασε μερικά design patterns και εξήγησε ένα της επιλογής σου.
- Τι είναι ένα stack? Ποιες είναι οι δύο βασικές λειτουργίες ενός stack?
- Ποια είναι η διαφορά μεταξύ coupling και cohesion?

### 🧮 Algorithmics

Αυτά τα interviews είναι πιθανώς τα πιο συνηθισμένα και μπορούν να βρεθούν στα πρώτα στάδια. Μπορεί να διαμορφωθούν σε online ή offline coding challenge. Μπορεί να σου ζητήσουν να λύσεις ένα αλγοριθμικό πρόβλημα live χρησιμοποιώντας το environment σου ή σε μια coding πλατφόρμα, π.χ., Codility, HackerRank. Εναλλακτικά, θα σου παρέχουν ένα link για το challenge σε μία από αυτές τις πλατφόρμες και θα συλλέξουν τα αποτελέσματα όταν το ολοκληρώσεις. Για να τα πας καλά σε αυτά τα interviews, θα χρειαστεί να ξέρεις data structures, sorting & searching algorithms, dynamic programming, κλπ. Το βάθος γνώσης που απαιτείται για να πετύχεις σε αυτό το είδος interview εξαρτάται από το barrier που θέτει η εταιρεία. Αν κάνεις αίτηση για FANK εταιρεία, πρέπει να ξέρεις αυτές τις έννοιες σε βάθος. Αν όχι, μια καλή κατανόηση κάθε έννοιας με λίγη εξάσκηση θα είναι εντάξει.

### 🏠 Take-home project

Μερικές εταιρείες θα σου ζητήσουν να κάνεις ένα home test όπου σου δίνουν ένα project με κάποιες απαιτήσεις και σου ζητούν να το υλοποιήσεις offline. Αφού το ολοκληρώσεις, θα σε καλέσουν σε interview για να δουν την προσέγγισή σου. Θα σου κάνουν πολλά γιατί και διαφορετικούς τρόπους προσέγγισης του προβλήματος. Το project είναι συνήθως μια CRUD εφαρμογή όπου πρέπει να κάνεις integrate με ένα API, να κάνεις test τη λύση σου και να ακολουθήσεις software engineering principles όπως SOLID, simple design, κλπ.

Το πρόβλημα που έχω με αυτό το interview είναι ότι παίρνει πολύ χρόνο. Αν θέλεις να δείξεις τα skills σου, θα χρειαστεί πιθανώς να κάνεις extensive test του κώδικα, να το deploy κάπου, να γράψεις documentation ή τουλάχιστον ένα README file, και να χτίσεις ένα CI/CD pipeline. Δεν υπάρχει definition of done και αν ανταγωνίζεσαι με άλλους υποψηφίους, πρέπει να δώσεις πολλή προσπάθεια για να ξεχωρίσεις. Όλα αυτά είναι time-consuming και απαιτούν πολύ χρόνο. Δουλεύοντας full-time είναι δύσκολο να επενδύσεις σε ένα τέτοιο interview όπου υπάρχει πιθανότητα απόρριψης, οπότε πάντα προσπαθώ να αποφύγω αυτό το είδος interview.

### 👥 Pair programming

Σε ένα pair programming interview, σου ζητείται να λύσεις ένα software πρόβλημα είτε επεκτείνοντας ένα υπάρχον project είτε υλοποιώντας ένα [coding kata](https://katalyst.codurance.com/). Υπάρχει μεγάλη πιθανότητα να πάρεις interview από περισσότερα από ένα άτομα. Θα αξιολογήσουν πώς γράφεις κώδικα, επικοινωνείς και προσεγγίζεις προβλήματα. Αυτός είναι πιθανώς ένας από τους αγαπημένους μου τύπους, κυρίως επειδή λατρεύω το pairing, αν και δεν είναι τόσο συνηθισμένο στο industry. Προσωπικά νομίζω ότι είναι ένας εξαιρετικός τρόπος να αξιολογήσεις έναν υποψήφιο, αλλά δεν είναι cost-efficient για την εταιρεία. Ωστόσο, για να είμαι δίκαιος, δεν είναι πραγματικά pair programming. Ο interviewer σου που ενεργεί ως συνάδελφος θα σου δώσει feedback ή θα προσπαθήσει να σε κατευθύνει με κάποιον τρόπο, αλλά είναι μακριά από το πώς λειτουργεί πραγματικά το pair programming.

### 🏗️ System design

Αυτά τα interviews μπορούν να βρεθούν σε πιο senior θέσεις. Συνήθως σου δίνουν κάποιες functional απαιτήσεις που σου ζητούν να χτίσεις ένα σύστημα σε high level. Πολλά πράγματα γύρω από αυτό το interview για το πώς να προσεγγίσεις αυτά τα interviews, τι να μελετήσεις, αλλά είναι ένα blog από μόνο του. Με λίγα λόγια, πρέπει να μάθεις για back-of-the-envelope calculation, scalability, availability, fault tolerance, cloud services, data replication, distributed messaging, caching, metrics & logs, data synchronization, και πολλά άλλα. Είναι ένα δύσκολο interview αλλά προσωπικά είναι αυτό που απολαμβάνω περισσότερο.

Μερικές system design interview ερωτήσεις θα μπορούσαν να είναι οι εξής:

- Πώς θα έφτιαχνες μια μηχανή αναζήτησης?
- Σχεδίασε το Youtube
- Πώς θα σχεδίαζες μια streaming υπηρεσία?
- Σχεδιάζοντας μια URL shortening υπηρεσία

### 🔄 A Combination

Μερικές εταιρείες μπορεί να σε καλέσουν για ένα technical interview όπου θα σου κάνουν μερικές verbal technical ερωτήσεις και μετά θα σου δώσουν ένα αλγοριθμικό πρόβλημα να λύσεις. Όπως είπα προηγουμένως, κάθε εταιρεία αξιολογεί τους υποψηφίους διαφορετικά. Δεν υπάρχει συγκεκριμένος τύπος για interviewing. Οπότε η πιθανότητα συνδυασμού των παραπάνω τύπων interview υπάρχει επίσης.

## 💰 Know your value

Το να ξέρεις την αξία σου είναι δύσκολο, κυρίως επειδή πολλοί άνθρωποι δυσκολεύονται να αξιολογήσουν τον εαυτό τους. Οι περισσότεροι άνθρωποι τείνουν να υποτιμούν τα skills τους. Πιθανώς θα σε ρωτήσουν για τις προσδοκίες σου για μισθό στο πρώτο σου interview με τον recruiter για να δουν αν ταιριάζεις με το budget τους. Υπάρχουν εταιρείες που έχουν εκτεταμένο εύρος budgets και ανάλογα με την απόδοσή σου, θα προσαρμόσουν την προσφορά. Μπορείς να καταλάβεις καλύτερα την αξία σου μιλώντας με ανθρώπους στο industry ή ακόμα και παίρνοντας άλλη προσφορά από άλλη εταιρεία. Το να πάρεις μια προσφορά θα σου δώσει μια ένδειξη για το ποια είναι η αξία σου. Μην το θεωρήσεις δεδομένο όμως. Μερικές εταιρείες έχουν διαφορετικά budgets, η απόδοσή σου και τα negotiating skills σου παίζουν πρωταγωνιστικό ρόλο. Για να πάρεις περισσότερες πληροφορίες, μπορείς πάντα να δεις glassdoor. Γενικά, η δουλειά τους είναι να σε προσλάβουν με το ελάχιστο ποσό που θα σε ικανοποιήσει και η δουλειά σου είναι να πάρεις το μέγιστο ποσό χρημάτων που θα ωφελήσει και εσένα και την εταιρεία. Δεν είμαι expert στη διαπραγμάτευση, αλλά από όσο ξέρω πρέπει πάντα να προσπαθείς να διαπραγματευτείς.

## ⭐ Great vs Good Interviewers

Το να πάρεις interview σε κάποιον δεν είναι εύκολη δουλειά και δεν γίνεται πάντα σωστά. Αν έχεις πολλά interviews στην καριέρα σου, θα μάθεις ότι υπάρχουν πιο επαγγελματίες interviewers από άλλους. Ένα από τα πιο σημαντικά tasks που έχει ένας interviewer είναι να χτίσει ένα άνετο περιβάλλον για τον υποψήφιο να είναι πιο ο εαυτός του. Επίσης, οι καλοί interviewers είναι conversationalists. Αντί να περνούν από τις ερωτήσεις και τις απαντήσεις απευθείας, προσπαθούν να το κάνουν να αισθάνεται περισσότερο σαν συζήτηση και να εξάγουν τις απαντήσεις που ψάχνουν. Μπορεί, για παράδειγμα, να σχολιάσουν κάποιες από τις απαντήσεις σου, λέγοντας ότι θα συμφωνούσαν ή θα διαφωνούσαν έτσι ώστε να πάρεις μια ανάσα και να αισθάνεσαι περισσότερο σαν να κουβεντιάζεις. Με αυτόν τον τρόπο, αισθάνεται πιο φυσικό και σίγουρα πιο ευχάριστο.

Γενικά, αυτό δεν συμβαίνει πάντα. Έχω είχα interviewers που ρωτούσαν ανόητες old-school programming ερωτήσεις, το έκαναν να αισθάνεται σαν εξέταση και γενικά δεν είχαν καλά vibes. Όλα όσα αναφέρθηκαν παραπάνω ισχύουν και για behavioral και για technical interviews. Οπότε, γενικά πρέπει να γνωρίζεις ότι τα αποτελέσματα του interview σου εξαρτώνται και από τον interviewer.

## ✅ Dos & Donts

### 😊 Good vibes

Τα interviews δεν είναι μόνο για σένα. Προσπάθησε να κάνεις τον χρόνο τους ευχάριστο. Εννοώ, ήδη επενδύουν χρόνο για να σε πάρουν interview και το να αφήσεις μια καλή γεύση όταν τελειώσει το interview είναι πολύ σημαντικό.

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
Η PAR τεχνική είναι η ίδια με τη STAR αλλά συνδυάζει τα S και T βήματα.

### 👥 "We" vs "I"

Όταν απαντάς ερωτήσεις για την εμπειρία σου, πρέπει να προσπαθήσεις να ισορροπήσεις τις απαντήσεις σου χρησιμοποιώντας και _we_ και _I_. Το _we_ σε μια απάντηση δείχνει ότι είσαι team player και ότι είσαι ενεργό μέλος της ομάδας. Από την άλλη, το _I_ θα δείξει ότι παίρνεις περισσότερες πρωτοβουλίες και θα δείξει τα leadership skills σου. Το να απαντάς με μόνο μία από αυτές τις αντωνυμίες δεν θα έχει καλά αποτελέσματα γιατί είτε δεν είσαι self-independent είτε δεν είσαι team player. Είναι πολύ σημαντικό να δώσεις και τις δύο προοπτικές στον interviewer.

### 🤷 It's ok to say "I don't know"

Μην λες ψέματα σε πράγματα που δεν μπορείς να υποστηρίξεις. Αν σε ρωτήσουν για μια συγκεκριμένη τεχνολογία που δεν ξέρεις ή δεν έχεις ακούσει ποτέ, μην πεις ψέματα! Professional interviewers τελικά θα το καταλάβουν και πιθανώς θα απορριφθείς. Είναι εντάξει να μην ξέρεις κάποια πράγματα. Η ειλικρίνεια δεν είναι επιβλαβής. Μια πρόταση είναι να δείξεις ενδιαφέρον για πράγματα που δεν ξέρεις και να ζητήσεις περισσότερες λεπτομέρειες για το θέμα αν υπάρχει χρόνος.

### 📖 Prepare your stories

Ετοίμασε μερικά παραδείγματα challenges, conflicts, failures, leadership στην εργασιακή σου εμπειρία ή projects έτσι ώστε να έχεις κάτι να πεις. Είναι δύσκολο να αυτοσχεδιάσεις στο interview σε real-time.
Αυτός είναι ένας πίνακας που νομίζω τον πήρα από το [Cracking the Coding Interview](https://www.amazon.co.uk/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?adgrpid=56176823187&hvadid=259151807165&hvdev=c&hvlocphy=1006886&hvnetw=g&hvqmt=e&hvrand=14006929763397277600&hvtargid=kwd-297264693965&hydadcr=17616_1817786&keywords=cracking+the+coding+interview&qid=1645058943&sr=8-1) βιβλίο όπου μπορεί να είναι χρήσιμο.

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

Τα mock interviews είναι ιδανικός τρόπος για να εξασκηθείς για πραγματικά job interviews γιατί είσαι σε μια κατάσταση που αντικατοπτρίζει ένα πραγματικό interview με μια εταιρεία. Όταν κάνεις review το interview σου με τον interviewer, θα μπορέσεις να τροποποιήσεις τις απαντήσεις σου και την interview συμπεριφορά σου, αν είναι απαραίτητο. Practice interviews σε εξοικειώνουν με τη διαδικασία του interview και σου επιτρέπουν να εξασκηθείς απαντώντας συνηθισμένες interview ερωτήσεις με αυτοπεποίθηση. Μερικές πλατφόρμες προσφέρουν αυτό ως υπηρεσία, αλλά μπορείς πάντα να βρεις έναν φίλο να σε βοηθήσει.

### 💪 Perseverance

Θα υπάρχουν στιγμές που το πρόβλημα που σου ζητείται να λύσεις μπορεί να είναι complex ή να μην υπάρχει straightforward λύση. Πρέπει πάντα να δείχνεις perseverance! Perseverance είναι η αποφασιστικότητα να συνεχίσεις να προχωράς απέναντι σε δυσκολίες και προκλήσεις. Όταν κολλήσεις, μην τα παρατάς. Συνέχισε να προσπαθείς να λύσεις το πρόβλημα και αυτό θα δείξει το grit και την ανεξαρτησία σου.

### 🎉 Enjoy it!

Βρίσκω τα interviews πραγματικά challenging και είναι fascinating για μένα. Είναι σχεδόν σαν να έχεις εξετάσεις μέσα στην καριέρα σου. Ξέρω ότι μπορεί να γίνει frustrating και stressful, αλλά νομίζω σίγουρα θα αποδώσει αν βάλεις τον κόπο.

## 🎯 Wrap up

Σε αυτό το blog, συζήτησα διαφορετικούς τύπους interviews και εμβάθυνα σε κάθε τύπο. Μοιράστηκα επίσης μερικά από τα μαθήματά μου μετά από τόσα πολλά interviews και μερικές τεχνικές και tips που χρησιμοποιώ για να με βοηθήσουν να έχω καλύτερη απόδοση.

Στο DevReady, έχουμε βοηθήσει δεκάδες developers να αντιμετωπίσουν με επιτυχία αυτά τα interviews και να βρουν το dream role τους. Αν θέλεις personalized guidance για την προετοιμασία για interviews, δες το [6-week bootcamp μας](/bootcamp) όπου καλύπτουμε τα πάντα από technical preparation έως behavioral interview techniques.
    `,
    author: "Alexis Pavlidis",
    date: "2026-01-24",
    readTime: "12 min read",
    readTimeGr: "12 λεπτά διάβασμα",
    tags: ["Interviews", "Career", "Tips"],
    tagsGr: ["Interviews", "Career", "Tips"],
    image: "/assets/blogs/interview.jpg",
    published: false // Set to false to hide this post from DevPress
  },
  // Sample post - hidden for now
  /*
  {
    id: 1,
    slug: "from-student-to-engineer",
    title: "From Student to Software Engineer: The Real Journey",
    titleGr: "Από Φοιτητής σε Software Engineer: Το Πραγματικό Ταξίδι",
    excerpt: "The path from university to landing your first tech job isn't what most CS programs teach you. Here's what actually matters.",
    excerptGr: "Η πορεία από το πανεπιστήμιο στην πρώτη σου δουλειά στο tech δεν είναι αυτό που διδάσκουν τα CS προγράμματα. Αυτό που πραγματικά μετράει.",
    content: `
# From Student to Software Engineer: The Real Journey

If you're a computer science student or recent graduate in Greece, you've probably noticed something: **your degree isn't enough**.

You can solve algorithms. You understand data structures. You've passed your exams. But when you look at job postings from companies abroad—or even great Greek tech companies—you realize something is missing.

## The Gap Nobody Talks About

Universities teach you **computer science**. The industry needs **software engineering**.

Here's what I mean:

### What University Teaches:
- Algorithms and complexity
- Theoretical foundations
- Academic problem-solving
- Individual assignments

### What Industry Needs:
- Building production systems
- Working with existing codebases
- Team collaboration
- Git, CI/CD, testing
- Communication skills

**The gap is real.** And most students discover it the hard way—after dozens of rejections.

## My Story

I graduated with good grades. I could solve LeetCode mediums. I thought I was ready.

**I was wrong.**

My first 20 applications? Rejections. I didn't even understand why.

Then I realized: I knew how to code, but I didn't know how to **engineer**.

- I didn't know how to structure a real project
- My GitHub looked like a graveyard of half-finished tutorials
- I couldn't explain my work in interviews
- I had no portfolio that demonstrated real skills

So I spent 6 months learning the hard way:
- Built a real project (not a todo app)
- Learned Git properly
- Practiced system design
- Rewrote my CV 15 times
- Mock interviewed with friends

**Then everything changed.** Within 2 months, I had 3 offers from companies in London.

## What Actually Matters

After working in the industry and mentoring 50+ developers, here's what I've learned:

### 1. Build Real Projects
Not tutorials. Not courses. **Real projects** that solve real problems.

Your GitHub should show:
- Production-quality code
- Proper project structure
- Tests
- Documentation
- Deployed applications

### 2. Master the Fundamentals
Not theory—**engineering fundamentals**:
- How to structure code
- How to work with APIs
- How to debug effectively
- How to use Git in a team
- How to write tests

### 3. Learn to Communicate
Tech interviews aren't coding tests. They're **conversations**.

You need to:
- Explain your thinking process
- Ask clarifying questions
- Discuss trade-offs
- Collaborate on solutions

### 4. Build Your Brand
Companies don't just hire skills—they hire **people**.

Your online presence matters:
- Professional GitHub
- Well-written CV
- LinkedIn that tells your story
- Portfolio that showcases your work

## The Path Forward

Here's the truth: **you don't need another bootcamp that teaches you React**.

You need:
- **Structured guidance** on what to build
- **Real feedback** on your code and projects
- **Industry mentorship** from people who've been there
- **Interview preparation** that actually works

That's why we built DevReady.

## What You Can Do Today

1. **Pick ONE project** and build it properly
2. **Push to GitHub** daily
3. **Apply to 5 companies** (even if you feel "not ready")
4. **Connect with engineers** on LinkedIn
5. **Share your progress** publicly

The journey from student to engineer isn't easy. But it's absolutely possible.

**You don't need to be perfect. You need to be ready.**

---

Want to accelerate your journey? Check out our [6-week program](/bootcamp) designed specifically for Greek developers looking to break into the industry.
    `,
    contentGr: `
# Από Φοιτητής σε Software Engineer: Το Πραγματικό Ταξίδι

Αν είσαι φοιτητής ή πρόσφατος απόφοιτος πληροφορικής στην Ελλάδα, μάλλον έχεις παρατηρήσει κάτι: **ο τίτλος σου δεν είναι αρκετός**.

Μπορείς να λύνεις αλγορίθμους. Καταλαβαίνεις data structures. Πέρασες τις εξετάσεις. Αλλά όταν βλέπεις job postings από εταιρείες του εξωτερικού—ή ακόμα και από μεγάλες ελληνικές tech εταιρείες—καταλαβαίνεις ότι κάτι λείπει.

## Το Χάσμα που Κανείς δεν Μιλάει

Τα πανεπιστήμια διδάσκουν **computer science**. Η αγορά χρειάζεται **software engineering**.

Να τι εννοώ:

### Τι Διδάσκει το Πανεπιστήμιο:
- Αλγόριθμους και complexity
- Θεωρητικά θεμέλια
- Ακαδημαϊκή επίλυση προβλημάτων
- Ατομικές εργασίες

### Τι Χρειάζεται η Αγορά:
- Κατασκευή production συστημάτων
- Δουλειά με existing codebases
- Team collaboration
- Git, CI/CD, testing
- Communication skills

**Το χάσμα είναι πραγματικό.** Και οι περισσότεροι φοιτητές το ανακαλύπτουν με τον δύσκολο τρόπο—μετά από δεκάδες απορρίψεις.

## Η Δική μου Ιστορία

Αποφοίτησα με καλούς βαθμούς. Μπορούσα να λύνω LeetCode mediums. Νόμιζα ότι ήμουν έτοιμος.

**Έκανα λάθος.**

Οι πρώτες μου 20 αιτήσεις; Απορρίψεις. Δεν καταλάβαινα καν γιατί.

Μετά το κατάλαβα: Ήξερα να κάνω code, αλλά δεν ήξερα πώς να κάνω **engineering**.

- Δεν ήξερα πώς να δομήσω ένα πραγματικό project
- Το GitHub μου έμοιαζε με νεκροταφείο μισοτελειωμένων tutorials
- Δεν μπορούσα να εξηγήσω τη δουλειά μου σε interviews
- Δεν είχα portfolio που να δείχνει πραγματικά skills

Οπότε πέρασα 6 μήνες μαθαίνοντας με τον δύσκολο τρόπο:
- Έφτιαξα ένα πραγματικό project (όχι todo app)
- Έμαθα Git σωστά
- Εξασκήθηκα σε system design
- Ξαναέγραψα το CV μου 15 φορές
- Έκανα mock interviews με φίλους

**Μετά όλα άλλαξαν.** Μέσα σε 2 μήνες, είχα 3 προσφορές από εταιρείες στο Λονδίνο.

## Τι Πραγματικά Μετράει

Αφού δούλεψα στο industry και έκανα mentor 50+ developers, αυτό έμαθα:

### 1. Φτιάξε Πραγματικά Projects
Όχι tutorials. Όχι courses. **Πραγματικά projects** που λύνουν πραγματικά προβλήματα.

Το GitHub σου πρέπει να δείχνει:
- Production-quality code
- Σωστή project structure
- Tests
- Documentation
- Deployed applications

### 2. Master τα Fundamentals
Όχι θεωρία—**engineering fundamentals**:
- Πώς να δομήσεις code
- Πώς να δουλέψεις με APIs
- Πώς να κάνεις debug αποτελεσματικά
- Πώς να χρησιμοποιήσεις Git σε team
- Πώς να γράψεις tests

### 3. Μάθε να Επικοινωνείς
Τα tech interviews δεν είναι coding tests. Είναι **συζητήσεις**.

Πρέπει να:
- Εξηγήσεις τη σκέψη σου
- Κάνεις clarifying questions
- Συζητήσεις trade-offs
- Συνεργαστείς σε λύσεις

### 4. Χτίσε το Brand σου
Οι εταιρείες δεν προσλαμβάνουν μόνο skills—προσλαμβάνουν **ανθρώπους**.

Η online παρουσία σου μετράει:
- Professional GitHub
- Καλογραμμένο CV
- LinkedIn που λέει την ιστορία σου
- Portfolio που δείχνει τη δουλειά σου

## Το Μονοπάτι Μπροστά

Η αλήθεια: **δεν χρειάζεσαι άλλο ένα bootcamp που διδάσκει React**.

Χρειάζεσαι:
- **Structured guidance** για το τι να φτιάξεις
- **Real feedback** στον κώδικα και τα projects σου
- **Industry mentorship** από ανθρώπους που έχουν περάσει από εκεί
- **Interview preparation** που πραγματικά δουλεύει

Γι' αυτό φτιάξαμε το DevReady.

## Τι Μπορείς να Κάνεις Σήμερα

1. **Διάλεξε ΕΝΑ project** και φτιάξε το σωστά
2. **Push στο GitHub** καθημερινά
3. **Κάνε αίτηση σε 5 εταιρείες** (ακόμα κι αν νιώθεις "not ready")
4. **Συνδέσου με engineers** στο LinkedIn
5. **Μοιράσου την πρόοδό σου** δημοσίως

Το ταξίδι από φοιτητής σε engineer δεν είναι εύκολο. Αλλά είναι απολύτως εφικτό.

**Δεν χρειάζεται να είσαι perfect. Χρειάζεται να είσαι ready.**

---

Θέλεις να επιταχύνεις το ταξίδι σου; Δες το [6-week πρόγραμμά μας](/bootcamp) σχεδιασμένο ειδικά για Έλληνες developers που θέλουν να μπουν στο industry.
    `,
    author: "Alexis Pavlidis",
    date: "2025-01-15",
    readTime: "8 min read",
    readTimeGr: "8 λεπτά διάβασμα",
    tags: ["Career", "Learning", "Getting Started"],
    tagsGr: ["Καριέρα", "Μάθηση", "Ξεκίνημα"],
    image: "/assets/blog/student-to-engineer.jpg"
  }
  */
];

