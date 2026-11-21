import React from 'react';
import { resortDetails } from '../data/resortData';
import { Phone, MessageCircle, MapPin, ArrowUp, Heart } from 'lucide-react';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const whatsappUrl = `https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent('Hello Shriji Resort, I would like to enquire about venue booking details.')}`;

  return (
    <footer
      className="site-footer"
      style={{
        background: '#2B1620',
        color: '#D9A5A0',
        padding: '56px 24px 36px 24px',
        borderTop: '1px solid rgba(232, 163, 61, 0.25)',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          textAlign: 'center'
        }}
      >
        {/* Brand Logo and Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <h3 className="font-display" style={{ fontStyle: 'italic', fontSize: '1.8rem', color: '#E8A33D', fontWeight: 600 }}>
            {resortDetails.name}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#D9A5A0', maxWidth: '580px', lineHeight: 1.6 }}>
            {resortDetails.tagline} • 35,000 sq ft marriage lawn, AC banquet hall, swimming pool &amp; 25+ AC guest rooms in Rewa, MP.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div
          style={{
            display: 'flex',
            gap: '18px 24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: '0.88rem',
            fontWeight: 500
          }}
        >
          <a href="#intro" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Story</a>
          <a href="#spaces" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Spaces</a>
          <a href="#rooms" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Rooms & Suites</a>
          <a href="#events" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Celebrations</a>
          <a href="#moments" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Gallery</a>
          <a href="#journey" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Day Timeline</a>
          <a href="#reviews" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Reviews</a>
          <a href="#booking" style={{ color: '#E8A33D', textDecoration: 'none', fontWeight: 700 }}>Book Date</a>
          <a href="#contact" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Location</a>
        </div>

        {/* Quick Contact Line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
          <a
            href={`tel:${resortDetails.phones[0]}`}
            style={{ color: '#F3E9DC', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Phone size={14} style={{ color: '#E8A33D' }} />
            <span>{resortDetails.phones[0]}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4ADE80', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <MessageCircle size={14} />
            <span>WhatsApp Direct</span>
          </a>

          <span style={{ color: '#D9A5A0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} style={{ color: '#E8A33D' }} />
            <span>Allahabad Road, Rewa, MP (486001)</span>
          </span>
        </div>

        {/* Address and Copyright Bar */}
        <div
          style={{
            fontSize: '0.8rem',
            color: '#C5B3BB',
            borderTop: '1px solid rgba(243, 233, 220, 0.12)',
            width: '100%',
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div>
            © {new Date().getFullYear()} {resortDetails.name}. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(232, 163, 61, 0.12)',
              border: '1px solid rgba(232, 163, 61, 0.35)',
              color: '#E8A33D',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 600
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
