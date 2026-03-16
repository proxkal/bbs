import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BBSLogo from './BBSLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu mobile lors d'un changement de route ou d'un clic sur un lien d'ancrage
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Galeries', path: '/galeries' },
    { name: 'Projets', path: '/#projets', isAnchor: true },
    { name: 'Services', path: '/#services', isAnchor: true },
    { name: 'Partenaires', path: '/#clients', isAnchor: true },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <BBSLogo className="scale-75 md:scale-90" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a key={link.name} href={link.path} className="font-medium text-slate-900 hover:text-[#007A7A] transition-colors">{link.name}</a>
              ) : (
                <NavLink key={link.name} to={link.path} className="font-medium text-slate-900 hover:text-[#007A7A] transition-colors">{link.name}</NavLink>
              )
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#007A7A] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-[#005f5f] transition-all duration-300 inline-block"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button 
              onClick={toggleMenu}
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a 
                key={link.name} 
                href={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 hover:text-[#007A7A] transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 hover:text-[#007A7A] transition-colors"
              >
                {link.name}
              </NavLink>
            )
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center bg-[#007A7A] text-white font-black py-4 rounded-lg shadow-xl uppercase tracking-widest"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
