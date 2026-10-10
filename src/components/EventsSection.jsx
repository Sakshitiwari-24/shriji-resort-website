import React, { useState } from 'react';
import { 
  Crown, 
  Heart, 
  Cake, 
  Award, 
  Sun, 
  PartyPopper, 
  Check, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Sparkles,
  Users,
  Building2
} from 'lucide-react';
import { resortDetails, eventCategories } from '../data/resortData';

export default function EventsSection({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Celebrations', icon: Sparkles },
    { id: 'weddings', label: 'Weddings & Receptions', icon: Crown },
    { id: 'engagements', label: 'Engagements', icon: Heart },
    { id: 'birthdays', label: 'Birthdays', icon: Cake },
    { id: 'retirement', label: 'Retirement & Corporate', icon: Award },
    { id: 'mundan', label: 'Mundan Sanskar', icon: Sun },
    { id: 'anniversaries', label: 'Anniversaries & Sangeet', icon: PartyPopper }
  ];

  const getEventIcon = (categoryId) => {
    switch (categoryId) {
      case 'weddings': return Crown;
      case 'engagements': return Heart;
      case 'birthdays': return Cake;
      case 'retirement': return Award;
      case 'mundan': return Sun;
      case 'anniversaries': return PartyPopper;
      default: return Sparkles;
    }
  };

  const filteredEvents = activeFilter === 'all'
    ? eventCategories
    : eventCategories.filter(ev => ev.category === activeFilter);

  const handleBookEvent = (event) => {
    if (onOpenBooking) {
      onOpenBooking({ eventType: event.title });
    }
  };

  return (
    <section
      id="events"
      className="paper-texture"
      style={{
        padding: '120px 24px',
        background: 'var(--warm-sand-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span 
            className="tag-label" 
            style={{ 
              marginBottom: '10px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px' 
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--terracotta)' }} />
            Celebrations & Event Orders
          </span>
          <h2 className="h2-editorial font-display" style={{ color: 'var(--deep-aubergine)' }}>
            Every Milestone Deserves A <br />
            <span className="font-display" style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Royal Setting
            </span>
          </h2>
          <p 
            style={{ 
              maxWidth: '680px', 
              margin: '16px auto 0 auto', 
              fontSize: '1rem', 
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}
          >
            From grand 2,000-guest marriage parties and sacred Vedic sanskars to festive birthdays and dignified retirement farewells — explore our specialized event hosting services in Rewa.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`event-filter-pill ${isActive ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-pill)',
                  background: isActive ? 'var(--deep-aubergine)' : 'rgba(243, 233, 220, 0.7)',
                  color: isActive ? '#E8A33D' : 'var(--deep-aubergine)',
                  border: isActive ? '1.5px solid var(--saffron)' : '1px solid var(--border-sand)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 16px rgba(43, 22, 32, 0.2)' : 'none'
                }}
              >
                <Icon size={14} style={{ color: isActive ? '#E8A33D' : 'var(--terracotta)' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Event Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}
          className="events-grid"
        >
          {filteredEvents.map((event) => {
            const EventIcon = getEventIcon(event.category);
            const waText = encodeURIComponent(`Hello Shriji Resort, I would like to enquire about booking for a ${event.title} in Rewa.`);
            const waUrl = `https://wa.me/${resortDetails.whatsapp}?text=${waText}`;

            return (
              <div
                key={event.id}
                className="warm-paper-card event-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid var(--border-sand)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Image Container with Gold Badge */}
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    width: '100%',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    className="event-card-img"
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(43, 22, 32, 0.1) 0%, rgba(43, 22, 32, 0.75) 100%)'
                    }}
                  />

                  {/* Category Pill Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(43, 22, 32, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#F7C873',
                      border: '1px solid rgba(232, 163, 61, 0.5)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em'
                    }}
                  >
                    <EventIcon size={13} style={{ color: '#E8A33D' }} />
                    <span>{event.tag}</span>
                  </div>

                  {/* Capacity Pill Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--deep-aubergine)',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Users size={13} style={{ color: 'var(--terracotta)' }} />
                    <span>{event.capacity}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ marginBottom: '14px' }}>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        color: 'var(--deep-aubergine)',
                        lineHeight: 1.25,
                        marginBottom: '4px'
                      }}
                    >
                      {event.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--terracotta)',
                        fontWeight: 600
                      }}
                    >
                      {event.subtitle}
                    </span>
                  </div>

                  {/* Preferred Venue */}
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '7px', 
                      padding: '8px 12px', 
                      background: 'rgba(243, 233, 220, 0.5)', 
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '16px',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <Building2 size={14} style={{ color: 'var(--saffron)', flexShrink: 0 }} />
                    <span><strong>Venue:</strong> {event.venue}</span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '20px'
                    }}
                  >
                    {event.description}
                  </p>

                  {/* Inclusions Highlights */}
                  <div style={{ marginBottom: '24px', marginTop: 'auto' }}>
                    <span 
                      style={{ 
                        fontSize: '0.68rem', 
                        letterSpacing: '0.12em', 
                        textTransform: 'uppercase', 
                        color: 'var(--terracotta)', 
                        fontWeight: 700, 
                        display: 'block', 
                        marginBottom: '8px' 
                      }}
                    >
                      Key Inclusions
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {event.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--deep-aubergine)' }}>
                          <div 
                            style={{ 
                              width: '16px', 
                              height: '16px', 
                              borderRadius: '50%', 
                              background: 'rgba(232, 163, 61, 0.15)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              color: 'var(--terracotta)', 
                              flexShrink: 0,
                              marginTop: '2px'
                            }}
                          >
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--border-sand)' }}>
                    <button
                      onClick={() => handleBookEvent(event)}
                      className="minimal-submit-btn"
                      style={{
                        padding: '10px 14px',
                        background: 'var(--terracotta)',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Calendar size={14} />
                      <span>Book Event</span>
                    </button>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="minimal-btn-wa"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '10px 14px',
                        background: 'transparent',
                        border: '1px solid rgba(37, 211, 102, 0.5)',
                        color: '#15803d',
                        borderRadius: 'var(--radius-pill)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <MessageCircle size={14} style={{ color: '#16a34a' }} />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bespoke Consultation Banner */}
        <div
          className="warm-paper-card"
          style={{
            padding: '36px 32px',
            background: 'var(--deep-aubergine)',
            color: '#F3E9DC',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--saffron)',
            boxShadow: '0 20px 50px rgba(43, 22, 32, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span 
              className="tag-label" 
              style={{ 
                color: '#E8A33D', 
                marginBottom: '6px', 
                display: 'block' 
              }}
            >
              Custom Ceremonies & Family Gatherings
            </span>
            <h3 
              className="font-display" 
              style={{ 
                fontStyle: 'italic', 
                fontSize: '1.5rem', 
                color: '#F3E9DC', 
                marginBottom: '8px' 
              }}
            >
              Have a Unique Function or Private Ceremony in Mind?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#D9A5A0', lineHeight: 1.6 }}>
              Whether it is a sacred Janeu Sanskar, Godh Bharai, Mata Ki Chowki, family re-union, or academic felicitation — our venue coordinators tailor the lawn, indoor hall, and pure vegetarian feast to your family customs.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking && onOpenBooking({ eventType: 'Custom Ceremony / Function' })}
              className="btn-book"
              style={{ padding: '12px 22px', fontSize: '0.825rem' }}
            >
              <span>Enquire Custom Date</span>
            </button>

            <a
              href={`tel:${resortDetails.phones[0]}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 20px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(243, 233, 220, 0.3)',
                background: 'rgba(243, 233, 220, 0.08)',
                color: '#F3E9DC',
                textDecoration: 'none',
                fontSize: '0.825rem',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
              className="btn-custom-call"
            >
              <Phone size={14} style={{ color: '#E8A33D' }} />
              <span>Call Reservation Desk</span>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .event-card:hover {
          transform: translateY(-6px);
          border-color: var(--saffron) !important;
          box-shadow: 0 20px 45px rgba(43, 22, 32, 0.12) !important;
        }
        .event-card:hover .event-card-img {
          transform: scale(1.05);
        }
        .event-filter-pill:hover:not(.active) {
          background: rgba(232, 163, 61, 0.15) !important;
          border-color: var(--terracotta) !important;
        }
        .btn-custom-call:hover {
          background: rgba(232, 163, 61, 0.2) !important;
          border-color: var(--saffron) !important;
          color: #E8A33D !important;
        }
        @media (max-width: 768px) {
          .events-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
