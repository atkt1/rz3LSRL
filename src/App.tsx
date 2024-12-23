import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { Hero } from './components/sections/hero';
import { Features } from './components/sections/features';
import { Pricing } from './components/sections/pricing';
import { CTA } from './components/sections/cta';
import { Footer } from './components/layout/footer';
import { AuthPage } from './components/auth/auth-page';

function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
      </Routes>
    </BrowserRouter>
  );
}