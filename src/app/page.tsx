import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import DarkVeil from '@/components/ui/DarkVeil'
import ClickSpark from '@/components/ui/Spark'

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
        {/* Background effect behind everything but inside ClickSpark */}
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <Navbar />
          <div className="py-6">
            <Hero />
          </div>
          <Footer />
        </div>
      </div>
    </ClickSpark>
  )
}
