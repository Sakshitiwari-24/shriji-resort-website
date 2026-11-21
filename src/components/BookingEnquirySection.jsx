import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Send, CheckCircle, Sparkles, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resortDetails } from '../data/resortData';

export default function BookingEnquirySection({ initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: initialData?.eventType || 'Grand Wedding & Reception',
    date: initialData?.date || '',
    guestCount: initialData?.guestCount || '600 - 1200 Guests',
    message: initialData?.message || ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        eventType: initialData.eventType || prev.eventType,
        date: initialData.date || prev.date,
        guestCount: initialData.guestCount || prev.guestCount,
        message: initialData.message || prev.message
      }));
    }
  }, [initialData]);

  const directWhatsAppUrl = `https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent('Hello Shriji Resort, I would like to enquire about venue booking dates and availability.')}`;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.date) errs.date = 'Event Date is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (_) {}

    const waText = encodeURIComponent(
      `Hello Shriji Resort,\n\nI would like to enquire about venue booking:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event: ${formData.eventType}\n` +
      `• Planned Date: ${formData.date}\n` +
      `• Guests: ${formData.guestCount}\n` +
      (formData.message ? `• Requirements/Notes: ${formData.message}\n` : '') +
      `\nPlease share menu options and date availability.`
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
      className="paper-texture responsive-section"
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
            Book Your Date
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Plan Your Event at <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Shriji Resort
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
            Fill out the simple form below and our team in Rewa will get back to you quickly with date availability and booking details.
          </p>
        </div>

        {/* Two-Part Layout: Left Form, Right Direct Contact Numbers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left: Warm Paper-Textured Invitation Card Form */}
          <div
            className="warm-paper-card responsive-card"
            style={{
              padding: '40px 32px',
              background: '#FBF6F0',
              border: '1.5px solid var(--border-sand)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 16px 40px rgba(43, 22, 32, 0.08)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px', flexWrap: 'wrap', gap: '8px' }}>
              <span className="font-accent" style={{ fontStyle: 'italic', fontSize: '1.55rem', color: 'var(--terracotta)' }}>
                Booking Enquiry Form
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                Quick Reply
              </span>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 10px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', marginBottom: '16px' }}>
                  <CheckCircle size={32} />
                </div>
                <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: 'var(--deep-aubergine)', marginBottom: '10px', fontSize: '1.45rem' }}>
                  Enquiry Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. WhatsApp has opened with your event details. Our team will contact you soon.
                </p>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-btn-wa"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      background: 'rgba(37, 211, 102, 0.12)',
                      border: '1px solid #25D366',
                      color: '#15803d',
                      borderRadius: 'var(--radius-pill)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  >
                    <MessageCircle size={16} style={{ color: '#16a34a' }} />
                    <span>Open WhatsApp Chat</span>
                  </a>

                  <a
                    href={`tel:${resortDetails.phones[0]}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      background: 'var(--warm-sand)',
                      border: '1px solid var(--border-sand)',
                      color: 'var(--deep-aubergine)',
                      borderRadius: 'var(--radius-pill)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  >
                    <Phone size={15} style={{ color: 'var(--terracotta)' }} />
                    <span>Call Desk Directly</span>
                  </a>
                </div>

                <button 
                  onClick={() => setSubmitted(false)} 
                  style={{ 
                    padding: '8px 20px', 
                    background: 'transparent', 
                    border: '1px solid var(--terracotta)', 
                    color: 'var(--terracotta)', 
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '18px', marginBottom: '18px' }}>
                  <div>
                    <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rameshwar Tiwari"
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
                      placeholder="e.g. 94251 86600"
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
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ borderColor: errors.date ? '#B5523B' : undefined }}
                    />
                    {errors.date && <span style={{ color: '#B5523B', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.date}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Estimated Guest Count
                  </label>
                  <select value={formData.guestCount} onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}>
                    <option value="150 - 300 Guests">150 - 300 Guests (Intimate Gathering)</option>
                    <option value="300 - 600 Guests">300 - 600 Guests (Medium Celebration)</option>
                    <option value="600 - 1200 Guests">600 - 1,200 Guests (Grand Royal Wedding)</option>
                    <option value="1200 - 2000+ Guests">1,200 - 2,000+ Guests (Full Marriage Garden Lawn)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <label className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Special Requirements / Menu Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention pure veg menu choices, room requirements, decor theme, or special notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Primary Submit Button */}
                <button 
                  type="submit" 
                  className="btn-book"
                  style={{ 
                    width: '100%', 
                    padding: '14px 24px', 
                    justifyContent: 'center',
                    fontSize: '0.85rem'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                {/* Direct Instant Actions */}
                <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid rgba(181, 82, 59, 0.15)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))', gap: '10px' }}>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '10px 14px',
                        background: 'rgba(37, 211, 102, 0.1)',
                        border: '1px solid rgba(37, 211, 102, 0.45)',
                        color: '#15803d',
                        borderRadius: 'var(--radius-pill)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      <MessageCircle size={15} style={{ color: '#16a34a' }} />
                      <span>Direct WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${resortDetails.phones[0]}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '10px 14px',
                        background: 'rgba(43, 22, 32, 0.05)',
                        border: '1px solid rgba(43, 22, 32, 0.22)',
                        color: 'var(--deep-aubergine)',
                        borderRadius: 'var(--radius-pill)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      <Phone size={14} style={{ color: 'var(--terracotta)' }} />
                      <span>Call {resortDetails.phones[0]}</span>
                    </a>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right: Direct Contact Lines (Clearly Unmasked Numbers with Direct Call Links) */}
          <div
            className="warm-paper-card responsive-card"
            style={{
              padding: '40px 32px',
              background: '#2B1620',
              color: '#F3E9DC',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--saffron)'
            }}
          >
            <span className="tag-label" style={{ color: '#E8A33D', marginBottom: '10px', display: 'block' }}>
              Call Us Directly
            </span>

            <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: '#F3E9DC', marginBottom: '14px' }}>
              Talk to Our Team
            </h3>

            <p style={{ fontSize: '0.925rem', color: '#D9A5A0', lineHeight: 1.6, marginBottom: '28px' }}>
              Want to check date availability or visit the venue? Call our booking numbers directly.
            </p>

            {/* Clearly Visible Official Booking Numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {resortDetails.phones.map((phone, idx) => {
                const label = deskLabels[idx] || `Line ${idx + 1}`;
                return (
                  <div
                    key={idx}
                    className="booking-desk-row"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 18px',
                      background: 'rgba(243, 233, 220, 0.06)',
                      border: '1px solid rgba(232, 163, 61, 0.25)',
                      borderRadius: 'var(--radius-md)',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '0.7rem', color: '#D9A5A0', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        {label}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={15} style={{ color: '#E8A33D', flexShrink: 0 }} />
                        <a
                          href={`tel:${phone}`}
                          style={{
                            color: '#F3E9DC',
                            fontWeight: 700,
                            fontSize: '1.02rem',
                            letterSpacing: '0.02em',
                            textDecoration: 'none'
                          }}
                        >
                          {phone}
                        </a>
                      </div>
                    </div>

                    <div className="booking-desk-cta" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                      <a
                        href={`tel:${phone}`}
                        title={`Call ${phone}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          background: 'linear-gradient(135deg, #B5523B 0%, #E8A33D 100%)',
                          borderRadius: 'var(--radius-pill)',
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          boxShadow: '0 4px 12px rgba(181, 82, 59, 0.3)'
                        }}
                      >
                        <Phone size={12} />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Operating Hours and Location */}
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(243, 233, 220, 0.12)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={15} style={{ color: '#E8A33D' }} />
                <span style={{ fontSize: '0.85rem', color: '#F3E9DC', fontWeight: 600 }}>
                  {resortDetails.openingHours}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} style={{ color: '#E8A33D', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.82rem', color: '#D9A5A0', lineHeight: 1.5 }}>
                  {resortDetails.address}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
