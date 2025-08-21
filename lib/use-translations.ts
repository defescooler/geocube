import { useLanguage } from './language-context';
import { getTranslation, getTranslations } from './i18n';

export function useTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return getTranslation(key, language);
  };

  const tAll = (key: string) => {
    return getTranslations(key);
  };

  return {
    t,
    tAll,
    language
  };
}
