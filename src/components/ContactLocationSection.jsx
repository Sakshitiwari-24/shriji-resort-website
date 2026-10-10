import React from 'react';
import { resortDetails } from '../data/resortData';

export default function ContactLocationSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(resortDetails.address)}`;

  return (
    <section
      id="contact"
      className="paper-texture"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Location & Directions
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Visit Us in <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Rewa, Madhya Pradesh
            </span>
          </h2>
        </div>

        {/* MAP FIRST AND LARGE WITH OVERLAID WARM PAPER CARD */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(43, 22, 32, 0.12)',
            border: '2px solid var(--border-sand)',
            minHeight: '540px'
          }}
        >
          {/* Large Embedded Google Map */}
          <iframe
            title="Shriji Resort Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.8034873111075!2d81.3325603!3d24.5381898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845bce45e1215b%3A0x8bb97e583c21c7d2!2sShriji%20Resorts%20%26%20Marriage%20Garden!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="580px"
            style={{ border: 0, display: 'block', filter: 'contrast(1.04)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlaid Warm Paper Address & Contact Card */}
          <div
            className="warm-paper-card"
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              maxWidth: '420px',
              width: 'calc(100% - 48px)',
              padding: '32px',
              background: '#FBF6F0',
              border: '2px solid var(--border-sand)',
              boxShadow: '0 20px 40px rgba(43, 22, 32, 0.2)'
            }}
          >
            <span className="tag-label" style={{ color: 'var(--terracotta)', marginBottom: '8px', display: 'block' }}>
              Address & Contact
            </span>

            <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: 'var(--deep-aubergine)', marginBottom: '12px' }}>
              {resortDetails.name}
            </h3>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              {resortDetails.address}
            </p>

            {/* Tap to Call Numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {resortDetails.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  style={{
                    color: 'var(--terracotta)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 700
                  }}
                >
                  Call {phone} →
                </a>
              ))}
            </div>

            {/* Get Directions Button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book"
              style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
            >
              <span>Get Directions</span>
              <div className="btn-book-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
