import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;