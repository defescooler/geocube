"use client";



export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "data-collection",
    title: "Сбор данных",
    description:
      "Масштабный сбор геологической информации из всех доступных источников: спутниковые снимки высокого разрешения, исторические геологические отчеты, геофизические и геохимические данные, а также информация с наземных датчиков и дронов для создания полной цифровой картины месторождения.",
    href: "#data-collection",
    image: "/images/services/1.jpg",
  },
  {
    id: "data-integration",
    title: "Интеграция данных",
    description:
      "Интеллектуальное объединение разнородных данных в единую аналитическую платформу с автоматической очисткой, структуризацией и подготовкой для глубокого анализа, создавая детальную 3D-модель геологического строения местности.",
    href: "#data-integration",
    image: "/images/services/2.jpg",
  },
  {
    id: "ai-analysis",
    title: "Анализ с помощью ИИ",
    description:
      "Передовые алгоритмы машинного обучения и нейронных сетей анализируют комплексные данные, выявляя скрытые геологические закономерности, аномалии и специфические признаки, указывающие на наличие ценных минеральных месторождений.",
    href: "#ai-analysis",
    image: "/images/services/3.jpg",
  },
  {
    id: "prediction",
    title: "Прогнозирование",
    description:
      "Разработка высокоточных прогнозных моделей на основе ИИ-анализа, определяющих наиболее перспективные участки для разведки с детальной оценкой вероятности успеха, экономической целесообразности и рисков инвестирования.",
    href: "#prediction",
    image: "/images/services/4.jpg",
  },
  {
    id: "field-work",
    title: "Полевые работы",
    description:
      "Проведение целевых полевых исследований силами команды опытных геологов, геофизиков и инженеров для подтверждения прогнозов ИИ, получения детальной информации о выявленных месторождениях и подготовки технико-экономического обоснования.",
    href: "#field-work",
    image: "/images/services/5.jpg",
  },
];

const Gallery4 = ({
  title = "Наши услуги",
  description = "Комплексный подход к геологоразведке с использованием передовых технологий искусственного интеллекта и машинного обучения для максимально эффективного поиска месторождений.",
  items = data,
}: Gallery4Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
          {items.map((item) => (
            <div key={item.id} className="w-full">
              <a href={item.href} className="group rounded-xl">
                <div className="group relative h-full min-h-[20rem] max-w-full overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                                      <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.6),hsl(var(--primary)/0.9)_100%)] mix-blend-multiply" />
                                                          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 text-white">
                      <div className="mb-2 pt-2 text-lg font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="mb-4 line-clamp-2 text-sm text-white">
                        {item.description}
                      </div>
                    </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
