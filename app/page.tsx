import Image from "next/image";
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  
  return (
    <>
      <main className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2000&q=80"
            alt="Modern architecture with greenery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="absolute bottom-0 left-0 px-10 py-12 z-10 w-full text-cream">
          <h2 className="text-[8.5vw] font-playfair font-light leading-none tracking-tight mb-2">WHERE NATURE</h2>
          <h2 className="text-[8.5vw] font-playfair font-light leading-none tracking-tight">MEETS DESIGN</h2>
        </div>
      </main>
      <div className="px-[3%] py-[5%] bg-cream">
        <div className="part-1">
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-sage leading-[0.9] w-full font-cormorant font-light tracking-tight">ARCHITECTURE</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-sage leading-[0.9] w-full font-cormorant font-light tracking-tight">IN HARMONY</h2>
          <h6 className="text-charcoal/80 max-w-[90%] font-crimson 2xl:max-w-[34%] lg:max-w-[40%] xl:max-w-[37%] md:max-w-[44%] sm:max-w-[53%] 2xl:mt-10 xl:mt-10 lg:mt-10 sm:mt-6 xs:mt-5 text-[2.9vw] leading-8 xsm:leading-6 xs:leading-5 md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[1.6vw] xl:leading-8 lg:leading-8 md:leading-7 sm:leading-6 2xl:leading-9 font-light">A sanctuary where architectural excellence embraces the natural world. Residences designed with meticulous attention to light, space, and the seamless integration of verdant landscapes.</h6>
        </div>
        <div className="part-2 mt-[5%] s:mt-25 flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col xs:flex-col lg:justify-between md:justify-between sm:justify-between">
          <div className="lg:h-9 md:h-6 sm:h-7">
            <a href="#" className="text-sage underline font-crimson font-medium lg:text-[1.5vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center h-full xs:mb-5 tracking-wide uppercase">
              <span className="mr-5 text-[0.95em]">View Residences</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <img className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[100%] s:w-auto object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80" alt="Interior with natural light and greenery" />
        </div>
      </div>
      <div>
        <img className="w-full object-cover h-full inset-0" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80" alt="Modern building with vertical gardens" />
      </div>

      <div className="px-[3%] py-[5%]">
        <div className="part-1">
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-olive leading-[0.9] w-full font-cormorant font-light tracking-tight">TIMELESS</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-olive leading-[0.9] w-full font-cormorant font-light tracking-tight">ELEGANCE</h2>
          <h6 className="text-charcoal/80 max-w-[90%] font-crimson 2xl:max-w-[34%] lg:max-w-[40%] xl:max-w-[37%] md:max-w-[44%] sm:max-w-[53%] 2xl:mt-10 xl:mt-10 lg:mt-10 sm:mt-6 xs:mt-5 text-[2.9vw] leading-8 xsm:leading-6 xs:leading-5 md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[1.6vw] xl:leading-8 lg:leading-8 md:leading-7 sm:leading-6 2xl:leading-9 font-light">Every detail speaks to refined craftsmanship and thoughtful design. Spaces conceived as living works of art, where natural materials and abundant daylight create an atmosphere of serene sophistication.</h6>
        </div>
        <div className="part-2 mt-[5%] s:mt-25 flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col xs:flex-col lg:justify-between md:justify-between sm:justify-between">
          <div className="lg:h-7 md:h-6 sm:h-7">
            <a href="#" className="text-olive underline font-crimson font-medium lg:text-[1.5vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center h-full xs:mb-5 tracking-wide uppercase">
              <span className="mr-5 text-[0.95em]">The Design Story</span>
              <i className="ri-arrow-right-line"></i>
            </a>
            <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80" alt="Architectural detail" className=" mt-[7vw] w-[25vw] xs:hidden sm:block md:block lg:block xl:block 2xl:block"/>
          </div>
          <img className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[100%] s:w-auto object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80" alt="Building with abundant greenery" />
        </div>
      </div>
      <div>
        <img className="w-full object-cover h-[100vh] inset-0" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2000&q=80" alt="Luxury residence with natural elements" />
      </div>

      <div className="px-[3%] py-[8%] bg-cream">
        <div className="flex lg:flex-row xs:flex-col gap-[5vw] items-center">
          <div className="lg:w-[45%] xs:w-full">
            <h2 className="text-[11vw] lg:text-[6vw] md:text-[7vw] sm:text-[8vw] text-sage leading-[0.95] font-cormorant font-light tracking-tight mb-8">THE VERDANT</h2>
            <h2 className="text-[11vw] lg:text-[6vw] md:text-[7vw] sm:text-[8vw] text-sage leading-[0.95] font-cormorant font-light tracking-tight mb-10">EXPERIENCE</h2>
            <p className="text-charcoal/80 font-crimson text-[2.9vw] lg:text-[1.4vw] leading-relaxed font-light mb-12">An unparalleled living philosophy where every element is meticulously curated to elevate your daily experience. From bespoke services to thoughtfully designed communal spaces.</p>
            <a href="#" className="text-sage underline font-crimson font-medium lg:text-[1.3vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center tracking-wide uppercase">
              <span className="mr-5 text-[0.95em]">Learn More</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="lg:w-[50%] xs:w-full grid grid-cols-2 gap-8 lg:gap-12">
            <div className="border-l-2 border-sage pl-6">
              <h3 className="text-[12vw] lg:text-[4.5vw] font-crimson font-light text-olive mb-0">24/7</h3>
              <p className="text-charcoal/70 font-crimson text-[3.5vw] lg:text-[1.1vw] uppercase tracking-wider">Concierge Service</p>
            </div>
            <div className="border-l-2 border-olive pl-6">
              <h3 className="text-[12vw] lg:text-[4.5vw] font-crimson font-light text-olive mb-0">5,000</h3>
              <p className="text-charcoal/70 font-crimson text-[3.5vw] lg:text-[1.1vw] uppercase tracking-wider">SQ FT Wellness</p>
            </div>
            <div className="border-l-2 border-sage pl-6">
              <h3 className="text-[12vw] lg:text-[4.5vw] font-crimson font-light text-olive mb-0">100%</h3>
              <p className="text-charcoal/70 font-crimson text-[3.5vw] lg:text-[1.1vw] uppercase tracking-wider">Sustainable</p>
            </div>
            <div className="border-l-2 border-olive pl-6">
              <h3 className="text-[12vw] lg:text-[4.5vw] font-crimson font-light text-olive mb-2">∞</h3>
              <p className="text-charcoal/70 font-crimson text-[3.5vw] lg:text-[1.1vw] uppercase tracking-wider">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden bg-sage py-[10%]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-transparent to-olive/20"></div>
        </div>
        <div className="relative z-10 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-cream">
                <h2 className="text-[11vw] lg:text-[6vw] md:text-[7vw] sm:text-[8vw] leading-[0.9] font-cormorant font-light tracking-tight mb-8">
                  A SANCTUARY<br/>IN THE CITY
                </h2>
                <p className="text-cream/90 font-crimson text-[2.9vw] md:text-[1.8vw] lg:text-[1.4vw] leading-relaxed font-light mb-12">
                  Located within a vibrant cultural landscape, yet offering a peaceful retreat. Experience proximity to world-class institutions, refined dining, and verdant parks—all while residing in your own oasis of calm sophistication.
                </p>
                <a href="#" className="inline-flex items-center text-cream font-crimson font-medium lg:text-[1.3vw] sm:text-[2vw] xs:text-[4vw] tracking-wide uppercase group border-b-2 border-cream/40 hover:border-cream transition-all pb-1">
                  <span className="mr-4">Explore Location</span>
                  <i className="ri-arrow-right-line transition-transform group-hover:translate-x-2"></i>
                </a>
              </div>
              <div className="relative">
                <img 
                  className="w-full h-[60vh] object-cover shadow-2xl" 
                  src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=2000&q=80" 
                  alt="Building with lush surroundings" 
                />
                {/* <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-olive/30 backdrop-blur-sm xs:hidden lg:block"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
