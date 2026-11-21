import React, { useState } from 'react';
import { resortDetails } from '../data/resortData';
import { Calendar, Users, PartyPopper, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onOpenEnquire }) {
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('Grand Wedding & Reception');
  const [guestCount, setGuestCount] = useState('600 - 1200 Guests');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleHeroCheck = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking({
        date: eventDate,
        eventType: eventType,
        guestCount: guestCount,
        message: `Inquiring for date ${eventDate || 'flexible'} with ${guestCount}`
      });
    }
  };

  const handleDirectWhatsAppCheck = () => {
    const waText = encodeURIComponent(
      `Hello Shriji Resort,\n\nI would like to check venue availability for:\n` +
      `• Date: ${eventDate || 'Tentative / To Discuss'}\n` +
      `• Event: ${eventType}\n` +
      `• Guests: ${guestCount}\n` +
      `\nPlease let me know if this date is open and share package details.`
    );
    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${waText}`, '_blank');
  };

  return (
    <section
      id="hero"
      className="hero-section-wrap"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '130px 24px 70px 24px',
        overflow: 'hidden',
        background: '#2B1620'
      }}
    >
      {/* Drone video background with fallback */}
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
          filter: 'brightness(0.55) contrast(1.08)'
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-resort-swimming-pool-42566-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Aubergine & Warm Sunset Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(43, 22, 32, 0.45) 0%, rgba(43, 22, 32, 0.75) 55%, rgba(43, 22, 32, 0.95) 100%)'
        }}
      />

      {/* Hero Content Container */}
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Sparkles size={14} style={{ color: '#E8A33D' }} />
          Shriji Resort & Marriage Garden • Allahabad Road, Rewa
        </span>

        {/* Headline */}
        <h1
          className="h1-hero"
          style={{
            color: '#F3E9DC',
            maxWidth: '1050px',
            marginBottom: '28px',
            textShadow: '0 4px 25px rgba(0,0,0,0.7)'
          }}
        >
          A Beautiful Place for Your <br />
          <span className="font-display" style={{ fontStyle: 'italic', color: '#E8A33D', fontWeight: 500 }}>
            Special
          </span> Celebrations.
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: '#F3E9DC',
            opacity: 0.9,
            maxWidth: '750px',
            marginBottom: '36px',
            lineHeight: 1.6,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          Rewa's trusted wedding venue and marriage garden with a 35,000 sq ft open lawn, AC banquet hall, swimming pool, and 25+ AC guest rooms.
        </p>

        {/* Quick Date Availability Glass Bar */}
        <div
          className="glass-hero-bar hero-glass-bar"
          style={{
            maxWidth: '960px',
            padding: '20px 24px',
            marginBottom: '36px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 20px 45px rgba(0,0,0,0.45)'
          }}
        >
          {/* Date Picker */}
          <div style={{ flex: '1 1 200px' }}>
            <label style={{ fontSize: '0.72rem', color: '#D9A5A0', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
              <Calendar size={13} style={{ color: '#E8A33D' }} />
              Event Date
            </label>
            <input
              type="date"
              min={todayStr}
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(232, 163, 61, 0.35)',
                color: '#F3E9DC',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                fontSize: '0.88rem'
              }}
            />
          </div>

          {/* Event Type */}
          <div style={{ flex: '1 1 220px' }}>
            <label style={{ fontSize: '0.72rem', color: '#D9A5A0', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
              <PartyPopper size={13} style={{ color: '#E8A33D' }} />
              Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              style={{
                background: '#2B1620',
                border: '1px solid rgba(232, 163, 61, 0.35)',
                color: '#F3E9DC',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                fontSize: '0.88rem'
              }}
            >
              <option value="Grand Wedding & Reception">Grand Wedding & Reception</option>
              <option value="Engagements & Ring Ceremonies">Engagements & Ring Ceremonies</option>
              <option value="Birthday Parties & Celebrations">Birthday Parties & Celebrations</option>
              <option value="Sangeet / Haldi / Mehendi">Sangeet / Haldi / Mehendi</option>
              <option value="Retirement & Corporate Meets">Retirement & Corporate Meets</option>
              <option value="Mundan Sanskar & Sacred Pooja">Mundan Sanskar & Sacred Pooja</option>
            </select>
          </div>

          {/* Guest Count */}
          <div style={{ flex: '1 1 180px' }}>
            <label style={{ fontSize: '0.72rem', color: '#D9A5A0', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
              <Users size={13} style={{ color: '#E8A33D' }} />
              Guest Count
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              style={{
                background: '#2B1620',
                border: '1px solid rgba(232, 163, 61, 0.35)',
                color: '#F3E9DC',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                fontSize: '0.88rem'
              }}
            >
              <option value="150 - 400 Guests">150 - 400 Guests</option>
              <option value="400 - 800 Guests">400 - 800 Guests</option>
              <option value="800 - 1,500 Guests">800 - 1,500 Guests</option>
              <option value="1,500 - 2,000+ Guests">1,500 - 2,000+ Guests</option>
            </select>
          </div>

          {/* Check Availability CTA */}
          <div style={{ flex: '1 1 180px', display: 'flex', alignItems: 'flex-end' }}>
            <button
              onClick={handleHeroCheck}
              className="btn-book"
              style={{
                width: '100%',
                padding: '12px 18px',
                fontSize: '0.82rem',
                justifyContent: 'center'
              }}
            >
              <span>Check Dates</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <button
            onClick={() => onOpenBooking()}
            className="btn-book"
            style={{ padding: '14px 28px', fontSize: '0.85rem' }}
          >
            <span>Book Your Event</span>
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
            View Our Spaces
          </a>
        </div>

        {/* Direct WhatsApp Quick Query */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: '#D9A5A0' }}>Have a question about dates or booking?</span>
          <button
            onClick={handleDirectWhatsAppCheck}
            className="link-underline"
            style={{ background: 'none', border: 'none', color: '#E8A33D' }}
          >
            Message us directly on WhatsApp →
          </button>
        </div>

      </div>
    </section>
  );
}
