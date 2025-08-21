# Мультиязычность (i18n) в GeoCube

## Обзор

Система мультиязычности позволяет переключаться между русским и английским языками в реальном времени. Система построена на React Context API и поддерживает сохранение выбранного языка в localStorage.

## Структура файлов

```
lib/
├── i18n.ts                    # Основные переводы и функции
├── language-context.tsx       # React Context для управления языком
└── use-translations.ts        # Хук для удобного использования переводов

components/
└── ui/
    └── language-switcher.tsx  # Компонент кнопки переключения языка
```

## Основные компоненты

### 1. LanguageProvider

Провайдер контекста, который нужно обернуть вокруг всего приложения:

```tsx
import { LanguageProvider } from '@/lib/language-context';

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### 2. LanguageSwitcher

Компонент кнопки переключения языка с двумя вариантами:

```tsx
// Иконка (для навбара)
<LanguageSwitcher variant="icon" />

// Кнопка (для мобильного меню)
<LanguageSwitcher variant="button" />
```

### 3. useLanguage

Хук для получения текущего языка и функций переключения:

```tsx
import { useLanguage } from '@/lib/language-context';

function MyComponent() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <p>Текущий язык: {language}</p>
      <button onClick={toggleLanguage}>Переключить язык</button>
    </div>
  );
}
```

### 4. useTranslations

Удобный хук для работы с переводами:

```tsx
import { useTranslations } from '@/lib/use-translations';

function MyComponent() {
  const { t, language } = useTranslations();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

## Добавление новых переводов

### 1. Добавьте перевод в `lib/i18n.ts`:

```tsx
export const translations: Translations = {
  // ... существующие переводы
  
  'my.new.key': {
    ru: 'Русский текст',
    en: 'English text'
  }
};
```

### 2. Используйте перевод в компоненте:

```tsx
import { useTranslations } from '@/lib/use-translations';

function MyComponent() {
  const { t } = useTranslations();
  
  return <p>{t('my.new.key')}</p>;
}
```

## Структура ключей переводов

Ключи переводов организованы по секциям:

- `nav.*` - Навигация
- `hero.*` - Главная секция
- `products.*` - Секция продуктов
- `team.*` - Секция команды
- `cta.*` - Призывы к действию
- `footer.*` - Футер
- `services.*` - Услуги

## Особенности реализации

### 1. Автоматическое сохранение

Выбранный язык автоматически сохраняется в localStorage и восстанавливается при перезагрузке страницы.

### 2. Атрибут lang

При изменении языка автоматически обновляется атрибут `lang` у HTML элемента.

### 3. Анимации

Компонент LanguageSwitcher включает плавные анимации при переключении языка.

### 4. Поддержка мобильных устройств

В мобильном меню кнопка переключения языка отображается в виде полноценной кнопки.

## Примеры использования

### В навбаре:

```tsx
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';
import LanguageSwitcher from '@/components/ui/language-switcher';

function Navbar() {
  const { language } = useLanguage();
  
  return (
    <nav>
      <div className="flex items-center gap-4">
        <LanguageSwitcher variant="icon" />
        <Link href="/contact">
          {getTranslation('nav.contact', language)}
        </Link>
      </div>
    </nav>
  );
}
```

### В секции с подчеркиванием:

```tsx
function HeroSection() {
  const { t, language } = useTranslations();
  
  return (
    <h1>
      {t('hero.title').split(' ').map((word, index, array) => {
        const isHighlighted = word.includes('революция') || word.includes('Revolution');
        return (
          <span key={index}>
            {isHighlighted ? (
              <span className="text-emerald-500">{word}</span>
            ) : (
              word
            )}
            {index < array.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </h1>
  );
}
```

## Расширение функциональности

### Добавление нового языка

1. Обновите тип `Language` в `lib/i18n.ts`:
```tsx
export type Language = 'ru' | 'en' | 'kk'; // добавить казахский
```

2. Добавьте переводы для нового языка:
```tsx
'hero.title': {
  ru: 'Революция в геологоразведке',
  en: 'Revolution in Geological Exploration',
  kk: 'Геологиялық барлаудағы төңкеріс'
}
```

3. Обновите функцию `toggleLanguage` в `language-context.tsx`:
```tsx
const toggleLanguage = () => {
  const languages: Language[] = ['ru', 'en', 'kk'];
  const currentIndex = languages.indexOf(language);
  const nextIndex = (currentIndex + 1) % languages.length;
  setLanguage(languages[nextIndex]);
};
```

## Отладка

### Проверка переводов

Если перевод не найден, в консоли появится предупреждение:
```
Translation key "missing.key" not found
```

### Проверка контекста

Убедитесь, что компонент обернут в `LanguageProvider`:
```tsx
// ❌ Ошибка
function MyComponent() {
  const { language } = useLanguage(); // Error: useLanguage must be used within a LanguageProvider
}

// ✅ Правильно
function App() {
  return (
    <LanguageProvider>
      <MyComponent />
    </LanguageProvider>
  );
}
```
