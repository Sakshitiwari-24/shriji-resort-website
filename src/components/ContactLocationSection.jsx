import React, { useState } from 'react';
import { resortDetails, faqs } from '../data/resortData';
import { Phone, Navigation, ChevronDown } from 'lucide-react';

export default function ContactLocationSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(resortDetails.address)}`;

  return (
    <section
      id="contact"
      className="paper-texture responsive-section"
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
          <p
            style={{
              maxWidth: '650px',
              margin: '16px auto 0 auto',
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}
          >
            Located on Shiv Nagar Road near Makhan Lal Chaturvedi University, Allahabad Road, Rewa. Easy to reach by road for guests coming from Rewa, Satna, Prayagraj, and Jabalpur.
          </p>
        </div>

        {/* MAP CONTAINER WITH RESPONSIVE OVERLAY / STACKED CARD */}
        <div
          className="contact-map-wrapper"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(43, 22, 32, 0.12)',
            border: '2px solid var(--border-sand)',
            background: '#FFFFFF'
          }}
        >
          {/* Large Embedded Google Map */}
          <iframe
            title="Shriji Resort and Marriage Garden Rewa Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.8034873111075!2d81.3325603!3d24.5381898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845bce45e1215b%3A0x8bb97e583c21c7d2!2sShriji%20Resorts%20%26%20Marriage%20Garden!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="contact-map-iframe"
            style={{ filter: 'contrast(1.04)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlaid Warm Paper Address & Contact Card */}
          <div
            className="contact-card-overlay warm-paper-card responsive-card"
            style={{
              background: '#FBF6F0',
              border: '2px solid var(--border-sand)',
              padding: '32px',
              boxShadow: '0 20px 40px rgba(43, 22, 32, 0.2)'
            }}
          >
            <span className="tag-label" style={{ color: 'var(--terracotta)', marginBottom: '8px', display: 'block' }}>
              Address & Directions
            </span>

            <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: 'var(--deep-aubergine)', marginBottom: '12px' }}>
              {resortDetails.name}
            </h3>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              {resortDetails.address}
            </p>

            {/* Direct Tap-to-Call Numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
              {resortDetails.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  style={{
                    color: 'var(--terracotta)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={14} />
                  <span>Call {phone}</span>
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
              <Navigation size={16} />
              <span>Get GPS Directions</span>
            </a>
          </div>

        </div>

        {/* Common Questions (Matches FAQPage SEO Schema) */}
        <div style={{ maxWidth: '880px', margin: '64px auto 0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span className="tag-label" style={{ marginBottom: '6px', display: 'block' }}>
              Quick Answers
            </span>
            <h3 className="h3-card font-display" style={{ color: 'var(--deep-aubergine)' }}>
              Common Questions About Shriji Resort, Rewa
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="warm-paper-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: `1.5px solid ${isOpen ? 'var(--terracotta)' : 'var(--border-sand)'}`,
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: 'var(--deep-aubergine)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.98rem',
                      fontWeight: 700
                    }}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: 'var(--terracotta)',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 18px 20px',
                        color: 'var(--text-muted)',
                        fontSize: '0.92rem',
                        lineHeight: 1.65
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-card-overlay {
            position: absolute !important;
            bottom: 24px !important;
            left: 24px !important;
            max-width: 420px !important;
            width: calc(100% - 48px) !important;
            z-index: 10 !important;
          }
        }
        @media (max-width: 899px) {
          .contact-card-overlay {
            position: relative !important;
            margin: 16px !important;
            width: calc(100% - 32px) !important;
          }
        }
      `}</style>
    </section>
  );
}
