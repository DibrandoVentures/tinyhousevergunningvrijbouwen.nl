import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { label: "Praktische Gids", href: "#gids" },
    { label: "Misverstanden", href: "#misverstanden" },
    { label: "Checklist", href: "#checklist" },
    { label: "Vergunning?", href: "#vergunning" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-3 text-center relative">
        <p className="text-sm md:text-base font-medium">
          Vergunningsvrij bouwen? Check eerst de voorwaarden →{' '}
          <a 
            href="#checklist" 
            onClick={(e) => handleNavClick('#checklist', e)}
            className="underline font-bold hover:text-background transition-colors cursor-pointer"
          >
            Bekijk Checklist
          </a>
        </p>
      </div>

      <header className="fixed top-12 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl">🏡</span>
                <span className="font-bold text-foreground text-lg hidden sm:block">Tiny House Vergunningsvrij</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                onClick={() => handleNavClick('#checklist')}
              >
                Naar Checklist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              {menuItems.map((item) => (
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-3 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="block py-3 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="mt-6">
                <Button 
                  className="bg-gradient-primary text-primary-foreground w-full"
                  onClick={() => {
                    handleNavClick('#checklist');
                    setIsMenuOpen(false);
                  }}
                >
                  Naar Checklist
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
