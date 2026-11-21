import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { resortDetails } from '../data/resortData';

export default function EventCostCalculator({ onOpenBooking }) {
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(500);
  const [cateringTier, setCateringTier] = useState('grand'); // classic: 750, grand: 950, imperial: 1250
  const [decorTier, setDecorTier] = useState('royal'); // royal: 120000, bohemian: 85000, classic: 50000
  const [roomCount, setRoomCount] = useState(10);
  const [addons, setAddons] = useState({
    barat: true,
    fireworks: true,
    shehnai: false,
    drone: true
  });

  // Calculation Logic
  const venueCost = eventType === 'wedding' ? 150000 : eventType === 'pre-wedding' ? 75000 : 50000;
  
  const perPlatePrice = cateringTier === 'imperial' ? 1250 : cateringTier === 'grand' ? 950 : 750;
  const totalCateringCost = guests * perPlatePrice;

  const decorCost = decorTier === 'royal' ? 120000 : decorTier === 'bohemian' ? 85000 : 50000;

  const totalRoomCost = roomCount * 3500;

  const addonCosts = 
    (addons.barat ? 35000 : 0) +
    (addons.fireworks ? 25000 : 0) +
    (addons.shehnai ? 20000 : 0) +
    (addons.drone ? 35000 : 0);

  const grandTotal = venueCost + totalCateringCost + decorCost + totalRoomCost + addonCosts;

  const handleWhatsAppQuotation = () => {
    const text = `Hello Shriji Resort! I would like to get an official quotation for my ${eventType.toUpperCase()} event:\n` +
      `• Guests: ${guests}\n` +
      `• Catering Package: ₹${perPlatePrice}/plate (${cateringTier.toUpperCase()})\n` +
      `• Decor Tier: ${decorTier.toUpperCase()} (₹${decorCost.toLocaleString('en-IN')})\n` +
      `• AC Rooms Required: ${roomCount} (₹${totalRoomCost.toLocaleString('en-IN')})\n` +
      `• Estimated Total: ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `Please confirm venue availability for my planned dates!`;
    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleApplyToBooking = () => {
    const eventName = eventType === 'wedding' ? 'Grand Wedding & Reception' : eventType === 'pre-wedding' ? 'Engagements & Ring Ceremonies' : 'Birthday Parties & Celebrations';
    const message = `Estimated Budget: ₹${grandTotal.toLocaleString('en-IN')} (${guests} guests, ${cateringTier} catering, ${roomCount} rooms)`;
    if (onOpenBooking) {
      onOpenBooking({ eventType: eventName, message });
    }
  };

  return (
    <section
      id="calculator"
      className="paper-texture"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Interactive Budget Planner
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Estimate Your Wedding & <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Celebration Package
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
            Customize your celebration layout, guest count, pure vegetarian gourmet catering, royal floral decor, and guest suite requirements to get an instant cost projection.
          </p>
        </div>

        {/* Calculator Grid: Left Controls, Right Live Summary */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Controls Panel */}
          <div
            className="warm-paper-card"
            style={{
              padding: '36px 32px',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--border-sand)',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              boxShadow: '0 16px 40px rgba(43, 22, 32, 0.06)'
            }}
          >
            {/* 1. Event Type */}
            <div>
              <label
                className="font-body"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--terracotta)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                1. Select Event Type
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'wedding', label: 'Wedding & Reception' },
                  { id: 'pre-wedding', label: 'Ring / Sangeet' },
                  { id: 'party', label: 'Party / Birthday' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEventType(item.id)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: eventType === item.id ? 'var(--deep-aubergine)' : 'var(--warm-sand-light)',
                      color: eventType === item.id ? '#F3E9DC' : 'var(--deep-aubergine)',
                      border: `1.5px solid ${eventType === item.id ? 'var(--terracotta)' : 'var(--border-sand)'}`,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Expected Guests Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label
                  className="font-body"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--terracotta)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  2. Number of Guests
                </label>
                <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--deep-aubergine)' }}>
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--terracotta)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>100 Guests</span>
                <span>1,000 Guests</span>
                <span>2,000 Guests</span>
              </div>
            </div>

            {/* 3. Catering Tier */}
            <div>
              <label
                className="font-body"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--terracotta)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                3. Pure Veg Catering Package
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'classic', label: 'Classic Shahi', price: '₹750' },
                  { id: 'grand', label: 'Grand Maharaja', price: '₹950' },
                  { id: 'imperial', label: 'Imperial Royal', price: '₹1,250' }
                ].map(pkg => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setCateringTier(pkg.id)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: cateringTier === pkg.id ? 'var(--deep-aubergine)' : 'var(--warm-sand-light)',
                      color: cateringTier === pkg.id ? '#F3E9DC' : 'var(--deep-aubergine)',
                      border: `1.5px solid ${cateringTier === pkg.id ? 'var(--terracotta)' : 'var(--border-sand)'}`,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>{pkg.label}</div>
                    <div style={{ fontSize: '0.85rem', color: cateringTier === pkg.id ? 'var(--saffron)' : 'var(--terracotta)', fontWeight: 700, marginTop: '2px' }}>
                      {pkg.price}/plt
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Decor & Theme Tier */}
            <div>
              <label
                className="font-body"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--terracotta)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                4. Mandap & Lawn Decor
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'classic', label: 'Elegant Classic', cost: '₹50,000' },
                  { id: 'bohemian', label: 'Floral Sunset', cost: '₹85,000' },
                  { id: 'royal', label: 'Royal Maharaja', cost: '₹1,20,000' }
                ].map(d => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDecorTier(d.id)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: decorTier === d.id ? 'var(--deep-aubergine)' : 'var(--warm-sand-light)',
                      color: decorTier === d.id ? '#F3E9DC' : 'var(--deep-aubergine)',
                      border: `1.5px solid ${decorTier === d.id ? 'var(--terracotta)' : 'var(--border-sand)'}`,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>{d.label}</div>
                    <div style={{ fontSize: '0.8rem', color: decorTier === d.id ? 'var(--saffron)' : 'var(--terracotta)', fontWeight: 700, marginTop: '2px' }}>
                      {d.cost}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. AC Rooms Needed */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label
                  className="font-body"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--terracotta)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  5. AC Rooms for Guests (₹3,500/night)
                </label>
                <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--deep-aubergine)' }}>
                  {roomCount} Rooms
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={roomCount}
                onChange={(e) => setRoomCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--terracotta)', cursor: 'pointer' }}
              />
            </div>

            {/* 6. Special Event Addons */}
            <div>
              <label
                className="font-body"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--terracotta)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                6. Celebration Add-ons
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {[
                  { key: 'barat', label: 'Barat Band & Welcome (₹35K)' },
                  { key: 'fireworks', label: 'Cold Pyro Fireworks (₹25K)' },
                  { key: 'shehnai', label: 'Live Shehnai / Sitar (₹20K)' },
                  { key: 'drone', label: 'Drone & 4K Coverage (₹35K)' }
                ].map(ad => (
                  <label
                    key={ad.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--warm-sand-light)',
                      border: '1px solid var(--border-sand)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={addons[ad.key]}
                      onChange={(e) => setAddons({ ...addons, [ad.key]: e.target.checked })}
                      style={{ width: 'auto', accentColor: 'var(--terracotta)', cursor: 'pointer' }}
                    />
                    <span>{ad.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Live Quote & Summary Card */}
          <div
            className="warm-paper-card"
            style={{
              padding: '36px 32px',
              background: 'var(--deep-aubergine)',
              color: '#F3E9DC',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--saffron)',
              position: 'sticky',
              top: '100px',
              boxShadow: '0 20px 50px rgba(43, 22, 32, 0.3)'
            }}
          >
            <span className="tag-label" style={{ color: 'var(--saffron)', marginBottom: '8px', display: 'block' }}>
              Instant Estimation
            </span>

            <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: '#F3E9DC', marginBottom: '24px' }}>
              Package Cost Summary
            </h3>

            {/* Line Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 233, 220, 0.1)', paddingBottom: '10px' }}>
                <span style={{ color: '#D9A5A0' }}>Venue Booking ({eventType})</span>
                <span style={{ fontWeight: 600 }}>₹{venueCost.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 233, 220, 0.1)', paddingBottom: '10px' }}>
                <span style={{ color: '#D9A5A0' }}>Catering ({guests} × ₹{perPlatePrice})</span>
                <span style={{ fontWeight: 600 }}>₹{totalCateringCost.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 233, 220, 0.1)', paddingBottom: '10px' }}>
                <span style={{ color: '#D9A5A0' }}>Decor ({decorTier.toUpperCase()})</span>
                <span style={{ fontWeight: 600 }}>₹{decorCost.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 233, 220, 0.1)', paddingBottom: '10px' }}>
                <span style={{ color: '#D9A5A0' }}>AC Rooms ({roomCount} Suites)</span>
                <span style={{ fontWeight: 600 }}>₹{totalRoomCost.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 233, 220, 0.1)', paddingBottom: '10px' }}>
                <span style={{ color: '#D9A5A0' }}>Celebration Add-ons</span>
                <span style={{ fontWeight: 600 }}>₹{addonCosts.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Grand Total */}
            <div
              style={{
                background: 'rgba(232, 163, 61, 0.12)',
                border: '1px solid rgba(232, 163, 61, 0.35)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'center',
                marginBottom: '28px'
              }}
            >
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#D9A5A0', display: 'block' }}>
                Estimated Grand Total
              </span>
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--saffron)',
                  marginTop: '4px'
                }}
              >
                ₹{grandTotal.toLocaleString('en-IN')}*
              </div>
              <span style={{ fontSize: '0.72rem', color: '#D9A5A0', marginTop: '4px', display: 'block' }}>
                *Subject to exact dates and final guest confirmation
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                type="button"
                onClick={handleWhatsAppQuotation}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#25D366',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                  transition: 'all 0.2s ease'
                }}
              >
                <MessageCircle size={18} />
                <span>Get Quotation on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleApplyToBooking}
                className="btn-book"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px',
                  fontSize: '0.85rem'
                }}
              >
                <span>Transfer Details to Booking Form</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
