import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Exterior from './components/Exterior';
import Interior from './components/Interior';
import PressStrip from './components/PressStrip';
import RangeSection from './components/RangeSection';
import Banner from './components/Banner';
import Variants from './components/Variants';
import Faq from './components/Faq';
import TestDrive from './components/TestDrive';
import Footer from './components/Footer';
import CompareBar from './components/CompareBar';

export default function App() {
  const [compared, setCompared] = useState(['Summit']);

  const toggleCompare = (name) => {
    setCompared((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Exterior />
      <Interior />
      <PressStrip />
      <RangeSection />
      <Banner />
      <Variants compared={compared} onToggleCompare={toggleCompare} />
      <Faq />
      <TestDrive />
      <CompareBar compared={compared} onClear={() => setCompared([])} />
      <Footer />
    </>
  );
}
