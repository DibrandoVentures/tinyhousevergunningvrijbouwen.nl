import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const SeriesATimeTrap = () => {
  return (
    <section id="misverstanden" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            Veelgemaakte misverstanden
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Voordat we naar de checklist gaan, eerst even de grootste valkuilen die je móét kennen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Misverstand 1 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-destructive/30 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold text-foreground">Misverstand 1</h3>
              </div>
              <p className="text-lg font-bold text-destructive mb-4">"Als het klein is, mag het altijd"</p>
              <p className="text-muted-foreground">
                Nee. Een klein gebouw op de verkeerde plek (voortuin, buiten het bebouwingsvlak, verkeerde bestemming) kan alsnog problemen opleveren.
              </p>
            </CardContent>
          </Card>

          {/* Misverstand 2 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-destructive/30 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold text-foreground">Misverstand 2</h3>
              </div>
              <p className="text-lg font-bold text-destructive mb-4">"Zonder vergunning = zonder regels"</p>
              <p className="text-muted-foreground mb-4">
                Ook vergunningsvrije bouwwerken moeten voldoen aan:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Veiligheid</li>
                <li>• Bouwkundige eisen (afhankelijk van gebruik)</li>
                <li>• Burenrecht (bijv. geen ramen direct in erfgrens)</li>
                <li>• Regels uit het omgevingsplan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Misverstand 3 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-destructive/30 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold text-foreground">Misverstand 3</h3>
              </div>
              <p className="text-lg font-bold text-destructive mb-4">"De gemeente zei aan de telefoon dat het wel mocht"</p>
              <p className="text-muted-foreground mb-4">
                Een kort telefoongesprek is geen juridische garantie. Ambtenaren denken vaak mee, maar een mondelinge indicatie beschermt je niet als er later handhaving volgt.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-foreground">
                  <strong>Tip:</strong> Vraag om een bevestiging per mail, of verwijs in je eigen mail naar het gesprek en vraag of ze dat willen bevestigen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Misverstand 4 */}
          <Card className="bg-card/80 backdrop-blur-sm border border-destructive/30 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold text-foreground">Misverstand 4</h3>
              </div>
              <p className="text-lg font-bold text-destructive mb-4">"Ik zet er gewoon geen keuken in, dan is het geen woning"</p>
              <p className="text-muted-foreground mb-4">
                Veel mensen proberen hun tiny house te labelen als "tuinhuis" of "kantoor", maar gebruiken het in de praktijk als woning.
              </p>
              <p className="text-muted-foreground mb-4">
                Gemeenten kijken niet alleen naar je tekening, maar ook naar:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hoe het bouwwerk feitelijk wordt gebruikt</li>
                <li>• Of er sprake is van permanente bewoning</li>
                <li>• Of de situatie past bij het omgevingsplan</li>
              </ul>
              <div className="bg-destructive/10 rounded-lg p-4 mt-4 border border-destructive/20">
                <p className="text-sm font-medium text-destructive">
                  Schijnconstructies kunnen later voor flinke problemen zorgen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
