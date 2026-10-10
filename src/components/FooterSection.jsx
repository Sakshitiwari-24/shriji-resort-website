import React from 'react';
import { resortDetails } from '../data/resortData';

export default function FooterSection() {
  return (
    <footer
      style={{
        background: '#2B1620',
        color: '#D9A5A0',
        padding: '48px 24px 32px 24px',
        borderTop: '1px solid rgba(232, 163, 61, 0.2)'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center'
        }}
      >
        {/* Title */}
        <h3 className="font-display" style={{ fontStyle: 'italic', fontSize: '1.5rem', color: '#E8A33D' }}>
          {resortDetails.name}
        </h3>

        {/* One Line of Links */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.875rem' }}>
          <a href="#intro" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Story</a>
          <a href="#spaces" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Spaces</a>
          <a href="#events" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Events</a>
          <a href="#moments" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Moments</a>
          <a href="#journey" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Journey</a>
          <a href="#booking" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Book Date</a>
          <a href="#contact" style={{ color: '#F3E9DC', textDecoration: 'none' }}>Contact</a>
        </div>

        {/* Address and Copyright */}
        <div style={{ fontSize: '0.8rem', color: '#C5B3BB', borderTop: '1px solid rgba(243, 233, 220, 0.1)', width: '100%', paddingTop: '20px' }}>
          <p>{resortDetails.address}</p>
          <p style={{ marginTop: '4px' }}>© {new Date().getFullYear()} {resortDetails.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
