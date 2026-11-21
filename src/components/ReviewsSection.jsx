import React from 'react';
import { testimonials } from '../data/resortData';
import { Star, MessageSquare, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="paper-texture responsive-section"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand-light)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Guest Reviews
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Trusted by Families <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Across Rewa
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
            Read what families and couples have shared about hosting their weddings and celebrations at Shriji Resort.
          </p>
        </div>

        {/* Rating Summary Banner */}
        <div 
          className="warm-paper-card reviews-summary-banner"
          style={{
            maxWidth: '860px',
            margin: '0 auto 56px auto',
            padding: '30px 40px',
            background: '#FFFFFF',
            border: '2px solid var(--border-sand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 40px rgba(43, 22, 32, 0.06)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div
              className="font-display"
              style={{
                fontSize: '3.4rem',
                fontWeight: 800,
                color: 'var(--terracotta)',
                lineHeight: 1
              }}
            >
              4.3
            </div>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < 4 ? "#E8A33D" : i === 4 ? "url(#halfStar)" : "none"}
                    color="#E8A33D"
                  />
                ))}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                High Rating on Justdial &amp; Google Maps (Rewa)
              </div>
            </div>
          </div>

          <div className="reviews-stats-row" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div className="reviews-stat-item" style={{ textAlign: 'center', padding: '0 16px', borderRight: '1px solid var(--border-sand)' }}>
              <div className="font-display" style={{ fontWeight: 700, color: 'var(--deep-aubergine)', fontSize: '1.25rem' }}>100%</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pure Veg Food</div>
            </div>
            <div className="reviews-stat-item" style={{ textAlign: 'center', padding: '0 16px', borderRight: '1px solid var(--border-sand)' }}>
              <div className="font-display" style={{ fontWeight: 700, color: 'var(--deep-aubergine)', fontSize: '1.25rem' }}>2,000+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Max Capacity</div>
            </div>
            <div className="reviews-stat-item" style={{ textAlign: 'center', padding: '0 16px' }}>
              <div className="font-display" style={{ fontWeight: 700, color: 'var(--deep-aubergine)', fontSize: '1.25rem' }}>24/7</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Power Backup</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '30px'
          }}
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="warm-paper-card responsive-card"
              style={{
                padding: '36px',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--border-sand)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 12px 32px rgba(43, 22, 32, 0.05)'
              }}
            >
              <Quote
                size={36}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  color: 'rgba(232, 163, 61, 0.25)'
                }}
              />

              <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#E8A33D" color="#E8A33D" />
                ))}
              </div>

              <p
                className="font-accent"
                style={{
                  color: 'var(--deep-aubergine)',
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  flexGrow: 1,
                  fontStyle: 'italic'
                }}
              >
                "{t.text}"
              </p>

              <div
                style={{
                  borderTop: '1px solid var(--border-sand)',
                  paddingTop: '18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong
                    className="font-display"
                    style={{
                      color: 'var(--deep-aubergine)',
                      fontSize: '1rem',
                      display: 'block'
                    }}
                  >
                    {t.name}
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {t.event} • {t.city}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--terracotta)',
                    fontWeight: 600,
                    letterSpacing: '0.04em'
                  }}
                >
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
