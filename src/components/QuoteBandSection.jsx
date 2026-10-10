import React from 'react';

export default function QuoteBandSection() {
  return (
    <section
      id="quote-band"
      style={{
        width: '100%',
        padding: '110px 24px',
        background: '#2B1620',
        color: '#F3E9DC',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(232, 163, 61, 0.3)',
        borderBottom: '1px solid rgba(232, 163, 61, 0.3)'
      }}
    >
      {/* Subtle Moving Jaali Pattern Background SVG */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          stroke: '#E8A33D',
          fill: 'none',
          strokeWidth: '1'
        }}
      >
        <pattern id="jaali-quote" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z M 20 10 L 30 20 L 20 30 L 10 20 Z" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#jaali-quote)" />
      </svg>

      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        <blockquote
          className="font-accent"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.4rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.3,
            color: '#E8A33D',
            margin: '0 0 24px 0'
          }}
        >
          “Two souls, one sacred bond — celebrated amidst royal greenery, starlit skies, and handcrafted warmth.”
        </blockquote>

        <p
          className="font-body"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#D9A5A0'
          }}
        >
          Shriji Resorts & Marriage Garden • Rewa
        </p>
      </div>
    </section>
  );
}
