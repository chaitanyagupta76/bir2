'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageProvider';
import { Snowflakes } from './Snowflakes';
import imagesConfig from '../data/images.json';

export default function Hero() {
    const { content } = useLanguage();

    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-blue-900">
            {/* Background Image with Parallax / Zoom effect */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                <Image
                    src={imagesConfig.heroImage}
                    alt="Magical background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-blue-900/70" />
            </motion.div>

            <Snowflakes />

            {/* Content Container */}
            <div className="relative z-20 text-center px-4 flex flex-col items-center mt-12">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-8 relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.8)] backdrop-blur-sm"
                >
                    <Image
                        src={imagesConfig.parentsImage} // Using parents image as placeholder for child photo, since only one hero image is in config
                        alt="Birthday Girl"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] mb-6 tracking-wide"
                >
                    {content.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-xl md:text-3xl text-cyan-50 font-medium drop-shadow-lg max-w-2xl mx-auto mb-10"
                >
                    {content.hero.subtitle}
                </motion.p>

                <motion.a
                    href="#venue"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-10 py-4 rounded-full bg-white text-blue-900 font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:shadow-[0_0_30px_rgba(255,255,255,1)] transition-all cursor-pointer"
                >
                    {content.hero.cta}
                </motion.a>
            </div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-20">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C50,119.82,100,120,150,119.82c40-10.79,158.6-46.07,171.39-63.38Z" className="fill-[#eff6ff]"></path>
                </svg>
            </div>
        </section>
    );
}
