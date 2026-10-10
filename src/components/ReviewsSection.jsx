import React from 'react';
import { testimonials } from '../data/resortData';
import { Star, MessageSquare, Quote, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function ReviewsSection({ lang }) {
  return (
    <section style={{ padding: '100px 20px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <MessageSquare size={14} />
            {lang === 'hi' ? 'ग्राहक समीक्षाएं व अनुभव' : 'Guest Reviews & Ratings'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'अतिथियों के अनुभव एवं शब्द' : 'Loved by Couples & Families'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? 'जस्टडायल एवं गूगल पर 4.3★ स्टार रेटिंग से प्रमाणित रीवा का विश्वसनीय रिसॉर्ट।' 
              : 'Verified guest ratings and heartfelt testimonials from host families in Rewa and outstation guests.'}
          </p>
        </div>

        {/* Rating Banner */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '800px',
            margin: '0 auto 50px auto',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold-secondary)', fontFamily: 'var(--font-cinzel)' }}>
              4.3
            </div>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < 4 ? "var(--gold-secondary)" : "none"} color="var(--gold-secondary)" />
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Based on ratings on Justdial & Google Maps
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '0 12px', borderRight: '1px solid rgba(197, 155, 39, 0.2)' }}>
              <div style={{ fontWeight: 700, color: 'var(--emerald-deep)', fontSize: '1.1rem', fontFamily: 'var(--font-cinzel)' }}>100%</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Pure Veg Gourmet</div>
            </div>
            <div style={{ textAlign: 'center', padding: '0 12px' }}>
              <div style={{ fontWeight: 700, color: 'var(--emerald-deep)', fontSize: '1.1rem', fontFamily: 'var(--font-cinzel)' }}>24/7</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>AC Power Backup</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Quote size={32} color="rgba(197, 155, 39, 0.25)" style={{ position: 'absolute', top: '24px', right: '24px' }} />

              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--gold-secondary)" color="var(--gold-secondary)" />
                ))}
              </div>

              <p style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1, fontStyle: 'italic', fontFamily: 'var(--font-cormorant)' }}>
                "{t.text}"
              </p>

              <div style={{ borderTop: '1px solid rgba(197, 155, 39, 0.2)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ color: 'var(--gold-dark)', fontSize: '1rem', display: 'block', fontFamily: 'var(--font-cinzel)' }}>{t.name}</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{t.event} • {t.city}</span>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-accent)' }}>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
