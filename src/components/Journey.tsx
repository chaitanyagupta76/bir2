'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageProvider';
import imagesConfig from '../data/images.json';

export default function Journey() {
    const { content } = useLanguage();

    return (
        <section id="journey" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">{content.journey.title}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-cyan-200 to-blue-100 transform -translate-x-1/2 rounded-full" />
                    <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-cyan-200 to-blue-100 rounded-full" />

                    {content.journey.milestones.map((milestone: any, index: number) => {
                        const isEven = index % 2 === 0;
                        const imageIndex = index % imagesConfig.timeline.length;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Dot */}
                                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-cyan-400 rounded-full z-10 shadow-md" />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div className="bg-[#eff6ff] p-6 rounded-2xl shadow-sm border border-cyan-50 hover:shadow-md transition-shadow">
                                        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3">
                                            {milestone.date}
                                        </span>
                                        <h3 className="text-2xl font-serif font-bold text-blue-900 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className={`w-full md:w-1/2 pl-12 mt-6 md:mt-0 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg group">
                                        <Image
                                            src={imagesConfig.timeline[imageIndex]}
                                            alt={milestone.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
