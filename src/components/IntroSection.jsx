import React from 'react';
import { resortDetails } from '../data/resortData';

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="paper-texture responsive-section"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Editorial Story Layout with Framed Haveli Arch Portrait */}
        <div
          className="intro-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Left: Elegantly Framed Haveli Arch Portrait (No messy Instagram overlapping circle collage!) */}
          <div style={{ position: 'relative' }}>
            
            <div className="arch-mask-framed intro-arch-wrap">
              <img
                src="/gallery/mandap.jpg"
                alt="Shriji Resort Royal Marriage Lawn Mandap"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'calc(var(--radius-arch) - 6px)'
                }}
                loading="lazy"
              />
            </div>

            {/* Soft Ambient Radial Background Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232, 163, 61, 0.25) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
              }}
            />

          </div>

          {/* Right: Narrative Details & Warm Paper Highlight Card */}
          <div>
            <span className="tag-label" style={{ marginBottom: '12px', display: 'block' }}>
              About Shriji Resort
            </span>

            <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)', marginBottom: '24px' }}>
              Warm Hospitality &amp; <br />
              <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
                Spacious Venues
              </span>
            </h2>

            {/* Oversized Pull-Number in Outline Type */}
            <div style={{ marginBottom: '24px' }}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: '2px #B5523B',
                  display: 'block'
                }}
              >
                35,000
              </span>
              <span className="font-body" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--terracotta)' }}>
                Square Feet Open Green Lawn
              </span>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              Located on Shiv Nagar Road near Makhan Lal Chaturvedi University, Allahabad Road, Rewa,
              <strong> Shriji Resorts &amp; Marriage Garden</strong> is a comfortable and spacious venue for weddings and family functions.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
              With an open lawn for up to 2,000 guests, a 10,000 sq ft AC banquet hall, swimming pool, and 25+ AC rooms, we make hosting your special day simple and stress-free.
            </p>

            {/* Solid Warm Surface Highlight Card */}
            <div
              className="warm-paper-card"
              style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '20px'
              }}
            >
              <div>
                <span className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Lawn Capacity
                </span>
                <p className="font-display" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--deep-aubergine)', marginTop: '2px' }}>
                  Up to 2,000 Guests
                </p>
              </div>

              <div>
                <span className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Indoor AC Hall
                </span>
                <p className="font-display" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--deep-aubergine)', marginTop: '2px' }}>
                  400 - 600 Guests
                </p>
              </div>


            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
