import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export const FAQ = () => {
  const faqs = [{
    question: "Wat betekent vergunningsvrij tiny house bouwen precies?",
    answer: "Vergunningsvrij bouwen betekent dat je geen omgevingsvergunning voor bouwen hoeft aan te vragen. Je moet wél voldoen aan specifieke voorwaarden zoals plaats (achtererfgebied), afmetingen, hoogte en gebruik. Je blijft ook gebonden aan andere regels zoals veiligheid, burenrecht en het bestemmingsplan."
  }, {
    question: "Kan elk tiny house vergunningsvrij worden gebouwd?",
    answer: "Nee, niet elk tiny house kan vergunningsvrij worden gebouwd. Een volwaardige nieuwe woning bouwen is zelden vergunningsvrij. Vergunningsvrij gaat vaak over bijbehorende bouwwerken zoals bijgebouwen, tuinkantoren of uitbreidingen die ondergeschikt zijn aan de hoofdwoning."
  }, {
    question: "Wat is het achtererfgebied?",
    answer: "Het achtererfgebied is het deel van je erf dat achter de voorgevelrooilijn van je woning ligt. Dit is belangrijk omdat vergunningsvrije bijgebouwen meestal alleen in het achtererfgebied mogen worden geplaatst, niet in de voortuin of aan de straatzijde."
  }, {
    question: "Hoeveel m² mag ik vergunningsvrij bouwen?",
    answer: "Dit hangt af van de grootte van je erf en hoeveel je al hebt bebouwd. Er zijn maximale bebouwingspercentages en oppervlaktes die verschillen per situatie. Het is belangrijk om dit écht uit te rekenen en niet 'op het oog' te schatten. Check altijd de specifieke regels in jouw gemeente."
  }, {
    question: "Mag ik een tiny house als woning gebruiken zonder vergunning?",
    answer: "Gemeenten kijken niet alleen naar je tekening, maar ook naar hoe het bouwwerk feitelijk wordt gebruikt. Als je een tiny house labelt als 'tuinhuis' maar het gebruikt als woning, kan dit voor problemen zorgen. Het gebruik moet passen bij de bestemming van de grond en de status als bijgebouw."
  }, {
    question: "Wat als de gemeente telefonisch zegt dat het mag?",
    answer: "Een telefoongesprek is geen juridische garantie. Vraag altijd om een bevestiging per mail, of stuur zelf een mail waarin je het gesprek samenvat en vraag of ze dat willen bevestigen. Zo heb je iets schriftelijks voor het geval er later vragen komen."
  }, {
    question: "Wanneer is het slimmer om toch een vergunning aan te vragen?",
    answer: "Een vergunning kan slimmer zijn wanneer je: aan de rand van de vergunningsvrije ruimte zit, een extra woning voor de lange termijn wilt, zekerheid nodig hebt richting hypotheek/verzekering/verkoop, of in een buurt woont waar buren snel klagen."
  }, {
    question: "Wat zijn de risico's van vergunningsvrij bouwen?",
    answer: "Als je niet aan alle voorwaarden voldoet, kan de gemeente handhavend optreden. Dit kan betekenen dat je moet aanpassen, slopen of alsnog een vergunning moet aanvragen. Daarom is het zo belangrijk om vooraf goed te checken of je écht binnen de regels valt."
  }, {
    question: "Moet ik de gemeente informeren over mijn bouwplan?",
    answer: "Formeel niet bij vergunningsvrij bouwen, maar het is wel slim. Leg je plan in grote lijnen voor aan de gemeente (bij voorkeur per mail), vraag of zij het zien als iets dat binnen de vergunningsvrije regels valt, en bewaar hun reactie. Zo voorkom je verrassingen achteraf."
  }, {
    question: "Waar vind ik meer informatie over de specifieke regels?",
    answer: "Voor juridische kaders en definities kun je terecht op tinyhousevergunningsvrij.nl. Voor informatie over het vergunningenproces: tinyhousevergunning.nl. Voor funderingsopties: tinyhousefundament.nl. En voor een compleet overzicht van droom tot oplevering: tinyhousescompleet.nl."
  }];
  return <section id="faq" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            Veelgestelde Vragen
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        
      </div>
    </section>;
};