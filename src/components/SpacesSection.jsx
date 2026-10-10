import React, { useState } from 'react';
import { venues } from '../data/resortData';

export default function SpacesSection({ onOpenBooking }) {
  const [activeVenueId, setActiveVenueId] = useState(venues[0].id);

  return (
    <section
      id="spaces"
      style={{
        padding: '120px 24px',
        background: '#2B1620',
        color: '#F3E9DC',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag-label" style={{ color: '#E8A33D', marginBottom: '8px', display: 'block' }}>
            Event Spaces
          </span>
          <h2 className="h2-editorial font-display" style={{ color: '#F3E9DC' }}>
            Handcrafted Celebrations in <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: '#E8A33D' }}>
              Every Corner
            </span>
          </h2>
        </div>

        {/* DESKTOP INTERACTIVE EXPANDING PANELS ROW */}
        <div className="desktop-expanding-row" style={{ display: 'flex', gap: '16px', height: '520px' }}>
          {venues.map((venue) => {
            const isExpanded = activeVenueId === venue.id;
            return (
              <div
                key={venue.id}
                onMouseEnter={() => setActiveVenueId(venue.id)}
                onClick={() => setActiveVenueId(venue.id)}
                style={{
                  flex: isExpanded ? '3.5' : '1',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'flex 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease',
                  border: `1px solid ${isExpanded ? '#E8A33D' : 'rgba(243, 233, 220, 0.15)'}`
                }}
              >
                {/* Background Image */}
                <img
                  src={venue.image}
                  alt={venue.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isExpanded ? 'brightness(0.75)' : 'brightness(0.45) grayscale(20%)',
                    transition: 'filter 0.5s ease'
                  }}
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(43, 22, 32, 0.1) 0%, rgba(43, 22, 32, 0.9) 100%)'
                  }}
                />

                {/* Collapsed State Title Label */}
                {!isExpanded && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '32px',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(-90deg)',
                      transformOrigin: 'center center',
                      whiteSpace: 'nowrap',
                      color: '#F3E9DC',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {venue.name}
                  </div>
                )}

                {/* Expanded Content Details */}
                {isExpanded && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      padding: '36px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      color: '#F3E9DC',
                      animation: 'fadeInUp 0.4s ease forwards'
                    }}
                  >
                    <div>
                      <span className="font-body" style={{ fontSize: '0.75rem', color: '#E8A33D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        {venue.type} • {venue.capacity}
                      </span>

                      <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: '#F3E9DC', margin: '8px 0 14px 0' }}>
                        {venue.name}
                      </h3>

                      <p style={{ fontSize: '0.925rem', color: '#D9A5A0', maxWidth: '420px', lineHeight: 1.6 }}>
                        {venue.description}
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking({ venue: venue.name });
                        }}
                        className="btn-book"
                        style={{ padding: '12px 24px', fontSize: '0.8rem' }}
                      >
                        <span>Book this space</span>
                        <div className="btn-book-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE VERTICAL ACCORDION (No horizontal scrolling) */}
        <div className="mobile-accordion" style={{ display: 'none', flexDirection: 'column', gap: '16px' }}>
          {venues.map((venue) => {
            const isOpen = activeVenueId === venue.id;
            return (
              <div
                key={venue.id}
                style={{
                  background: 'var(--aubergine-soft)',
                  borderRadius: 'var(--radius-md)',
                  border: `1px solid ${isOpen ? '#E8A33D' : 'rgba(243, 233, 220, 0.15)'}`,
                  overflow: 'hidden'
                }}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setActiveVenueId(isOpen ? null : venue.id)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    color: '#F3E9DC',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div>
                    <span className="font-body" style={{ fontSize: '0.7rem', color: '#E8A33D', fontWeight: 700, textTransform: 'uppercase' }}>
                      {venue.capacity}
                    </span>
                    <h4 className="font-display" style={{ fontStyle: 'italic', fontSize: '1.25rem', margin: '2px 0 0 0' }}>
                      {venue.name}
                    </h4>
                  </div>
                  <span style={{ fontSize: '1.2rem', color: '#E8A33D' }}>{isOpen ? '−' : '+'}</span>
                </button>

                {/* Body Content */}
                {isOpen && (
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <div style={{ width: '100%', height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '16px' }}>
                      <img src={venue.image} alt={venue.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#D9A5A0', marginBottom: '16px', lineHeight: 1.6 }}>
                      {venue.description}
                    </p>
                    <button
                      onClick={() => onOpenBooking({ venue: venue.name })}
                      className="btn-book"
                      style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                    >
                      <span>Book this space</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-expanding-row { display: none !important; }
          .mobile-accordion { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
