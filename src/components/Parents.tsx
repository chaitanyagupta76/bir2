'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageProvider';
import imagesConfig from '../data/images.json';

export default function Parents() {
    const { content } = useLanguage();

    return (
        <section id="parents" className="py-24 relative overflow-hidden bg-blue-900 text-white">
            {/* Magical Background Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 via-blue-900 to-blue-950" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.4)] mb-10"
                    >
                        <Image
                            src={imagesConfig.parentsImage}
                            alt="Parents"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-8 text-cyan-50"
                    >
                        {content.parents.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl leading-relaxed text-blue-100 font-medium mb-12 max-w-2xl mx-auto italic"
                    >
                        "{content.parents.invitation}"
                    </motion.p>

                    <motion.a
                        href="#venue"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xl rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all cursor-pointer"
                    >
                        {content.parents.cta}
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
