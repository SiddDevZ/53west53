import Image from "next/image";
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  
  return (
    <>
      <main className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/927173841/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=8773f924456bcf52f0bdd4e992db6863de1a63ec930f3a45d7fee3d5a77e745b"
            preload="meta"
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
        <div className="absolute bottom-0 left-0 px-7 py-4 z-10 w-full text-white">
          <h2 className="text-[8vw] font-dg leading-none">A MODERN</h2>
          <h2 className="text-[8vw] font-dg leading-none">HEIRLOOM</h2>
        </div>
      </main>
      <div className="px-[3%] py-[3%]">
        <div className="part-1">
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">A WORLD AWAY</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">FROM ORDINARY</h2>
          <h6 className="text-brown max-w-[90%] font-brad 2xl:max-w-[34%] lg:max-w-[40%] xl:max-w-[37%] md:max-w-[44%] sm:max-w-[53%] 2xl:mt-7 xl:mt-7 lg:mt-7 sm:mt-5 xs:mt-4 text-[2.9vw] leading-7 xsm:leading-5 xs:leading-4 md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[2vw] xl:leading-7 lg:leading-7 md:leading-6 sm:leading-5 2xl:leading-9">A sculptural icon for Manhattan by Jean Nouvel and Thierry Despont. Condominium residences with panoramic views, inspired service and amenities, and custom finishes and detailing.</h6>
        </div>
        <div className="part-2 mt-[5%] s:mt-25 flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col xs:flex-col lg:justify-between md:justify-between sm:justify-between">
          <div className="lg:h-7 md:h-6 sm:h-7">
            <a href="#" className="text-brown underline font-hardt font-medium lg:text-[1.6vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center h-full xs:mb-5">
              <span className="mr-5">EXPLORE AVAILABILITY</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <img className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[100%] s:w-auto object-cover" src="https://www.datocms-assets.com/121312/1710578216-53west53_homepage_05.jpg?fit=max&fm=webp&h=3000&w=2000" alt="Pic of an interior" />
        </div>
      </div>
      <div>
        <img className="w-full object-cover h-full inset-0" src="https://www.datocms-assets.com/121312/1710578208-53west53_homepage_04.jpg?fit=max&fm=webp&h=3000&w=2000" alt="" />
      </div>

      <div className="px-[3%] py-[3%]">
        <div className="part-1">
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">THE WONDER</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">WE SEEK</h2>
          <h6 className="text-brown max-w-[90%] font-brad 2xl:max-w-[34%] lg:max-w-[40%] xl:max-w-[37%] md:max-w-[44%] sm:max-w-[53%] 2xl:mt-7 xl:mt-7 lg:mt-7 sm:mt-5 xs:mt-4 text-[2.9vw] leading-7 xsm:leading-5 xs:leading-4 md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[2vw] xl:leading-7 lg:leading-7 md:leading-6 sm:leading-5 2xl:leading-9">53 West 53’s distinctive and visionary sculptural form rises above New York City’s iconic Museum of Modern Art. The tower’s expressive architecture is shaped by an original and artistic response to its context—including the forces of nature and the vitality of the streetscape—and allows the building to achieve expansive interior spaces through the marriage of technical innovation and exacting attention to detail.</h6>
        </div>
        <div className="part-2 mt-[5%] s:mt-25 flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col xs:flex-col lg:justify-between md:justify-between sm:justify-between">
          <div className="lg:h-7 md:h-6 sm:h-7">
            <a href="#" className="text-brown underline font-hardt font-medium lg:text-[1.6vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center h-full xs:mb-5">
              <span className="mr-5">DISCOVER THE DESIGN</span>
              <i className="ri-arrow-right-line"></i>
            </a>
            <img src="https://www.datocms-assets.com/121312/1710578229-53west53_homepage_07.jpg?fit=max&fm=webp&h=3000&w=2000" alt="First image" className=" mt-[7vw] w-[25vw] xs:hidden sm:block md:block lg:block xl:block 2xl:block"/>
          </div>
          <img className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[100%] s:w-auto object-cover" src="https://www.datocms-assets.com/121312/1710578223-53west53_homepage_06.jpg?fit=max&fm=webp&h=3000&w=2000" alt="Pic of a big building" />
        </div>
      </div>
      <div>
        <img className="w-full object-cover h-[100vh] inset-0" src="https://www.datocms-assets.com/121312/1710578183-53west53_homepage_01.jpg?fit=max&fm=webp&h=3000&w=2000" alt="" />
      </div>

      <div className="px-[3%] py-[3%]">
        <div className="part-1">
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">SINGULAR</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">SPACES IN</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">THE SKY</h2>
          <h6 className="text-brown max-w-[90%] font-brad 2xl:max-w-[34%] lg:max-w-[40%] xl:max-w-[37%] md:max-w-[44%] sm:max-w-[53%] 2xl:mt-7 xl:mt-7 lg:mt-7 sm:mt-5 xs:mt-4 text-[2.9vw] leading-7 xsm:leading-5 xs:leading-4 md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[2vw] xl:leading-7 lg:leading-7 md:leading-6 sm:leading-5 2xl:leading-9">53 West 53’s distinctive and visionary sculptural form rises above New York City’s iconic Museum of Modern Art. The tower’s expressive architecture is shaped by an original and artistic response to its context—including the forces of nature and the vitality of the streetscape—and allows the building to achieve expansive interior spaces through the marriage of technical innovation and exacting attention to detail.</h6>
        </div>
        <div className="part-2 mt-[5%] s:mt-25 flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col xs:flex-col lg:justify-between md:justify-between sm:justify-between">
          <div className="flex flex-col justify-between">
            <div className="lg:h-7 md:h-6 sm:h-7">
              <a href="#" className="text-brown underline font-hardt font-medium lg:text-[1.6vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center h-full xs:mb-5">
                <span className="mr-5">DISCOVER THE DESIGN</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
            <div className="flex flex-col space-y-2 xs:hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
              <a className="text-brown  font-hardt font-semibold text-[1.3vw] s:text-16 leading-none" href="#">BEDROOMS</a>
              <a className="text-brown opacity-70 font-hardt font-semibold text-[1.3vw] s:text-16 leading-none" href="#">KITCHENS</a>
              <a className="text-brown opacity-70 font-hardt font-semibold text-[1.3vw] s:text-16 leading-none" href="#">LIVING ROOMS</a>
              <a className="text-brown opacity-70 font-hardt font-semibold text-[1.3vw] s:text-16 leading-none" href="#">BATHROOMS</a>
            </div>
          </div>
          <img className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[100%] s:w-auto object-cover" src="https://www.datocms-assets.com/121312/1710578275-53west53_homepage_mobile_carousel1_01.jpg?fit=max&fm=webp&h=3000&w=2000" alt="Pic of a big building" />
        </div>
      </div>
      <div>
        <img className="w-full object-cover h-[100vh] inset-0" src="https://www.datocms-assets.com/121312/1710578198-53west53_homepage_03.jpg" alt="" />
      </div>
      
      <div className="px-[3%] py-[3%]">
        <div className="part-1">
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">THE HEARTBEAT</h2>
          <h2 className="text-[11vw] lg:text-[7vw] md:text-[7vw] sm:text-[8vw] text-brown leading-none w-full font-dg">OF THE CITY</h2>
          <h6 className="text-brown max-w-[90%] font-brad 2xl:max-w-[34%] lg:max-w-[40%] xl:max-w-[37%] md:max-w-[44%] sm:max-w-[53%] 2xl:mt-7 xl:mt-7 lg:mt-7 sm:mt-5 xs:mt-4 text-[2.9vw] leading-7 xsm:leading-5 xs:leading-4 md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[2vw] xl:leading-7 lg:leading-7 md:leading-6 sm:leading-5 2xl:leading-9">Midtown is a sophisticated yet energetic neighborhood surrounded by the best of New York—iconic cultural institutions, fine dining and nightlife, shopping and entertainment, and the world’s biggest backyard—Central Park.</h6>
        </div>
        <div className="part-2 mt-[5%] s:mt-25 flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col xs:flex-col lg:justify-between md:justify-between sm:justify-between">
          <div className="lg:h-7 md:h-6 sm:h-7">
            <a href="#" className="text-brown underline font-hardt font-medium lg:text-[1.6vw] sm:text-[2vw] xs:text-[4vw] leading-none flex items-center h-full xs:mb-5">
              <span className="mr-5">DISCOVER THE NEIGHBORHOOD</span>
              <i className="ri-arrow-right-line"></i>
            </a>
            <img src="https://www.datocms-assets.com/121312/1710578242-53west53_homepage_09.jpg" alt="First image" className=" mt-[7vw] w-[25vw] xs:hidden sm:block md:block lg:block xl:block 2xl:block"/>
          </div>
          <img className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[100%] s:w-auto object-cover" src="https://www.datocms-assets.com/121312/1710578235-53west53_homepage_08.jpg" alt="Pic of a big building" />
        </div>
      </div>

      
    </>
  );
}