import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { RoomDetailPage } from "./pages/RoomDetailPage";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { ContactPage } from "./pages/ContactPage";
import { BookingPage } from "./pages/BookingPage";

export const ClientApp: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:roomType" element={<RoomDetailPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};
