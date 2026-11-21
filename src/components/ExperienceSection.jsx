import React from 'react';

export default function ExperienceSection() {
  const weddingJourney = [
    {
      step: '01',
      title: 'Grand Barat Welcome & Easy Parking',
      time: 'Evening',
      desc: 'Welcome the Barat at our brightly lit entrance gate. Safe parking for 200+ vehicles makes arrival smooth and easy for all guests.',
      image: '/gallery/hero.jpg'
    },
    {
      step: '02',
      title: 'Mandap Ceremony on the Open Lawn',
      time: 'Evening',
      desc: 'Celebrate the main ceremony on our 35,000 sq ft open green lawn with a decorated mandap stage and plenty of seating for family and friends.',
      image: '/gallery/sunset_mandap.jpg'
    },
    {
      step: '03',
      title: 'AC Banquet Hall & Pure Veg Dinner',
      time: 'Night',
      desc: 'Enjoy dinner in our 10,000 sq ft AC banquet hall with comfortable sofa seating, warm lighting, and freshly prepared pure vegetarian food.',
      image: '/gallery/banquet.jpg'
    },
    {
      step: '04',
      title: 'Poolside Area & AC Guest Rooms',
      time: 'Stay',
      desc: 'Relax by our clean swimming pool and rest comfortably in 25+ AC guest rooms with attached bathrooms and 24/7 room service.',
      image: '/gallery/poolside_haldi.jpg'
    }
  ];

  return (
    <section
      id="journey"
      className="paper-texture responsive-section"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            How Your Day Flows
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Your Wedding Day <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              at Shriji Resort
            </span>
          </h2>
        </div>

        {/* Vertical Center Path Line */}
        <div
          style={{
            position: 'absolute',
            top: '200px',
            bottom: '80px',
            left: '50%',
            width: '2px',
            background: 'linear-gradient(180deg, #B5523B 0%, #E8A33D 50%, #B5523B 100%)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
          className="journey-center-line"
        />

        {/* 4 Alternating Left/Right Moments */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 2 }}>
          {weddingJourney.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '40px',
                  position: 'relative'
                }}
                className="journey-moment-row"
              >
                {/* Content Card (Half Width) */}
                <div style={{ flex: '1' }}>
                  <div
                    className="warm-paper-card journey-card responsive-card"
                    style={{
                      padding: '32px',
                      background: '#FFFFFF',
                      textAlign: isEven ? 'right' : 'left'
                    }}
                  >
                    <span className="font-body" style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 700, letterSpacing: '0.15em' }}>
                      PHASE {item.step} • {item.time}
                    </span>

                    <h3 className="h3-card font-display" style={{ fontStyle: 'italic', color: 'var(--deep-aubergine)', margin: '6px 0 12px 0' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '20px' }}>
                      {item.desc}
                    </p>

                    <div className="framed-resort-image" style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                      <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                    </div>
                  </div>
                </div>

                {/* Center Hand-Drawn Style SVG Marker Circle */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--deep-aubergine)',
                    border: '2px solid var(--saffron)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E8A33D',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    boxShadow: '0 0 15px rgba(232, 163, 61, 0.4)',
                    flexShrink: 0
                  }}
                  className="journey-marker"
                >
                  {item.step}
                </div>

                {/* Empty Opposite Spacer for Balance */}
                <div style={{ flex: '1' }} className="journey-spacer" />
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-center-line { left: 24px !important; }
          .journey-moment-row { flex-direction: column !important; align-items: flex-start !important; padding-left: 48px; }
          .journey-marker { position: absolute; left: 0; top: 0; }
          .journey-spacer { display: none !important; }
          .journey-card { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
