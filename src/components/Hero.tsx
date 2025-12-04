import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent leading-tight animate-fade-in">
            Vergunningsvrij tiny house bouwen: zo pak je het slim aan
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-5xl mx-auto leading-relaxed font-medium">
            Veel mensen willen een tiny house bouwen zonder gedoe met dikke dossiers en lange wachttijden. Het klinkt ideaal: vergunningsvrij bouwen, direct aan de slag in je tuin of op je erf.
          </p>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border border-border/50 shadow-soft">
            <p className="text-lg text-foreground font-bold mb-2">
              Maar vergunningsvrij betekent niet:
            </p>
            <p className="text-xl text-destructive font-bold italic">
              "Doe maar wat, er zijn geen regels."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground text-xl px-12 py-8 rounded-2xl shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 group font-bold"
              onClick={() => {
                const element = document.querySelector('#checklist');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Bekijk de Checklist
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-12 py-8 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group font-bold backdrop-blur-sm bg-card/50"
              onClick={() => {
                const element = document.querySelector('#gids');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FileCheck className="mr-3 group-hover:scale-125 transition-transform duration-300" />
              Lees de Praktische Gids
            </Button>
          </div>

          {/* What you'll learn */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-border/50 shadow-soft">
            <h2 className="text-2xl font-bold mb-8 text-foreground text-center">Op deze pagina krijg je een praktische gids:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-muted-foreground">Wat vergunningsvrij bouwen wél en níet betekent</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-muted-foreground">In welke situaties een tiny house soms vergunningsvrij kan</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-muted-foreground">Welke valkuilen je móét kennen</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-muted-foreground">Een checklist om achteraf problemen te voorkomen</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-muted-foreground">Wanneer het juist slimmer is om toch een vergunning aan te vragen</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-primary/10 rounded-2xl p-6 max-w-3xl mx-auto border border-primary/20">
            <p className="text-muted-foreground text-sm">
              <span className="font-bold text-foreground">ℹ️ Let op:</span> Dit is een praktische uitleg in gewone taal. Regels verschillen per gemeente en veranderen in de tijd. Zie het als een startpunt, geen officieel juridisch advies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
