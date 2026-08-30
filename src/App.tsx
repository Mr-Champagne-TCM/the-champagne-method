import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollCue from './components/ScrollCue';
import Premise from './components/Premise';
import WhoIWorkWith from './components/WhoIWorkWith';
import Themes from './components/Themes';
import Method from './components/Method';
import HowItAdapts from './components/HowItAdapts';
import FreeResources from './components/FreeResources';
import Readings from './components/Readings';
import MyStory from './components/MyStory';
import Testimonials from './components/Testimonials';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import { useHashScroll } from './site/useHashScroll';

export default function App() {
  useHashScroll();

  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Premise />
          <WhoIWorkWith />
          <Themes />
          <Method />
          <HowItAdapts />
          <FreeResources />
          <Readings />
          <MyStory />
          <Testimonials />
          <LetsConnect />
        </main>
        <Footer />
        <ScrollCue />
      </div>
    </div>
  );
}
