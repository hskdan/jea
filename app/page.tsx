'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaUserFriends, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <p className="text-3xl text-gray-600">안녕하세요,</p>
                <div className="flex flex-col">
                  <span className="text-[45px] font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    보험 설계사 배지윤
                  </span>
                  <span className="text-3xl text-gray-500 mt-2">입니다.</span>
                </div>
              </div>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              10년 이상의 경력을 바탕으로 고객님의 미래를 안전하게 지키는<br />
              맞춤형 보험 설계를 제공해드립니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" 
                className="btn-primary inline-block hover:scale-105 transform transition-all">
                무료 상담 신청하기
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/insurance-planner.jpg"
              alt="보험 설계사 프로필"
              width={500}
              height={500}
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            제공 서비스
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="card group hover:-translate-y-2 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-semibold mb-4">맞춤형 보험 설계</h3>
                <p className="text-gray-600">고객님의 상황과 필요에 맞는 최적의 보험 상품을 설계해드립니다.</p>
              </div>
            </motion.div>
            <motion.div 
              className="card group hover:-translate-y-2 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUserFriends />
                </div>
                <h3 className="text-xl font-semibold mb-4">보험 상담</h3>
                <p className="text-gray-600">전문적인 상담을 통해 보험에 대한 이해를 돕고 최적의 선택을 도와드립니다.</p>
              </div>
            </motion.div>
            <motion.div 
              className="card group hover:-translate-y-2 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaChartLine />
                </div>
                <h3 className="text-xl font-semibold mb-4">보험 관리</h3>
                <p className="text-gray-600">가입 후에도 지속적인 관리와 상담을 통해 안전한 보험 생활을 지원합니다.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">경력 연수</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1,000+</h3>
              <p className="text-gray-600">상담 고객</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
              <p className="text-gray-600">고객 만족도</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 