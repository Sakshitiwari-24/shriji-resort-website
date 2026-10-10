import React, { useState } from 'react';
import { venues } from '../data/resortData';
import { Users, CheckCircle, Sparkles, MapPin, Maximize2, ArrowRight } from 'lucide-react';

export default function VenueExplorer({ onOpenBooking, lang }) {
  const [activeVenue, setActiveVenue] = useState(venues[0]);

  return (
    <section id="venues" style={{ padding: '100px 20px', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="script-subhead">
            {lang === 'hi' ? 'शाही उत्सव स्थल' : 'Grand Event Spaces'}
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 700, marginTop: '4px' }} className="font-cinzel">
            {lang === 'hi' ? 'अपनी पसंद का वेन्यू चुनें' : 'Explore Regal Venue Choices'}
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '14px auto 0 auto', fontSize: '1.05rem' }}>
            {lang === 'hi' 
              ? 'भव्य विवाह, संगीत संध्या, कॉर्पोरेट इवेंट्स व पूल पार्टीज़ के लिए रीवा का सर्वश्रेष्ठ स्थान।' 
              : 'Designed for grand celebrations, wedding receptions, pre-wedding ceremonies, and intimate luxury gatherings.'}
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {venues.map((venue) => {
            const isActive = activeVenue.id === venue.id;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenue(venue)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #d4af37, #aa7c11)' : 'rgba(8, 28, 21, 0.7)',
                  color: isActive ? '#050d0a' : '#cbd5e1',
                  border: `1px solid ${isActive ? '#fef08a' : 'rgba(212, 175, 55, 0.25)'}`,
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {venue.name}
              </button>
            );
          })}
        </div>

        {/* Venue Detailed Display Box */}
        <div 
          className="glass-panel"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            padding: '36px',
            alignItems: 'center'
          }}
        >
          {/* Venue Image */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: '340px' }}>
            <img 
              src={activeVenue.image} 
              alt={activeVenue.name} 
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '450px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                transition: 'transform 0.5s ease'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(5, 13, 10, 0.85)',
                border: '1px solid var(--gold-primary)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                color: 'var(--gold-secondary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Users size={14} /> {activeVenue.capacity}
            </div>
          </div>

          {/* Venue Content Details */}
          <div>
            <span style={{ color: 'var(--gold-secondary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {activeVenue.type}
            </span>

            <h3 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '8px 0 16px 0' }} className="font-cinzel text-gold-gradient">
              {activeVenue.name}
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {activeVenue.description}
            </p>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '32px' }}>
              {activeVenue.highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.9rem' }}>
                  <CheckCircle size={18} color="var(--gold-secondary)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenBooking({ venue: activeVenue.name })} 
                className="btn-gold"
              >
                {lang === 'hi' ? 'इस वेन्यू को बुक करें' : 'Reserve This Venue'}
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
