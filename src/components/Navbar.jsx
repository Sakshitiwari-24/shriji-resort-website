import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Building2, 
  Camera, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Menu, 
  X, 
  PartyPopper,
  ChevronRight 
} from 'lucide-react';
import { resortDetails } from '../data/resortData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ['intro', 'spaces', 'events', 'moments', 'journey', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#intro', id: 'intro', icon: Compass, subtitle: 'Heritage & Vision' },
    { name: 'Spaces', href: '#spaces', id: 'spaces', icon: Building2, subtitle: 'Royal Lawn & Banquet' },
    { name: 'Events', href: '#events', id: 'events', icon: PartyPopper, subtitle: 'Weddings & Celebrations' },
    { name: 'Moments', href: '#moments', id: 'moments', icon: Camera, subtitle: 'Celebration Gallery' },
    { name: 'Journey', href: '#journey', id: 'journey', icon: Sparkles, subtitle: 'Wedding Timeline' },
    { name: 'Contact', href: '#contact', id: 'contact', icon: MapPin, subtitle: 'Location & Directions' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent('Hello Shriji Resort, I would like to enquire about venue booking details.')}`;

  return (
    <>
      <header
        className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 24px' : '18px 24px',
          transition: 'var(--transition)'
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Logo Left */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0
            }}
          >
            <div
              style={{
                height: scrolled ? '42px' : '48px',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                padding: '3px 8px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                border: '1.5px solid #E8A33D',
                transition: 'var(--transition)',
                flexShrink: 0
              }}
            >
              <img
                src="/logo.jpg"
                alt="Shriji Resort Logo"
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-display"
                style={{
                  fontSize: scrolled ? '1.2rem' : '1.35rem',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#E8A33D',
                  lineHeight: 1.1,
                  letterSpacing: '0.01em',
                  transition: 'var(--transition)'
                }}
              >
                Shriji Resort
              </span>
              <span
                className="font-body"
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#D9A5A0',
                  marginTop: '2px',
                  fontWeight: 600
                }}
              >
                Rewa • Marriage Garden
              </span>
            </div>
          </a>

          {/* Desktop Nav Items Center with Icons */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(243, 233, 220, 0.05)',
              padding: '4px 6px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(232, 163, 61, 0.2)'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link-pill"
                  style={{
                    color: isActive ? '#E8A33D' : '#F3E9DC',
                    background: isActive ? 'rgba(232, 163, 61, 0.16)' : 'transparent',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-pill)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Icon 
                    size={15} 
                    style={{ 
                      color: isActive ? '#E8A33D' : 'rgba(243, 233, 220, 0.7)',
                      transition: 'color 0.25s ease' 
                    }} 
                  />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop & Mobile Action Bar on Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Quick Action: Book Date CTA Button (Desktop) */}
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="nav-book-cta"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #B5523B 0%, #963D27 100%)',
                color: '#FFFFFF',
                border: '1px solid rgba(247, 200, 115, 0.5)',
                padding: '9px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(181, 82, 59, 0.35)',
                transition: 'all 0.25s ease'
              }}
            >
              <Calendar size={15} style={{ color: '#F7C873' }} />
              <span>Book Date</span>
            </button>

            {/* Mobile Menu Toggle with Animated Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: mobileMenuOpen ? 'rgba(232, 163, 61, 0.2)' : 'rgba(243, 233, 220, 0.08)',
                border: '1px solid rgba(232, 163, 61, 0.35)',
                color: '#F3E9DC',
                padding: '8px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.25s ease'
              }}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X size={18} style={{ color: '#E8A33D' }} />
                  <span style={{ fontSize: '0.78rem' }}>Close</span>
                </>
              ) : (
                <>
                  <Menu size={18} style={{ color: '#E8A33D' }} />
                  <span style={{ fontSize: '0.78rem' }}>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Aubergine Overlay Menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'radial-gradient(circle at 80% 20%, #3D2230 0%, #2B1620 100%)',
          color: '#F3E9DC',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '95px 24px 32px 24px',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-15px)',
          overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span className="tag-label" style={{ color: '#E8A33D', fontSize: '0.75rem' }}>
              Explore Shriji
            </span>
            <span style={{ fontSize: '0.72rem', color: '#D9A5A0', letterSpacing: '0.08em' }}>
              Select a destination
            </span>
          </div>

          {/* Enhanced Mobile Nav Links with Icon Badges */}
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  background: isActive ? 'rgba(232, 163, 61, 0.12)' : 'rgba(243, 233, 220, 0.04)',
                  border: isActive ? '1px solid rgba(232, 163, 61, 0.4)' : '1px solid rgba(243, 233, 220, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: '#F3E9DC',
                  transition: 'all 0.25s ease',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-15px)',
                  transitionDelay: `${idx * 0.04}s`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(232, 163, 61, 0.12)',
                      border: '1px solid rgba(232, 163, 61, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E8A33D',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      className="font-display"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: isActive ? '#E8A33D' : '#F3E9DC'
                      }}
                    >
                      {link.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#D9A5A0', marginTop: '1px' }}>
                      {link.subtitle}
                    </span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: 'rgba(232, 163, 61, 0.6)' }} />
              </a>
            );
          })}
        </div>

        {/* Bottom Action Grid & Direct Lines */}
        <div style={{ borderTop: '1px solid rgba(243, 233, 220, 0.12)', paddingTop: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Quick Action Tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <a
              href={`tel:${resortDetails.phones[0]}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 14px',
                background: 'rgba(243, 233, 220, 0.08)',
                border: '1px solid rgba(232, 163, 61, 0.25)',
                borderRadius: 'var(--radius-sm)',
                color: '#F3E9DC',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <Phone size={15} style={{ color: '#E8A33D' }} />
              <span>Call Us</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 14px',
                background: 'rgba(37, 211, 102, 0.12)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: '#25D366',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Primary Mobile Book Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenBooking) onOpenBooking();
            }}
            className="btn-book"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px',
              fontSize: '0.85rem'
            }}
          >
            <Calendar size={17} style={{ color: '#F7C873' }} />
            <span>Book Your Date</span>
          </button>

          {/* Direct Phone Numbers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.68rem', color: '#D9A5A0', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Direct Booking Lines
            </span>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              {resortDetails.phones.map((phone, idx) => (
                <a 
                  key={idx} 
                  href={`tel:${phone}`} 
                  style={{ 
                    color: '#F3E9DC', 
                    textDecoration: 'none', 
                    fontSize: '0.82rem', 
                    fontWeight: 500,
                    opacity: 0.85
                  }}
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link-pill:hover {
          color: #E8A33D !important;
          background: rgba(232, 163, 61, 0.12) !important;
        }
        .nav-link-pill:hover svg {
          color: #E8A33D !important;
          transform: translateY(-1px);
        }
        .nav-action-icon-btn:hover {
          background: rgba(232, 163, 61, 0.22) !important;
          border-color: #E8A33D !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 163, 61, 0.25);
        }
        .nav-wa-btn:hover {
          background: rgba(37, 211, 102, 0.22) !important;
          border-color: #25D366 !important;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3) !important;
        }
        .nav-book-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(181, 82, 59, 0.5) !important;
          border-color: #F7C873 !important;
        }
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .nav-book-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 959px) {
          .desktop-nav { display: none !important; }
          .nav-book-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
