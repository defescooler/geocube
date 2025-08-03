"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {geocubeContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 font-semibold")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="geological exploration"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const geocubeContent = [
  {
    title: "Revolutionizing Geological Exploration",
    description: (
      <>
        <p>
          GeoCube transforms how mining companies discover new deposits. Our AI-powered platform processes decades of geological data in seconds, not months, delivering real-time insights from 1,300+ Soviet-era reports and modern satellite data.
        </p>
        <p>
          Traditional exploration methods rely on manual analysis of scattered data sources, often taking years to identify promising sites. GeoCube's advanced machine learning algorithms achieve 60-85% accuracy in identifying metal-bearing anomalies, dramatically reducing time to discovery.
        </p>
        <p>
          By digitizing Kazakhstan's entire geological archive and leveraging cutting-edge satellite analytics, we've created the most comprehensive geological intelligence platform in the world. Our technology has already helped major mining companies like Kazatomprom, ERG, and Rio Tinto accelerate their exploration programs.
        </p>
      </>
    ),
    badge: "GeoCube Platform",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI-Powered Discovery Engine",
    description: (
      <>
        <p>
          Our proprietary AI algorithms process geological data at unprecedented speed, identifying patterns invisible to human analysts. The platform combines historical exploration data with real-time satellite imagery to create predictive models that guide exploration decisions.
        </p>
        <p>
          The system analyzes over 70 years of geological surveys, drilling logs, and geochemical data to build comprehensive risk assessment models. This enables exploration teams to focus their efforts on the most promising targets, reducing costs by up to 85% while increasing discovery rates.
        </p>
      </>
    ),
    badge: "AI Technology",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Enterprise-Grade Security & Scalability",
    description: (
      <>
        <p>
          Built with zero-trust architecture and end-to-end encryption, GeoCube protects your most valuable geological data. Our platform scales from small exploration teams to multinational mining operations, ensuring your competitive insights remain confidential and secure.
        </p>
      </>
    ),
    badge: "Enterprise Ready",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]; 