import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PricingPage } from "./components/PricingPage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <Navigation />

      {/* Page Routes */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<HomePage />} /> {/* Services on Home */}
          <Route path="/case-studies" element={<HomePage />} /> {/* Case studies on Home */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<ContactPage />} /> {/* Blog redirects to Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} /> {/* Default fallback */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
