import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Ruler, Building, FileText, MessageSquare, FolderOpen } from "lucide-react";

export const ROICalculator = () => {
  return (
    <section id="checklist" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            Checklist: toets je tiny house-plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Gebruik onderstaande checklist als grove eerste schifting. Kun je op veel vragen "nee" of "twijfel" antwoorden? Dan is het meestal veiliger om richting een vergunningsaanvraag te denken.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Stap 1 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-elegant">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">Stap 1</span>
                  <h3 className="text-2xl font-bold text-foreground">Ligging op het erf</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Staat je tiny house in het achtererfgebied (dus niet in de voortuin)?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Respecteer je de minimale afstand tot de voorgevel van het hoofdgebouw (als relevant)?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Komt het niet óp of té dicht tegen de openbare ruimte te staan?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stap 2 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-elegant">
                  <Ruler className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">Stap 2</span>
                  <h3 className="text-2xl font-bold text-foreground">Bebouwd oppervlak</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Weet je hoeveel m² van je erf nu al is bebouwd (schuren, aanbouwen, garage, overkapping)?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Blijf je met je tiny house binnen de maximale bebouwingsoppervlakte die is toegestaan als bijbehorend bouwwerk?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Heb je dit écht uitgerekend en niet "op het oog" geschat?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stap 3 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-elegant">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">Stap 3</span>
                  <h3 className="text-2xl font-bold text-foreground">Hoogte en bouwlagen</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Blijf je binnen de maximale hoogte voor vergunningsvrije bijgebouwen?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Is het tiny house gelijkvloers of wordt het een volwaardige extra bouwlaag?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Heb je rekening gehouden met dakvorm (nokhoogte) en niet alleen de goothoogte?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stap 4 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-elegant">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">Stap 4</span>
                  <h3 className="text-2xl font-bold text-foreground">Gebruik en functie</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Kun je het tiny house in tekeningen en omschrijving nog steeds onderbrengen als "bijgebouw" dat ondergeschikt is aan de hoofdwoning?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Is het echt bedoeld als aanvulling (logeren, werken, familie dichtbij), en niet als volledig losstaande extra woning voor willekeurige verhuur?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Past het gebruik binnen de bestemming van de grond?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stap 5 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-elegant">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">Stap 5</span>
                  <h3 className="text-2xl font-bold text-foreground">Overleg met de gemeente</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Heb je het plan in grote lijnen voorgelegd aan de gemeente (bij voorkeur per mail)?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Heb je gevraagd of zij jouw idee zien als iets dat binnen de vergunningsvrije regels zou kúnnen vallen?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Heb je hun reactie schriftelijk vastgelegd of laten bevestigen?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stap 6 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-elegant">
                  <FolderOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">Stap 6</span>
                  <h3 className="text-2xl font-bold text-foreground">Documenteer alles</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Zijn er eenvoudige tekeningen van plattegrond, aanzichten en situatietekening?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Bewaar je e-mails, schetsen en berekeningen netjes in één map (ook digitaal)?</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Kun je achteraf laten zien dat je te goeder trouw hebt gehandeld en de regels serieus hebt genomen?</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 text-center shadow-elegant">
            <p className="text-xl font-bold">
              Hoe meer vinkjes je kunt zetten, hoe groter de kans dat je tiny house-plan op een verantwoorde manier richting vergunningsvrij bouwen kan worden gebracht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
