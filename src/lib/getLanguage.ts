export type Language = 'en' | 'te';

export function getLanguage(langParam?: string | string[]): Language {
    if (Array.isArray(langParam)) {
        if (langParam[0] === 'en') return 'en';
        return 'te';
    }
    if (langParam === 'en') return 'en';
    return 'te';
}
