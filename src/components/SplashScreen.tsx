'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    isLoading: boolean;
}

export default function SplashScreen({ isLoading }: SplashScreenProps) {
    const [flakes, setFlakes] = React.useState<{ id: number; left: string; delay: number; duration: number; size: number }[]>([]);

    React.useEffect(() => {
        const newFlakes = [...Array(20)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: Math.random() * 5 + 5,
            size: Math.random() * 1.5 + 1
        }));
        setFlakes(newFlakes);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-blue-900 overflow-hidden"
                >
                    {/* Animated Snowflakes in Background */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        {flakes.map((flake) => (
                            <motion.div
                                key={flake.id}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: "100vh", opacity: [0, 1, 0] }}
                                transition={{
                                    duration: flake.duration,
                                    repeat: Infinity,
                                    delay: flake.delay,
                                    ease: "linear"
                                }}
                                className="absolute text-white"
                                style={{
                                    left: flake.left,
                                    fontSize: `${flake.size}rem`
                                }}
                            >
                                ❄
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Content */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex flex-col items-center"
                    >
                        {/* Crown / Snowflake Spinner */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-32 h-32 md:w-48 md:h-48 border-4 border-cyan-200/30 border-t-cyan-200 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(165,243,252,0.3)]"
                        >
                            <span className="text-6xl md:text-8xl">👑</span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-8 text-3xl md:text-5xl font-serif font-bold text-white tracking-widest text-center"
                        >
                            MAGICAL MOMENTS
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-1 bg-cyan-200 mt-4 rounded-full max-w-[200px]"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
