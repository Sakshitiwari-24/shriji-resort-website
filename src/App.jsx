import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import SpacesSection from './components/SpacesSection';
import EventsSection from './components/EventsSection';
import MomentsGallerySection from './components/MomentsGallerySection';
import ExperienceSection from './components/ExperienceSection';
import QuoteBandSection from './components/QuoteBandSection';
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
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquire = () => {
    const bookingElem = document.querySelector('#booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-dark)' }}>
      {/* Brand Preloader Screen */}
      <Preloader />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections (Strictly 9 Required Sections) */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onOpenEnquire={handleOpenEnquire} 
        />

        {/* Section 2: Intro */}
        <IntroSection />

        {/* Section 3: Spaces */}
        <SpacesSection onOpenBooking={handleOpenBooking} />

        {/* Section 4: Events & Celebrations */}
        <EventsSection onOpenBooking={handleOpenBooking} />

        {/* Section 5: Moments Gallery */}
        <MomentsGallerySection />

        {/* Section 6: Experience Timeline */}
        <ExperienceSection />

        {/* Section 7: Quote Band */}
        <QuoteBandSection />

        {/* Section 8: Booking & Enquiry */}
        <BookingEnquirySection initialData={bookingInitialData} />

        {/* Section 9: Contact & Location */}
        <ContactLocationSection />
      </main>

      {/* Section 9: Minimal Footer */}
      <FooterSection />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
