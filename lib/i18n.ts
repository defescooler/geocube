export type Language = 'ru' | 'en';

export interface Translations {
  [key: string]: {
    ru: string;
    en: string;
  };
}

// Основные переводы для навбара и общих элементов
export const translations: Translations = {
  // Навигация
  'nav.features': {
    ru: 'Функционал',
    en: 'Features'
  },
  'nav.geocube': {
    ru: 'GeoCube',
    en: 'GeoCube'
  },
  'nav.solution': {
    ru: 'Решение',
    en: 'Solution'
  },
  'nav.team': {
    ru: 'Команда',
    en: 'Team'
  },
  'nav.services': {
    ru: 'Услуги',
    en: 'Services'
  },
  'nav.about': {
    ru: 'О нас',
    en: 'About'
  },
  'nav.careers': {
    ru: 'Карьера',
    en: 'Careers'
  },
  'nav.contact': {
    ru: 'Связаться с нами',
    en: 'Contact Us'
  },

  // Продукты
  'products.title': {
    ru: 'Наши технологические решения',
    en: 'Our Technological Solutions'
  },
  'products.subtitle': {
    ru: 'Собственные разработки для революции в геологоразведке',
    en: 'Proprietary developments for revolution in geological exploration'
  },
  'products.geocube.description': {
    ru: 'Революционная платформа, которая анализирует спутниковые данные, строит предиктивные модели и определяет перспективные участки для разведки.',
    en: 'Revolutionary platform that analyzes satellite data, builds predictive models and identifies promising exploration areas.'
  },
  'products.geocube.open': {
    ru: 'Открыть GeoCube',
    en: 'Open GeoCube'
  },
  'products.geocube.inAction': {
    ru: 'GeoCube в действии',
    en: 'GeoCube in Action'
  },
  'products.geocube.realTime': {
    ru: 'Анализ геологических слоёв в режиме реального времени',
    en: 'Real-time geological layer analysis'
  },
  'products.additional.title': {
    ru: 'Дополнительные решения',
    en: 'Additional Solutions'
  },
  'products.additional.solutions': {
    ru: 'решения',
    en: 'solutions'
  },

  // Функции GeoCube
  'features.satellite': {
    ru: 'Спутниковый анализ',
    en: 'Satellite Analysis'
  },
  'features.ai': {
    ru: 'ИИ-обработка',
    en: 'AI Processing'
  },
  'features.predictive': {
    ru: 'Предиктивные модели',
    en: 'Predictive Models'
  },
  'features.gis': {
    ru: 'ГИС-интеграция',
    en: 'GIS Integration'
  },

  // Дополнительные решения
  'solutions.terradb.title': {
    ru: 'TerraDB',
    en: 'TerraDB'
  },
  'solutions.terradb.description': {
    ru: 'База геологических данных Казахстана',
    en: 'Kazakhstan Geological Database'
  },
  'solutions.fieldassist.title': {
    ru: 'FieldAssist',
    en: 'FieldAssist'
  },
  'solutions.fieldassist.description': {
    ru: 'Мобильное приложение для полевых геологов',
    en: 'Mobile app for field geologists'
  },
  'solutions.mineoptim.title': {
    ru: 'MineOptim',
    en: 'MineOptim'
  },
  'solutions.mineoptim.description': {
    ru: 'Оптимизация горнодобывающих операций',
    en: 'Mining operations optimization'
  },

  // Статусы
  'status.inDevelopment': {
    ru: 'В разработке',
    en: 'In Development'
  },
  'status.planned': {
    ru: 'Планируется',
    en: 'Planned'
  },
  'status.concept': {
    ru: 'Концепция',
    en: 'Concept'
  },

  // Языковые переключатели
  'language.ru': {
    ru: 'Русский',
    en: 'Russian'
  },
  'language.en': {
    ru: 'English',
    en: 'English'
  },
  'language.switch': {
    ru: 'Переключить язык',
    en: 'Switch language'
  },

  // Hero Section
  'hero.title': {
    ru: 'Революция в геологоразведке',
    en: 'Revolution in Geological Exploration'
  },
  'hero.subtitle': {
    ru: 'Искусственный интеллект для поиска месторождений',
    en: 'Artificial Intelligence for Mineral Discovery'
  },
  'hero.description': {
    ru: 'GeoCube анализирует спутниковые данные и определяет перспективные участки для разведки с точностью до 85%',
    en: 'GeoCube analyzes satellite data and identifies promising exploration areas with 85% accuracy'
  },
  'hero.cta.primary': {
    ru: 'Попробовать демо',
    en: 'Try Demo'
  },
  'hero.cta.secondary': {
    ru: 'Узнать больше',
    en: 'Learn More'
  },

  // Value Proposition
  'value.title': {
    ru: 'Почему выбирают Terra',
    en: 'Why Choose Terra'
  },
  'value.subtitle': {
    ru: '25+ лет опыта в геологоразведке',
    en: '25+ Years of Exploration Experience'
  },
  'value.metrics.discoveries': {
    ru: 'Найденных месторождений',
    en: 'Discovered Deposits'
  },
  'value.metrics.countries': {
    ru: 'Стран присутствия',
    en: 'Countries of Presence'
  },
  'value.metrics.accuracy': {
    ru: 'Точность прогнозирования',
    en: 'Prediction Accuracy'
  },

  // Team Section
  'team.title': {
    ru: 'Наша команда',
    en: 'Our Team'
  },
  'team.subtitle': {
    ru: 'Эксперты с мировым опытом',
    en: 'Experts with Global Experience'
  },
  'team.roles.ceo': {
    ru: 'Генеральный директор',
    en: 'Chief Executive Officer'
  },
  'team.roles.cto': {
    ru: 'Технический директор',
    en: 'Chief Technology Officer'
  },
  'team.roles.cso': {
    ru: 'Научный директор',
    en: 'Chief Science Officer'
  },
  'team.roles.cfo': {
    ru: 'Финансовый директор',
    en: 'Chief Financial Officer'
  },
  'team.roles.coo': {
    ru: 'Операционный директор',
    en: 'Chief Operating Officer'
  },

  // CTA Section
  'cta.title': {
    ru: 'Готовы к революции в геологоразведке?',
    en: 'Ready for the Revolution in Geological Exploration?'
  },
  'cta.subtitle': {
    ru: 'Свяжитесь с нами для консультации и демонстрации',
    en: 'Contact us for consultation and demonstration'
  },
  'cta.button.contact': {
    ru: 'Связаться с нами',
    en: 'Contact Us'
  },
  'cta.button.demo': {
    ru: 'Заказать демо',
    en: 'Request Demo'
  },

  // Footer
  'footer.company': {
    ru: 'Компания',
    en: 'Company'
  },
  'footer.products': {
    ru: 'Продукты',
    en: 'Products'
  },
  'footer.services': {
    ru: 'Услуги',
    en: 'Services'
  },
  'footer.resources': {
    ru: 'Ресурсы',
    en: 'Resources'
  },
  'footer.contact': {
    ru: 'Контакты',
    en: 'Contact'
  },
  'footer.address': {
    ru: 'Алматы, Казахстан',
    en: 'Almaty, Kazakhstan'
  },
  'footer.email': {
    ru: 'info@geocube.kz',
    en: 'info@geocube.kz'
  },
  'footer.phone': {
    ru: '+7 (727) XXX-XX-XX',
    en: '+7 (727) XXX-XX-XX'
  },
  'footer.copyright': {
    ru: '© 2024 Terra Exploration. Все права защищены.',
    en: '© 2024 Terra Exploration. All rights reserved.'
  },

  // Services
  'services.title': {
    ru: 'Наши услуги',
    en: 'Our Services'
  },
  'services.subtitle': {
    ru: 'Комплексные решения для геологоразведки',
    en: 'Comprehensive Solutions for Geological Exploration'
  },
  'services.satellite.title': {
    ru: 'Спутниковый анализ',
    en: 'Satellite Analysis'
  },
  'services.satellite.description': {
    ru: 'Анализ спутниковых данных для выявления геологических аномалий',
    en: 'Analysis of satellite data to identify geological anomalies'
  },
  'services.ai.title': {
    ru: 'ИИ-моделирование',
    en: 'AI Modeling'
  },
  'services.ai.description': {
    ru: 'Предиктивные модели на основе машинного обучения',
    en: 'Predictive models based on machine learning'
  },
  'services.gis.title': {
    ru: 'ГИС-интеграция',
    en: 'GIS Integration'
  },
  'services.gis.description': {
    ru: 'Интеграция с геоинформационными системами',
    en: 'Integration with geographic information systems'
  },
  'services.field.title': {
    ru: 'Полевые работы',
    en: 'Field Work'
  },
  'services.field.description': {
    ru: 'Поддержка полевых геологических исследований',
    en: 'Support for field geological research'
  },
  'services.consulting.title': {
    ru: 'Консалтинг',
    en: 'Consulting'
  },
  'services.consulting.description': {
    ru: 'Экспертная оценка и консультации',
    en: 'Expert assessment and consultations'
  }
};

// Функция для получения перевода
export function getTranslation(key: string, language: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translation[language];
}

// Функция для получения всех переводов для ключа
export function getTranslations(key: string): { ru: string; en: string } | null {
  return translations[key] || null;
}
