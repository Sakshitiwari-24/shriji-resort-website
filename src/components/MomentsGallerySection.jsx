import React, { useState, useEffect } from 'react';
import { galleryImages } from '../data/resortData';

export default function MomentsGallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'weddings', label: 'Mandap & Lawn' },
    { id: 'banquet', label: 'Banquet & Dining' },
    { id: 'resort', label: 'Pool & Resort' },
    { id: 'rooms', label: 'Suites & Rooms' }
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      id="moments"
      className="paper-texture responsive-section"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="tag-label" style={{ marginBottom: '8px', display: 'block' }}>
            Photo Gallery
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Photos of <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Shriji Resort
            </span>
          </h2>
        </div>

        {/* Filter Tabs as Text Links */}
        <div
          className="gallery-tabs-row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '28px',
            flexWrap: 'wrap',
            marginBottom: '48px',
            borderBottom: '1px solid var(--border-sand)',
            paddingBottom: '12px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-text-link ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clean, Uniform Framed Gallery Grid (No Instagram Collage Chaos) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '28px'
          }}
        >
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className="framed-resort-image"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '360px'
              }}
            >
              <div style={{ width: '100%', height: '260px', overflow: 'hidden', borderRadius: 'var(--radius-sm)', position: 'relative' }}>
                <img
                  src={img.url}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  loading="lazy"
                />
              </div>

              <div style={{ padding: '14px 8px 6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span className="font-body" style={{ fontSize: '0.68rem', color: 'var(--terracotta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {img.category}
                  </span>
                  <h4 className="font-display" style={{ fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--deep-aubergine)', margin: '2px 0 0 0' }}>
                    {img.title}
                  </h4>
                </div>

                <span style={{ fontSize: '0.8rem', color: 'var(--terracotta)', fontWeight: 700 }}>
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(43, 22, 32, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(243, 233, 220, 0.1)',
              border: '1px solid rgba(232, 163, 61, 0.4)',
              color: '#F3E9DC',
              padding: '8px 16px',
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            Close ✕
          </button>

          {/* Prev / Next Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="lightbox-nav-btn lightbox-prev"
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '24px',
              background: 'rgba(243, 233, 220, 0.1)',
              border: '1px solid rgba(232, 163, 61, 0.4)',
              color: '#F3E9DC',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="lightbox-nav-btn lightbox-next"
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '24px',
              background: 'rgba(232, 163, 61, 0.4)',
              color: '#F3E9DC',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            ›
          </button>

          {/* Main Image Container */}
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', textAlign: 'center' }}>
            <div className="framed-resort-image" style={{ display: 'inline-block', background: '#FFFFFF', padding: '12px' }}>
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }}
              />
            </div>
            <h3 className="font-display" style={{ fontStyle: 'italic', color: '#E8A33D', marginTop: '16px', fontSize: '1.4rem' }}>
              {filteredImages[lightboxIndex].title}
            </h3>
            <p style={{ color: '#D9A5A0', fontSize: '0.9rem' }}>
              {filteredImages[lightboxIndex].desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
