import React, { useState } from 'react';
import { X, Calendar, Phone, Mail, User, Users, CheckCircle, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resortDetails } from '../data/resortData';

export default function BookingModal({ isOpen, onClose, initialData, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: initialData?.date || '',
    eventType: initialData?.type || 'Grand Wedding',
    guests: initialData?.guests || '500-1000',
    venue: initialData?.venue || 'Royal Marriage Lawn',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger Celebratory Confetti Fireworks
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f4c430', '#ffffff', '#800f2f']
    });
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Shriji Resorts! I submitted a booking request on your website:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event Date: ${formData.date}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Guests: ${formData.guests}\n` +
      `• Preferred Venue: ${formData.venue}\n\n` +
      `Please confirm venue reservation availability!`;
    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel"
        style={{
          maxWidth: '650px',
          width: '92%',
          padding: '36px',
          position: 'relative',
          background: 'rgba(5, 13, 10, 0.98)',
          border: '1.5px solid var(--gold-primary)',
          maxHeight: '90vh',
          overflowY: 'auto'
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
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="glass-pill" style={{ marginBottom: '8px' }}>
                <Sparkles size={14} className="animate-sparkle" />
                Reserve Your Event Date
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }} className="font-cinzel text-gold-bright">
                Shriji Resorts Consultation Inquiry
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                Fill out the details below to lock your preferred wedding dates in Rewa
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-secondary)', marginBottom: '4px', fontWeight: 600 }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ paddingLeft: '40px' }}
                  />
                  <User size={16} color="var(--gold-primary)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-secondary)', marginBottom: '4px', fontWeight: 600 }}>
                    Mobile Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ paddingLeft: '40px' }}
                    />
                    <Phone size={16} color="var(--gold-primary)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-secondary)', marginBottom: '4px', fontWeight: 600 }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="email" 
                      placeholder="your.name@gmail.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ paddingLeft: '40px' }}
                    />
                    <Mail size={16} color="var(--gold-primary)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-secondary)', marginBottom: '4px', fontWeight: 600 }}>
                    Preferred Event Date *
                  </label>
                  <input 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-secondary)', marginBottom: '4px', fontWeight: 600 }}>
                    Event Type
                  </label>
                  <select 
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option value="Grand Wedding">Grand Wedding & Reception</option>
                    <option value="Sangeet / Haldi">Sangeet / Haldi Ceremony</option>
                    <option value="Resort Stay">Luxury Resort Stay</option>
                    <option value="Corporate Event">Corporate Event / Anniversary</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-secondary)', marginBottom: '4px', fontWeight: 600 }}>
                  Special Requirements / Notes
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Mention room count, decor themes, catering preferences, or special requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ marginTop: '12px', justifyContent: 'center' }}>
                Submit Reservation Inquiry
                <Send size={18} />
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '2px solid var(--gold-secondary)',
              color: 'var(--gold-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle size={38} />
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 700 }} className="font-cinzel text-gold-gradient">
              Inquiry Received!
            </h3>

            <p style={{ color: '#cbd5e1', margin: '12px 0 24px 0', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. Your event inquiry for <strong>{formData.eventType}</strong> on <strong>{formData.date || 'TBD'}</strong> has been registered with Reference ID <strong style={{ color: 'var(--gold-secondary)' }}>#SJR-2026-{(Math.random()*9000+1000).toFixed(0)}</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={handleWhatsAppSend}
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Send Inquiry Copy to WhatsApp
              </button>

              <button 
                onClick={onClose}
                className="btn-outline-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
