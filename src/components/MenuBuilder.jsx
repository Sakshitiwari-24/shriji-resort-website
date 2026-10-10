import React, { useState } from 'react';
import { Utensils, Sparkles, Check, ChefHat, Heart, Download } from 'lucide-react';
import { cateringPackages } from '../data/resortData';

export default function MenuBuilder({ lang }) {
  const [selectedPackage, setSelectedPackage] = useState(cateringPackages[0]);
  const [selectedDishes, setSelectedDishes] = useState([
    "Welcome Drink: Royal Kesar Pista Milk",
    "Paneer Tikka",
    "Shahi Paneer",
    "Dal Makhani",
    "Warm Gulab Jamun with Rabri",
    "Live Pani Puri Counter"
  ]);

  const toggleDish = (dish) => {
    if (selectedDishes.includes(dish)) {
      setSelectedDishes(selectedDishes.filter(d => d !== dish));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  return (
    <section id="catering" style={{ padding: '100px 20px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <ChefHat size={14} />
            {lang === 'hi' ? 'शाही व्यन्जन व केटरिंग' : 'Royal Culinary & Gourmet Feast'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'शुद्ध शाकाहारी शाही पकवान' : 'Custom Gourmet Catering Menu'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? 'अनुभवी शेफ द्वारा तैयार उत्तर भारतीय, राजस्थानी, साउथ इंडियन व लाइव चाट काउंटर।' 
              : 'Handcrafted pure vegetarian delicacies, live food stalls, mocktail lounges & traditional sweet counters.'}
          </p>
        </div>

        {/* Package Selector Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '50px' }}>
          {cateringPackages.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <div 
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className="glass-panel"
                style={{
                  padding: '32px',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid var(--gold-secondary)' : '1px solid var(--border-gold)',
                  background: isSelected ? '#0f2d21' : '#ffffff',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isSelected ? '0 12px 30px rgba(15, 45, 33, 0.25)' : 'var(--shadow-card)'
                }}
              >
                {isSelected && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--gold-secondary)', color: '#ffffff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-accent)', letterSpacing: '0.08em' }}>
                    Selected
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '6px' }} className={isSelected ? "font-cinzel text-gold-metallic" : "font-cinzel text-gold-bright"}>
                  {pkg.name}
                </h3>
                <div style={{ color: isSelected ? '#cbd5e1' : 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
                  {pkg.type} • {pkg.itemsCount}
                </div>

                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold-secondary)', fontFamily: 'var(--font-cinzel)', marginBottom: '20px' }}>
                  ₹{pkg.pricePerPlate} <span style={{ fontSize: '0.9rem', color: isSelected ? '#cbd5e1' : 'var(--text-muted)', fontWeight: 400 }}>/ Plate</span>
                </div>

                <div style={{ borderTop: '1px dashed rgba(197, 155, 39, 0.3)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {pkg.items.slice(0, 4).map((item, i) => (
                    <div key={i} style={{ fontSize: '0.88rem', color: isSelected ? '#f8fafc' : '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} color="var(--gold-secondary)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Dish Selector Box */}
        <div className="glass-panel" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', borderBottom: '1px solid rgba(197, 155, 39, 0.25)', paddingBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }} className="font-cinzel text-gold-bright">
                Customize Your Feast Selection
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                Click items to build your dream wedding thali menu ({selectedDishes.length} items picked)
              </p>
            </div>
            <div className="glass-pill">
              <Utensils size={14} /> 100% Pure Veg Gourmet
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '14px' }}>
            {selectedPackage.items.map((item, idx) => {
              const isChecked = selectedDishes.includes(item);
              return (
                <div 
                  key={idx}
                  onClick={() => toggleDish(item)}
                  style={{
                    background: isChecked ? 'rgba(197, 155, 39, 0.12)' : '#ffffff',
                    border: `1px solid ${isChecked ? 'var(--gold-primary)' : 'rgba(197, 155, 39, 0.25)'}`,
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    fontWeight: isChecked ? 600 : 500,
                    color: isChecked ? '#855906' : '#334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <span>{item}</span>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: isChecked ? 'var(--gold-primary)' : 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isChecked && <Check size={12} color="#050d0a" />}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
