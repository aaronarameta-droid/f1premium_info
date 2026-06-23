/*
  Romanian language fix for F1 Premium.
  This file patches the Romanian dictionary created in script.js so RO is not shown as English.
*/
(function () {
  if (typeof translations === 'undefined') return;

  translations.ro = Object.assign({}, translations.en || {}, translations.ro || {}, {
    /* Navigation */
    'nav.home': 'Acasă',
    'nav.about': 'Ce este F1 Premium?',
    'nav.how': 'Cum funcționează',
    'nav.register': 'Înregistrare',
    'nav.wallet': 'Configurare wallet',
    'nav.backoffice': 'Back Office',
    'nav.faq': 'Întrebări frecvente',
    'nav.testimonials': 'Testimoniale',
    'nav.legal': 'Aviz legal',
    'nav.contact': 'Contact',

    /* Home - hero */
    'home.hero.title': 'Impulsionează-ți creșterea digitală cu F1 Premium',
    'home.hero.subtitle': 'O platformă colaborativă care combină formarea în competențe digitale cu participarea într-un sistem descentralizat.',
    'home.hero.cta': 'Descoperă cum funcționează',
    'home.hero.whatsapp': 'Discută pe WhatsApp',

    /* Home - features */
    'home.features.title': 'Caracteristici principale',
    'home.features.feature1.title': 'Descentralizat',
    'home.features.feature1.desc': 'Bazat pe tehnologia blockchain, fără control centralizat.',
    'home.features.feature2.title': 'Transparent',
    'home.features.feature2.desc': 'Reguli și distribuție vizibile în contracte inteligente.',
    'home.features.feature3.title': 'Automat',
    'home.features.feature3.desc': 'Procese executate automat, fără intervenție manuală.',
    'home.features.feature4.title': 'Colaborativ',
    'home.features.feature4.desc': 'Valoarea se generează prin participare și sprijin reciproc.',
    'home.features.feature5.title': 'Scalabil',
    'home.features.feature5.desc': 'Rețeaua ta poate crește până la 7 niveluri, prin cicluri continue.',

    /* Home - circuits */
    'home.circuits.title': 'Circuitele Bronz, Argint și Aur',
    'home.circuits.desc': 'Sistemul este structurat în trei circuite de participare cu aceeași logică și scară diferită. Începi cu Bronz (25 USDT), evoluezi către Argint (50 USDT) și consolidezi în Aur (100 USDT). Fiecare circuit distribuie activitatea până la șapte niveluri, conform unor procente fixe.',
    'home.circuits.bronce.title': 'Bronz',
    'home.circuits.bronce.desc': 'Faza de început și învățare, cu o contribuție de 25 USDT.',
    'home.circuits.plata.title': 'Argint',
    'home.circuits.plata.desc': 'Faza de dezvoltare, cu o contribuție de 50 USDT.',
    'home.circuits.oro.title': 'Aur',
    'home.circuits.oro.desc': 'Faza de consolidare, cu o contribuție de 100 USDT.',

    /* Home - call to action */
    'home.cta.title': 'Alătură-te comunității',
    'home.cta.desc': 'Activează-ți circuitul și accesează formare, instrumente și sprijin.',
    'home.cta.button': 'Începe acum',

    /* How page */
    'how.title': 'Cum funcționează F1 Premium',
    'how.intro': 'F1 Premium se bazează pe o structură de rețea cu șapte niveluri, care multiplică conexiunile pe măsură ce participanții invită alte persoane. Fiecare utilizator ocupă o poziție în rețea, iar activitatea se distribuie conform regulilor prestabilite.',
    'how.structure.title': 'Structură pe 7 niveluri',
    'how.structure.desc': 'Fiecare circuit este organizat pe șapte niveluri cu duplicare 2x. Numărul de persoane pe nivel este 2, 4, 8, 16, 32, 64 și 128. Distribuția urmează procente fixe: 50%, 4%, 5%, 6%, 7%, 8% și 9%.',
    'how.circuits.title': 'Circuite și faze',
    'how.circuits.bronce': 'Bronz: fază de început și învățare; structura crește și înveți să gestionezi rețeaua.',
    'how.circuits.plata': 'Argint: fază de dezvoltare; structura devine mai robustă, iar participarea colectivă capătă mai multă importanță.',
    'how.circuits.oro': 'Aur: fază de consolidare; rețeaua dobândește profunzime și maturitate, iar activitatea colectivă domină sistemul.',
    'how.cycles.title': 'Cicluri de continuitate',
    'how.cycles.desc': 'Sistemul funcționează prin cicluri săptămânale de 7 zile, care permit continuitatea. Constanța este mai importantă decât intensitatea.',
    'how.automation.title': 'Automatizare și contract inteligent',
    'how.automation.desc': 'Sistemul rulează printr-un contract inteligent care înregistrează activitatea, execută regulile și menține structura. Nu creează valoare de unul singur și nu înlocuiește acțiunea umană.',
    'how.participant.title': 'Rolul participantului',
    'how.participant.desc': 'Utilizatorul are un rol activ: învață sistemul, îl aplică, îl împărtășește și îi sprijină pe ceilalți.',
    'how.plan.title': 'Plan de început',
    'how.plan.desc': 'Zilele 1–7: înțelegerea sistemului, configurarea instrumentelor și primele conexiuni. Zilele 8–21: sprijinirea primelor persoane, repetare și consolidare. După ziua 30: evaluarea activității, extinderea participării și întărirea rețelei.',

    /* Registration page */
    'register.title': 'Cum să te înregistrezi',
    'register.intro': 'Pentru a te alătura F1 Premium ai nevoie de o invitație de la sponsorul tău și de un wallet de autocustodie compatibil cu opBNB.',
    'register.step1.title': '1. Obține linkul de invitație',
    'register.step1.desc': 'Cere sponsorului tău un link unic de invitație. Acest link se deschide în DApp din SafePal sau MetaMask și te conectează la echipa lui. Copiază linkul pentru a-l folosi în wallet.',
    'register.step2.title': '2. Configurează walletul',
    'register.step2.desc': 'Descarcă aplicația SafePal sau folosește extensia. Creează un wallet și păstrează în siguranță fraza seed. Apoi adaugă rețeaua opBNB, layer 2 al BNB Chain.',
    'register.step3.title': '3. Adaugă fonduri',
    'register.step3.desc': 'Depune cel puțin 25 USDT în wallet pentru a activa F1 Bronze și o mică sumă de BNB, aproximativ 0,1 BNB, pentru taxele de gas.',
    'register.step4.title': '4. Accesează linkul',
    'register.step4.desc': 'Deschide SafePal, selectează „Explorează” și lipește linkul sponsorului în căutarea DApp. Asigură-te că rețeaua selectată este opBNB sau BNB Chain.',
    'register.step5.title': '5. Selectează rețeaua',
    'register.step5.desc': 'Când se deschide DApp, apasă „Conectează” și alege SafePal ca furnizor de wallet. Autorizează conexiunea pentru ca smart contractul să poată citi adresa ta publică.',
    'register.step6.title': '6. Conectează walletul',
    'register.step6.desc': 'Înainte de contribuție, contractul va solicita autorizarea folosirii tokenurilor USDT. Confirmă aprobarea în wallet. Această operațiune nu transferă fonduri, ci permite contractului să folosească 25 USDT în tranzacția următoare.',
    'register.step7.title': '7. Aprobă contractul',
    'register.step7.desc': 'Selectează circuitul Bronz, verifică suma de 25 USDT și adresa sponsorului. Apasă „Go!” sau „Activează” pentru a trimite contribuția. Confirmă tranzacția în wallet și așteaptă confirmarea pe blockchain.',
    'register.step8.title': '8. Verifică activarea',
    'register.step8.desc': 'După finalizarea tranzacției, interfața va evidenția circuitul Bronz. Intră în back office pentru a vedea progresul și pentru a obține linkurile tale de invitație. Acum faci parte din F1 Premium!',
    'register.remark': 'Reține că participarea este voluntară și nu există garanție de returnare. Gestionează întotdeauna cheile și fondurile cu prudență.',
    'register.step1.caption': 'Solicită sponsorului linkul de invitație și copiază-l din chat.',
    'register.step2.caption': 'Verifică dacă walletul are cel puțin 25 USDT și o mică sumă de BNB pentru comisioane.',
    'register.step3.caption': 'În aplicația SafePal apasă „Explorează” pentru a deschide căutarea de DApps.',
    'register.step4.caption': 'Lipește linkul de invitație în câmpul de căutare și apasă Enter.',
    'register.step5.caption': 'Schimbă rețeaua implicită Ethereum cu opBNB/BNB Chain pentru ca smart contractul să funcționeze.',
    'register.step6.caption': 'Apasă „Conectează” pentru a lega walletul de DApp.',
    'register.step7.caption': 'Selectează SafePal sau altă opțiune compatibilă ca furnizor de conexiune.',
    'register.step8.caption': 'Acceptă termenii și apasă „Aprobă contractul” pentru a permite contractului accesul, apoi confirmă contribuția de 25 USDT. La final, circuitul Bronz va fi activat.',

    /* Wallet setup page */
    'wallet.title': 'Configurează walletul SafePal',
    'wallet.intro': 'Înainte de a te înregistra în F1 Premium ai nevoie de un wallet de autocustodie. SafePal este opțiunea recomandată datorită suportului pentru rețeaua opBNB și ușurinței de utilizare.',
    'wallet.step1.title': '1. Descarcă și instalează SafePal',
    'wallet.step1.desc': 'Caută SafePal în App Store sau Google Play ori descarcă extensia oficială. Instalează doar din surse oficiale.',
    'wallet.step2.title': '2. Creează sau importă walletul',
    'wallet.step2.desc': 'La deschiderea SafePal, selectează „Creează wallet” pentru unul nou sau „Importă wallet” dacă ai deja unul. Notează fraza seed pe hârtie și păstreaz-o offline. Nu o împărtăși niciodată.',
    'wallet.step3.title': '3. Adaugă rețeaua opBNB',
    'wallet.step3.desc': 'În secțiunea „Networks”, adaugă opBNB, layer 2 al BNB Chain. Introdu parametrii RPC corecți pentru a putea opera cu USDT și BNB.',
    'wallet.step4.title': '4. Depune fonduri',
    'wallet.step4.desc': 'Trimite cel puțin 25 USDT către adresa ta din opBNB și o mică sumă de BNB pentru gas. Le poți cumpăra într-un exchange și transfera în wallet.',
    'wallet.step5.title': '5. Verifică soldul și securitatea',
    'wallet.step5.desc': 'Verifică dacă USDT și BNB apar în wallet. Activează parola sau amprenta și asigură-te că ai o copie sigură a frazei seed.',
    'wallet.step1.caption': 'Descarcă și instalează aplicația SafePal din magazinul oficial al dispozitivului tău.',
    'wallet.step2.caption': 'Creează un wallet nou sau importă unul existent și setează o parolă de 6 cifre. Apoi selectează copia de siguranță manuală și notează cele 12 cuvinte ale frazei seed.',
    'wallet.step3.caption': 'Adaugă rețeaua opBNB în SafePal și caută tokenurile BNB(opBNB) și USDT(opBNB) pentru a le adăuga în listă.',
    'wallet.step4.caption': 'Alimentează noua ta adresă opBNB cu USDT și BNB. Poți trimite fonduri dintr-un exchange sau din alt wallet.',
    'wallet.step5.caption': 'Verifică dacă tokenurile USDT și BNB apar în wallet și activează măsuri de securitate precum PIN sau amprentă.',

    /* Back office page */
    'backoffice.title': 'Back Office',
    'backoffice.intro': 'Biroul tău virtual este panoul din care îți gestionezi participarea, rețeaua și formarea.',
    'backoffice.feature1.title': 'Gestionarea circuitelor',
    'backoffice.feature1.desc': 'Vizualizează și activează circuitele Bronz, Argint sau Aur în funcție de progres.',
    'backoffice.feature2.title': 'Arborele rețelei',
    'backoffice.feature2.desc': 'Consultă în timp real starea nivelurilor și membrilor tăi.',
    'backoffice.feature3.title': 'Rapoarte în timp real',
    'backoffice.feature3.desc': 'Verifică activitatea, reactivările și contribuțiile în mod transparent.',
    'backoffice.feature4.title': 'Formare și instrumente',
    'backoffice.feature4.desc': 'Accesează sesiuni de formare, videoclipuri și instrumente IA pentru a crea conținut digital.',
    'backoffice.feature5.title': 'Gestionarea comisioanelor',
    'backoffice.feature5.desc': 'Revizuiește soldul în funcție de starea ta, activ sau pauză, și gestionează continuitatea.',
    'backoffice.section1.title': 'Progres și reactivare',
    'backoffice.section1.desc1': 'Back office-ul tău afișează o linie de timp cu numărătoarea inversă până la următoarea reactivare. Trebuie să reactivezi la fiecare 7 zile pentru a rămâne activ; altfel treci în starea de pauză și primești doar contribuții de la nivelul direct.',
    'backoffice.section1.desc2': 'Sistemul semiautomat rezervă o parte din contribuția ta și din contribuțiile referiților pentru reactivare. Astfel se asigură continuitatea și se evită pierderea nivelurilor.',
    'backoffice.section2.title': 'Activarea circuitelor',
    'backoffice.section2.desc1': 'Din panou poți vedea starea circuitelor Bronz, Argint și Aur. Fiecare circuit are un buton pentru „Restart” când perioada se apropie de final.',
    'backoffice.section2.desc2': 'Poți activa Argint doar după finalizarea ciclului Bronz și la fel pentru Aur. Activarea depinde de progresul tău și al sponsorului.',
    'backoffice.section3.title': 'Contul meu',
    'backoffice.section3.desc1': 'În secțiunea „Contul meu” găsești date precum numărul membrilor, contribuțiile totale, recompensele primite, linkul de sponsor și codul de invitație.',
    'backoffice.section3.desc2': 'Folosește aceste date pentru a urmări creșterea și pentru a partaja linkul cu membri noi în siguranță.',
    'backoffice.section4.title': 'Detaliul circuitului',
    'backoffice.section4.desc1': 'Detaliul circuitului afișează un tabel cu nivelurile tale, numărul de persoane pe fiecare nivel, contribuțiile totale și starea ta, activ sau pauză.',
    'backoffice.section4.desc2': 'Această vedere te ajută să identifici de la ce niveluri primești contribuții și unde poți consolida rețeaua.',
    'backoffice.section5.title': 'Meniul principal',
    'backoffice.section5.desc1': 'Meniul principal oferă acces la funcții diverse: comunitate, academie, instrumente de marketing, materiale de sprijin, suport, avize legale și walletul tău.',
    'backoffice.section5.desc2': 'Explorează fiecare secțiune pentru a valorifica la maximum resursele disponibile și pentru a-ți dezvolta proiectul personal.',

    /* FAQ page */
    'faq.title': 'Întrebări frecvente',
    'faq.q1': 'Este F1 Premium o investiție?',
    'faq.a1': 'Nu. F1 Premium este o platformă de formare și participare într-un mediu de economie colaborativă.',
    'faq.q2': 'Se câștigă bani automat?',
    'faq.a2': 'Nu. Nu există garanții de venit și nici automatism economic; rezultatele depind de activitatea ta și de comunitate.',
    'faq.q3': 'Depind de alte persoane?',
    'faq.a3': 'Experiența poate fi influențată de interacțiunea cu ceilalți, dar nu există rezultate garantate.',
    'faq.q4': 'Este obligatoriu să invit persoane?',
    'faq.a4': 'Nu este obligatoriu. Participarea este voluntară, deși invitarea altor persoane poate susține creșterea sistemului.',
    'faq.q5': 'Pot pierde contribuția?',
    'faq.a5': 'Da. Participarea nu garantează returnarea contribuției. Trebuie să accepți riscurile asociate utilizării criptomonedelor.',
    'faq.q6': 'Este F1 Premium un sistem piramidal?',
    'faq.a6': 'Nu. F1 Premium nu se definește ca sistem de investiții sau model financiar; este o comunitate de economie colaborativă, fără remunerație pentru simpla recrutare.',
    'faq.q7': 'Ce primesc când intru?',
    'faq.a7': 'Primești activare în circuit, acces la formare, sprijin și acompaniere pentru dezvoltarea brandului tău personal.',
    'faq.q8': 'De cât am nevoie pentru a începe?',
    'faq.a8': 'Bronz se activează cu 25 USDT plus gas; Argint cu 50 USDT; Aur cu 100 USDT.',
    'faq.q9': 'Ce wallet folosesc?',
    'faq.a9': 'Se recomandă SafePal, deși poți folosi și alte walleturi EVM compatibile, precum MetaMask.',
    'faq.q10': 'Am nevoie imediat de 256 de persoane?',
    'faq.a10': 'Nu. Această cifră este doar un exemplu de duplicare până la șapte niveluri. Începe prin a invita câteva persoane și crește progresiv.',
    'faq.q11': 'Ce se întâmplă dacă nu rămân activ?',
    'faq.a11': 'Treci în pauză și primești doar de la nivelul direct până când reactivezi continuitatea.',
    'faq.q12': 'Trebuie să promovez F1 Premium pe rețelele sociale?',
    'faq.a12': 'Nu este vorba despre promovarea F1 Premium ca atare; formarea se concentrează pe brandul tău personal și pe atragerea conversațiilor.',
    'faq.q13': 'Trebuie să invit două persoane în fiecare săptămână?',
    'faq.a13': 'Nu este obligatoriu să inviți două persoane săptămânal. Totuși, duplicarea 2x poate accelera creșterea; strategia depinde de obiectivele și echipa ta.',
    'faq.q14': 'Ce se întâmplă dacă invitatul meu se reactivează înaintea mea?',
    'faq.a14': 'Dacă un membru al echipei se reactivează înaintea ta, va continua să contribuie la sistem, dar contribuțiile lui vor merge către structura ascendentă activă. Pentru a primi contribuții pe toate nivelurile, reactivează-te la timp.',
    'faq.q15': 'Trebuie să plătesc 25 USDT în fiecare săptămână?',
    'faq.a15': 'Nu. Realizezi doar contribuția inițială de 25 USDT pentru activarea circuitului Bronz. Reactivările ulterioare se finanțează automat dintr-o rezervă, astfel încât nu trebuie să depui fonduri suplimentare în Bronz.',
    'faq.q16': 'Ce se întâmplă dacă invit o persoană cu multă influență?',
    'faq.a16': 'Invitarea unor lideri cu viziune poate impulsiona creșterea întregii structuri. Totuși, reactivarea lor depinde de propriul ciclu; amintește-ți să îi însoțești pentru a rămâne activi și aliniați cu scopul comunității.',
    'faq.q17': 'De ce reactivarea este semiautomată?',
    'faq.a17': 'Contractul inteligent separă o parte din contribuții pentru a reactiva circuitul fără un nou depozit. Procesul este semiautomat deoarece trebuie să aprobi tranzacția de reactivare pentru a păstra controlul walletului.',
    'faq.q18': 'Ce înseamnă depozitul de reactivare?',
    'faq.a18': 'Depozitul de reactivare este un sold acumulat folosit pentru următoarea activare. Se finanțează din jumătate din contribuția ta inițială și jumătate din contribuțiile referiților, garantând continuitatea ciclului.',

    /* Testimonials */
    'testimonials.title': 'Testimoniale',
    'testimonial1.quote': 'Rețeaua m-a ajutat să învăț despre blockchain și să-mi dezvolt brandul personal. Comunitatea este extraordinară.',
    'testimonial1.author': 'Marta P.',
    'testimonial1.role': 'Antreprenoare',
    'testimonial2.quote': 'Sprijinul și transparența sistemului m-au motivat să continui participarea în fiecare săptămână.',
    'testimonial2.author': 'Carlos G.',
    'testimonial2.role': 'Participant',
    'testimonial3.quote': 'F1 Premium m-a ajutat să intru în lumea web3. Acum înțeleg mai bine cum funcționează contractele inteligente.',
    'testimonial3.author': 'Lucía M.',
    'testimonial3.role': 'Membră',
    'testimonial4.quote': 'Datorită formării și acompaniamentului am reușit să-mi creez brandul personal și să generezez conexiuni noi.',
    'testimonial4.author': 'Daniel R.',
    'testimonial4.role': 'Creator de conținut',

    /* Legal */
    'legal.title': 'Aviz legal și condiții',
    'legal.intro': 'Acest rezumat nu înlocuiește avizul legal complet, dar reunește cele mai relevante puncte pentru utilizatori.',
    'legal.item1.title': 'Natura platformei',
    'legal.item1.desc': 'F1 Premium este o platformă digitală de economie colaborativă bazată pe tehnologia blockchain. Nu este o entitate financiară și nu oferă servicii de investiții, consultanță financiară sau gestionare de capital.',
    'legal.item2.title': 'Contribuții voluntare',
    'legal.item2.desc': 'Participarea se realizează printr-o contribuție voluntară care nu constituie investiție și nu generează drepturi economice garantate.',
    'legal.item3.title': 'Lipsa garanțiilor',
    'legal.item3.desc': 'Nu există promisiune de beneficii sau rezultate asigurate. Rezultatele depind exclusiv de activitatea individuală și de mediul colectiv.',
    'legal.item4.title': 'Utilizarea criptomonedelor',
    'legal.item4.desc': 'Sistemul operează prin criptomonede. Utilizatorii trebuie să cunoască riscurile, să accepte volatilitatea și să folosească walleturi de autocustodie. F1 Premium nu custodiază fonduri și nu poate recupera active pierdute.',
    'legal.item5.title': 'Responsabilitatea utilizatorului',
    'legal.item5.desc': 'Utilizatorul este responsabil să respecte legislația țării sale, să își declare activitățile fiscale și să folosească platforma legal și etic.',
    'legal.item6.title': 'Interdicții',
    'legal.item6.desc': 'Este interzisă promisiunea de venituri garantate, inducerea în eroare privind natura sistemului sau folosirea mesajelor înșelătoare.',
    'legal.item7.title': 'Întrebări frecvente',
    'legal.item7.desc': 'Consultă secțiunea Întrebări frecvente pentru mai multe detalii despre natura non-financiară a platformei și despre participarea ta.',
    'legal.conclusion': 'Participarea la F1 Premium implică acceptarea acestor termeni și responsabilitatea individuală asupra deciziilor tale.',

    /* About page */
    'about.title': 'Ce este F1 Premium?',
    'about.section1.title': 'Introducere',
    'about.section1.desc1': 'F1 Premium este o platformă de economie colaborativă care integrează formarea în competențe digitale și un sistem de participare descentralizat. Obiectivul său este să te ajute să înveți, să creezi și să te conectezi în noua eră digitală.',
    'about.section1.desc2': 'Nu este un produs financiar și nu oferă randamente garantate; se concentrează pe educație, schimb de cunoștințe și creștere colectivă.',
    'about.section1.fig1': 'Introducere în filosofia F1 Premium.',
    'about.section1.fig2': 'Natura sistemului: colaborare și descentralizare.',
    'about.section2.title': 'Structură și operare',
    'about.section2.desc1': 'Platforma este organizată într-o rețea de șapte niveluri cu duplicare 2x, unde fiecare participant invită alte persoane, iar activitatea se distribuie conform procentelor fixe în trei circuite: Bronz, Argint și Aur.',
    'about.section2.desc2': 'Dinamica se bazează pe cicluri săptămânale care promovează continuitatea. Fiecare circuit reprezintă o fază: învățare, dezvoltare și consolidare, cu contribuții de 25, 50 și 100 USDT.',
    'about.section2.fig1': 'Reprezentarea nivelurilor rețelei.',
    'about.section2.fig2': 'Diagramă a ciclurilor săptămânale și importanța constanței.',
    'about.section3.title': 'Valori și etică',
    'about.section3.desc1': 'F1 Premium încurajează alfabetizarea digitală, transparența și construirea brandului personal. Participanții învață să comunice și să ofere valoare fără a vinde promisiuni de câștig.',
    'about.section3.desc2': 'Comunitatea se ghidează după principii de ajutor reciproc, responsabilitate și perspectivă pe termen lung.',
    'about.section3.item1': 'Învățare continuă în web3 și blockchain.',
    'about.section3.item2': 'Autocustodie și securitate financiară.',
    'about.section3.item3': 'Comunicare onestă, fără promisiuni de investiție.',
    'about.section3.item4': 'Construirea unui brand personal autentic.',
    'about.section4.title': 'Concluzie',
    'about.section4.desc1': 'F1 Premium este un spațiu pentru a te forma, a te conecta cu persoane cu interese similare și a-ți duce prezența digitală la un nivel superior.',
    'about.section4.desc2': 'Succesul tău va depinde de angajamentul și acțiunea constantă în cadrul comunității.',

    /* How page extended content */
    'how.network.title': 'Duplicare și niveluri',
    'how.network.desc1': 'Rețeaua se extinde prin duplicare 2x: fiecare persoană invită două, apoi procesul continuă. Astfel se formează niveluri de 2, 4, 8, 16, 32, 64 și 128 de membri.',
    'how.network.desc2': 'Distribuția contribuțiilor urmează procente prestabilite care recompensează activitatea colectivă.',
    'how.network.image1.caption': 'Diagramă de duplicare pe niveluri.',
    'how.network.image2.caption': 'Vizualizare a rețelei complete în circuitul Aur.',
    'how.circuits.details.title': 'Circuitele Bronz, Argint și Aur',
    'how.circuits.details.bronce.desc': 'Bronz este faza de inițiere: te familiarizezi cu sistemul, contribui cu 25 USDT și înveți să inviți și să însoțești alte persoane.',
    'how.circuits.details.plata.desc': 'Argint este faza de dezvoltare: dublezi contribuția la 50 USDT, îți extinzi rețeaua și folosești forța colectivă pentru a-ți consolida proiectul.',
    'how.circuits.details.oro.desc': 'Aur este faza de consolidare: rețeaua atinge maturitate și profunzime cu contribuții de 100 USDT.',
    'how.cycles.details.title': 'Cicluri și reactivări',
    'how.cycles.details.desc1': 'Fiecare ciclu durează 7 zile. La finalul fiecărui ciclu trebuie să reactivezi pentru a rămâne activ; altfel treci în pauză și primești doar contribuții de la nivelul direct.',
    'how.cycles.details.desc2': 'Reactivarea garantează continuitatea și distribuția echitabilă a contribuțiilor. Constanța este esențială pentru a valorifica duplicarea.',
    'how.automation.details.title': 'Smart contract și automatizare',
    'how.automation.details.desc1': 'Platforma folosește un smart contract care înregistrează contribuțiile, alocă procentele și actualizează automat stările.',
    'how.automation.details.desc2': 'Deși contractul gestionează regulile, valoarea vine din acțiunea umană: partajare, acompaniere și formare.',
    'how.participation.details.title': 'Rolul și planul participantului',
    'how.participation.details.desc1': 'Un participant învață modelul, aplică instrumentele, îl împărtășește cu alții și oferă sprijin.',
    'how.participation.details.desc2': 'Planul propus: primele 7 zile sunt pentru studierea sistemului și configurarea walletului; între zilele 8 și 21, invită și ghidează primele contacte; după ziua 30, evaluează rezultatele, împărtășește realizările și dezvoltă-ți brandul personal.',

    /* Footer */
    'footer.text': '© 2026 F1 Premium. Toate drepturile rezervate.'
  });
/*
  Italian and Russian language patch for F1 Premium.
  Add this block at the end of romanian-fix.js, after the existing code.
  It adds IT/RU to the selector, fills translation dictionaries and extends wallet image captions.
*/
(function () {
  if (typeof translations === "undefined") return;

  function addLanguageOption(value, label) {
    document.querySelectorAll("#lang-select").forEach(function (selector) {
      if (!selector.querySelector('option[value="' + value + '"]')) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        selector.appendChild(option);
      }
    });
  }

  function ensureLanguageOptions() {
    addLanguageOption("it", "IT");
    addLanguageOption("ru", "RU");

    if (typeof currentLang !== "undefined") {
      document.querySelectorAll("#lang-select").forEach(function (selector) {
        selector.value = currentLang;
      });
    }
  }

  translations.it = Object.assign({}, translations.en || translations.es || {}, translations.it || {}, {
    /* Navigation */
    "nav.home": "Home",
    "nav.about": "Che cos'è F1 Premium?",
    "nav.how": "Come funziona",
    "nav.register": "Registrarsi",
    "nav.wallet": "Configurare il wallet",
    "nav.backoffice": "Back Office",
    "nav.faq": "Domande frequenti",
    "nav.testimonials": "Testimonianze",
    "nav.legal": "Avviso legale",
    "nav.contact": "Contatto",

    /* Home - hero */
    "home.hero.title": "Dai slancio alla tua crescita digitale con F1 Premium",
    "home.hero.subtitle": "Una piattaforma collaborativa che unisce formazione in competenze digitali e partecipazione a un sistema decentralizzato.",
    "home.hero.cta": "Scopri come funziona",
    "home.hero.whatsapp": "Parla su WhatsApp",

    /* Home - features */
    "home.features.title": "Caratteristiche principali",
    "home.features.feature1.title": "Decentralizzato",
    "home.features.feature1.desc": "Basato su tecnologia blockchain, senza controllo centralizzato.",
    "home.features.feature2.title": "Trasparente",
    "home.features.feature2.desc": "Regole e distribuzione visibili tramite smart contract.",
    "home.features.feature3.title": "Automatico",
    "home.features.feature3.desc": "Processi eseguiti automaticamente, senza intervento manuale.",
    "home.features.feature4.title": "Collaborativo",
    "home.features.feature4.desc": "Il valore nasce dalla partecipazione e dal supporto reciproco.",
    "home.features.feature5.title": "Scalabile",
    "home.features.feature5.desc": "La tua rete può crescere fino a 7 livelli con cicli continui.",

    /* Home - circuits */
    "home.circuits.title": "Circuiti Bronzo, Argento e Oro",
    "home.circuits.desc": "Il sistema è strutturato in tre circuiti di partecipazione con la stessa logica e scale diverse. Si inizia con Bronzo (25 USDT), si evolve verso Argento (50 USDT) e si consolida in Oro (100 USDT). Ogni circuito distribuisce l'attività fino a sette livelli secondo percentuali fisse.",
    "home.circuits.bronce.title": "Bronzo",
    "home.circuits.bronce.desc": "Fase di avvio e apprendimento con un contributo di 25 USDT.",
    "home.circuits.plata.title": "Argento",
    "home.circuits.plata.desc": "Fase di sviluppo con un contributo di 50 USDT.",
    "home.circuits.oro.title": "Oro",
    "home.circuits.oro.desc": "Fase di consolidamento con un contributo di 100 USDT.",

    /* Home - call to action */
    "home.cta.title": "Unisciti alla comunità",
    "home.cta.desc": "Attiva il tuo circuito e accedi a formazione, strumenti e accompagnamento.",
    "home.cta.button": "Inizia ora",

    /* How page */
    "how.title": "Come funziona F1 Premium",
    "how.intro": "F1 Premium si basa su una struttura di rete a sette livelli che moltiplica le connessioni man mano che i partecipanti invitano altre persone. Ogni utente occupa una posizione nella rete e l'attività viene distribuita secondo regole prestabilite.",
    "how.structure.title": "Struttura a 7 livelli",
    "how.structure.desc": "Ogni circuito è organizzato in sette livelli con duplicazione 2x. Il numero di persone per livello è 2, 4, 8, 16, 32, 64 e 128. La distribuzione segue percentuali fisse: 50%, 4%, 5%, 6%, 7%, 8% e 9%.",
    "how.circuits.title": "Circuiti e fasi",
    "how.circuits.bronce": "Bronzo: fase di avvio e apprendimento; la struttura cresce e si impara a gestire la rete.",
    "how.circuits.plata": "Argento: fase di sviluppo; la struttura diventa più solida e la partecipazione collettiva acquista maggiore peso.",
    "how.circuits.oro": "Oro: fase di consolidamento; la rete acquisisce profondità e maturità, e l'attività collettiva domina il sistema.",
    "how.cycles.title": "Cicli di continuità",
    "how.cycles.desc": "Il sistema funziona attraverso cicli settimanali di 7 giorni che favoriscono la continuità. La costanza è più importante dell'intensità.",
    "how.automation.title": "Automazione e smart contract",
    "how.automation.desc": "Il sistema opera tramite uno smart contract che registra l'attività, esegue le regole e mantiene la struttura. Non crea valore da solo e non sostituisce l'azione umana.",
    "how.participant.title": "Ruolo del partecipante",
    "how.participant.desc": "L'utente ha un ruolo attivo: comprendere il sistema, applicarlo, condividerlo e accompagnare altre persone.",
    "how.plan.title": "Piano di avvio",
    "how.plan.desc": "Giorni 1-7: comprendere il sistema, configurare gli strumenti e realizzare i primi collegamenti. Giorni 8-21: accompagnare le prime persone, ripetere e consolidare. Dal giorno 30: valutare l'attività, scalare la partecipazione e rafforzare la rete.",

    /* Registration page */
    "register.title": "Come registrarsi",
    "register.intro": "Per unirti a F1 Premium hai bisogno di un invito del tuo sponsor e di un wallet di autocustodia compatibile con opBNB.",
    "register.step1.title": "1. Ottieni il link di invito",
    "register.step1.desc": "Chiedi al tuo sponsor di condividere con te il suo link di accesso.",
    "register.step2.title": "2. Configura il tuo wallet",
    "register.step2.desc": "Installa un wallet come SafePal e aggiungi la rete opBNB. Assicurati di conservare le tue chiavi in modo sicuro.",
    "register.step3.title": "3. Aggiungi fondi",
    "register.step3.desc": "Carica il tuo wallet con USDT e BNB per le commissioni di gas.",
    "register.step4.title": "4. Accedi al link",
    "register.step4.desc": "Apri il link del tuo sponsor e collega il wallet al contratto.",
    "register.step5.title": "5. Seleziona la rete",
    "register.step5.desc": "Seleziona la rete opBNB o BNB Chain nella DApp.",
    "register.step6.title": "6. Collega il wallet",
    "register.step6.desc": "Scegli SafePal come provider e concedi i permessi per collegarti al contratto.",
    "register.step7.title": "7. Approva il contratto",
    "register.step7.desc": "Conferma nel wallet l'approvazione del contratto affinché possa utilizzare i tuoi token.",
    "register.step8.title": "8. Conferma il tuo contributo",
    "register.step8.desc": "Autorizza la transazione di 25 USDT per attivare il circuito Bronzo e attendi la conferma sulla blockchain.",
    "register.remark": "Ricorda che il contributo è volontario e non esiste alcuna garanzia di ritorno. Gestisci sempre chiavi e fondi con prudenza.",
    "register.step1.caption": "Richiedi al tuo sponsor il link di invito e copialo dalla chat.",
    "register.step2.caption": "Verifica che il wallet disponga di almeno 25 USDT e di una piccola quantità di BNB per pagare le commissioni.",
    "register.step3.caption": "Nell'app SafePal premi “Esplora” per aprire il motore di ricerca delle DApp.",
    "register.step4.caption": "Incolla il link di invito nella casella di ricerca e premi Invio.",
    "register.step5.caption": "Passa dalla rete Ethereum predefinita a opBNB/BNB Chain affinché lo smart contract funzioni.",
    "register.step6.caption": "Fai clic su “Connetti” per collegare il wallet alla DApp.",
    "register.step7.caption": "Seleziona SafePal, o un'altra opzione compatibile, come provider di connessione.",
    "register.step8.caption": "Accetta i termini e premi “Approva contratto” per concedere il permesso, poi conferma il contributo di 25 USDT. Al termine, il circuito Bronzo sarà attivo.",

    /* Wallet setup page */
    "wallet.title": "Configurare il wallet SafePal",
    "wallet.intro": "Prima di registrarti a F1 Premium hai bisogno di un wallet di autocustodia. SafePal è l'opzione consigliata per il supporto alla rete opBNB e per la facilità d'uso.",
    "wallet.step1.title": "1. Scarica e installa SafePal",
    "wallet.step1.desc": "Cerca SafePal nell'App Store o in Google Play, oppure scarica l'estensione ufficiale. Installa solo da fonti ufficiali.",
    "wallet.step2.title": "2. Crea o importa il wallet",
    "wallet.step2.desc": "Aprendo SafePal, seleziona “Crea wallet” per generarne uno nuovo oppure “Importa wallet” se ne hai già uno. Scrivi la frase seed su carta e conservala offline. Non condividerla mai.",
    "wallet.step3.title": "3. Aggiungi la rete opBNB",
    "wallet.step3.desc": "Nella sezione “Networks” aggiungi opBNB, layer 2 di BNB Chain. Inserisci i parametri RPC corretti per operare con USDT e BNB.",
    "wallet.step4.title": "4. Deposita fondi",
    "wallet.step4.desc": "Invia almeno 25 USDT al tuo indirizzo su opBNB e una piccola quantità di BNB per il gas. Puoi acquistarli su un exchange e trasferirli.",
    "wallet.step5.title": "5. Verifica saldo e sicurezza",
    "wallet.step5.desc": "Controlla che USDT e BNB compaiano nel wallet. Attiva password o impronta e assicurati di avere una copia sicura della frase seed.",
    "wallet.step1.caption": "Scarica e installa l'app SafePal dallo store ufficiale del tuo dispositivo.",
    "wallet.step2.caption": "Crea un nuovo wallet o importane uno esistente e imposta una password di 6 cifre. Poi seleziona il backup manuale e annota le 12 parole della frase seed.",
    "wallet.step3.caption": "Aggiungi la rete opBNB in SafePal e cerca i token BNB(opBNB) e USDT(opBNB) per inserirli nella lista.",
    "wallet.step4.caption": "Ricarica il tuo nuovo indirizzo opBNB con USDT e BNB. Puoi inviare fondi da un exchange o da un altro wallet.",
    "wallet.step5.caption": "Verifica che i token USDT e BNB compaiano nel wallet e attiva misure di sicurezza come PIN o impronta.",

    /* Back office page */
    "backoffice.title": "Back Office",
    "backoffice.intro": "Il tuo ufficio virtuale è il pannello da cui gestisci la partecipazione, la rete e la formazione.",
    "backoffice.feature1.title": "Gestione dei circuiti",
    "backoffice.feature1.desc": "Visualizza e attiva i circuiti Bronzo, Argento o Oro in base ai tuoi progressi.",
    "backoffice.feature2.title": "Albero della rete",
    "backoffice.feature2.desc": "Consulta in tempo reale lo stato dei tuoi livelli e dei membri.",
    "backoffice.feature3.title": "Report in tempo reale",
    "backoffice.feature3.desc": "Verifica attività, riattivazioni e contributi in modo trasparente.",
    "backoffice.feature4.title": "Formazione e strumenti",
    "backoffice.feature4.desc": "Accedi a sessioni formative, video e strumenti di IA per creare contenuti digitali.",
    "backoffice.feature5.title": "Gestione delle commissioni",
    "backoffice.feature5.desc": "Controlla il saldo in base al tuo stato, attivo o in pausa, e gestisci la continuità.",
    "backoffice.section1.title": "Progresso e riattivazione",
    "backoffice.section1.desc1": "Il back office mostra una linea temporale con il conto alla rovescia fino alla prossima riattivazione. Devi riattivare ogni 7 giorni per restare attivo; altrimenti passi in pausa e ricevi solo contributi dal livello diretto.",
    "backoffice.section1.desc2": "Il sistema semiautomatico riserva una parte del tuo contributo e dei contributi dei referiti per la riattivazione. In questo modo si assicura continuità e si evita la perdita dei livelli.",
    "backoffice.section2.title": "Attivazione dei circuiti",
    "backoffice.section2.desc1": "Dal pannello puoi vedere lo stato dei circuiti Bronzo, Argento e Oro. Ogni circuito dispone di un pulsante “Restart” quando il periodo si avvicina alla fine.",
    "backoffice.section2.desc2": "Puoi attivare Argento solo dopo aver completato il ciclo Bronzo, e lo stesso vale per Oro. L'attivazione dipende dai tuoi progressi e da quelli del tuo sponsor.",
    "backoffice.section3.title": "Il mio account",
    "backoffice.section3.desc1": "Nella sezione “Il mio account” trovi dati come numero di membri, contributi totali, ricompense ricevute, link sponsor e codice invito.",
    "backoffice.section3.desc2": "Usa questi dati per seguire la crescita e condividere il link con nuovi membri in sicurezza.",
    "backoffice.section4.title": "Dettaglio del circuito",
    "backoffice.section4.desc1": "Il dettaglio del circuito mostra una tabella con i tuoi livelli, il numero di persone per livello, i contributi totali e il tuo stato, attivo o in pausa.",
    "backoffice.section4.desc2": "Questa vista ti aiuta a identificare da quali livelli ricevi contributi e dove puoi rafforzare la rete.",
    "backoffice.section5.title": "Menu principale",
    "backoffice.section5.desc1": "Il menu principale dà accesso a comunità, academy, strumenti di marketing, materiali di supporto, assistenza, avvisi legali e wallet.",
    "backoffice.section5.desc2": "Esplora ogni sezione per sfruttare al massimo le risorse disponibili e sviluppare il tuo progetto personale.",

    /* FAQ page */
    "faq.title": "Domande frequenti",
    "faq.q1": "F1 Premium è un investimento?",
    "faq.a1": "No. F1 Premium è una piattaforma di formazione e partecipazione in un ambiente di economia collaborativa.",
    "faq.q2": "Si guadagna denaro automaticamente?",
    "faq.a2": "No. Non esistono garanzie di reddito né automatismi economici; i risultati dipendono dalla tua attività e dalla comunità.",
    "faq.q3": "Dipendo da altre persone?",
    "faq.a3": "L'esperienza può essere influenzata dall'interazione con altri, ma non esistono risultati garantiti.",
    "faq.q4": "È obbligatorio invitare persone?",
    "faq.a4": "No, non è obbligatorio. La partecipazione è volontaria, anche se invitare altre persone può sostenere la crescita del sistema.",
    "faq.q5": "Posso perdere il mio contributo?",
    "faq.a5": "Sì. La partecipazione non garantisce il ritorno del contributo. Devi accettare i rischi legati all'uso delle criptovalute.",
    "faq.q6": "F1 Premium è un sistema piramidale?",
    "faq.a6": "No. F1 Premium non si definisce come sistema di investimento né modello finanziario; è una comunità di economia collaborativa, senza remunerazione per il semplice reclutamento.",
    "faq.q7": "Cosa ricevo entrando?",
    "faq.a7": "Ricevi l'attivazione nel circuito, accesso alla formazione, supporto e accompagnamento per sviluppare il tuo brand personale.",
    "faq.q8": "Di quanto ho bisogno per iniziare?",
    "faq.a8": "Bronzo si attiva con 25 USDT più gas; Argento con 50 USDT; Oro con 100 USDT.",
    "faq.q9": "Quale wallet devo usare?",
    "faq.a9": "Si consiglia SafePal, anche se puoi usare altri wallet EVM compatibili, come MetaMask.",
    "faq.q10": "Ho bisogno subito di 256 persone?",
    "faq.a10": "No. Questa cifra è solo un esempio di duplicazione fino a sette livelli. Inizia invitando poche persone e cresci progressivamente.",
    "faq.q11": "Cosa succede se non resto attivo?",
    "faq.a11": "Passi in pausa e ricevi solo dal livello diretto finché non riattivi la continuità.",
    "faq.q12": "Devo promuovere F1 Premium sui social?",
    "faq.a12": "Non si tratta di promuovere F1 Premium come tale; la formazione si concentra sul tuo brand personale e sull'avvio di conversazioni.",
    "faq.q13": "Devo invitare due persone ogni settimana?",
    "faq.a13": "Non è obbligatorio invitare due persone ogni settimana. Tuttavia, la duplicazione 2x può accelerare la crescita; la strategia dipende dai tuoi obiettivi e dal tuo team.",
    "faq.q14": "Cosa succede se il mio invitato si riattiva prima di me?",
    "faq.a14": "Se un membro del team si riattiva prima di te, continuerà a contribuire al sistema, ma i suoi contributi andranno alla struttura ascendente attiva. Per ricevere su tutti i livelli, riattivati in tempo.",
    "faq.q15": "Devo pagare 25 USDT ogni settimana?",
    "faq.a15": "No. Effettui solo il contributo iniziale di 25 USDT per attivare il circuito Bronzo. Le riattivazioni successive si finanziano automaticamente da una riserva, quindi non devi depositare fondi aggiuntivi in Bronzo.",
    "faq.q16": "Cosa succede se invito una persona molto influente?",
    "faq.a16": "Invitare leader con visione può dare slancio alla crescita dell'intera struttura. Tuttavia, la loro riattivazione dipende dal loro ciclo; accompagnali affinché restino attivi e allineati allo scopo della comunità.",
    "faq.q17": "Perché la riattivazione è semiautomatica?",
    "faq.a17": "Lo smart contract separa una parte dei contributi per riattivare il circuito senza un nuovo deposito. Il processo è semiautomatico perché devi approvare la transazione di riattivazione per mantenere il controllo del wallet.",
    "faq.q18": "Cosa significa deposito di riattivazione?",
    "faq.a18": "Il deposito di riattivazione è un saldo accumulato usato per la successiva attivazione. Si finanzia con metà del tuo contributo iniziale e metà dei contributi dei referiti, garantendo la continuità del ciclo.",

    /* Testimonials */
    "testimonials.title": "Testimonianze",
    "testimonial1.quote": "La rete mi ha aiutato a conoscere la blockchain e a sviluppare il mio brand personale. La comunità è straordinaria.",
    "testimonial1.author": "Marta P.",
    "testimonial1.role": "Imprenditrice",
    "testimonial2.quote": "Il supporto e la trasparenza del sistema mi hanno motivato a continuare la partecipazione ogni settimana.",
    "testimonial2.author": "Carlos G.",
    "testimonial2.role": "Partecipante",
    "testimonial3.quote": "F1 Premium mi ha aiutato a entrare nel mondo web3. Ora capisco meglio come funzionano gli smart contract.",
    "testimonial3.author": "Lucía M.",
    "testimonial3.role": "Membro",
    "testimonial4.quote": "Grazie alla formazione e all'accompagnamento sono riuscito a creare il mio brand personale e generare nuove connessioni.",
    "testimonial4.author": "Daniel R.",
    "testimonial4.role": "Creatore di contenuti",

    /* Legal */
    "legal.title": "Avviso legale e condizioni",
    "legal.intro": "Questo riepilogo non sostituisce l'avviso legale completo, ma raccoglie i punti più rilevanti per gli utenti.",
    "legal.item1.title": "Natura della piattaforma",
    "legal.item1.desc": "F1 Premium è una piattaforma digitale di economia collaborativa basata su tecnologia blockchain. Non è un'entità finanziaria e non offre servizi di investimento, consulenza finanziaria o gestione di capitale.",
    "legal.item2.title": "Contributi volontari",
    "legal.item2.desc": "La partecipazione avviene tramite un contributo volontario che non costituisce investimento e non genera diritti economici garantiti.",
    "legal.item3.title": "Assenza di garanzie",
    "legal.item3.desc": "Non esistono promesse di benefici o risultati assicurati. I risultati dipendono esclusivamente dall'attività individuale e dal contesto collettivo.",
    "legal.item4.title": "Uso di criptovalute",
    "legal.item4.desc": "Il sistema opera tramite criptovalute. Gli utenti devono conoscere i rischi, accettare la volatilità e usare wallet di autocustodia. F1 Premium non custodisce fondi e non può recuperare asset persi.",
    "legal.item5.title": "Responsabilità dell'utente",
    "legal.item5.desc": "L'utente è responsabile del rispetto della legislazione del proprio paese, della dichiarazione fiscale delle attività e dell'uso legale ed etico della piattaforma.",
    "legal.item6.title": "Divieti",
    "legal.item6.desc": "È vietato promettere redditi garantiti, rappresentare in modo ingannevole la natura del sistema o usare messaggi fuorvianti.",
    "legal.item7.title": "Domande frequenti",
    "legal.item7.desc": "Consulta la sezione Domande frequenti per maggiori dettagli sulla natura non finanziaria della piattaforma e sulla tua partecipazione.",
    "legal.conclusion": "La partecipazione a F1 Premium comporta l'accettazione di questi termini e la responsabilità individuale delle proprie decisioni.",

    /* About page */
    "about.title": "Che cos'è F1 Premium?",
    "about.section1.title": "Introduzione",
    "about.section1.desc1": "F1 Premium è una piattaforma di economia collaborativa che integra formazione in competenze digitali e un sistema di partecipazione decentralizzato. Il suo obiettivo è aiutarti a imparare, creare e connetterti nella nuova era digitale.",
    "about.section1.desc2": "Non è un prodotto finanziario e non offre rendimenti garantiti; si concentra su educazione, scambio di conoscenze e crescita collettiva.",
    "about.section1.fig1": "Introduzione alla filosofia di F1 Premium.",
    "about.section1.fig2": "Natura del sistema: collaborazione e decentralizzazione.",
    "about.section2.title": "Struttura e funzionamento",
    "about.section2.desc1": "La piattaforma è organizzata in una rete a sette livelli con duplicazione 2x, in cui ogni partecipante invita altre persone e l'attività viene distribuita secondo percentuali fisse in tre circuiti: Bronzo, Argento e Oro.",
    "about.section2.desc2": "La dinamica si basa su cicli settimanali che promuovono la continuità. Ogni circuito rappresenta una fase: apprendimento, sviluppo e consolidamento, con contributi di 25, 50 e 100 USDT.",
    "about.section2.fig1": "Rappresentazione dei livelli della rete.",
    "about.section2.fig2": "Diagramma dei cicli settimanali e dell'importanza della costanza.",
    "about.section3.title": "Valori ed etica",
    "about.section3.desc1": "F1 Premium promuove alfabetizzazione digitale, trasparenza e costruzione del brand personale. I partecipanti imparano a comunicare e offrire valore senza vendere promesse di guadagno.",
    "about.section3.desc2": "La comunità è guidata da principi di aiuto reciproco, responsabilità e visione a lungo termine.",
    "about.section3.item1": "Apprendimento continuo in web3 e blockchain.",
    "about.section3.item2": "Autocustodia e sicurezza finanziaria.",
    "about.section3.item3": "Comunicazione onesta, senza promesse di investimento.",
    "about.section3.item4": "Costruzione di un brand personale autentico.",
    "about.section4.title": "Conclusione",
    "about.section4.desc1": "F1 Premium è uno spazio per formarti, connetterti con persone con interessi simili e portare la tua presenza digitale a un livello superiore.",
    "about.section4.desc2": "Il tuo successo dipenderà dall'impegno e dall'azione costante all'interno della comunità.",

    /* How page extended content */
    "how.network.title": "Duplicazione e livelli",
    "how.network.desc1": "La rete si espande attraverso duplicazione 2x: ogni persona ne invita due, poi il processo continua. Così si formano livelli di 2, 4, 8, 16, 32, 64 e 128 membri.",
    "how.network.desc2": "La distribuzione dei contributi segue percentuali prestabilite che premiano l'attività collettiva.",
    "how.network.image1.caption": "Diagramma della duplicazione per livelli.",
    "how.network.image2.caption": "Visualizzazione della rete completa nel circuito Oro.",
    "how.circuits.details.title": "Circuiti Bronzo, Argento e Oro",
    "how.circuits.details.bronce.desc": "Bronzo è la fase di avvio: familiarizzi con il sistema, contribuisci con 25 USDT e impari a invitare e accompagnare altre persone.",
    "how.circuits.details.plata.desc": "Argento è la fase di sviluppo: raddoppi il contributo a 50 USDT, estendi la rete e usi la forza collettiva per consolidare il tuo progetto.",
    "how.circuits.details.oro.desc": "Oro è la fase di consolidamento: la rete raggiunge maturità e profondità con contributi di 100 USDT.",
    "how.cycles.details.title": "Cicli e riattivazioni",
    "how.cycles.details.desc1": "Ogni ciclo dura 7 giorni. Alla fine di ogni ciclo devi riattivare per restare attivo; altrimenti passi in pausa e ricevi solo contributi dal livello diretto.",
    "how.cycles.details.desc2": "La riattivazione garantisce continuità e distribuzione equa dei contributi. La costanza è essenziale per sfruttare la duplicazione.",
    "how.automation.details.title": "Smart contract e automazione",
    "how.automation.details.desc1": "La piattaforma usa uno smart contract che registra i contributi, assegna le percentuali e aggiorna automaticamente gli stati.",
    "how.automation.details.desc2": "Anche se il contratto gestisce le regole, il valore nasce dall'azione umana: condivisione, accompagnamento e formazione.",
    "how.participation.details.title": "Ruolo e piano del partecipante",
    "how.participation.details.desc1": "Un partecipante impara il modello, applica gli strumenti, lo condivide con altri e offre supporto.",
    "how.participation.details.desc2": "Piano proposto: i primi 7 giorni servono per studiare il sistema e configurare il wallet; tra i giorni 8 e 21, invita e guida i primi contatti; dopo il giorno 30, valuta i risultati, condividi i progressi e sviluppa il tuo brand personale.",

    /* Footer */
    "footer.text": "© 2026 F1 Premium. Tutti i diritti riservati."
  });

  translations.ru = Object.assign({}, translations.en || translations.es || {}, translations.ru || {}, {
    /* Navigation */
    "nav.home": "Главная",
    "nav.about": "Что такое F1 Premium?",
    "nav.how": "Как это работает",
    "nav.register": "Регистрация",
    "nav.wallet": "Настроить wallet",
    "nav.backoffice": "Back Office",
    "nav.faq": "Частые вопросы",
    "nav.testimonials": "Отзывы",
    "nav.legal": "Правовая информация",
    "nav.contact": "Контакт",

    /* Home - hero */
    "home.hero.title": "Развивайте свой цифровой рост с F1 Premium",
    "home.hero.subtitle": "Совместная платформа, объединяющая обучение цифровым навыкам и участие в децентрализованной системе.",
    "home.hero.cta": "Узнать, как это работает",
    "home.hero.whatsapp": "Написать в WhatsApp",

    /* Home - features */
    "home.features.title": "Основные характеристики",
    "home.features.feature1.title": "Децентрализация",
    "home.features.feature1.desc": "Основано на технологии блокчейн, без централизованного контроля.",
    "home.features.feature2.title": "Прозрачность",
    "home.features.feature2.desc": "Правила и распределение видны в смарт-контрактах.",
    "home.features.feature3.title": "Автоматизация",
    "home.features.feature3.desc": "Процессы выполняются автоматически, без ручного вмешательства.",
    "home.features.feature4.title": "Сотрудничество",
    "home.features.feature4.desc": "Ценность создается участием и взаимной поддержкой.",
    "home.features.feature5.title": "Масштабируемость",
    "home.features.feature5.desc": "Ваша сеть может расти до 7 уровней через непрерывные циклы.",

    /* Home - circuits */
    "home.circuits.title": "Контуры Бронза, Серебро и Золото",
    "home.circuits.desc": "Система построена на трех контурах участия с одинаковой логикой и разным масштабом. Начало — Бронза (25 USDT), развитие — Серебро (50 USDT), закрепление — Золото (100 USDT). Каждый контур распределяет активность до семи уровней по фиксированным процентам.",
    "home.circuits.bronce.title": "Бронза",
    "home.circuits.bronce.desc": "Этап старта и обучения с вкладом 25 USDT.",
    "home.circuits.plata.title": "Серебро",
    "home.circuits.plata.desc": "Этап развития с вкладом 50 USDT.",
    "home.circuits.oro.title": "Золото",
    "home.circuits.oro.desc": "Этап закрепления с вкладом 100 USDT.",

    /* Home - call to action */
    "home.cta.title": "Присоединяйтесь к сообществу",
    "home.cta.desc": "Активируйте свой контур и получите доступ к обучению, инструментам и сопровождению.",
    "home.cta.button": "Начать сейчас",

    /* How page */
    "how.title": "Как работает F1 Premium",
    "how.intro": "F1 Premium основана на сетевой структуре из семи уровней, где связи увеличиваются по мере того, как участники приглашают других людей. Каждый пользователь занимает позицию в сети, а активность распределяется по заранее заданным правилам.",
    "how.structure.title": "Структура из 7 уровней",
    "how.structure.desc": "Каждый контур организован в семь уровней с дублированием 2x. Количество людей по уровням: 2, 4, 8, 16, 32, 64 и 128. Распределение следует фиксированным процентам: 50%, 4%, 5%, 6%, 7%, 8% и 9%.",
    "how.circuits.title": "Контуры и этапы",
    "how.circuits.bronce": "Бронза: этап старта и обучения; структура растет, и вы учитесь управлять сетью.",
    "how.circuits.plata": "Серебро: этап развития; структура становится более прочной, а коллективное участие приобретает большее значение.",
    "how.circuits.oro": "Золото: этап закрепления; сеть получает глубину и зрелость, а коллективная активность становится основой системы.",
    "how.cycles.title": "Циклы непрерывности",
    "how.cycles.desc": "Система работает через недельные циклы по 7 дней, которые обеспечивают непрерывность. Постоянство важнее интенсивности.",
    "how.automation.title": "Автоматизация и смарт-контракт",
    "how.automation.desc": "Система работает через смарт-контракт, который регистрирует активность, выполняет правила и поддерживает структуру. Он не создает ценность сам по себе и не заменяет человеческое действие.",
    "how.participant.title": "Роль участника",
    "how.participant.desc": "Пользователь играет активную роль: изучает систему, применяет ее, делится ею и сопровождает других.",
    "how.plan.title": "План старта",
    "how.plan.desc": "Дни 1-7: понять систему, настроить инструменты и сделать первые подключения. Дни 8-21: сопровождать первых людей, повторять и закреплять. После 30-го дня: оценивать активность, расширять участие и укреплять сеть.",

    /* Registration page */
    "register.title": "Как зарегистрироваться",
    "register.intro": "Чтобы присоединиться к F1 Premium, вам нужно приглашение от вашего спонсора и wallet самостоятельного хранения, совместимый с opBNB.",
    "register.step1.title": "1. Получите ссылку-приглашение",
    "register.step1.desc": "Попросите вашего спонсора поделиться своей ссылкой доступа.",
    "register.step2.title": "2. Настройте wallet",
    "register.step2.desc": "Установите wallet, например SafePal, и добавьте сеть opBNB. Обязательно надежно сохраните свои ключи.",
    "register.step3.title": "3. Добавьте средства",
    "register.step3.desc": "Пополните wallet USDT и BNB для оплаты комиссий gas.",
    "register.step4.title": "4. Откройте ссылку",
    "register.step4.desc": "Откройте ссылку вашего спонсора и подключите wallet к контракту.",
    "register.step5.title": "5. Выберите сеть",
    "register.step5.desc": "Выберите сеть opBNB или BNB Chain в DApp.",
    "register.step6.title": "6. Подключите wallet",
    "register.step6.desc": "Выберите SafePal как провайдера и разрешите подключение к контракту.",
    "register.step7.title": "7. Одобрите контракт",
    "register.step7.desc": "Подтвердите в wallet одобрение контракта, чтобы он мог использовать ваши токены.",
    "register.step8.title": "8. Подтвердите вклад",
    "register.step8.desc": "Авторизуйте транзакцию на 25 USDT для активации контура Бронза и дождитесь подтверждения в блокчейне.",
    "register.remark": "Помните, что вклад является добровольным и не гарантирует возврат. Всегда осторожно управляйте ключами и средствами.",
    "register.step1.caption": "Попросите у спонсора ссылку-приглашение и скопируйте ее из чата.",
    "register.step2.caption": "Проверьте, что в wallet есть не менее 25 USDT и небольшая сумма BNB для комиссий.",
    "register.step3.caption": "В приложении SafePal нажмите “Explore”, чтобы открыть поиск DApp.",
    "register.step4.caption": "Вставьте ссылку-приглашение в поле поиска и нажмите Enter.",
    "register.step5.caption": "Смените сеть Ethereum по умолчанию на opBNB/BNB Chain, чтобы смарт-контракт работал.",
    "register.step6.caption": "Нажмите “Connect”, чтобы связать wallet с DApp.",
    "register.step7.caption": "Выберите SafePal или другой совместимый вариант как провайдера подключения.",
    "register.step8.caption": "Примите условия и нажмите “Approve contract”, чтобы дать разрешение контракту, затем подтвердите вклад 25 USDT. После завершения контур Бронза будет активирован.",

    /* Wallet setup page */
    "wallet.title": "Настройка wallet SafePal",
    "wallet.intro": "Перед регистрацией в F1 Premium вам нужен wallet самостоятельного хранения. SafePal рекомендуется благодаря поддержке сети opBNB и простоте использования.",
    "wallet.step1.title": "1. Скачайте и установите SafePal",
    "wallet.step1.desc": "Найдите SafePal в App Store или Google Play либо скачайте официальное расширение. Устанавливайте только из официальных источников.",
    "wallet.step2.title": "2. Создайте или импортируйте wallet",
    "wallet.step2.desc": "Открыв SafePal, выберите “Create wallet”, чтобы создать новый wallet, или “Import wallet”, если он у вас уже есть. Запишите seed-фразу на бумаге и храните ее офлайн. Никогда никому ее не передавайте.",
    "wallet.step3.title": "3. Добавьте сеть opBNB",
    "wallet.step3.desc": "В разделе “Networks” добавьте opBNB, layer 2 сети BNB Chain. Введите правильные параметры RPC для работы с USDT и BNB.",
    "wallet.step4.title": "4. Пополните средства",
    "wallet.step4.desc": "Отправьте минимум 25 USDT на ваш адрес в opBNB и небольшую сумму BNB для gas. Их можно купить на бирже и перевести в wallet.",
    "wallet.step5.title": "5. Проверьте баланс и безопасность",
    "wallet.step5.desc": "Убедитесь, что USDT и BNB отображаются в wallet. Включите пароль или отпечаток и убедитесь, что у вас есть безопасная копия seed-фразы.",
    "wallet.step1.caption": "Скачайте и установите приложение SafePal из официального магазина вашего устройства.",
    "wallet.step2.caption": "Создайте новый wallet или импортируйте существующий и установите пароль из 6 цифр. Затем выберите ручное резервное копирование и запишите 12 слов seed-фразы.",
    "wallet.step3.caption": "Добавьте сеть opBNB в SafePal и найдите токены BNB(opBNB) и USDT(opBNB), чтобы добавить их в список.",
    "wallet.step4.caption": "Пополните ваш новый адрес opBNB токенами USDT и BNB. Средства можно отправить с биржи или из другого wallet.",
    "wallet.step5.caption": "Проверьте, что токены USDT и BNB отображаются в wallet, и включите меры безопасности, например PIN или отпечаток.",

    /* Back office page */
    "backoffice.title": "Back Office",
    "backoffice.intro": "Ваш виртуальный офис — это панель, через которую вы управляете участием, сетью и обучением.",
    "backoffice.feature1.title": "Управление контурами",
    "backoffice.feature1.desc": "Просматривайте и активируйте контуры Бронза, Серебро или Золото в соответствии с вашим прогрессом.",
    "backoffice.feature2.title": "Дерево сети",
    "backoffice.feature2.desc": "Проверяйте состояние уровней и участников в реальном времени.",
    "backoffice.feature3.title": "Отчеты в реальном времени",
    "backoffice.feature3.desc": "Прозрачно проверяйте активность, повторные активации и вклады.",
    "backoffice.feature4.title": "Обучение и инструменты",
    "backoffice.feature4.desc": "Получайте доступ к обучающим сессиям, видео и инструментам ИИ для создания цифрового контента.",
    "backoffice.feature5.title": "Управление комиссиями",
    "backoffice.feature5.desc": "Проверяйте баланс в зависимости от статуса, активный или пауза, и управляйте непрерывностью.",
    "backoffice.section1.title": "Прогресс и повторная активация",
    "backoffice.section1.desc1": "Ваш back office показывает временную шкалу с обратным отсчетом до следующей повторной активации. Нужно активироваться каждые 7 дней, чтобы оставаться активным; иначе вы переходите в паузу и получаете только с прямого уровня.",
    "backoffice.section1.desc2": "Полуавтоматическая система резервирует часть вашего вклада и вкладов приглашенных для повторной активации. Так обеспечивается непрерывность и предотвращается потеря уровней.",
    "backoffice.section2.title": "Активация контуров",
    "backoffice.section2.desc1": "В панели можно видеть состояние контуров Бронза, Серебро и Золото. У каждого контура есть кнопка “Restart”, когда период подходит к концу.",
    "backoffice.section2.desc2": "Серебро можно активировать только после завершения цикла Бронза, так же как Золото после Серебра. Активация зависит от вашего прогресса и прогресса спонсора.",
    "backoffice.section3.title": "Мой аккаунт",
    "backoffice.section3.desc1": "В разделе “Мой аккаунт” находятся данные: количество участников, общие вклады, полученные вознаграждения, спонсорская ссылка и код приглашения.",
    "backoffice.section3.desc2": "Используйте эти данные, чтобы отслеживать рост и безопасно делиться ссылкой с новыми участниками.",
    "backoffice.section4.title": "Детали контура",
    "backoffice.section4.desc1": "Детали контура показывают таблицу с вашими уровнями, количеством людей на каждом уровне, общими вкладами и вашим статусом, активный или пауза.",
    "backoffice.section4.desc2": "Этот вид помогает понять, с каких уровней поступают вклады и где можно укрепить сеть.",
    "backoffice.section5.title": "Главное меню",
    "backoffice.section5.desc1": "Главное меню дает доступ к сообществу, academy, маркетинговым инструментам, материалам поддержки, помощи, правовой информации и wallet.",
    "backoffice.section5.desc2": "Изучайте каждый раздел, чтобы максимально использовать доступные ресурсы и развивать личный проект.",

    /* FAQ page */
    "faq.title": "Частые вопросы",
    "faq.q1": "F1 Premium — это инвестиция?",
    "faq.a1": "Нет. F1 Premium — это платформа обучения и участия в среде совместной экономики.",
    "faq.q2": "Деньги зарабатываются автоматически?",
    "faq.a2": "Нет. Нет гарантий дохода и экономических автоматизмов; результаты зависят от вашей активности и сообщества.",
    "faq.q3": "Я завишу от других людей?",
    "faq.a3": "Опыт может зависеть от взаимодействия с другими, но гарантированных результатов нет.",
    "faq.q4": "Обязательно приглашать людей?",
    "faq.a4": "Нет, это не обязательно. Участие добровольное, хотя приглашение людей может поддерживать рост системы.",
    "faq.q5": "Могу ли я потерять свой вклад?",
    "faq.a5": "Да. Участие не гарантирует возврат вклада. Нужно принять риски, связанные с использованием криптовалют.",
    "faq.q6": "F1 Premium — это пирамидальная схема?",
    "faq.a6": "Нет. F1 Premium не определяется как инвестиционная система или финансовая модель; это сообщество совместной экономики, где нет вознаграждения за простое привлечение пользователей.",
    "faq.q7": "Что я получаю при входе?",
    "faq.a7": "Вы получаете активацию в контуре, доступ к обучению, поддержку и сопровождение для развития личного бренда.",
    "faq.q8": "Сколько нужно для начала?",
    "faq.a8": "Бронза активируется с 25 USDT плюс gas; Серебро — с 50 USDT; Золото — со 100 USDT.",
    "faq.q9": "Какой wallet использовать?",
    "faq.a9": "Рекомендуется SafePal, хотя можно использовать и другие совместимые EVM-wallet, например MetaMask.",
    "faq.q10": "Мне сразу нужны 256 человек?",
    "faq.a10": "Нет. Эта цифра — только пример дублирования до семи уровней. Начните с приглашения нескольких человек и растите постепенно.",
    "faq.q11": "Что будет, если я не останусь активным?",
    "faq.a11": "Вы переходите в паузу и получаете только с прямого уровня, пока не восстановите непрерывность.",
    "faq.q12": "Нужно ли продвигать F1 Premium в социальных сетях?",
    "faq.a12": "Речь не о продвижении F1 Premium как такового; обучение сосредоточено на вашем личном бренде и создании разговоров.",
    "faq.q13": "Нужно приглашать двух человек каждую неделю?",
    "faq.a13": "Нет, это не обязательно. Однако дублирование 2x может ускорить рост; стратегия зависит от ваших целей и команды.",
    "faq.q14": "Что если приглашенный мной человек повторно активируется раньше меня?",
    "faq.a14": "Если участник команды активируется раньше вас, он продолжит вносить вклад в систему, но его вклады пойдут в активную вышестоящую структуру. Чтобы получать на всех уровнях, активируйтесь вовремя.",
    "faq.q15": "Нужно платить 25 USDT каждую неделю?",
    "faq.a15": "Нет. Вы делаете только начальный вклад 25 USDT для активации контура Бронза. Последующие повторные активации финансируются автоматически из резерва, поэтому дополнительные средства в Бронзу вносить не нужно.",
    "faq.q16": "Что если я приглашу очень влиятельного человека?",
    "faq.a16": "Приглашение лидеров с видением может ускорить рост всей структуры. Но их повторная активация зависит от их собственного цикла; сопровождайте их, чтобы они оставались активными и разделяли цель сообщества.",
    "faq.q17": "Почему повторная активация полуавтоматическая?",
    "faq.a17": "Смарт-контракт отделяет часть вкладов для повторной активации контура без нового депозита. Процесс полуавтоматический, потому что нужно подтвердить транзакцию повторной активации и сохранить контроль над wallet.",
    "faq.q18": "Что означает депозит повторной активации?",
    "faq.a18": "Депозит повторной активации — это накопленный баланс, используемый для следующей активации. Он финансируется половиной вашего начального вклада и половиной вкладов рефералов, обеспечивая непрерывность цикла.",

    /* Testimonials */
    "testimonials.title": "Отзывы",
    "testimonial1.quote": "Сеть помогла мне узнать больше о блокчейне и развить личный бренд. Сообщество замечательное.",
    "testimonial1.author": "Marta P.",
    "testimonial1.role": "Предпринимательница",
    "testimonial2.quote": "Поддержка и прозрачность системы мотивировали меня продолжать участие каждую неделю.",
    "testimonial2.author": "Carlos G.",
    "testimonial2.role": "Участник",
    "testimonial3.quote": "F1 Premium помогла мне войти в мир web3. Теперь я лучше понимаю, как работают смарт-контракты.",
    "testimonial3.author": "Lucía M.",
    "testimonial3.role": "Участница",
    "testimonial4.quote": "Благодаря обучению и сопровождению я смог создать личный бренд и новые связи.",
    "testimonial4.author": "Daniel R.",
    "testimonial4.role": "Создатель контента",

    /* Legal */
    "legal.title": "Правовая информация и условия",
    "legal.intro": "Это резюме не заменяет полный правовой текст, но объединяет самые важные пункты для пользователей.",
    "legal.item1.title": "Характер платформы",
    "legal.item1.desc": "F1 Premium — цифровая платформа совместной экономики на основе технологии блокчейн. Она не является финансовой организацией и не оказывает инвестиционные, финансово-консультационные или управленческие услуги.",
    "legal.item2.title": "Добровольные вклады",
    "legal.item2.desc": "Участие осуществляется через добровольный вклад, который не является инвестицией и не создает гарантированных экономических прав.",
    "legal.item3.title": "Отсутствие гарантий",
    "legal.item3.desc": "Нет обещания прибыли или гарантированных результатов. Результаты зависят исключительно от индивидуальной активности и коллективной среды.",
    "legal.item4.title": "Использование криптовалют",
    "legal.item4.desc": "Система работает с криптовалютами. Пользователи должны понимать риски, принимать волатильность и использовать wallet самостоятельного хранения. F1 Premium не хранит средства и не может восстановить потерянные активы.",
    "legal.item5.title": "Ответственность пользователя",
    "legal.item5.desc": "Пользователь отвечает за соблюдение законодательства своей страны, налоговое декларирование деятельности и законное, этичное использование платформы.",
    "legal.item6.title": "Запреты",
    "legal.item6.desc": "Запрещено обещать гарантированный доход, вводить в заблуждение относительно характера системы или использовать обманчивые сообщения.",
    "legal.item7.title": "Частые вопросы",
    "legal.item7.desc": "Смотрите раздел Частые вопросы, чтобы узнать больше о нефинансовом характере платформы и вашем участии.",
    "legal.conclusion": "Участие в F1 Premium подразумевает принятие этих условий и личную ответственность за ваши решения.",

    /* About page */
    "about.title": "Что такое F1 Premium?",
    "about.section1.title": "Введение",
    "about.section1.desc1": "F1 Premium — платформа совместной экономики, объединяющая обучение цифровым навыкам и децентрализованную систему участия. Ее цель — помочь вам учиться, создавать и устанавливать связи в новую цифровую эпоху.",
    "about.section1.desc2": "Это не финансовый продукт и не предлагает гарантированной доходности; фокус — на образовании, обмене знаниями и коллективном росте.",
    "about.section1.fig1": "Введение в философию F1 Premium.",
    "about.section1.fig2": "Характер системы: сотрудничество и децентрализация.",
    "about.section2.title": "Структура и работа",
    "about.section2.desc1": "Платформа организована как сеть из семи уровней с дублированием 2x, где каждый участник приглашает других людей, а активность распределяется по фиксированным процентам в трех контурах: Бронза, Серебро и Золото.",
    "about.section2.desc2": "Динамика основана на недельных циклах, которые поддерживают непрерывность. Каждый контур представляет этап: обучение, развитие и закрепление, с вкладами 25, 50 и 100 USDT.",
    "about.section2.fig1": "Представление уровней сети.",
    "about.section2.fig2": "Диаграмма недельных циклов и важности постоянства.",
    "about.section3.title": "Ценности и этика",
    "about.section3.desc1": "F1 Premium поддерживает цифровую грамотность, прозрачность и построение личного бренда. Участники учатся общаться и приносить ценность без обещаний заработка.",
    "about.section3.desc2": "Сообщество руководствуется принципами взаимопомощи, ответственности и долгосрочного видения.",
    "about.section3.item1": "Непрерывное обучение в web3 и блокчейне.",
    "about.section3.item2": "Самостоятельное хранение и финансовая безопасность.",
    "about.section3.item3": "Честная коммуникация без инвестиционных обещаний.",
    "about.section3.item4": "Создание подлинного личного бренда.",
    "about.section4.title": "Заключение",
    "about.section4.desc1": "F1 Premium — это пространство для обучения, связи с людьми со схожими интересами и вывода вашего цифрового присутствия на новый уровень.",
    "about.section4.desc2": "Ваш успех будет зависеть от вовлеченности и постоянных действий внутри сообщества.",

    /* How page extended content */
    "how.network.title": "Дублирование и уровни",
    "how.network.desc1": "Сеть расширяется через дублирование 2x: каждый человек приглашает двух, затем процесс продолжается. Так формируются уровни из 2, 4, 8, 16, 32, 64 и 128 участников.",
    "how.network.desc2": "Распределение вкладов следует заранее установленным процентам, которые отражают коллективную активность.",
    "how.network.image1.caption": "Диаграмма дублирования по уровням.",
    "how.network.image2.caption": "Визуализация полной сети в контуре Золото.",
    "how.circuits.details.title": "Контуры Бронза, Серебро и Золото",
    "how.circuits.details.bronce.desc": "Бронза — начальный этап: вы знакомитесь с системой, вносите 25 USDT и учитесь приглашать и сопровождать других людей.",
    "how.circuits.details.plata.desc": "Серебро — этап развития: вклад увеличивается до 50 USDT, сеть расширяется, а коллективная сила помогает укрепить ваш проект.",
    "how.circuits.details.oro.desc": "Золото — этап закрепления: сеть достигает зрелости и глубины с вкладами 100 USDT.",
    "how.cycles.details.title": "Циклы и повторные активации",
    "how.cycles.details.desc1": "Каждый цикл длится 7 дней. В конце каждого цикла нужно повторно активироваться, чтобы оставаться активным; иначе вы переходите в паузу и получаете только с прямого уровня.",
    "how.cycles.details.desc2": "Повторная активация гарантирует непрерывность и справедливое распределение вкладов. Постоянство важно для использования дублирования.",
    "how.automation.details.title": "Смарт-контракт и автоматизация",
    "how.automation.details.desc1": "Платформа использует смарт-контракт, который регистрирует вклады, распределяет проценты и автоматически обновляет статусы.",
    "how.automation.details.desc2": "Хотя контракт управляет правилами, ценность создается человеческими действиями: обменом, сопровождением и обучением.",
    "how.participation.details.title": "Роль и план участника",
    "how.participation.details.desc1": "Участник изучает модель, применяет инструменты, делится ею с другими и оказывает поддержку.",
    "how.participation.details.desc2": "Предложенный план: первые 7 дней — изучение системы и настройка wallet; с 8-го по 21-й день — приглашение и сопровождение первых контактов; после 30-го дня — оценка результатов, обмен достижениями и развитие личного бренда.",

    /* Footer */
    "footer.text": "© 2026 F1 Premium. Все права защищены."
  });

  const walletCaptions = {
    it: [
      {
        title: "Installazione e configurazione per l'uso con F1 Premium",
        items: [
          "Scarica e installa l'app SafePal Wallet.",
          "Seleziona: crea un nuovo wallet."
        ]
      },
      {
        items: [
          { value: 3, text: "Crea una password di sei cifre e confermala." },
          "Seleziona: esegui il backup."
        ]
      },
      {
        items: [
          { value: 5, text: "Seleziona il backup manuale." },
          "Attiva le tre opzioni nella parte inferiore dello schermo, conferma e inserisci la password quando richiesta."
        ]
      },
      {
        items: [
          { value: 7, text: "Scrivi le dodici parole su un foglio, conservale sempre in un luogo sicuro e premi “Avanti”." },
          "Seleziona le parole nello stesso ordine in cui le hai copiate e tocca “Verifica”."
        ]
      },
      {
        items: [
          { value: 11, text: "In alto, accanto alla lente, scrivi “op” e seleziona in basso “BNB(opBNB)”." },
          "In alto, accanto alla lente, scrivi “usdt” e seleziona in basso “USDT(opBNB)”."
        ]
      },
      {
        items: [
          { value: 13, text: "Nella schermata “Wallet”, selezionata in basso, vedrai una schermata come quella dell'immagine, con le due monete BNB e USDT della rete opBNB." }
        ]
      },
      {
        items: [
          { value: 14, text: "Ora devi ricaricare USDT e BNB per poter accedere a F1 Premium." },
          "Puoi acquistarli con altre applicazioni di gestione di criptovalute oppure riceverli dalla persona che ti invita. Questo accordo è personale tra voi."
        ]
      },
      {
        items: [
          { value: 15, text: "Per ricevere USDT, seleziona USDT(opBNB) nel wallet." },
          "Tocca “Ricevi” e copia l'indirizzo. Invia solo USDT sulla rete opBNB a quell'indirizzo."
        ]
      },
      {
        items: [
          { value: 16, text: "Per inviare USDT, seleziona USDT(opBNB), premi “Invia” e incolla l'indirizzo del destinatario." },
          "Verifica rete, importo e indirizzo prima di confermare. Le transazioni blockchain non possono essere annullate."
        ]
      },
      {
        items: [
          { value: 17, text: "Mantieni una piccola quantità di BNB(opBNB) per pagare le commissioni di rete." },
          "Non condividere mai le 12 parole, la password o le chiavi private. Sei l'unico responsabile della custodia dei tuoi fondi."
        ]
      }
    ],
    ru: [
      {
        title: "Установка и настройка для использования с F1 Premium",
        items: [
          "Скачайте и установите приложение SafePal Wallet.",
          "Выберите: создать новый wallet."
        ]
      },
      {
        items: [
          { value: 3, text: "Создайте пароль из шести цифр и подтвердите его." },
          "Выберите: создать резервную копию."
        ]
      },
      {
        items: [
          { value: 5, text: "Выберите ручное резервное копирование." },
          "Активируйте три опции в нижней части экрана, подтвердите и введите пароль, когда он будет запрошен."
        ]
      },
      {
        items: [
          { value: 7, text: "Запишите двенадцать слов на бумаге, храните их всегда в надежном месте и нажмите “Далее”." },
          "Выберите слова в том же порядке, в котором вы их записали, и нажмите “Проверить”."
        ]
      },
      {
        items: [
          { value: 11, text: "Вверху, рядом с лупой, введите “op” и ниже выберите “BNB(opBNB)”." },
          "Вверху, рядом с лупой, введите “usdt” и ниже выберите “USDT(opBNB)”."
        ]
      },
      {
        items: [
          { value: 13, text: "На экране “Wallet”, выбранном внизу, появится экран как на изображении, с двумя монетами BNB и USDT в сети opBNB." }
        ]
      },
      {
        items: [
          { value: 14, text: "Теперь нужно пополнить USDT и BNB, чтобы получить доступ к F1 Premium." },
          "Вы можете купить их через другие приложения для управления криптовалютами или получить от человека, который вас приглашает. Это личная договоренность между вами."
        ]
      },
      {
        items: [
          { value: 15, text: "Чтобы получить USDT, выберите USDT(opBNB) в wallet." },
          "Нажмите “Получить” и скопируйте адрес. Отправляйте на этот адрес только USDT в сети opBNB."
        ]
      },
      {
        items: [
          { value: 16, text: "Чтобы отправить USDT, выберите USDT(opBNB), нажмите “Отправить” и вставьте адрес получателя." },
          "Проверьте сеть, сумму и адрес перед подтверждением. Блокчейн-транзакции нельзя отменить."
        ]
      },
      {
        items: [
          { value: 17, text: "Оставьте небольшое количество BNB(opBNB) для оплаты сетевых комиссий." },
          "Никогда не передавайте 12 слов, пароль или приватные ключи. Только вы отвечаете за хранение своих средств."
        ]
      }
    ]
  };

  function renderWalletCaptionBlock(lang, caption) {
    const title = caption.title ? '<p class="wallet-caption-title">' + caption.title + "</p>" : "";
    const items = (caption.items || []).map(function (item) {
      if (typeof item === "string") return "<li>" + item + "</li>";
      const value = item.value ? ' value="' + item.value + '"' : "";
      return "<li" + value + ">" + item.text + "</li>";
    }).join("");
    return '<div class="wallet-caption-lang" data-lang="' + lang + '" hidden>' +
      title +
      '<ol class="wallet-caption-list">' + items + "</ol>" +
      "</div>";
  }

  function injectWalletCaptions() {
    document.querySelectorAll(".wallet-extra-captions").forEach(function (box, index) {
      ["it", "ru"].forEach(function (lang) {
        if (!box.querySelector('.wallet-caption-lang[data-lang="' + lang + '"]') && walletCaptions[lang] && walletCaptions[lang][index]) {
          box.insertAdjacentHTML("beforeend", renderWalletCaptionBlock(lang, walletCaptions[lang][index]));
        }
      });
    });
  }

  function syncWalletCaptions() {
    const lang = (typeof currentLang !== "undefined" ? currentLang : localStorage.getItem("f1Lang")) || "es";

    document.querySelectorAll(".wallet-extra-captions").forEach(function (box) {
      let visibleBlock = null;
      box.querySelectorAll(".wallet-caption-lang").forEach(function (block) {
        const isActive = block.getAttribute("data-lang") === lang;
        block.hidden = !isActive;
        if (isActive) visibleBlock = block;
      });
      box.hidden = !visibleBlock;
    });
  }

  function runPatch() {
    ensureLanguageOptions();
    injectWalletCaptions();
    syncWalletCaptions();

    if (typeof currentLang !== "undefined" && (currentLang === "it" || currentLang === "ru") && typeof applyTranslations === "function") {
      applyTranslations();
      ensureLanguageOptions();
      syncWalletCaptions();
    }
  }

  const originalSetLanguage = typeof setLanguage === "function" ? setLanguage : null;
  if (originalSetLanguage && !window.__f1ItRuSetLanguagePatched) {
    window.__f1ItRuSetLanguagePatched = true;
    window.setLanguage = function (lang) {
      originalSetLanguage(lang);
      ensureLanguageOptions();
      injectWalletCaptions();
      syncWalletCaptions();
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runPatch);
  } else {
    runPatch();
  }
})();
  document.documentElement.lang = 'ro';

  if (typeof currentLang !== 'undefined' && currentLang === 'ro' && typeof applyTranslations === 'function') {
    applyTranslations();
  }
})();
