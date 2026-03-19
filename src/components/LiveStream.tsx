'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageProvider';
import imagesConfig from '../data/images.json';
import { Video } from 'lucide-react';

export default function LiveStream() {
    const { content } = useLanguage();

    return (
        <section id="liveStream" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-cyan-50 rounded-full">
                            <Video className="w-8 h-8 text-cyan-500 animate-pulse" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">{content.liveStream.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{content.liveStream.description}</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-50/50"
                >
                    <iframe
                        src={imagesConfig.liveStreamUrl}
                        title={content.liveStream.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <a
                        href={imagesConfig.liveStreamUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 transition-all"
                    >
                        {content.liveStream.cta}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
