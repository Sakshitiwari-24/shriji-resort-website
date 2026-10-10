import React from 'react';
import { resortDetails } from '../data/resortData';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';

export default function LocationSection({ lang }) {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14555.201!2d81.3102713!3d24.5566158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845b4b12191649%3A0x1!2sShriji+Resorts+and+Marriage+Garden+Rewa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  return (
    <section id="location" style={{ padding: '100px 20px', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <MapPin size={14} />
            {lang === 'hi' ? 'संपर्क व लोकेशन' : 'Contact & Location Map'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'श्रीजी रिसॉर्ट्स रीवा पधारें' : 'Visit Shriji Resorts Rewa'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? 'माखन लाल चतुर्वेदी यूनिवर्सिटी के पास, शिव नगर रोड, इलाहाबाद रोड, रीवा (म.प्र.) 486001' 
              : 'Located conveniently on Allahabad Road, Shiv Nagar Road, near Makhan Lal Chaturvedi University, Rewa, MP.'}
          </p>
        </div>

        {/* Content & Map Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'start' }}>
          
          {/* Contact Details Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }} className="font-cinzel text-gold-bright">
              Hotline & Address
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ background: 'rgba(197, 155, 39, 0.15)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="var(--gold-secondary)" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--emerald-deep)', fontSize: '0.98rem', fontFamily: 'var(--font-cinzel)' }}>Resort Address</strong>
                  <span style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.5, display: 'block' }}>
                    {resortDetails.address}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ background: 'rgba(197, 155, 39, 0.15)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} color="var(--gold-secondary)" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--emerald-deep)', fontSize: '0.98rem', fontFamily: 'var(--font-cinzel)' }}>Phone Numbers</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                    {resortDetails.phones.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone}`} style={{ color: 'var(--gold-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ background: 'rgba(197, 155, 39, 0.15)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} color="var(--gold-secondary)" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--emerald-deep)', fontSize: '0.98rem', fontFamily: 'var(--font-cinzel)' }}>Operational Hours</strong>
                  <span style={{ color: '#334155', fontSize: '0.9rem' }}>{resortDetails.openingHours}</span>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(resortDetails.name + " " + resortDetails.address)}`} 
                target="_blank" 
                rel="noreferrer"
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center', padding: '12px', fontSize: '0.82rem' }}
              >
                <Navigation size={16} /> Get Directions
              </a>

              <a 
                href={`https://wa.me/${resortDetails.whatsapp}`}
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

          </div>

          {/* Interactive Map Container */}
          <div className="glass-panel" style={{ height: '450px', overflow: 'hidden', padding: '12px' }}>
            <iframe 
              title="Shriji Resorts Rewa Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-sm)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
