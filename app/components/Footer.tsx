import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Insurance Planner</h3>
            <p className="text-gray-400 leading-relaxed">
              전문적인 보험 상담 및 설계 서비스를 제공합니다.
              고객의 니즈에 맞는 최적의 보험 솔루션을 찾아드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span>홈</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span>서비스</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span>상담문의</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">생명보험</li>
              <li className="text-gray-400">손해보험</li>
              <li className="text-gray-400">연금보험</li>
              <li className="text-gray-400">건강보험</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>010-3154-7720</span>
              </p>
              <p className="text-gray-400 flex items-center space-x-3">
                <FaEnvelope className="text-blue-500" />
                <span>info@example.com</span>
              </p>
              <p className="text-gray-400 flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>서울특별시 강남구</span>
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:info@example.com"
                 className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Insurance Planner. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 