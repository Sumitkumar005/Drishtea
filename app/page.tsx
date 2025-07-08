import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import {
  Heart,
  Clock,
  Sparkles,
  Leaf,
  MapPin,
  Zap,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Globe,
  CheckCircle,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Tea plantation fields with mountains" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 py-6 md:px-12">
            <Link href="/" className="text-2xl font-bold text-white md:text-3xl">
              Drishtea
            </Link>

            <div className="hidden items-center space-x-8 md:flex">
              <Link href="#about" className="text-white/90 transition-colors hover:text-white">
                About
              </Link>
              <Link href="#explore" className="text-white/90 transition-colors hover:text-white">
                Explore
              </Link>
              <Link href="#benefits" className="text-white/90 transition-colors hover:text-white">
                Benefits
              </Link>
              <Link href="#contact">
                <Button className="bg-green-500 px-6 py-2 text-white hover:bg-green-600" size="sm">
                  Connect Us
                </Button>
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-1 items-center justify-center px-6 text-center">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">Wellness in Every Sip</h1>
              <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
                Explore the rich world of health-boosting, hand-picked herbal teas
              </p>
              <div className="pt-4">
                <Button
                  className="bg-green-500 px-8 py-3 text-lg font-semibold text-white hover:bg-green-600 rounded-full"
                  size="lg"
                >
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">More Than a Cup — A Ritual of Wellness</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Drishtea was born out of a passion for purity, flavor, and well-being. While Indian tea often evokes
                  images of milk chai and sweet blends, Drishtea opens the door to a much richer world — green, white,
                  blue, matcha, rooibos, and beyond. Each tea is carefully hand-picked from the first spring pluck in
                  biological gardens and blended with natural herbs to create a unique balance of flavor and function.
                </p>
                <p>
                  At Drishtea, we believe that every sip can be a moment of balance and healing. Our commitment is to
                  make herbal wellness accessible, enjoyable, and part of your everyday ritual.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 text-lg">Certified Organic & Ethically Sourced</h3>
                  <p className="text-gray-600">Every blend meets the highest quality standards</p>
                </div>
                
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-landscape.png"
                alt="Tea gardens landscape"
                width={700}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            A Legacy Rooted in Ancient Tea Wisdom
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Herbal Wellness Blends</h3>
              <p className="text-gray-600">
                Carefully crafted formulations that combine traditional Ayurvedic wisdom with modern wellness science
                for targeted health benefits.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Over 35 Years of Expertise</h3>
              <p className="text-gray-600">
                Decades of tea tasting mastery and deep understanding of flavor profiles, ensuring every blend meets our
                exacting standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hand-Picked Spring Leaves</h3>
              <p className="text-gray-600">
                Only the finest first spring pluck from biological gardens, ensuring maximum potency and the purest
                flavor in every cup.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Conscious & Ethical</h3>
              <p className="text-gray-600">
                Committed to sustainable farming practices and fair trade partnerships that support both the environment
                and local communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Indian Roots, Global Inspiration</h3>
              <p className="text-gray-600">
                Honoring traditional Indian tea culture while embracing global wellness trends to create innovative,
                health-focused blends.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Functional Teas for Modern Lifestyles</h3>
              <p className="text-gray-600">
                Designed for today's wellness-conscious consumers, our teas address specific health goals while
                delivering exceptional taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tea Products Section */}
      <section id="explore" className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Your Wellness Blend</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each Drishtea tea is more than just a drink — it's a remedy crafted with precision. Choose your blend
              based on what your body needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-80 bg-gradient-to-br from-red-900 to-red-700 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90 mb-2">Wellness Tea</p>
                    <h3 className="text-2xl font-bold mb-4">Rooibos Tea</h3>
                    <p className="text-sm opacity-90 mb-4">Struggling with stress or insomnia?</p>
                  </div>
                  <p className="text-sm">Naturally caffeine-free; supports sleep, reduces stress, improves skin</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-80 bg-gradient-to-br from-green-800 to-green-600 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90 mb-2">Detox Tea</p>
                    <h3 className="text-2xl font-bold mb-4">Matcha Tea</h3>
                    <p className="text-sm opacity-90 mb-4">Need a detox and energy boost?</p>
                  </div>
                  <p className="text-sm">High in chlorophyll and antioxidants for clean energy and skin health</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-80 bg-gradient-to-br from-gray-600 to-gray-800 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90 mb-2">Anti-Aging Tea</p>
                    <h3 className="text-2xl font-bold mb-4">White Tea</h3>
                    <p className="text-sm opacity-90 mb-4">Worried about aging and heart health?</p>
                  </div>
                  <p className="text-sm">Rich in catechins; reduces oxidative stress, supports heart health</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-80 bg-gradient-to-br from-amber-700 to-amber-900 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90 mb-2">Energy Tea</p>
                    <h3 className="text-2xl font-bold mb-4">Ginseng Oolong Tea</h3>
                    <p className="text-sm opacity-90 mb-4">Feeling low on energy or focus?</p>
                  </div>
                  <p className="text-sm">Boosts stamina, metabolism, and mental clarity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="benefits" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Drishtea?</h2>
            <p className="text-xl text-gray-600">
              Every cup we craft blends ancient knowledge with modern wellness needs.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-amber-700 rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4">Organic Tea Leaves</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Pure Organic</h4>
                  <p className="text-sm opacity-90">
                    Sourced from certified organic farms, ensuring no harmful chemicals or pesticides in your cup.
                  </p>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4">Ancient Wisdom</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Ancient Ayurvedic</h4>
                  <p className="text-sm opacity-90">
                    Traditional formulations passed down through generations, refined for modern wellness needs.
                  </p>
                </div>
              </div>

              <div className="bg-green-400 rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4">Wellness Focus</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Modern Wellness</h4>
                  <p className="text-sm opacity-90">
                    Each blend is specifically designed to address contemporary health concerns and lifestyle needs.
                  </p>
                </div>
              </div>

              <div className="bg-amber-400 rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4">Sustainable Farming</h3>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Sustainable Farming</h4>
                  <p className="text-sm opacity-90">
                    Supporting eco-friendly practices that protect the environment and ensure quality for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-8">{"Let's Connect"}</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-700 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">+91 91584 96000</p>
                    <p className="text-gray-600">+91 93703 60010</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-700 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">admin@drishtea.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-green-700 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Website</h4>
                    <p className="text-gray-600">www.drishtea.in</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-green-700" />
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                  </div>
                  <p className="text-sm text-gray-600">Response within 24 hours | Available Mon–Sat, 10 AM – 6 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Drishtea</h3>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    How To Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ingredients
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Benefits</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    Request Demo <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 Wrapp. All rights reserved</p>

              <div className="flex items-center space-x-6">
                <div className="flex space-x-4 text-gray-400 text-sm">
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>

                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Youtube className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
