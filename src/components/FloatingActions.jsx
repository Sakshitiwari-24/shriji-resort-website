import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, X, Sparkles } from 'lucide-react';
import { resortDetails } from '../data/resortData';

export default function FloatingActions({ onOpenBooking }) {
  const [showMobileDock, setShowMobileDock] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile action dock after hero section scrolls out of view (>450px)
      setShowMobileDock(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent('Hello Shriji Resort, I would like to enquire about venue booking details.')}`;

  return (
    <>
      {/* DESKTOP: SLIM VERTICAL TAB FIXED TO RIGHT EDGE */}
      <div className="desktop-side-tab-container">
        <button
          onClick={() => setSideDrawerOpen(!sideDrawerOpen)}
          className="desktop-side-tab"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Sparkles size={14} style={{ color: '#F7C873' }} />
          <span>Plan Your Date</span>
        </button>

        {/* Slide-out Panel */}
        {sideDrawerOpen && (
          <div
            style={{
              position: 'fixed',
              right: '48px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 995,
              background: '#2B1620',
              border: '1px solid #E8A33D',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              color: '#F3E9DC',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              width: '270px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span className="tag-label" style={{ color: '#E8A33D', fontSize: '0.75rem' }}>Quick Inquiry</span>
              <button 
                onClick={() => setSideDrawerOpen(false)} 
                style={{ background: 'none', border: 'none', color: '#F3E9DC', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                aria-label="Close Inquiry Drawer"
              >
                <X size={18} />
              </button>
            </div>

            <a
              href={`tel:${resortDetails.phones[0]}`}
              style={{
                color: '#F3E9DC',
                textDecoration: 'none',
                padding: '10px 14px',
                background: 'rgba(243, 233, 220, 0.08)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(232, 163, 61, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <Phone size={15} style={{ color: '#E8A33D' }} />
              <span>Call {resortDetails.phones[0]}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25D366',
                textDecoration: 'none',
                padding: '10px 14px',
                background: 'rgba(37, 211, 102, 0.12)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                setSideDrawerOpen(false);
                onOpenBooking();
              }}
              className="btn-book"
              style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            >
              <Calendar size={15} style={{ color: '#F7C873' }} />
              <span>Book Your Date</span>
            </button>
          </div>
        )}
      </div>

      {/* MOBILE: SINGLE ROUNDED GLASS ACTION DOCK PINNED AT BOTTOM */}
      <div
        className={`mobile-action-dock-wrap ${showMobileDock ? 'visible' : ''}`}
        style={{
          position: 'fixed',
          bottom: '12px',
          left: '50%',
          transform: `translateX(-50%) ${showMobileDock ? 'translateY(0)' : 'translateY(100px)'}`,
          zIndex: 990,
          width: 'calc(100% - 32px)',
          maxWidth: '420px',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        <div
          className="glass-action-dock"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '10px 16px',
            color: '#F3E9DC'
          }}
        >
          {/* Segment 1: Call */}
          <a
            href={`tel:${resortDetails.phones[0]}`}
            style={{
              color: '#F3E9DC',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Phone size={14} style={{ color: '#E8A33D' }} />
            <span>Call</span>
          </a>

          <div style={{ width: '1px', height: '18px', background: 'rgba(232, 163, 61, 0.3)' }} />

          {/* Segment 2: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#4ADE80',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          <div style={{ width: '1px', height: '18px', background: 'rgba(232, 163, 61, 0.3)' }} />

          {/* Segment 3: Book */}
          <button
            onClick={() => onOpenBooking()}
            style={{
              background: 'none',
              border: 'none',
              color: '#E8A33D',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Calendar size={14} style={{ color: '#E8A33D' }} />
            <span>Book</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .mobile-action-dock-wrap { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-side-tab-container { display: none !important; }
        }
      `}</style>
    </>
  );
}
