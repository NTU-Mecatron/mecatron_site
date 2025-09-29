import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import mecatronLogo from './assets/logos/mecatronWheelLogo.png';

export default function Footer() {
  return (
    <footer className="bg-[#222] text-gray-300 pt-10 pb-4 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src={mecatronLogo} alt="Mecatron Logo" className="h-14 w-auto object-contain" />
        </div>

        <p>
          A NTU student-led team specialising in marine robotics with potential real-world applications
        </p>
        {/* Social Icons */}
        <div className="flex gap-6 mt-6 mb-6">
          <a href="https://www.instagram.com/ntu_mecatron" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaInstagram size={22} /></a>
          <a href="https://sg.linkedin.com/company/ntu-mecatron" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaLinkedinIn size={22} /></a>
          <a href="teammecatronntu@gmail.com" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaEnvelope size={22} /></a>
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