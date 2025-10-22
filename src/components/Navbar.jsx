import { useState } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Appicoderlogo1 from "../../public/Appicoderlogo1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);

  const menuItems = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Why Choose Us", link: "why-choose-us" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Products", link: "products" },
    { name: "Testimonial", link: "testimonial" },
    { name: "Technologies", link: "technologies" },
    { name: "Contact", link: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="text-white px-6 md:px-12 py-4 w-full absolute z-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={Appicoderlogo1}
            alt="Appicoder Logo"
            className="w-28 cursor-pointer"
            onClick={() => handleScroll("home")}
          />
        </div>

        <div className="hidden lg:flex gap-6 text-sm">
          {menuItems.map((item) => (
            <div
              key={item.link}
              className="cursor-pointer hover:text-gray-300 transition"
              onClick={() => handleScroll(item.link)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center border border-gray-500 py-2 px-4 rounded-full text-sm ">
          <FaPhone />
          <span className="pl-2">+1 (800) 826 8018</span>
        </div>

        <div
          className="lg:hidden flex items-center text-2xl cursor-pointer"
          onClick={() => toggleMenu()}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden backdrop-blur-lg mt-4 flex flex-col gap-4 text-sm p-6 rounded-2xl border transition-all duration-300">
          {menuItems.map((item) => (
            <div
              key={item.link}
              className="cursor-pointer hover:text-gray-300 transition"
              onClick={() => handleScroll(item.link)}
            >
              {item.name}
            </div>
          ))}
          <div className="hidden sm:flex items-center border border-gray-500 py-2 px-4 rounded-full text-sm justify-center hover:bg-gray-800 transition">
            <FaPhone />
            <span className="pl-2">+1 (800) 826 8018</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
