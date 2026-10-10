import React, { useState } from 'react';
import { X, Play, Compass, Eye, Sparkles, MapPin } from 'lucide-react';

export default function VirtualTourModal({ isOpen, onClose, lang }) {
  const [activeStage, setActiveStage] = useState('poolside');

  if (!isOpen) return null;

  const tourStages = {
    poolside: {
      title: "Crystal Pool & Haldi Stage",
      image: "/gallery/poolside_haldi.jpg",
      desc: "Pristine blue swimming pool equipped with yellow Haldi & Mehendi stage truss, umbrellas, and sun loungers."
    },
    viplounge: {
      title: "Imperial VIP Dining Lounge",
      image: "/gallery/vip_lounge_hall.jpg",
      desc: "Opulent banquet hall with royal blue velvet sofas, glass-top gold thali banquet tables, and acoustic wall panels."
    },
    lawn: {
      title: "Vibrant Mandap & Royal Stage",
      image: "/gallery/mandap_yellow_pink.jpg",
      desc: "Sprawling 35,000 sq ft marriage garden featuring custom pink & gold draped mandap stages and guest seating pavilions."
    },
    canopy: {
      title: "Night Canopy & Tented Lawn",
      image: "/gallery/lawn_night_tents.jpg",
      desc: "Lush green lawn at night adorned with colorful conical tent cabanas, floodlights, and festive dining arrangements."
    },
    suite: {
      title: "Executive Luxury AC Room",
      image: "/gallery/room_yellow.jpg",
      desc: "Brightly decorated air-conditioned room with king bed, sofa lounge, and complete comfort for wedding guests."
    },
    entrance: {
      title: "Grand Royal Entrance Gate",
      image: "/gallery/real_1.jpg",
      desc: "Architectural arched entrance gate illuminated with fairy lights and welcome signage."
    }
  };

  const current = tourStages[activeStage];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel"
        style={{
          maxWidth: '960px',
          width: '92%',
          padding: '32px',
          position: 'relative',
          background: 'rgba(5, 13, 10, 0.98)',
          border: '1.5px solid var(--gold-primary)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.9)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="glass-pill" style={{ marginBottom: '8px' }}>
            <Compass size={14} className="animate-sparkle" />
            Interactive 360° Virtual Walkthrough
          </span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }} className="font-cinzel text-gold-gradient">
            Explore Shriji Resort Rewa
          </h3>
        </div>

        {/* Stage Selector Buttons */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
          {Object.keys(tourStages).map((key) => (
            <button
              key={key}
              onClick={() => setActiveStage(key)}
              style={{
                background: activeStage === key ? 'var(--gold-primary)' : 'rgba(255,255,255,0.06)',
                color: activeStage === key ? '#050d0a' : '#cbd5e1',
                border: '1px solid var(--border-gold)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              {tourStages[key].title}
            </button>
          ))}
        </div>

        {/* Stage Display Frame */}
        <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '400px' }}>
          <img 
            src={current.image} 
            alt={current.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5, 13, 10, 0.95), transparent 50%)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-secondary)' }} className="font-cinzel">
              {current.title}
            </h4>
            <p style={{ color: '#e2e8f0', fontSize: '0.92rem', maxWidth: '650px' }}>
              {current.desc}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
