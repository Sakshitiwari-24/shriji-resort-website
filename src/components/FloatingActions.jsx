import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { resortDetails } from '../data/resortData';

export default function FloatingActions({ onOpenBooking }) {
  const [showMobileDock, setShowMobileDock] = useState(false);

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
      `}</style>
    </>
  );
}
