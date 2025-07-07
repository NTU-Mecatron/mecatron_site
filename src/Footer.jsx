import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import mecatronLogo from './assets/logos/mecatronWheelLogo.png';

export default function Footer() {
  return (
    <footer className="bg-[#222] text-gray-300 pt-10 pb-4 px-4 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src={mecatronLogo} alt="Mecatron Logo" className="h-14 w-auto object-contain" />
        </div>
        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-6 text-lg">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
          <Link to="/about" className="hover:text-orange-400 transition">About me</Link>
          <Link to="/portfolio" className="hover:text-orange-400 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-orange-400 transition">Contact me</Link>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-6 mb-6">
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaInstagram size={22} /></a>
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaLinkedinIn size={22} /></a>
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaDribbble size={22} /></a>
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaBehance size={22} /></a>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-6 text-lg">
          <div className="flex items-center gap-2"><FaEnvelope />teammecatronntu@gmail.com</div>
        </div>
        {/* Divider */}
        <hr className="w-full border-gray-600 mb-2" />
        {/* Designer Credit */}
        <div className="text-center text-sm text-gray-400">Mecatron NTU</div>
      </div>
    </footer>
  );
} 