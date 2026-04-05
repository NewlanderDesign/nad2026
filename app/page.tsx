import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Product } from '@/components/Product';
import { Features } from '@/components/Features';
import { AppSection } from '@/components/AppSection';
import { Roadmap } from '@/components/Roadmap';
import { Webshop } from '@/components/Webshop';
import { History } from '@/components/History';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-300 selection:bg-[#00ffd0]/30 selection:text-[#00ffd0]">
      <Navbar />
      <Hero />
      <Product />
      <Features />
      <AppSection />
      <Roadmap />
      <Webshop />
      <History />
      <Contact />
      <Footer />
    </main>
  );
}
