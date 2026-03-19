'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageProvider';
import imagesConfig from '../data/images.json';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function Venue() {
    const { content } = useLanguage();

    return (
        <section id="venue" className="py-24 bg-[#eff6ff] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">{content.venue.title}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-cyan-50">
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                        <Image
                            src={imagesConfig.venueImage}
                            alt="Venue"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/90" />
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-serif font-bold text-blue-900 mb-6">{content.venue.name}</h3>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-cyan-500 mr-4 mt-1 shrink-0" />
                                    <p className="text-gray-600 text-lg">{content.venue.address}</p>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-6 h-6 text-cyan-500 mr-4 shrink-0" />
                                    <p className="text-gray-600 text-lg">{content.venue.date}</p>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 text-cyan-500 mr-4 shrink-0" />
                                    <p className="text-gray-600 text-lg">{content.venue.time}</p>
                                </div>
                            </div>

                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(content.venue.name + ' ' + content.venue.address)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 transition-all"
                            >
                                {content.venue.cta}
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
