import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BBSLogo from './BBSLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BBSLogo className="scale-75 md:scale-90" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/galeries" className="font-medium text-oil-black hover:text-[#007A7A] transition-colors">Galeries</NavLink>
            <a href="/#projets" className="font-medium text-oil-black hover:text-[#007A7A] transition-colors">Projets</a>
            <a href="/#services" className="font-medium text-oil-black hover:text-[#007A7A] transition-colors">Services</a>
            <a href="/#clients" className="font-medium text-oil-black hover:text-[#007A7A] transition-colors">Partenaires</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#007A7A] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-[#005f5f] transition-all duration-300 inline-block"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button (placeholder) */}
          <div className="md:hidden">
            <button className="text-oil-black">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
