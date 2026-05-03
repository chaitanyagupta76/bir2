"use client";

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageProvider';
import { getLanguage } from '@/lib/getLanguage';
import { loadContent } from '@/lib/loadContent';
import AppContent from '@/components/AppContent';

function HomeContent() {
    const searchParams = useSearchParams();
    const langStr = searchParams.get('lang');
    const lang = getLanguage(langStr as any);
    
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        let isMounted = true;
        loadContent(lang).then((data) => {
            if (isMounted) setContent(data);
        });
        return () => { isMounted = false; };
    }, [lang]);

    if (!content) return <div className="min-h-screen flex items-center justify-center bg-white">Loading...</div>;

    return (
        <LanguageProvider lang={lang} content={content}>
            <AppContent />
        </LanguageProvider>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white">Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
}
