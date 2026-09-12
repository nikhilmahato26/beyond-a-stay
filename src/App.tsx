import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Rooms } from "./components/Rooms";
import { Amenities } from "./components/Amenities";
import { Attractions } from "./components/Attractions";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-dvh bg-bone">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Attractions />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
