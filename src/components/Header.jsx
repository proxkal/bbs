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
    { name: 'Missions', path: '/missions' },
    { name: 'Projets', path: '/#projets', isAnchor: true },
    { name: 'Services', path: '/#services', isAnchor: true },
    { name: 'Partenaires', path: '/#clients', isAnchor: true },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
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
            <div className="md:hidden">
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
      </header>

      {/* Mobile Menu Overlay & Drawer - Placé en dehors du header sticky */}
      <div 
        className={`fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full bg-white">
            {/* Header du drawer */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-white">
              <div className="overflow-hidden">
                <BBSLogo className="scale-75 origin-left" />
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Liens de navigation */}
            <nav className="flex-1 px-6 py-8 flex flex-col space-y-6 bg-white overflow-y-auto">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a 
                    key={link.name} 
                    href={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-black uppercase italic tracking-tighter text-slate-900 hover:text-[#007A7A] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-1 bg-[#007A7A] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-black uppercase italic tracking-tighter text-slate-900 hover:text-[#007A7A] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-1 bg-[#007A7A] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </NavLink>
                )
              ))}
            </nav>

            {/* Footer du drawer */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-center bg-[#007A7A] text-white font-black py-4 rounded-lg shadow-lg uppercase tracking-widest text-sm"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
