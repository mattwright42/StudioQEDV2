import { Link, useLocation, useNavigate } from 'react-router-dom';
import QEDIcon from '../img/QED_icon.png';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <footer className="bg-[#CBDB2A] border-t border-[#5F5644]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/">
            <img src={QEDIcon} alt="QED" className="h-12" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/services" className="text-[#5F5644] hover:text-white transition-colors duration-200 text-sm">
              Services
            </Link>
            <Link to="/case-studies" className="text-[#5F5644] hover:text-white transition-colors duration-200 text-sm">
              Case Studies
            </Link>
            <Link to="/about" className="text-[#5F5644] hover:text-white transition-colors duration-200 text-sm">
              About
            </Link>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="text-[#5F5644] hover:text-white transition-colors duration-200 text-sm"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-[#5F5644] mt-8 pt-8 text-center">
          <p className="text-[#5F5644] text-sm">
            All work &copy; {new Date().getFullYear()} Studio QED, Inc. All trademarks are the properties of their respective holders.
          </p>
        </div>
      </div>
    </footer>
  );
};
