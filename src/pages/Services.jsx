import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesHero from "../components/sections/ServicesHero";
import StorySection from "../components/sections/StorySection";
import ServiceRecap from "../components/sections/ServiceRecap";
import CoreValues from "../components/sections/CoreValues";
import ServicesCTA from "../components/sections/ServicesCTA";
export default function Services() {
    return (
        <div className="min-h-screen bg-white antialiased overflow-x-hidden">
            <Navbar />

            <main className="relative">
                <ServicesHero />
                <StorySection />
                <CoreValues />
                <ServiceRecap />
                <ServicesCTA />
            </main>

            <Footer />
        </div>
    );
}
