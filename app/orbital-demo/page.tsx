"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { UnifiedNavbar } from "@/components/ui/unified-navbar";

const timelineData = [
  {
    id: 1,
    title: "Планирование",
    date: "Янв 2024",
    content: "Планирование проекта и сбор требований.",
    category: "Планирование",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Дизайн",
    date: "Фев 2024",
    content: "Дизайн UI/UX и архитектура системы.",
    category: "Дизайн",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Разработка",
    date: "Мар 2024",
    content: "Реализация основных функций и тестирование.",
    category: "Разработка",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Тестирование",
    date: "Апр 2024",
    content: "Пользовательское тестирование и исправление ошибок.",
    category: "Тестирование",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Релиз",
    date: "Май 2024",
    content: "Финальное развертывание и выпуск.",
    category: "Релиз",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export default function OrbitalDemoPage() {
  return (
    <>
      <UnifiedNavbar variant="transparent" />
      <div className="min-h-screen pt-16">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </>
  );
}
