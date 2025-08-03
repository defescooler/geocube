"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, animate, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  MapPin, 
  Layers, 
  Zap,
  TrendingUp,
  Activity,
  Satellite,
  Brain,
  Globe,
  Target,
  Leaf,
  BarChart3,
  Settings,
  Users,
  Shield,
  ChevronRight,
  Play,
  Download,
  Share,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';

interface GeologicalData {
  coordinates: [number, number];
  confidence: number;
  metalType: 'Lithium' | 'Nickel' | 'Cobalt' | 'Copper' | 'Gold' | 'Uranium';
  historicalReports: number;
  lastUpdated: Date;
  blockId: string;
  depth: string;
  anomalyType: string;
}

interface PlatformMetrics {
  accuracy: number;
  costReduction: number;
  environmentalImpact: number;
  processingSpeed: string;
  reportsProcessed: number;
  activeBlocks: number;
}

const mockGeologicalData: GeologicalData[] = [
  {
    coordinates: [47.0, 68.0],
    confidence: 92,
    metalType: 'Copper',
    historicalReports: 45,
    lastUpdated: new Date(),
    blockId: 'KZ-0911',
    depth: '200-450m',
    anomalyType: 'Hydrothermal'
  },
  {
    coordinates: [47.5, 68.5],
    confidence: 88,
    metalType: 'Lithium',
    historicalReports: 32,
    lastUpdated: new Date(),
    blockId: 'KZ-1047',
    depth: '100-300m',
    anomalyType: 'Magnetic'
  },
  {
    coordinates: [46.8, 67.2],
    confidence: 76,
    metalType: 'Uranium',
    historicalReports: 28,
    lastUpdated: new Date(),
    blockId: 'KZ-0075',
    depth: '50-160m',
    anomalyType: 'Radiometric'
  }
];

const realtimeMetrics: PlatformMetrics = {
  accuracy: 89.4,
  costReduction: 85,
  environmentalImpact: 67,
  processingSpeed: "2.3s",
  reportsProcessed: 1330,
  activeBlocks: 20175
};

const LiveMetricsBar = () => {
  const [metrics, setMetrics] = useState(realtimeMetrics);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        accuracy: Number((prev.accuracy + (Math.random() - 0.5) * 0.2).toFixed(1)),
        activeBlocks: prev.activeBlocks + Math.floor(Math.random() * 3),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
    >
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Model Accuracy</div>
            <div className="text-2xl font-bold text-emerald-400">
              {metrics.accuracy}%
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </div>
      </div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Active Blocks</div>
            <div className="text-2xl font-bold text-cyan-400">
              {metrics.activeBlocks.toLocaleString()}
            </div>
          </div>
          <Globe className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Cost Reduction</div>
            <div className="text-2xl font-bold text-green-400">
              {metrics.costReduction}%
            </div>
          </div>
          <Target className="w-5 h-5 text-green-400" />
        </div>
      </div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Processing Speed</div>
            <div className="text-2xl font-bold text-amber-400">
              {metrics.processingSpeed}
            </div>
          </div>
          <Zap className="w-5 h-5 text-amber-400" />
        </div>
      </div>
    </motion.div>
  );
};

const DataSourcesPanel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const dataSources = [
    { name: "Soviet Geological Reports", count: "1,330+", status: "Processing", icon: Database },
    { name: "Satellite Imagery", count: "25TB", status: "Active", icon: Satellite },
    { name: "Borehole Logs", count: "8,940", status: "Indexed", icon: Activity },
    { name: "Mineral Samples", count: "45,670", status: "Analyzed", icon: Layers }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Data Integration Pipeline</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-400">Live</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {dataSources.map((source, index) => {
          const IconComponent = source.icon;
          return (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <IconComponent className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm font-medium text-white">{source.name}</div>
                  <div className="text-xs text-slate-400">{source.count}</div>
                </div>
              </div>
              <div className={cn(
                "px-2 py-1 rounded-full text-xs",
                source.status === "Active" && "bg-green-500/20 text-green-400",
                source.status === "Processing" && "bg-amber-500/20 text-amber-400",
                source.status === "Indexed" && "bg-blue-500/20 text-blue-400",
                source.status === "Analyzed" && "bg-purple-500/20 text-purple-400"
              )}>
                {source.status}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
        <div className="text-sm text-cyan-400 mb-2">Processing Status</div>
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">AI Model Training</span>
          <span className="text-cyan-400">94.7% Complete</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '94.7%' }}></div>
        </div>
      </div>
    </motion.div>
  );
};

