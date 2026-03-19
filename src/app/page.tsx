import { LanguageProvider } from '@/context/LanguageProvider';
import { getLanguage } from '@/lib/getLanguage';
import { loadContent } from '@/lib/loadContent';
import AppContent from '@/components/AppContent';

export default async function Home({
    searchParams,
}: {
    searchParams: { lang?: string | string[] } | Promise<{ lang?: string | string[] }>;
}) {
    // Await searchParams in Next 15 if it's a promise, though we can safely handle both
    const resolvedSearchParams = await searchParams;
    const langStr = resolvedSearchParams?.lang;

    const lang = getLanguage(langStr);
    const content = await loadContent(lang);

    return (
        <LanguageProvider lang={lang} content={content}>
            <AppContent />
        </LanguageProvider>
    );
}
