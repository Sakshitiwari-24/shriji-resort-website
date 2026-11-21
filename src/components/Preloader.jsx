import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Fast preloader (500ms) for snappy Core Web Vitals / LCP
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 250);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#2B1620',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F3E9DC',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        opacity: fade ? 0 : 1,
        transform: fade ? 'scale(0.98)' : 'scale(1)',
        pointerEvents: fade ? 'none' : 'auto'
      }}
      aria-hidden="true"
    >
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            background: '#FFFFFF',
            padding: '6px 14px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            border: '1.5px solid #E8A33D',
            marginBottom: '18px',
            display: 'inline-block'
          }}
        >
          <img
            src="/logo.jpg"
            alt="Shriji Resort Logo"
            style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div
          className="font-display"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontStyle: 'italic',
            fontWeight: 500,
            color: '#E8A33D',
            letterSpacing: '-0.01em'
          }}
        >
          Shriji Resort
        </div>
        <p
          className="font-body"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#D9A5A0',
            marginTop: '6px'
          }}
        >
          Rewa • Marriage Garden
        </p>
      </div>
    </div>
  );
}
