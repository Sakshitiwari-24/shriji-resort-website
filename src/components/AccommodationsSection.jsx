import React from 'react';
import { accommodations } from '../data/resortData';
import { Bed, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AccommodationsSection({ onOpenBooking }) {
  return (
    <section
      id="rooms"
      className="paper-texture responsive-section"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Guest Stay
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Comfortable AC Rooms &amp; <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Family Suites
            </span>
          </h2>
          <p
            style={{
              maxWidth: '650px',
              margin: '16px auto 0 auto',
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}
          >
            25+ clean AC rooms and bridal suites right inside the resort, with comfortable beds, attached modern bathrooms, and 24/7 room service for your wedding guests.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '32px'
          }}
        >
          {accommodations.map((room) => (
            <div 
              key={room.id}
              className="warm-paper-card"
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--border-sand)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 16px 40px rgba(43, 22, 32, 0.08)'
              }}
            >
              {room.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    background: 'linear-gradient(135deg, #B5523B 0%, #E8A33D 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    zIndex: 3,
                    boxShadow: '0 4px 14px rgba(181, 82, 59, 0.4)'
                  }}
                >
                  Bride & Groom Suite
                </div>
              )}

              {/* Room Image with Framed Golden Trim */}
              <div style={{ padding: '12px 12px 0 12px' }}>
                <div
                  style={{
                    height: '240px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid rgba(232, 163, 61, 0.6)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: 'rgba(43, 22, 32, 0.92)',
                      border: '1px solid #E8A33D',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.78rem',
                      color: '#F3E9DC',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    {room.view} • {room.size}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px 28px 28px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: 'var(--deep-aubergine)',
                    marginBottom: '8px'
                  }}
                >
                  {room.name}
                </h3>

                <div
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Bed size={16} style={{ color: 'var(--terracotta)' }} />
                  <span>{room.bed}</span>
                </div>

                {/* Amenities Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {room.amenities.map((amenity, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        background: 'var(--warm-sand-light)',
                        border: '1px solid var(--border-sand)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '4px 10px',
                        fontSize: '0.75rem',
                        color: 'var(--text-dark)',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle2 size={12} style={{ color: 'var(--saffron)' }} />
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  style={{
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(181, 82, 59, 0.15)',
                    paddingTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    On-Site AC Stay
                  </span>

                  <button 
                    onClick={() => onOpenBooking && onOpenBooking({ eventType: `Room Booking: ${room.name}` })}
                    className="btn-book"
                    style={{ padding: '10px 18px', fontSize: '0.78rem' }}
                  >
                    <span>Reserve Suite</span>
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
