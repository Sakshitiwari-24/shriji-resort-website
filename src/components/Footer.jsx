import React from 'react';
import { resortDetails } from '../data/resortData';
import { ArrowUp, Heart, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenBooking, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#03071e', borderTop: '1px solid rgba(212, 175, 55, 0.3)', padding: '60px 20px 30px 20px', color: '#94a3b8' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Brand Info */}
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-secondary)', display: 'block', marginBottom: '12px' }} className="font-cinzel">
              SHRIJI RESORTS
            </span>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Rewa's premier destination wedding venue and resort featuring a 1500+ capacity marriage lawn, AC banquet halls, luxury suites, and gourmet vegetarian catering.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={onOpenBooking} className="btn-gold" style={{ padding: '8px 18px', fontSize: '0.78rem' }}>
                Book Event
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px' }} className="font-cinzel">
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#overview" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Overview & Features</a></li>
              <li><a href="#venues" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Marriage Lawn & Banquet</a></li>
              <li><a href="#rooms" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Luxury Guest Rooms</a></li>
              <li><a href="#calculator" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cost & Budget Estimator</a></li>
              <li><a href="#catering" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Gourmet Catering Menu</a></li>
              <li><a href="#gallery" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Photo Gallery</a></li>
            </ul>
          </div>

          {/* Direct Address */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px' }} className="font-cinzel">
              Contact Rewa Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--gold-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{resortDetails.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--gold-secondary)" style={{ flexShrink: 0 }} />
                <span>{resortDetails.phones[0]}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--gold-secondary)" style={{ flexShrink: 0 }} />
                <span>{resortDetails.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.82rem' }}>
          <div>
            © {new Date().getFullYear()} Shriji Resorts & Marriage Garden, Rewa. All Rights Reserved.
          </div>

          <button 
            onClick={scrollToTop} 
            style={{
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-secondary)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
