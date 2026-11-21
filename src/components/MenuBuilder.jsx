import React, { useState } from 'react';
import { ChefHat, Check, MessageCircle, Sparkles, Utensils } from 'lucide-react';
import { cateringPackages, resortDetails } from '../data/resortData';

export default function MenuBuilder({ onOpenBooking }) {
  const [selectedPackage, setSelectedPackage] = useState(cateringPackages[1] || cateringPackages[0]);
  const [selectedDishes, setSelectedDishes] = useState([
    "Royal Kesar Pista Milk",
    "Paneer Tikka Angara",
    "Shahi Paneer Pasanda",
    "Dal Makhani Dum Pukht",
    "Live Street Food Chaat Counter",
    "Moong Dal Halwa with Rabri"
  ]);

  const toggleDish = (dish) => {
    if (selectedDishes.includes(dish)) {
      setSelectedDishes(selectedDishes.filter(d => d !== dish));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const handleRequestMenu = () => {
    const text = `Hello Shriji Resort! I would like to request catering details for the ${selectedPackage.name} package.\n` +
      `Special choices: ${selectedDishes.join(', ')}.\n` +
      `Please share menu tasting and catering availability details.`;
    window.open(`https://wa.me/${resortDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="catering"
      className="paper-texture"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand-light)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Pure Veg Catering
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Tasty Pure Veg Food &amp; <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Wedding Menus
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
            Freshly cooked pure vegetarian food prepared by experienced chefs. Choose from North Indian meals, live chaat stalls, mocktails, and traditional Indian sweets.
          </p>
        </div>

        {/* Package Selector Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '48px'
          }}
        >
          {cateringPackages.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <div 
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className="warm-paper-card"
                style={{
                  padding: '32px',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid var(--terracotta)' : '1.5px solid var(--border-sand)',
                  background: isSelected ? 'var(--deep-aubergine)' : '#FFFFFF',
                  color: isSelected ? '#F3E9DC' : 'var(--deep-aubergine)',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: isSelected ? '0 16px 40px rgba(43, 22, 32, 0.25)' : '0 10px 30px rgba(43, 22, 32, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'var(--saffron)',
                      color: 'var(--deep-aubergine)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Active Tier
                  </div>
                )}
                
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.55rem',
                    fontWeight: 700,
                    marginBottom: '6px',
                    color: isSelected ? 'var(--saffron)' : 'var(--deep-aubergine)'
                  }}
                >
                  {pkg.name}
                </h3>

                <div style={{ color: isSelected ? '#D9A5A0' : 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
                  {pkg.type} • {pkg.itemsCount}
                </div>

                <div style={{ borderTop: `1px dashed ${isSelected ? 'rgba(243, 233, 220, 0.2)' : 'var(--border-sand)'}`, paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.items.map((item, i) => (
                    <div key={i} style={{ fontSize: '0.88rem', color: isSelected ? '#F3E9DC' : '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} style={{ color: isSelected ? 'var(--saffron)' : 'var(--terracotta)' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Action Bar for Menu */}
        <div
          className="warm-paper-card"
          style={{
            padding: '32px',
            background: '#FFFFFF',
            border: '2px solid var(--border-sand)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ChefHat size={20} style={{ color: 'var(--terracotta)' }} />
              <h4 className="font-display" style={{ fontSize: '1.25rem', color: 'var(--deep-aubergine)' }}>
                Want to Customize Your Menu?
              </h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
              Selected: <strong>{selectedPackage.name}</strong>. Jain, Rajasthani, and satvik pure veg food options are also available on request.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleRequestMenu}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: '#25D366',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <MessageCircle size={16} />
              <span>Request Menu via WhatsApp</span>
            </button>

            <button
              onClick={() => onOpenBooking && onOpenBooking({ eventType: `Catering: ${selectedPackage.name}` })}
              className="btn-book"
              style={{ padding: '12px 22px', fontSize: '0.85rem' }}
            >
              <span>Enquire for Dates</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
