import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Locations } from "@/components/Locations";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Contact />
      <Locations />
      <Footer />
    </main>
  );
}
