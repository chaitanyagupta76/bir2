'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Snowflakes() {
    const [flakes, setFlakes] = useState<{ id: number; left: string; delay: string; duration: string; size: number }[]>([]);

    useEffect(() => {
        // Generate flakes safely on client to avoid hydration mismatch
        const newFlakes = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 10 + 10}s`,
            size: Math.random() * 6 + 4,
        }));
        setFlakes(newFlakes);
    }, []);

    if (flakes.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden="true">
            {flakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute top-[-20px] bg-white rounded-full opacity-60 blur-[1px]"
                    style={{ left: flake.left, width: `${flake.size}px`, height: `${flake.size}px` }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: ['0px', '30px', '-30px', '0px']
                    }}
                    transition={{
                        y: {
                            duration: parseFloat(flake.duration),
                            repeat: Infinity,
                            ease: 'linear',
                            delay: parseFloat(flake.delay)
                        },
                        x: {
                            duration: parseFloat(flake.duration) / 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: parseFloat(flake.delay)
                        }
                    }}
                />
            ))}
        </div>
    );
}
