import React from 'react';
import { accommodations } from '../data/resortData';
import { Bed, Wifi, Tv, Coffee, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AccommodationsSection({ onOpenBooking, lang }) {
  return (
    <section id="rooms" style={{ padding: '100px 20px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <Bed size={14} />
            {lang === 'hi' ? 'लग्जरी स्टे व रूम्स' : 'Luxury Rooms & Heritage Suites'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'अतिथियों के ठहरने की उत्तम व्यवस्था' : 'Relaxed Stay for Wedding Guests'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? '25+ वातानुकूलित (AC) सुसज्जित रूम्स, 24/7 रूम सर्विस व लॉन-पूल व्यू सुइट्स।' 
              : '25+ fully air-conditioned rooms & presidential suites with 24/7 room service, private balconies & resort views.'}
          </p>
        </div>

        {/* Accommodations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {accommodations.map((room) => (
            <div 
              key={room.id}
              className="glass-panel"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {room.popular && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--gold-secondary)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontFamily: 'var(--font-accent)',
                  letterSpacing: '0.08em',
                  fontSize: '0.75rem',
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-full)',
                  zIndex: 2,
                  boxShadow: '0 4px 12px rgba(184, 134, 11, 0.4)'
                }}>
                  Bride & Groom Suite
                </div>
              )}

              {/* Room Image with Golden Designer Border */}
              <div style={{ padding: '6px 6px 0 6px' }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative', borderRadius: '12px', border: '2px solid rgba(232, 163, 61, 0.6)', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}>
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: 'rgba(43, 22, 32, 0.92)',
                    border: '1px solid #E8A33D',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    color: '#F3E9DC',
                    fontWeight: 600
                  }}>
                    {room.view} • {room.size}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }} className="font-cinzel text-gold-bright">
                  {room.name}
                </h3>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Bed size={16} color="var(--gold-secondary)" />
                  {room.bed}
                </div>

                {/* Amenities Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {room.amenities.map((amenity, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        background: '#f8fafc',
                        border: '1px solid rgba(197, 155, 39, 0.25)',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '0.78rem',
                        color: '#334155',
                        fontWeight: 500
                      }}
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(197, 155, 39, 0.2)', paddingTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold-secondary)', fontFamily: 'var(--font-cinzel)' }}>
                      ₹{room.price.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}> /{room.per}</span>
                  </div>

                  <button 
                    onClick={() => onOpenBooking({ room: room.name })}
                    className="btn-gold"
                    style={{ padding: '8px 16px', fontSize: '0.78rem' }}
                  >
                    Reserve Room
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
