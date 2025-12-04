import { useNavigate, useLocation } from "react-router-dom";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };
  return <footer className="bg-[#374151] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🏡</span>
              <span className="font-bold text-lg">Tiny House Vergunningsvrij</span>
            </div>
            <p className="text-gray-300 mb-4">
              Praktische gids voor vergunningsvrij tiny house bouwen. Van checklist tot strategie.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Op deze site</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#gids" onClick={e => handleNavClick('#gids', e)} className="hover:text-primary transition-colors cursor-pointer">
                  Praktische Gids
                </a>
              </li>
              <li>
                <a href="#misverstanden" onClick={e => handleNavClick('#misverstanden', e)} className="hover:text-primary transition-colors cursor-pointer">
                  Veelgemaakte Misverstanden
                </a>
              </li>
              <li>
                <a href="#checklist" onClick={e => handleNavClick('#checklist', e)} className="hover:text-primary transition-colors cursor-pointer">
                  Checklist
                </a>
              </li>
              <li>
                <a href="#faq" onClick={e => handleNavClick('#faq', e)} className="hover:text-primary transition-colors cursor-pointer">
                  Veelgestelde Vragen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ons netwerk</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="https://tinyhousevergunningsvrij.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  tinyhousevergunningsvrij.nl
                </a>
              </li>
              <li>
                <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  tinyhousevergunning.nl
                </a>
              </li>
              <li>
                <a href="https://tinyhousefundament.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  tinyhousefundament.nl
                </a>
              </li>
              <li>
                <a href="https://tinyhousescompleet.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  tinyhousescompleet.nl
                </a>
              </li>
            </ul>
          </div>

          <div>
            
            <ul className="space-y-2 text-gray-300">
              <li>
                
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacybeleid
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} Tiny House Vergunningsvrij Bouwen. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-500 text-sm">
            Let op: Dit is een praktische uitleg, geen officieel juridisch advies. Regels verschillen per gemeente.
          </p>
        </div>
      </div>
    </footer>;
};