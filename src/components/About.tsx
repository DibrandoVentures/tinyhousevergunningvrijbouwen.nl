import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Scale, Home, Compass } from "lucide-react";
export const About = () => {
  return <section id="vergunning" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* When is a permit smarter */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            Wanneer is een vergunning slimmer?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Ironisch genoeg is "geen vergunning willen" soms de duurste route.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Aan de rand van vergunningsvrij</h3>
              </div>
              <p className="text-muted-foreground">
                Je wilt nét iets hoger, groter of functioneler dan de standaardgrenzen toestaan. Een vergunning geeft dan zekerheid.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Extra woning voor de lange termijn</h3>
              </div>
              <p className="text-muted-foreground">
                Denk aan een familiewoning of generatiewoning die je jaren wilt gebruiken. Dan is een helder vergund plan vaak stabieler.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Zekerheid voor hypotheek & verzekering</h3>
              </div>
              <p className="text-muted-foreground">
                Kopers, banken en verzekeraars worden blij van duidelijke, officiële status. Een grijs gebied kan in de toekomst tegen je werken.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Kritische buurt</h3>
              </div>
              <p className="text-muted-foreground">
                Als je weet dat buren snel klagen, is het veiliger om een traject te doorlopen waarbij de gemeente het plan expliciet heeft beoordeeld.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Link to vergunning site */}
        <div className="text-center mb-20">
          <p className="text-lg text-muted-foreground mb-4">
            Wil je snappen hoe een echte vergunning werkt, wat er wordt getoetst en hoe je dat aanpakt?
          </p>
          <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold shadow-elegant hover:shadow-glow transition-all duration-300">
            → tinyhousevergunning.nl is jouw logische vervolgstap
          </a>
        </div>

        {/* Smart Strategy Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Slimme strategie: vergunningsvrij denken met gezond verstand
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-8">
            In plaats van alleen te vragen "Kan het vergunningsvrij?", kun je beter denken in strategische stappen:
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Begin bij je ideale gebruik</h4>
                <p className="text-muted-foreground">Voor wie is het tiny house? Hoe lang? Voor welk doel?</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Check de bestemmings- en vergunningsruimte</h4>
                <p className="text-muted-foreground">Kan er iets als bijgebouw? Is er speelruimte als familiewoning? Is mantelzorg een optie?</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Onderzoek wat écht vergunningsvrij kan</h4>
                <p className="text-muted-foreground">Gebruik de checklist hierboven als grove filter.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Leg je plan voor aan de gemeente</h4>
                <p className="text-muted-foreground">Kort, concreet, met schets. Vraag niet in het algemeen, maar over jouw specifieke situatie.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Kies bewust</h4>
                <p className="text-muted-foreground">Soms is het beter om iets in te leveren zodat je volledig binnen vergunningsvrij blijft. Soms is het beter om voor je ideale ontwerp te gaan mét vergunning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Network of sites */}
        <div className="max-w-5xl mx-auto">
          
          <p className="text-lg text-muted-foreground text-center mb-8">
            Om bezoekers echt verder te helpen, krijgt elke site een eigen rol:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-primary/10 border border-primary/30 shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">tinyhousevergunningvrijbouwen.nl</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Deze site:</strong> Praktische gids & checklist voor iedereen die zóveel mogelijk vergunningsvrij wil doen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <a href="https://tinyhousevergunningsvrij.nl" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors mb-2 block">
                  tinyhousevergunningsvrij.nl →
                </a>
                <p className="text-sm text-muted-foreground">
                  Uitleg-site: begrippen, soorten situaties, voorbeelden van wat wel/niet vergunningsvrij valt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors mb-2 block">
                  tinyhousevergunning.nl →
                </a>
                <p className="text-sm text-muted-foreground">
                  Focus op de vergunning-route: wanneer nodig, hoe aanvragen, welke documenten, tips.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <a href="https://tinyhousefundament.nl" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors mb-2 block">
                  tinyhousefundament.nl →
                </a>
                <p className="text-sm text-muted-foreground">
                  Alles rond funderingen: soorten, wat past bij vergunningsvrij bouwen, praktische keuzes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <a href="https://tinyhousescompleet.nl" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors mb-2 block">
                  tinyhousescompleet.nl →
                </a>
                <p className="text-sm text-muted-foreground">
                  Het overkoepelende overzicht: stappenplan van droom tot oplevering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};