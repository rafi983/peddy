import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AdoptionCategories from "@/components/adoption-categories"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AdoptionCategories />
      </main>
      <Footer />
    </div>
  )
}
