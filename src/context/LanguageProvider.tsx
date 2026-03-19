'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Language } from '../lib/getLanguage';

// Since the JSONs have the same structure, this is generic enough.
export type ContentType = any;

interface LanguageContextProps {
    content: ContentType;
    lang: Language;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({
    children,
    content,
    lang,
}: {
    children: ReactNode;
    content: ContentType;
    lang: Language;
}) {
    return (
        <LanguageContext.Provider value={{ content, lang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
