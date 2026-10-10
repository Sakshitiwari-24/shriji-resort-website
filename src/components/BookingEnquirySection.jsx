import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Send, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { resortDetails } from '../data/resortData';

export default function BookingEnquirySection({ initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: initialData?.eventType || 'Grand Wedding & Reception',
    date: '',
    guestCount: '600 - 1200 Guests',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [revealedPhones, setRevealedPhones] = useState({});

  useEffect(() => {
    if (initialData?.eventType) {
      setFormData(prev => ({ ...prev, eventType: initialData.eventType }));
    }
  }, [initialData]);

  const directWhatsAppUrl = `https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent('Hello Shriji Resort, I would like to enquire about venue booking dates and package pricing.')}`;

  const togglePhoneReveal = (idx, e) => {
    e.preventDefault();
    e.stopPropagation();
    setRevealedPhones(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getMaskedPhone = (phone) => {
    const parts = phone.split(' ');
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1]} •••••`;
    }
    return `${phone.slice(0, 6)} •••••••`;
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) errs.date = 'Event Date is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const waText = encodeURIComponent(
      `Hello Shriji Resort,\n\nI would like to enquire about venue booking:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event: ${formData.eventType}\n` +
      `• Date: ${formData.date}\n` +
      `• Guests: ${formData.guestCount}\n` +
      (formData.message ? `• Note: ${formData.message}\n` : '') +
      `\nPlease send package rates and availability.`
    );

    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  const deskLabels = [
    'Primary Booking Line',
    'Event Coordinator Desk',
    'Front Reception Office'
  ];

  return (
    <section
      id="booking"
      className="paper-texture"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Invitation & Reservation
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Plan Your Date with <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Shriji Resort
            </span>
          </h2>
        </div>

        {/* Two-Part Layout: Left Form (Warm Paper Card), Right Direct Contact Numbers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* Left: Warm Paper-Textured Invitation Card Form */}
          <div
            className="warm-paper-card"
            style={{
              padding: '40px 32px',
              background: '#FBF6F0',
              border: '1.5px solid var(--border-sand)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '22px', flexWrap: 'wrap', gap: '8px' }}>
              <span className="font-accent" style={{ fontStyle: 'italic', fontSize: '1.45rem', color: 'var(--terracotta)' }}>
                Reservation Request
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                Instant Response
              </span>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 10px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.12)', color: '#25D366', marginBottom: '14px' }}>
                  <CheckCircle size={28} />
                </div>
                <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: 'var(--deep-aubergine)', marginBottom: '8px', fontSize: '1.3rem' }}>
                  Inquiry Sent Successfully
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Thank you, <strong>{formData.name}</strong>. WhatsApp has been opened with your prefilled details.
                </p>

                {/* Minimal Actions in Submitted State */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '18px' }}>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-btn-wa"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      background: 'transparent',
                      border: '1px solid rgba(37, 211, 102, 0.45)',
                      color: '#15803d',
                      borderRadius: 'var(--radius-pill)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <MessageCircle size={14} style={{ color: '#16a34a' }} />
                    <span>Open WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${resortDetails.phones[0]}`}
                    className="minimal-btn-call"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      background: 'transparent',
                      border: '1px solid rgba(43, 22, 32, 0.25)',
                      color: 'var(--deep-aubergine)',
                      borderRadius: 'var(--radius-pill)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Phone size={13} style={{ color: 'var(--terracotta)' }} />
                    <span>Call Desk</span>
                  </a>
                </div>

                <button 
                  onClick={() => setSubmitted(false)} 
                  className="minimal-outline-btn"
                  style={{ 
                    padding: '8px 18px', 
                    background: 'transparent', 
                    border: '1px solid var(--terracotta)', 
                    color: 'var(--terracotta)', 
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                  <div>
                    <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Amit Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ borderColor: errors.name ? '#B5523B' : undefined }}
                    />
                    {errors.name && <span style={{ color: '#B5523B', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  <div>
                    <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 94251 86600"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ borderColor: errors.phone ? '#B5523B' : undefined }}
                    />
                    {errors.phone && <span style={{ color: '#B5523B', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      Event Type
                    </label>
                    <select value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}>
                      <option value="Grand Wedding & Reception">Grand Wedding & Reception</option>
                      <option value="Wedding Parties & Receptions">Wedding Parties & Receptions</option>
                      <option value="Engagements & Ring Ceremonies">Engagements & Ring Ceremonies</option>
                      <option value="Birthday Parties & Celebrations">Birthday Parties & Celebrations</option>
                      <option value="Retirement Parties & Corporate Meets">Retirement Parties & Corporate Meets</option>
                      <option value="Mundan Sanskar & Sacred Pooja">Mundan Sanskar & Sacred Pooja</option>
                      <option value="Anniversaries & Sangeet Nights">Anniversaries & Sangeet Nights</option>
                      <option value="Sangeet / Haldi / Mehendi">Sangeet / Haldi / Mehendi</option>
                      <option value="Intimate Engagement">Intimate Engagement</option>
                      <option value="Resort Suite Stay">Resort Suite Stay</option>
                      <option value="Custom Ceremony / Function">Custom Ceremony / Function</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      Event Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ borderColor: errors.date ? '#B5523B' : undefined }}
                    />
                    {errors.date && <span style={{ color: '#B5523B', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.date}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention menu choices, room requirements or decor theme..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Minimal Submit Button */}
                <button 
                  type="submit" 
                  className="minimal-submit-btn" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 20px', 
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--terracotta)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Book Your Date via WhatsApp</span>
                </button>

                {/* Minimal Instant Contact Options */}
                <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid rgba(181, 82, 59, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(181, 82, 59, 0.12)' }} />
                    <span style={{ fontSize: '0.67rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Or Contact Us Directly
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(181, 82, 59, 0.12)' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px' }}>
                    {/* Minimal WhatsApp Button */}
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="minimal-btn-wa"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '7px',
                        padding: '9px 14px',
                        background: 'transparent',
                        border: '1px solid rgba(37, 211, 102, 0.45)',
                        color: '#15803d',
                        borderRadius: 'var(--radius-pill)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <MessageCircle size={15} style={{ color: '#16a34a' }} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    {/* Minimal Call Button */}
                    <a
                      href={`tel:${resortDetails.phones[0]}`}
                      className="minimal-btn-call"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '7px',
                        padding: '9px 14px',
                        background: 'transparent',
                        border: '1px solid rgba(43, 22, 32, 0.22)',
                        color: 'var(--deep-aubergine)',
                        borderRadius: 'var(--radius-pill)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Phone size={14} style={{ color: 'var(--terracotta)' }} />
                      <span>Call Reservation Desk</span>
                    </a>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right: Direct Contact Numbers List (Numbers Masked with Reveal Icon) */}
          <div
            className="warm-paper-card"
            style={{
              padding: '40px 32px',
              background: '#2B1620',
              color: '#F3E9DC'
            }}
          >
            <span className="tag-label" style={{ color: '#E8A33D', marginBottom: '12px', display: 'block' }}>
              Direct Lines
            </span>

            <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: '#F3E9DC', marginBottom: '18px' }}>
              Speak with Our Desk
            </h3>

            <p style={{ fontSize: '0.925rem', color: '#D9A5A0', lineHeight: 1.6, marginBottom: '28px' }}>
              Prefer to speak directly? Call our reservation managers for instant answers on dates, package rates, and menu customization.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {resortDetails.phones.map((phone, idx) => {
                const isRevealed = !!revealedPhones[idx];
                const label = deskLabels[idx] || `Line ${idx + 1}`;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      background: 'rgba(243, 233, 220, 0.05)',
                      border: '1px solid rgba(232, 163, 61, 0.22)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'var(--transition)',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ fontSize: '0.68rem', color: '#D9A5A0', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        {label}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={13} style={{ color: '#E8A33D', flexShrink: 0 }} />
                        <span
                          style={{
                            color: '#F3E9DC',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            fontFamily: isRevealed ? 'var(--font-body)' : 'monospace',
                            letterSpacing: isRevealed ? '0.02em' : '0.12em'
                          }}
                        >
                          {isRevealed ? phone : getMaskedPhone(phone)}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                      {/* Icon to Toggle Reveal / Hide */}
                      <button
                        type="button"
                        onClick={(e) => togglePhoneReveal(idx, e)}
                        title={isRevealed ? "Hide number" : "Click to view full number"}
                        aria-label={isRevealed ? "Hide phone number" : "Reveal phone number"}
                        className="phone-reveal-btn"
                        style={{
                          background: isRevealed ? 'rgba(232, 163, 61, 0.22)' : 'rgba(243, 233, 220, 0.08)',
                          border: '1px solid rgba(232, 163, 61, 0.35)',
                          color: '#E8A33D',
                          padding: '6px 10px',
                          borderRadius: 'var(--radius-pill)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isRevealed ? 'Hide' : 'Show'}</span>
                      </button>

                      {/* Direct Call Link */}
                      <a
                        href={`tel:${phone}`}
                        title={`Call ${phone}`}
                        className="phone-call-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '6px 12px',
                          background: 'rgba(232, 163, 61, 0.12)',
                          border: '1px solid rgba(232, 163, 61, 0.35)',
                          borderRadius: 'var(--radius-pill)',
                          color: '#E8A33D',
                          textDecoration: 'none',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>Call</span>
                        <span style={{ fontSize: '0.8rem' }}>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid rgba(243, 233, 220, 0.12)' }}>
              <span className="font-body" style={{ fontSize: '0.72rem', color: '#D9A5A0', display: 'block' }}>
                Operating Hours
              </span>
              <p className="font-display" style={{ fontStyle: 'italic', fontSize: '1rem', color: '#F3E9DC', marginTop: '2px' }}>
                {resortDetails.openingHours}
              </p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .minimal-submit-btn:hover {
          background: var(--terracotta-dark) !important;
          transform: translateY(-1px);
        }
        .minimal-btn-wa:hover {
          background: rgba(37, 211, 102, 0.08) !important;
          border-color: #25D366 !important;
          color: #166534 !important;
          transform: translateY(-1px);
        }
        .minimal-btn-call:hover {
          background: rgba(43, 22, 32, 0.06) !important;
          border-color: var(--terracotta) !important;
          color: var(--terracotta-dark) !important;
          transform: translateY(-1px);
        }
        .minimal-outline-btn:hover {
          background: rgba(181, 82, 59, 0.06) !important;
        }
        .phone-reveal-btn:hover {
          background: rgba(232, 163, 61, 0.28) !important;
          border-color: #E8A33D !important;
        }
        .phone-call-link:hover {
          background: #E8A33D !important;
          color: #2B1620 !important;
          border-color: #E8A33D !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
