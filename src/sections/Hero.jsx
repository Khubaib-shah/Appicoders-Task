import background1 from "../../public/background1.png";
import mockup1 from "../../public/mockup1.png";
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <div className="flex justify-center relative h-screen overflow-hidden">
      <div className="absolute w-full">
        <Navbar />
      </div>

      <div className="absolute flex flex-col md:flex-row items-center justify-center h-full pt-[10%] md:pt-[3%] gap-6 md:gap-10 px-6 md:px-0 text-center md:text-left">
        <div className="w-[70%] flex-1 sm:w-[50%] md:w-[25%] max-w-[300px] md:max-w-none mt-[30%] sm:m-0">
          <img className="w-full h-full" alt="logo" src={mockup1} />
        </div>

        <div className="w-full flex-2 md:w-[40%] flex flex-col items-center md:items-start">
          <div className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Leading The Way In App Development Innovation
          </div>

          <div className="text-white text-sm sm:text-base font-normal py-4 max-w-md">
            We build Android & iOS Mobile Apps that cater all your business
            needs and take it to the next level.
          </div>

          <div className="w-[70%] sm:w-[60%] md:w-[45%] bg-gradient-to-r from-red-600 via-red-900 to-red-600 py-3 font-semibold text-white flex items-center justify-center rounded-md cursor-pointer hover:scale-105 transition">
            GET A FREE QUOTE
          </div>
        </div>
      </div>

      <img alt="img" src={background1} className="h-full w-full object-cover" />
    </div>
  );
}

export default Hero;
