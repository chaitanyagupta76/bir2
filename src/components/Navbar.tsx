'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '../context/LanguageProvider';

export default function Navbar() {
    const { content, lang } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const nextLang = lang === 'en' ? 'te' : 'en';
        const params = new URLSearchParams(searchParams?.toString() || '');
        params.set('lang', nextLang);
        router.push(`${pathname}?${params.toString()}`);
    };

    const navItems = [
        { label: content.nav.home, href: '#home' },
        { label: content.nav.venue, href: '#venue' },
        { label: content.nav.journey, href: '#journey' },
        { label: content.nav.gallery, href: '#gallery' },
        { label: content.nav.parents, href: '#parents' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className={`text-2xl font-bold font-serif shrink-0 transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                    Anika
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`font-medium transition-colors ${isScrolled ? 'text-blue-900 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="px-5 py-2 bg-gradient-to-r from-cyan-200 to-blue-200 text-blue-900 rounded-full text-sm font-bold shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all text-center min-w-[100px]"
                    >
                        {lang === 'en' ? 'తెలుగు' : 'English'}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-cyan-100 py-4 flex flex-col px-6 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-blue-900 hover:text-cyan-600 font-medium py-2 border-b border-cyan-50"
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="pt-2">
                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full py-3 bg-gradient-to-r from-cyan-200 to-blue-200 text-blue-900 rounded-lg text-sm font-bold shadow-sm"
                        >
                            Translate to {lang === 'en' ? 'తెలుగు' : 'English'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
