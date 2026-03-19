'use client';

import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Venue from '@/components/Venue';
import Journey from '@/components/Journey';
import Gallery from '@/components/Gallery';
import LiveStream from '@/components/LiveStream';
import Parents from '@/components/Parents';

export default function AppContent() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Artificial delay to show the beautiful splash screen
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SplashScreen isLoading={isLoading} />
            <div className={`font-sans antialiased text-gray-900 selection:bg-cyan-200 selection:text-cyan-900 bg-white relative transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Navbar />
                <main>
                    <Hero />
                    <Venue />
                    <Journey />
                    <Gallery />
                    <LiveStream />
                    <Parents />
                </main>
            </div>
        </>
    );
}
