import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Vraag over vergunningsvrij tiny house bouwen');
    const body = encodeURIComponent(`
Naam: ${formData.name}
E-mail: ${formData.email}

Bericht:
${formData.message}
    `);
    window.location.href = `mailto:info@tinyhousevergunningvrijbouwen.nl?subject=${subject}&body=${body}`;
  };
  return <section id="contact" className="py-24 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            Volgende stap: van idee naar concreet plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wil je nu doorpakken? Bekijk de andere sites in ons netwerk of neem contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Handige links</h3>
            
            <a href="https://tinyhousevergunningsvrij.nl" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="items-center justify-between flex flex-col">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Check de vergunningsvrije ruimte</h4>
                      <p className="text-muted-foreground text-sm">tinyhousevergunningsvrij.nl</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Snap wanneer een vergunning meer zekerheid geeft</h4>
                      <p className="text-muted-foreground text-sm">tinyhousevergunning.nl</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://tinyhousefundament.nl" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Denk na over het juiste fundament</h4>
                      <p className="text-muted-foreground text-sm">tinyhousefundament.nl</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://tinyhousescompleet.nl" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Zet alles samen in een helder stappenplan</h4>
                      <p className="text-muted-foreground text-sm">tinyhousescompleet.nl</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-xl p-6 text-primary-foreground mt-8">
              <h4 className="text-lg font-bold mb-3">Onthoud:</h4>
              <p className="text-primary-foreground/90">
                Vergunningsvrij bouwen is geen truc om onder regels uit te komen, maar een manier om slim en binnen de kaders te bouwen. Hoe beter jij je voorbereidt, hoe kleiner de kans dat je later terug moet bouwen, aanpassen of slopen.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>;
};