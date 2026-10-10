import React, { useState } from 'react';
import { Play, Pause, Film, Sparkles, Volume2, VolumeX, Maximize2, X, ArrowRight, Video, Camera } from 'lucide-react';

export const videoReels = [
  {
    id: "drone-aerial",
    title: "4K Drone Aerial Tour of Shriji Resort",
    category: "Drone Footage",
    duration: "1:45",
    poster: "/gallery/hero.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-resort-swimming-pool-42566-large.mp4",
    localVideo: "/videos/drone_tour.mp4",
    desc: "Breathtaking aerial drone flythrough showing the 35,000 sq ft marriage garden, crystal blue pool, AC banquet hall, and surrounding green estate."
  },
  {
    id: "wedding-mandap",
    title: "Royal Night Wedding & Mandap Illumination",
    category: "Wedding Highlights",
    duration: "2:10",
    poster: "/gallery/mandap_yellow_pink.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-wedding-reception-42618-large.mp4",
    localVideo: "/videos/wedding_night.mp4",
    desc: "Cinematic night coverage of a grand royal Barat entry, pink & gold floral mandap stage, and illuminated garden fireworks."
  },
  {
    id: "poolside-haldi",
    title: "Poolside Haldi & Mehendi Celebration",
    category: "Pre-Wedding",
    duration: "1:30",
    poster: "/gallery/poolside_haldi.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-swimming-pool-water-background-41484-large.mp4",
    localVideo: "/videos/poolside_haldi.mp4",
    desc: "Vibrant daytime poolside Haldi ceremony featuring yellow floral drapes, music, sun umbrella lounges, and poolside dining."
  },
  {
    id: "vip-banquet",
    title: "Imperial VIP Banquet & Sangeet Night",
    category: "Indoor Receptions",
    duration: "1:55",
    poster: "/gallery/vip_lounge_hall.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-lights-shining-at-a-concert-41584-large.mp4",
    localVideo: "/videos/banquet_sangeet.mp4",
    desc: "Indoor AC banquet hall lit with crystal chandeliers, acoustic concert sound system, and royal thali dining setup."
  }
];

export default function VideoReelSection({ lang, onOpenBooking }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="videos" style={{ padding: '100px 20px', background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="glass-pill" style={{ marginBottom: '12px' }}>
            <Film size={14} className="animate-sparkle" />
            {lang === 'hi' ? 'सिनेमैटिक वीडियो रील्स' : 'Cinematic Video Tours & Reels'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginTop: '8px' }} className="font-cinzel">
            {lang === 'hi' ? 'अनुभव कीजिये शाही भव्यता' : 'Experience Shriji Resorts in 4K Cinema'}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'hi' 
              ? 'ड्रोन व्यू, वैवाहिक आयोजन की झलकियां, हल्दी डेकोर व बैंकवेट हॉल के वीडियो रील्स देखें।' 
              : 'Watch high-definition drone flythroughs, wedding night highlights, poolside Haldi ceremonies, and banquet hall tours.'}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {videoReels.map((reel) => (
            <div
              key={reel.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setActiveVideo(reel)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Thumbnail Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={reel.poster} 
                  alt={reel.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Dark Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 13, 10, 0.9), rgba(5, 13, 10, 0.2))'
                }} />

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(5, 13, 10, 0.85)',
                  border: '1px solid var(--border-gold)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  color: 'var(--gold-secondary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Video size={12} /> {reel.category}
                </div>

                {/* Duration Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#fff'
                }}>
                  {reel.duration}
                </div>

                {/* Play Pulse Button */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
                  color: '#050d0a'
                }}>
                  <Play size={24} fill="#050d0a" style={{ marginLeft: '3px' }} />
                </div>
              </div>

              {/* Reel Card Details */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }} className="font-cinzel text-gold-gradient">
                  {reel.title}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '16px' }}>
                  {reel.desc}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(212, 175, 55, 0.15)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-secondary)', fontWeight: 600 }}>
                    Watch 4K Video Reel
                  </span>
                  <ArrowRight size={16} color="var(--gold-secondary)" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Info Box for Adding Custom Video Files */}
        <div 
          className="glass-panel"
          style={{
            marginTop: '40px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            borderColor: 'rgba(212, 175, 55, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-secondary)'
            }}>
              <Camera size={20} />
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#fff' }}>
                Have custom resort MP4 videos?
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Drop your MP4 files in <code style={{ color: 'var(--gold-secondary)' }}>public/videos/</code> to display your own event recordings!
              </div>
            </div>
          </div>

          <button 
            onClick={() => onOpenBooking({ note: 'Inquiring for customized videography & decor setup' })}
            className="btn-outline-gold"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            Inquire Video Setup
          </button>
        </div>

      </div>

      {/* Cinema Fullscreen Video Modal */}
      {activeVideo && (
        <div className="modal-overlay" onClick={() => setActiveVideo(null)}>
          <div 
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '92%',
              background: '#050d0a',
              border: '1.5px solid var(--gold-primary)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.95)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div style={{
              padding: '16px 20px',
              background: 'rgba(8, 28, 21, 0.95)',
              borderBottom: '1px solid var(--border-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Film size={18} color="var(--gold-secondary)" />
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--gold-secondary)' }} className="font-cinzel">
                  {activeVideo.title}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-gold)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>

                <button 
                  onClick={() => setActiveVideo(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: '#fff',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div style={{ position: 'relative', width: '100%', height: '480px', background: '#000' }}>
              <video 
                src={activeVideo.videoUrl}
                poster={activeVideo.poster}
                controls 
                autoPlay
                muted={isMuted}
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                Your browser does not support HTML5 video player.
              </video>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0 }}>
                  {activeVideo.desc}
                </p>
              </div>

              <button 
                onClick={() => {
                  setActiveVideo(null);
                  onOpenBooking({ event: activeVideo.title });
                }}
                className="btn-gold"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                Book Venue For This Event
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
