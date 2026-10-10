import React, { useState } from 'react';
import { resortDetails } from '../data/resortData';

export default function HeroSection({ onOpenBooking }) {
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('Grand Wedding & Reception');
  const [guestCount, setGuestCount] = useState('600 - 1200 Guests');

  const handleHeroCheck = (e) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Hello Shriji Resort,\n\nI would like to check availability for:\n` +
      `• Date: ${eventDate || 'Not specified'}\n` +
      `• Event: ${eventType}\n` +
      `• Guests: ${guestCount}\n` +
      `\nPlease send package details.`
    );
    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${waText}`, '_blank');
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '140px 24px 80px 24px',
        overflow: 'hidden',
        background: '#2B1620'
      }}
    >
      {/* Full-bleed drone video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/gallery/hero.jpg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          filter: 'brightness(0.62) contrast(1.08)'
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-resort-swimming-pool-42566-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Aubergine Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(43, 22, 32, 0.45) 0%, rgba(43, 22, 32, 0.75) 60%, rgba(43, 22, 32, 0.95) 100%)'
        }}
      />

      {/* Hero Content (Left-Aligned, Huge 2-line Headline with Fraunces Italic Word) */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          color: '#F3E9DC'
        }}
      >
        <span
          className="tag-label"
          style={{
            color: '#E8A33D',
            marginBottom: '16px',
            display: 'block'
          }}
        >
          Shriji Resort & Marriage Garden • Rewa
        </span>

        {/* Huge Left-Aligned Headline with one Fraunces Italic word */}
        <h1
          className="h1-hero"
          style={{
            color: '#F3E9DC',
            maxWidth: '1050px',
            marginBottom: '36px',
            textShadow: '0 4px 25px rgba(0,0,0,0.7)'
          }}
        >
          Royal Grandeur for Your <br />
          <span className="font-display" style={{ fontStyle: 'italic', color: '#E8A33D', fontWeight: 500 }}>
            Unforgettable
          </span> Celebrations.
        </h1>

        {/* Hero CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <button
            onClick={() => onOpenBooking()}
            className="btn-book"
            style={{ padding: '14px 28px', fontSize: '0.85rem' }}
          >
            <span>Plan Your Celebration</span>
            <div className="btn-book-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>

          <a
            href="#spaces"
            style={{
              padding: '13px 24px',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid rgba(232, 163, 61, 0.55)',
              background: 'rgba(43, 22, 32, 0.45)',
              backdropFilter: 'blur(8px)',
              color: '#F3E9DC',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'var(--transition)'
            }}
            className="btn-hero-outline"
          >
            Explore Royal Spaces
          </a>
        </div>

        {/* Secondary CTA "Enquire" Link with Animated Underline */}
        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.85rem', color: '#D9A5A0' }}>Have specific requirements?</span>
          <button
            onClick={() => onOpenBooking()}
            className="link-underline"
            style={{ background: 'none', border: 'none' }}
          >
            Enquire directly with our desk →
          </button>
        </div>

      </div>
    </section>
  );
}
