import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'


export default function Home() {
  return (
    // Full black screen
    <div className="w-full min-h-screen bg-black text-white">

      {/* Centered content with max width */}
      <div className="mx-auto px-4">
        <Navbar />
        <div className="py-6">
        <Hero/>
        </div>
        <Footer/>
      </div>

    </div>
  )
}
