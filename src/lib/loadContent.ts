import { Language } from './getLanguage';

const contentMap = {
    en: () => import('../data/content.en.json').then((module) => module.default),
    te: () => import('../data/content.te.json').then((module) => module.default),
};

export async function loadContent(lang: Language) {
    return contentMap[lang]();
}
