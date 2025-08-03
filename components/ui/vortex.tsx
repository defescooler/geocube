'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  rangeHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const particleCount = props.particleCount || 300; // Reduced from 500 for better performance
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = props.rangeHue || 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  const center: [number, number] = [0, 0];

  const TAU: number = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);

    particleProps[i] = x;
    particleProps[i + 1] = y;
    particleProps[i + 2] = vx;
    particleProps[i + 3] = vy;
    particleProps[i + 4] = life;
    particleProps[i + 5] = ttl;
    particleProps[i + 6] = speed;
    particleProps[i + 7] = radius;
    particleProps[i + 8] = hue;
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    animationFrameId.current = requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const i2 = 1 + i;
    const i3 = 2 + i;
    const i4 = 3 + i;
    const i5 = 4 + i;
    const i6 = 5 + i;
    const i7 = 6 + i;
    const i8 = 7 + i;
    const i9 = 8 + i;

    const x = particleProps[i];
    const y = particleProps[i2];
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps;
    const vx = lerp(particleProps[i3], n, 0.1);
    const vy = lerp(particleProps[i4], n, 0.1);
    const ttl = particleProps[i6];
    const speed = particleProps[i7];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;
    const radius = particleProps[i8];
    const hue = particleProps[i9];

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = ttl + 1;

    if (checkBounds(x2, y2, canvasRef.current!)) {
      drawParticle(x, y, x2, y2, ttl, ttl, radius, hue, ctx);
    }
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D,
  ) => {
    const alpha = fadeInOut(life, ttl);
    const gradient = ctx.createLinearGradient(x, y, x2, y2);
    gradient.addColorStop(0, `hsla(${hue}, 100%, 50%, ${alpha})`);
    gradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = radius;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
    return x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height;
  };

  const resize = (
    canvas: HTMLCanvasElement,
    ctx?: CanvasRenderingContext2D,
  ) => {
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    center[0] = width * 0.5;
    center[1] = height * 0.5;
  };

  const renderGlow = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.shadowBlur = 20;
    ctx.shadowColor = backgroundColor;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.shadowBlur = 0;
  };

  const renderToScreen = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.globalCompositeOperation = "source-over";
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas, ctx);
      }
    }
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", props.containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className={cn("absolute inset-0 w-full h-full", props.className)}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        {props.children}
      </motion.div>
    </div>
  );
};