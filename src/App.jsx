import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import SpacesSection from './components/SpacesSection';
import AccommodationsSection from './components/AccommodationsSection';
import EventsSection from './components/EventsSection';
import MomentsGallerySection from './components/MomentsGallerySection';
import ExperienceSection from './components/ExperienceSection';
import QuoteBandSection from './components/QuoteBandSection';
import ReviewsSection from './components/ReviewsSection';
import BookingEnquirySection from './components/BookingEnquirySection';
import ContactLocationSection from './components/ContactLocationSection';
import FooterSection from './components/FooterSection';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    const bookingElem = document.querySelector('#booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'instant' });
    }
  };

  const handleOpenEnquire = () => {
    const bookingElem = document.querySelector('#booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'instant' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--warm-sand)', color: 'var(--text-dark)' }}>
      {/* Brand Preloader Screen */}
      <Preloader />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero with Quick Date Availability Bar */}
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onOpenEnquire={handleOpenEnquire} 
        />

        {/* Section 2: Intro & Heritage Story */}
        <IntroSection />

        {/* Section 3: Spaces (Lawn, AC Banquet, Pool Deck, Canopy) */}
        <SpacesSection onOpenBooking={handleOpenBooking} />

        {/* Section 4: Luxury Accommodations & Presidential Suites */}
        <AccommodationsSection onOpenBooking={handleOpenBooking} />

        {/* Section 5: Events & Celebrations (Weddings, Engagements, Mundan, etc.) */}
        <EventsSection onOpenBooking={handleOpenBooking} />

        {/* Section 6: Moments Gallery (12+ Real Photography Assets) */}
        <MomentsGallerySection />

        {/* Section 9: Celebration Day Timeline Journey */}
        <ExperienceSection />

        {/* Section 10: Regal Quote Band */}
        <QuoteBandSection />

        {/* Section 11: Guest Reviews & 4.3★ Ratings */}
        <ReviewsSection />

        {/* Section 12: Booking & Reservation Enquiry (Unmasked Official Desks) */}
        <BookingEnquirySection initialData={bookingInitialData} />

        {/* Section 13: Contact, Directions & Responsive Google Map */}
        <ContactLocationSection />
      </main>

      {/* Complete Footer with Navigation and Quick Contact */}
      <FooterSection />

      {/* Floating Action Bar (WhatsApp, Call, Date Planner) */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
