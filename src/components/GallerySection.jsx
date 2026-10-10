import React, { useState } from 'react';
import { galleryImages } from '../data/resortData';
import { Camera, Maximize2, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection({ lang }) {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" style={{ padding: '100px 20px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <Camera size={14} />
            {lang === 'hi' ? 'फोटो गैलरी' : 'Cinematic Gallery & Real Photos'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'श्रीजी रिसॉर्ट्स की एक झलक' : 'Visual Masterpiece Collection'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? 'मैरिज गार्डन, रॉयल मंडप, बैंकवेट हॉल व रीवा रिसॉर्ट परिसर की असली तस्वीरें।' 
              : 'Explore genuine photographs and cinematic glimpses of Shriji Resorts and Marriage Garden in Rewa.'}
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            { id: 'all', label: lang === 'hi' ? 'सभी तस्वीरें' : 'All Photos' },
            { id: 'weddings', label: lang === 'hi' ? 'शादी व मंडप' : 'Mandap & Weddings' },
            { id: 'real', label: lang === 'hi' ? 'रीवा लोकेशन (Real Site)' : 'Real Site Photos (Rewa)' },
            { id: 'banquet', label: lang === 'hi' ? 'AC बैंकवेट हॉल' : 'Banquet Hall' },
            { id: 'rooms', label: lang === 'hi' ? 'रूम्स व सुइट्स' : 'Suites & Stay' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              style={{
                background: filter === tab.id ? 'var(--gold-secondary)' : 'rgba(8, 28, 21, 0.7)',
                color: filter === tab.id ? '#050d0a' : '#cbd5e1',
                border: `1px solid ${filter === tab.id ? '#fef08a' : 'rgba(212, 175, 55, 0.2)'}`,
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="gold-designer-frame"
              style={{
                height: '250px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'calc(var(--radius-md) - 6px)', position: 'relative' }}>
                <img 
                  src={img.url} 
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(43, 22, 32, 0.95), transparent 60%)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F3E9DC' }} className="font-display">
                    {img.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#E8A33D' }}>
                    {img.desc}
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(43, 22, 32, 0.8)',
                  padding: '6px',
                  borderRadius: '50%',
                  color: '#F3E9DC',
                  border: '1px solid #E8A33D'
                }}>
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="modal-overlay" onClick={closeLightbox}>
          <div 
            style={{
              position: 'relative',
              maxWidth: '1000px',
              width: '90%',
              background: 'rgba(5, 13, 10, 0.95)',
              border: '1px solid var(--gold-primary)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              padding: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ height: '500px', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={filteredImages[lightboxIndex].url} 
                alt={filteredImages[lightboxIndex].title}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px' }}
              />

              {/* Prev/Next Navigation */}
              <button 
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '10px',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid var(--border-gold)',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '10px',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid var(--border-gold)',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--gold-secondary)' }} className="font-cinzel">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                {filteredImages[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
