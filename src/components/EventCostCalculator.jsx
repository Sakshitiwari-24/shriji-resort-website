import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { resortDetails } from '../data/resortData';

export default function EventCostCalculator({ onOpenBooking, lang }) {
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(500);
  const [cateringTier, setCateringTier] = useState('imperial'); // imperial: 1200, grand: 850, custom: 1000
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
  
  const perPlatePrice = cateringTier === 'imperial' ? 1200 : cateringTier === 'grand' ? 850 : 1000;
  const totalCateringCost = guests * perPlatePrice;

  const decorCost = decorTier === 'royal' ? 120000 : decorTier === 'bohemian' ? 85000 : 50000;

  const totalRoomCost = roomCount * 3500;

  const addonCosts = 
    (addons.barat ? 35000 : 0) +
    (addons.fireworks ? 25000 : 0) +
    (addons.shehnai ? 20000 : 0) +
    (addons.drone ? 45000 : 0);

  const grandTotal = venueCost + totalCateringCost + decorCost + totalRoomCost + addonCosts;

  const handleWhatsAppQuotation = () => {
    const text = `Hello Shriji Resorts! I would like to get a quotation for my ${eventType.toUpperCase()} event:\n` +
      `• Guests: ${guests}\n` +
      `• Catering: ${cateringTier} (₹${perPlatePrice}/plate)\n` +
      `• Decor Tier: ${decorTier.toUpperCase()}\n` +
      `• AC Rooms: ${roomCount}\n` +
      `• Estimated Budget: ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `Please confirm venue availability for my dates!`;
    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" style={{ padding: '100px 20px', background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <Calculator size={14} />
            {lang === 'hi' ? 'स्मार्ट बजट एस्टिलेटर' : 'Interactive Budget Estimator'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'अपने इवेंट का अनुमानित बजट जानें' : 'Estimate Your Wedding & Event Cost'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? 'गेस्ट काउंट, केटरिंग मेनू, डेकोर थीम व रूम्स का चयन करें और तुरंत कोटेशन प्राप्त करें।' 
              : 'Select guests, catering menu, decor theme & room allocation to get a real-time transparent estimate.'}
          </p>
        </div>

        {/* Estimator Container */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Controls Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--gold-dark)', marginBottom: '24px', fontWeight: 700 }} className="font-cinzel">
              1. Event Specifications
            </h3>

            {/* Event Type */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: '#334155', fontSize: '0.88rem', fontWeight: 600, marginBottom: '10px' }}>
                Event Category
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  onClick={() => setEventType('wedding')}
                  style={{
                    background: eventType === 'wedding' ? 'var(--gold-primary)' : '#f8fafc',
                    color: eventType === 'wedding' ? '#ffffff' : '#334155',
                    border: '1px solid var(--border-gold)',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Grand Wedding
                </button>
                <button
                  onClick={() => setEventType('pre-wedding')}
                  style={{
                    background: eventType === 'pre-wedding' ? 'var(--gold-primary)' : '#f8fafc',
                    color: eventType === 'pre-wedding' ? '#ffffff' : '#334155',
                    border: '1px solid var(--border-gold)',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Sangeet / Haldi
                </button>
              </div>
            </div>

            {/* Guest Count Slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '8px' }}>
                <span>Expected Guests:</span>
                <strong style={{ color: 'var(--gold-secondary)', fontSize: '1.1rem' }}>{guests} Guests</strong>
              </div>
              <input 
                type="range" 
                min="100" 
                max="2000" 
                step="50" 
                value={guests} 
                onChange={(e) => setGuests(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--gold-primary)' }}
              />
            </div>

            {/* Catering Choice */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 600, marginBottom: '10px' }}>
                Catering Menu Option
              </label>
              <select 
                value={cateringTier} 
                onChange={(e) => setCateringTier(e.target.value)}
              >
                <option value="imperial">Imperial Royal Veg Feast (₹1,200 / Plate - 45+ Dishes)</option>
                <option value="custom">Royal Deluxe Buffet (₹1,000 / Plate - 35 Dishes)</option>
                <option value="grand">Standard Wedding Feast (₹850 / Plate - 25 Dishes)</option>
              </select>
            </div>

            {/* Decor Tier */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 600, marginBottom: '10px' }}>
                Decor & Lighting Package
              </label>
              <select 
                value={decorTier} 
                onChange={(e) => setDecorTier(e.target.value)}
              >
                <option value="royal">Grand Royal Gold & Fresh Flower Decor (₹1,20,000)</option>
                <option value="bohemian">Bohemian Canopy & Fairy Light Fantasy (₹85,000)</option>
                <option value="classic">Minimal Elegance Floral Theme (₹50,000)</option>
              </select>
            </div>

            {/* Rooms Allocation */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '8px' }}>
                <span>AC Guest Rooms Required:</span>
                <strong style={{ color: 'var(--gold-secondary)' }}>{roomCount} Rooms</strong>
              </div>
              <input 
                type="range" 
                min="0" 
                max="25" 
                value={roomCount} 
                onChange={(e) => setRoomCount(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--gold-primary)' }}
              />
            </div>

            {/* Add-on Checkboxes */}
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 600, marginBottom: '10px' }}>
                Special Add-on Services
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={addons.barat} 
                    onChange={(e) => setAddons({...addons, barat: e.target.checked})}
                    style={{ width: 'auto' }}
                  />
                  Barat Entry Chariot (₹35k)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={addons.fireworks} 
                    onChange={(e) => setAddons({...addons, fireworks: e.target.checked})}
                    style={{ width: 'auto' }}
                  />
                  Cold Pyro Fireworks (₹25k)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={addons.shehnai} 
                    onChange={(e) => setAddons({...addons, shehnai: e.target.checked})}
                    style={{ width: 'auto' }}
                  />
                  Live Shehnai & Dhol (₹20k)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={addons.drone} 
                    onChange={(e) => setAddons({...addons, drone: e.target.checked})}
                    style={{ width: 'auto' }}
                  />
                  Drone & Live LED Screen (₹45k)
                </label>
              </div>
            </div>

          </div>

          {/* Live Invoice Summary Panel */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '32px', 
              background: 'linear-gradient(135deg, rgba(8, 28, 21, 0.95), rgba(12, 24, 19, 0.95))',
              border: '1.5px solid var(--gold-primary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '16px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }} className="font-cinzel text-gold-gradient">
                Estimated Summary
              </h3>
              <span style={{ fontSize: '0.75rem', background: 'var(--gold-glow)', color: 'var(--gold-secondary)', padding: '4px 10px', borderRadius: '12px' }}>
                Instant Estimate
              </span>
            </div>

            {/* Breakdown Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Marriage Lawn & Venue Rental:</span>
                <strong style={{ color: '#fff' }}>₹{venueCost.toLocaleString('en-IN')}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Catering ({guests} Guests × ₹{perPlatePrice}):</span>
                <strong style={{ color: '#fff' }}>₹{totalCateringCost.toLocaleString('en-IN')}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Decor & Lighting Theme:</span>
                <strong style={{ color: '#fff' }}>₹{decorCost.toLocaleString('en-IN')}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>AC Lodging ({roomCount} Rooms):</span>
                <strong style={{ color: '#fff' }}>₹{totalRoomCost.toLocaleString('en-IN')}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Selected Add-on Services:</span>
                <strong style={{ color: '#fff' }}>₹{addonCosts.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Total Highlight */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #0f2d21 0%, #1b4332 100%)',
                border: '1px solid var(--gold-primary)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                marginBottom: '28px',
                boxShadow: '0 8px 25px rgba(15, 45, 33, 0.2)'
              }}
            >
              <div style={{ fontSize: '0.82rem', color: '#fef08a', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-accent)', fontWeight: 600 }}>
                Total Estimated Investment
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--gold-light)', fontFamily: 'var(--font-cinzel)', margin: '6px 0' }}>
                ₹{grandTotal.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                *Taxes extra. Final quote confirmed upon date lock.
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={handleWhatsAppQuotation} 
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                Get Quote on WhatsApp
              </button>

              <button 
                onClick={() => onOpenBooking({ estimatedBudget: grandTotal, guests, eventType })}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book Official Consultation
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