const GeologicalMapVisualization = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedBlock, setSelectedBlock] = useState("KZ-1047");
  const [activeLayer, setActiveLayer] = useState("geological");

  const layers = [
    { id: "geological", name: "Geological", active: true, color: "bg-green-500" },
    { id: "magnetic", name: "Magnetic", active: false, color: "bg-red-500" },
    { id: "thermal", name: "Thermal", active: true, color: "bg-orange-500" },
    { id: "structural", name: "Structural", active: false, color: "bg-purple-500" }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Kazakhstan Geological Intelligence</h3>
          <p className="text-sm text-slate-400">Real-time mineral exploration dashboard</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
            <Settings className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
            <Share className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg h-80 mb-6 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }} />
        
        {/* Geological blocks */}
        {mockGeologicalData.map((block, index) => (
          <motion.div
            key={block.blockId}
            className={cn(
              "absolute w-16 h-12 rounded-sm cursor-pointer transition-all",
              selectedBlock === block.blockId ? "ring-2 ring-cyan-400" : "",
              block.metalType === 'Copper' && "bg-green-500/60",
              block.metalType === 'Lithium' && "bg-blue-500/60",
              block.metalType === 'Uranium' && "bg-yellow-500/60"
            )}
            style={{
              top: `${20 + index * 25}%`,
              left: `${15 + index * 30}%`
            }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: selectedBlock === block.blockId ? 1.1 : 1
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              delay: index * 0.5 
            }}
            onClick={() => setSelectedBlock(block.blockId)}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium">
              {block.blockId}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">
              {block.confidence}%
            </div>
          </motion.div>
        ))}

        {/* Scanning animation overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ 
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 100%, rgba(6, 182, 212, 0.1) 150%, transparent 200%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Layer Controls */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
          <div className="text-sm text-white mb-3 font-medium">Active Layers</div>
          <div className="space-y-2">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setActiveLayer(layer.id)}
              >
                <div className={cn(
                  "w-3 h-3 rounded border-2",
                  layer.active ? `${layer.color} border-transparent` : "border-slate-500"
                )} />
                <span className="text-xs text-slate-300">{layer.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinates display */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-xs text-slate-400">Coordinates</div>
          <div className="text-sm text-cyan-400 font-mono">47.0°N, 68.0°E</div>
        </div>
      </div>

      {/* Block Details */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-700/30 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Selected Block</div>
          <div className="text-sm text-white font-medium">{selectedBlock}</div>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Confidence</div>
          <div className="text-sm text-green-400 font-medium">
            {mockGeologicalData.find(b => b.blockId === selectedBlock)?.confidence || 92}%
          </div>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Metal Type</div>
          <div className="text-sm text-yellow-400 font-medium">
            {mockGeologicalData.find(b => b.blockId === selectedBlock)?.metalType || 'Copper'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AnalyticsPanel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const predictions = [
    { metal: "Lithium", probability: 87, trend: "up", value: "+12%" },
    { metal: "Copper", probability: 92, trend: "up", value: "+8%" },
    { metal: "Nickel", probability: 76, trend: "down", value: "-3%" },
    { metal: "Cobalt", probability: 84, trend: "up", value: "+15%" }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Predictive Intelligence</h3>
        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <span className="text-sm">Generate Report</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Prediction Cards */}
      <div className="space-y-4 mb-6">
        {predictions.map((prediction, index) => (
          <motion.div
            key={prediction.metal}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="text-sm font-medium text-white">{prediction.metal}</div>
                <div className="text-xs text-slate-400">Discovery Probability</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-emerald-400">{prediction.probability}%</div>
              <div className={cn(
                "text-xs flex items-center",
                prediction.trend === "up" ? "text-green-400" : "text-red-400"
              )}>
                {prediction.trend === "up" ? "↗" : "↘"} {prediction.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
        <div className="flex items-center space-x-2 mb-3">
          <Brain className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium text-white">AI Insights</span>
        </div>
        <div className="text-xs text-slate-300 mb-3">
          Based on 1,330+ historical reports and current satellite data, the model predicts a 92% likelihood of discovering high-grade copper deposits in the northwestern sector of block KZ-1047.
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-xs hover:bg-purple-500/30 transition-colors">
            View Details
          </button>
          <button className="px-3 py-1 bg-slate-700 text-slate-400 rounded text-xs hover:bg-slate-600 transition-colors">
            Download
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 space-y-2">
        <button className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg hover:from-cyan-500/20 hover:to-blue-500/20 transition-all">
          <span className="text-sm text-white">3D Visualization</span>
          <ChevronRight className="w-4 h-4 text-cyan-400" />
        </button>
        <button className="w-full flex items-center justify-between p-3 bg-slate-700/30 border border-slate-600 rounded-lg hover:bg-slate-700/50 transition-all">
          <span className="text-sm text-white">Export Data</span>
          <Download className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </motion.div>
  );
};

const TechnicalCapabilities = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      icon: Database,
      title: "Historical Data Processing",
      description: "1,300+ Soviet geological reports digitized and integrated",
      tech: ["Python", "R", "Big Data Analytics"],
      metric: "99.7% accuracy"
    },
    {
      icon: Satellite,
      title: "Multi-Spectral Analysis", 
      description: "Advanced remote sensing from Landsat-8/9, ASTER, WorldView-3",
      tech: ["Spectral Analysis", "GIS", "ArcGIS"],
      metric: "Sub-meter precision"
    },
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "60-85% accuracy in metallic anomaly identification",
      tech: ["Machine Learning", "Neural Networks", "Pattern Recognition"],
      metric: "89.4% success rate"
    },
    {
      icon: Globe,
      title: "Precision Mapping",
      description: "WGS 84 standard compliance for exact geospatial referencing", 
      tech: ["3D Modeling", "MATLAB", "Geospatial Analysis"],
      metric: "±0.3m accuracy"
    },
    {
      icon: Target,
      title: "Targeted Drilling",
      description: "85% cost reduction through precise exploration targeting",
      tech: ["Risk Assessment", "Resource Optimization"],
      metric: "85% cost savings"
    },
    {
      icon: Leaf,
      title: "ESG Compliance",
      description: "Minimized environmental impact through smart exploration",
      tech: ["Environmental Modeling", "Sustainability Metrics"],
      metric: "67% impact reduction"
    }
  ];

  return (
    <div className="mt-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">Technical Capabilities</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Powered by cutting-edge AI and decades of geological expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => {
          const IconComponent = capability.icon;
          return (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                  {capability.metric}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
              <p className="text-sm text-slate-400 mb-4">{capability.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {capability.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const SimpleLiveMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Model Accuracy</div>
            <div className="text-2xl font-bold text-emerald-400">89.4%</div>
          </div>
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </div>
      </div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Active Blocks</div>
            <div className="text-2xl font-bold text-cyan-400">20,175</div>
          </div>
          <Globe className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Cost Reduction</div>
            <div className="text-2xl font-bold text-green-400">85%</div>
          </div>
          <Target className="w-5 h-5 text-green-400" />
        </div>
      </div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Processing Speed</div>
            <div className="text-2xl font-bold text-amber-400">2.3s</div>
          </div>
          <Zap className="w-5 h-5 text-amber-400" />
        </div>
      </div>
    </div>
  );
};

const SimpleDataPanel = () => {
  const dataSources = [
    { name: "Soviet Geological Reports", count: "1,330+", status: "Processing", icon: Database },
    { name: "Satellite Imagery", count: "25TB", status: "Active", icon: Satellite },
    { name: "Borehole Logs", count: "8,940", status: "Indexed", icon: Activity },
    { name: "Mineral Samples", count: "45,670", status: "Analyzed", icon: Layers }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Data Integration Pipeline</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-400">Live</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {dataSources.map((source, index) => {
          const IconComponent = source.icon;
          return (
            <div
              key={source.name}
              className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <IconComponent className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm font-medium text-white">{source.name}</div>
                  <div className="text-xs text-slate-400">{source.count}</div>
                </div>
              </div>
              <div className={cn(
                "px-2 py-1 rounded-full text-xs",
                source.status === "Active" && "bg-green-500/20 text-green-400",
                source.status === "Processing" && "bg-amber-500/20 text-amber-400",
                source.status === "Indexed" && "bg-blue-500/20 text-blue-400",
                source.status === "Analyzed" && "bg-purple-500/20 text-purple-400"
              )}>
                {source.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SimpleMapPanel = () => {
  const [selectedBlock, setSelectedBlock] = useState("KZ-1047");
  
  const blocks = [
    { id: "KZ-0911", confidence: 92, metal: "Copper", color: "bg-green-500/60" },
    { id: "KZ-1047", confidence: 88, metal: "Lithium", color: "bg-blue-500/60" },
    { id: "KZ-0075", confidence: 76, metal: "Uranium", color: "bg-yellow-500/60" }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Kazakhstan Geological Intelligence</h3>
          <p className="text-sm text-slate-400">Real-time mineral exploration dashboard</p>
        </div>
      </div>

      {/* Simple Map Visualization */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg h-80 mb-6 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }} />
        
        {/* Geological blocks */}
        {blocks.map((block, index) => (
          <div
            key={block.id}
            className={cn(
              "absolute w-16 h-12 rounded-sm cursor-pointer transition-all",
              selectedBlock === block.id ? "ring-2 ring-cyan-400" : "",
              block.color
            )}
            style={{
              top: `${20 + index * 25}%`,
              left: `${15 + index * 30}%`
            }}
            onClick={() => setSelectedBlock(block.id)}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium">
              {block.id}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">
              {block.confidence}%
            </div>
          </div>
        ))}
      </div>

      {/* Block Details */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-700/30 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Selected Block</div>
          <div className="text-sm text-white font-medium">{selectedBlock}</div>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Confidence</div>
          <div className="text-sm text-green-400 font-medium">
            {blocks.find(b => b.id === selectedBlock)?.confidence || 92}%
          </div>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Metal Type</div>
          <div className="text-sm text-yellow-400 font-medium">
            {blocks.find(b => b.id === selectedBlock)?.metal || 'Copper'}
          </div>
        </div>
      </div>
    </div>
  );
};

const SimpleAnalyticsPanel = () => {
  const predictions = [
    { metal: "Lithium", probability: 87, trend: "up", value: "+12%" },
    { metal: "Copper", probability: 92, trend: "up", value: "+8%" },
    { metal: "Nickel", probability: 76, trend: "down", value: "-3%" },
    { metal: "Cobalt", probability: 84, trend: "up", value: "+15%" }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Predictive Intelligence</h3>
        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <span className="text-sm">Generate Report</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Prediction Cards */}
      <div className="space-y-4 mb-6">
        {predictions.map((prediction) => (
          <div
            key={prediction.metal}
            className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="text-sm font-medium text-white">{prediction.metal}</div>
                <div className="text-xs text-slate-400">Discovery Probability</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-emerald-400">{prediction.probability}%</div>
              <div className={cn(
                "text-xs flex items-center",
                prediction.trend === "up" ? "text-green-400" : "text-red-400"
              )}>
                {prediction.trend === "up" ? "↗" : "↘"} {prediction.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
        <div className="flex items-center space-x-2 mb-3">
          <Brain className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium text-white">AI Insights</span>
        </div>
        <div className="text-xs text-slate-300 mb-3">
          Based on 1,330+ historical reports and current satellite data, the model predicts a 92% likelihood of discovering high-grade copper deposits in the northwestern sector of block KZ-1047.
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-xs hover:bg-purple-500/30 transition-colors">
            View Details
          </button>
          <button className="px-3 py-1 bg-slate-700 text-slate-400 rounded text-xs hover:bg-slate-600 transition-colors">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PlatformMVPShowcase() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            GeoCube Intelligence Platform
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Transforming Soviet-era geological archives into AI-powered exploration intelligence
          </p>
          
          <SimpleLiveMetrics />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <SimpleDataPanel />
          <SimpleMapPanel />
          <SimpleAnalyticsPanel />
        </div>

        {/* Simple Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-8 h-8 text-cyan-400" />
              <div className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">99.7% accuracy</div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Historical Data Processing</h4>
            <p className="text-sm text-slate-400 mb-4">1,300+ Soviet geological reports digitized and integrated</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Satellite className="w-8 h-8 text-cyan-400" />
              <div className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">Sub-meter precision</div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Multi-Spectral Analysis</h4>
            <p className="text-sm text-slate-400 mb-4">Advanced remote sensing from Landsat-8/9, ASTER, WorldView-3</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-8 h-8 text-cyan-400" />
              <div className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">89.4% success rate</div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Predictions</h4>
            <p className="text-sm text-slate-400 mb-4">60-85% accuracy in metallic anomaly identification</p>
          </div>
        </div>
      </div>
    </div>
  );
}