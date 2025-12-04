import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Briefcase, MapPin, Ruler, Building } from "lucide-react";
export const Services = () => {
  return <section id="gids" className="py-24 bg-gradient-subtle relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section 1: Wat betekent vergunningsvrij */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent pb-[5px]">
            Wat betekent vergunningsvrij bouwen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Bij vergunningsvrij bouwen denken veel mensen: "Als het onder een bepaald aantal m² blijft, mag het altijd." Zo simpel is het helaas niet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Vergunningsvrij bouwen betekent meestal:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <p className="text-lg text-muted-foreground">Je hoeft geen omgevingsvergunning voor bouwen aan te vragen</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <p className="text-lg text-muted-foreground">Maar je moet wél aan een rijtje voorwaarden voldoen (plaats, afmetingen, gebruik, hoogte, enz.)</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <p className="text-lg text-muted-foreground">En je blijft gebonden aan andere regels (bijv. veiligheid, burenrecht, bestemmingsplan)</p>
                </li>
              </ul>

              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-bold text-foreground mb-3">Belangrijk om te snappen:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Vergunningsvrij gaat vaak over <strong>bijbehorende bouwwerken</strong> (bijgebouwen, tuinkantoren, uitbreidingen)</li>
                  <li>• Een volwaardige nieuwe woning bouwen is <strong>zelden vergunningsvrij</strong></li>
                  <li>• De gemeente mag ingrijpen als je buiten de regels gaat, óók als je geen vergunning nodig had</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Welke plannen komen in beeld */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            Welke tiny house-plannen komen in beeld?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In de praktijk zie je drie typen plannen terugkomen die in de buurt van vergunningsvrij bouwen kunnen komen:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Type 1 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-6">
              <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground text-center">Tiny house als bijgebouw</h3>
              <p className="text-muted-foreground text-center">
                Een klein huisje in de achtertuin, gekoppeld aan de hoofdwoning. Soms gebruikt als logeerplek, studio, "granny flat" of semi-zelfstandige ruimte.
              </p>
            </CardContent>
          </Card>

          {/* Type 2 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-soft">
            <CardContent className="p-6">
              <div className="bg-primary-glow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground text-center">Familiewoning op eigen erf</h3>
              <p className="text-muted-foreground text-center">
                Een compacte woning voor je ouders of (volwassen) kind op hetzelfde perceel. In sommige situaties wordt dit onder bepaalde voorwaarden als bijbehorend bouwwerk gezien.
              </p>
            </CardContent>
          </Card>

          {/* Type 3 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-6">
              <div className="bg-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <Briefcase className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground text-center">Verlengde van je woning</h3>
              <p className="text-muted-foreground text-center">
                Denk aan: kantoor aan huis, werkruimte, hobbyruimte die later (deels) als slaapruimte wordt gebruikt.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Factors that matter */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Of iets vergunningsvrij kan, hangt o.a. af van:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Ligt het in het achtererfgebied?</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Hoeveel heb je al bebouwd op je erf?</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Wat is de hoogte en het aantal bouwlagen?</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Is het echt ondergeschikt aan de hoofdwoning?</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Links to other sites */}
        <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 max-w-4xl mx-auto text-center shadow-elegant">
          <p className="text-lg mb-4">
            De juridische kaders en definities kun je straks uitgediept terugvinden op:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="https://tinyhousevergunningsvrij.nl" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors">
              → tinyhousevergunningsvrij.nl
            </a>
            <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors">
              → tinyhousevergunning.nl
            </a>
          </div>
          <p className="text-sm opacity-90">
            Hier op tinyhousevergunningvrijbouwen.nl draait het om de praktische vertaling: hoe ga je er strategisch mee om?
          </p>
        </div>
      </div>
    </section>;
};