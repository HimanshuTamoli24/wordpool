import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import DarkVeil from '@/components/ui/DarkVeil'
import ClickSpark from '@/components/ui/Spark'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background effect behind everything */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <DarkVeil />
      </div>

      {/* Click spark effect */}
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Page content */}
        <div className="mx-auto max-w-5xl px-4 relative z-10">
          <Navbar />
          <div className="py-6">
            <Hero />
          </div>
          <Footer />
        </div>
      </ClickSpark>
    </div>
  )
}
