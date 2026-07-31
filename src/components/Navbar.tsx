import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qedIcon from '../img/QED_icon.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to hash after navigation to home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const navItems = [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact', to: '/#contact', isHash: true },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const isActive = (to: string) => {
    if (to.startsWith('/#')) return false;
    return location.pathname === to;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{
        background: 'linear-gradient(135deg, #A8C837 0%, #CBDB2A 50%, #8FB62E 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={qedIcon} alt="QED" className="h-12" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isHash ? (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={handleContactClick}
                  className="text-[#5F5644] hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(item.to)
                      ? 'text-white underline underline-offset-4'
                      : 'text-[#5F5644] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden p-2 text-[#5F5644]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#5F5644]/20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) =>
              item.isHash ? (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={handleContactClick}
                  className="block text-[#5F5644] hover:text-white transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-colors duration-200 font-medium py-2 ${
                    isActive(item.to)
                      ? 'text-white underline underline-offset-4'
                      : 'text-[#5F5644] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
