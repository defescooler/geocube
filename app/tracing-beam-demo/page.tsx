import TracingBeamDemo from '@/components/ui/tracing-beam-demo';

export default function TracingBeamDemoPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            GeoCube Tracing Beam Demo
          </h1>
          <p className="text-slate-400 text-lg">
            Scroll down to experience the animated tracing beam effect
          </p>
        </div>
        <TracingBeamDemo />
      </div>
    </div>
  );
} 