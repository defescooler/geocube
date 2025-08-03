"use client";

import React, { memo } from 'react';
import { 
  BarChart3, Database, Satellite, Brain, 
  TrendingUp, MapPin, Settings, Bell, 
  Target, AlertTriangle, CheckCircle, Activity
} from 'lucide-react';

const GeoCubeDashboard = memo(() => {
  return (
    <section className="min-h-screen bg-[#0A0B0D] text-white font-sans">
      {/* Header */}
      <header className="border-b border-[#2A2D31] bg-[#0A0B0D] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-semibold">GeoCube</span>
            </div>
            <nav className="flex space-x-6">
              <span className="text-white font-medium cursor-default">Platform</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-default">Geological Data</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-default">Field Reports</span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-default" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-default" />
            <div className="w-8 h-8 bg-gray-700 rounded-full cursor-default"></div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0F1011] border-r border-[#2A2D31] p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Data Sources
              </h3>
              <div className="space-y-2">
                <DataSourceItem 
                  icon={<Database className="w-4 h-4" />}
                  name="Kazakhstan State Archive"
                  status="Geological Survey • 1,347 docs"
                  active={true}
                />
                <DataSourceItem 
                  icon={<Satellite className="w-4 h-4" />}
                  name="Landsat-8/ASTER imagery"
                  status="Multi-temporal analysis"
                />
                <DataSourceItem 
                  icon={<Brain className="w-4 h-4" />}
                  name="Pattern recognition"
                  status="Calibrating sensors"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Exploration
              </h3>
              <div className="space-y-1">
                <SidebarItem name="Porphyry & Skarn Systems" />
                <SidebarItem name="Alteration Mapping (ASTER)" />
                <SidebarItem name="Fault & Fold Analysis" />
                <SidebarItem name="Economic Assessment" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[#0A0B0D]">
          <div className="p-6">
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard
                title="Validation Rate"
                value="94.2%"
                change="+1.2%"
                trend="up"
                icon={<TrendingUp className="w-4 h-4 text-emerald-400" />}
              />
              <MetricCard
                title="Active Blocks"
                value="18,247"
                subtitle="Coverage: 12,500 km² (Balkhash Contract Area)"
                icon={<Database className="w-4 h-4 text-blue-400" />}
              />
              <MetricCard
                title="Cost Reduction"
                value="68%"
                subtitle="vs Traditional"
                icon={<BarChart3 className="w-4 h-4 text-emerald-400" />}
              />
              <MetricCard
                title="Processing Speed"
                value="~2.1s avg"
                subtitle="Real-time processing"
                icon={<Brain className="w-4 h-4 text-amber-400" />}
              />
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-3 gap-6 h-96">
              {/* Data Pipeline */}
              <DashboardCard title="Data Integration Pipeline">
                <div className="space-y-4 p-4">
                  <ProcessingStep 
                    name="ASTER & Landsat-8 Fusion"
                    count="Processing: 2,450 km²"
                    status="processing"
                    progress={87}
                  />
                  <ProcessingStep 
                    name="Archive digitization"
                    count="Online, 1,347 reports"
                    status="active"
                    progress={92}
                  />
                  <ProcessingStep 
                    name="Geochemical Sampling"
                    count="Scheduled: Q4 2025"
                    status="indexed"
                    progress={84}
                  />
                  <ProcessingStep 
                    name="Drill Core Logs"
                    count="45,670m analyzed"
                    status="analyzed"
                    progress={100}
                  />
                </div>
              </DashboardCard>

              {/* Northern Balkhash Metallogenic Belt Map */}
              <DashboardCard title="Northern Balkhash Metallogenic Belt: Porphyry & Skarn Systems">
                <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4">
                  <KazakhstanMap />
                  
                  {/* Data Layers Control */}
                  <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
                    <div className="text-xs font-medium text-white mb-2">Data Layers</div>
                    <div className="space-y-1 text-xs">
                      <label className="flex items-center space-x-2 cursor-default">
                        <input type="checkbox" defaultChecked className="w-3 h-3 rounded border-gray-600 bg-gray-700 text-blue-500" />
                        <span className="text-gray-300">ASTER Spectral: Phyllic & Argillic Alteration</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-default">
                        <input type="checkbox" defaultChecked className="w-3 h-3 rounded border-gray-600 bg-gray-700 text-blue-500" />
                        <span className="text-gray-300">Aeromagnetic (RTP): Intrusive Signatures</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-default">
                        <input type="checkbox" className="w-3 h-3 rounded border-gray-600 bg-gray-700 text-blue-500" />
                        <span className="text-gray-300">Gravity Survey: Density Anomalies</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-default">
                        <input type="checkbox" defaultChecked className="w-3 h-3 rounded border-gray-600 bg-gray-700 text-blue-500" />
                        <span className="text-gray-300">Soviet Drillholes: {'>'} 0.1% Cu Intercepts</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-default">
                        <input type="checkbox" className="w-3 h-3 rounded border-gray-600 bg-gray-700 text-blue-500" />
                        <span className="text-gray-300">Surface Geochem: Cu-in-Soil Anomalies</span>
                      </label>
                    </div>
                  </div>

                  {/* Prospectivity Index Legend */}
                  <div className="absolute bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
                    <div className="text-xs font-medium text-white mb-2">Prospectivity Index</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300">High ({'>'} 75%)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Moderate (45-75%)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Low ({'<'} 45%)</span>
                      </div>
                    </div>
                    
                    {/* Scale Bar */}
                    <div className="mt-3 pt-2 border-t border-slate-600">
                      <div className="text-[10px] text-gray-400 mb-1">Scale</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-white"></div>
                        <span className="text-[10px] text-gray-400">25 km</span>
                      </div>
                    </div>
                  </div>

                  {/* Target Inventory Panel */}
                  <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700 max-w-xs">
                    <div className="text-xs font-medium text-white mb-2">Target Inventory</div>
                    <div className="space-y-2 text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-400 font-medium">Kounrad Analogue: 82% (Cu-Mo)</span>
                        </div>
                        <div className="text-gray-400 text-[10px]">Magnetic high coincident with potassic alteration</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 font-medium">Sayak-Type Skarn: 68% (Cu-Au)</span>
                        </div>
                        <div className="text-gray-400 text-[10px]">Proximal to fertile intrusion; defined by EM anomaly</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-yellow-400 font-medium">Aktogay SW Prospect: 45% (Cu)</span>
                        </div>
                        <div className="text-gray-400 text-[10px]">ASTER anomaly; requires ground follow-up</div>
                      </div>
                    </div>
                  </div>
                </div>
              </DashboardCard>

              {/* Predictive Intelligence */}
              <DashboardCard title="Predictive Intelligence">
                <div className="p-4 space-y-4">
                  <PredictionItem mineral="Cu-Mo" probability="82%" change="+7%" />
                  <PredictionItem mineral="Au" probability="65%" change="+4%" />
                  <PredictionItem mineral="Zn-Pb" probability="58%" change="-2%" />
                  <PredictionItem mineral="Ag" probability="45%" change="+11%" />
                  
                  <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium">Intelligence Summary</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      High-confidence porphyry copper target identified in the Kounrad district. ASTER data shows strong phyllic alteration halo, coincident with a magnetic high. This signature is analogous to the nearby producing Borly deposit. Recommend ground-based induced polarization (IP) survey to define drill targets.
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded hover:bg-purple-600/30 transition-colors cursor-default">
                        View Details
                      </span>
                      <span className="px-3 py-1 text-xs bg-slate-700 text-gray-300 rounded hover:bg-slate-600 transition-colors cursor-default">
                        Download
                      </span>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </div>

            {/* Bottom Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <StatsCard
                title="Historical Data Processing"
                stat="94.2% validation rate"
                description="1,347 Soviet-era geological reports from the Ilyinsk, Kounrad, and Sayak districts digitized and integrated"
              />
              <StatsCard
                title="Multi-Spectral Analysis"
                stat="0.8m spatial resolution"
                description="Multi-temporal analysis combining L8 OLI thermal bands with ASTER VNIR data"
              />
              <StatsCard
                title="Geochemical Detection"
                stat="73% hit rate"
                description="vs 12% industry average in mineralization target identification"
              />
            </div>
          </div>
        </main>
      </div>
      
      {/* Professional Footer */}
      <footer className="border-t border-[#2A2D31] bg-[#0A0B0D] px-6 py-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-6">
            <span>System: GeoCube v1.0.0</span>
            <span>WGS84 coordinate system</span>
            <span>JORC-compliant reporting</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Last updated: 14:23 ALMT</span>
            <span>Northern Balkhash Belt: 12,500 km² (95% data integration complete)</span>
          </div>
        </div>
      </footer>
    </section>
  );
});

GeoCubeDashboard.displayName = 'GeoCubeDashboard';

// Kazakhstan Map Component
const KazakhstanMap = memo(() => {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.1))' }}
      >
        {/* Kazakhstan Territory */}
        <path
          d="M 200 150 L 300 120 L 400 100 L 500 110 L 600 130 L 700 150 L 750 180 L 800 220 L 850 280 L 880 320 L 900 380 L 890 420 L 870 460 L 830 500 L 780 520 L 720 530 L 650 520 L 580 500 L 520 470 L 460 440 L 400 420 L 340 400 L 280 380 L 220 360 L 180 320 L 160 280 L 150 240 L 160 200 L 180 170 L 200 150 Z"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          opacity="0.8"
        />
        
        {/* Internal regions */}
        <path
          d="M 300 200 L 400 180 L 500 190 L 600 210 L 650 240 L 680 280 L 690 320 L 680 360 L 650 390 L 600 410 L 500 420 L 400 410 L 300 390 L 250 360 L 220 320 L 210 280 L 220 240 L 250 210 L 300 200 Z"
          fill="none"
          stroke="#6B7280"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Structural Controls - Fault Systems */}
        {/* Chingiz-Balkhash Fault Zone - Major ore-controlling structure */}
        <path d="M 150 350 L 250 280 L 400 250 L 550 270 L 700 320 L 850 380" 
              stroke="#6B7280" strokeWidth="2" opacity="0.6" strokeDasharray="8,4" />
        <path d="M 200 180 L 350 220 L 500 240 L 650 280 L 800 320" 
              stroke="#6B7280" strokeWidth="1.5" opacity="0.4" strokeDasharray="6,3" />

        {/* Geological Targets - Northern Balkhash Metallogenic Belt */}
        {/* Kounrad Porphyry System - Complex intrusive center (cluster of overlapping ellipses) */}
        <ellipse cx="450" cy="280" rx="18" ry="12" fill="#10B981" opacity="0.3" transform="rotate(-15 450 280)">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="460" cy="275" rx="14" ry="10" fill="#10B981" opacity="0.4" transform="rotate(10 460 275)">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="445" cy="285" rx="12" ry="8" fill="#10B981" opacity="0.5" transform="rotate(-25 445 285)">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Sayak Skarn System - Irregular contact zone polygon */}
        <polygon points="370,235 395,238 400,245 395,255 385,258 375,252 365,245" 
                 fill="#3B82F6" opacity="0.4" stroke="#3B82F6" strokeWidth="1">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.2s" repeatCount="indefinite" />
        </polygon>
        <polygon points="575,375 590,378 595,385 588,395 580,398 570,392 568,382" 
                 fill="#3B82F6" opacity="0.3" stroke="#3B82F6" strokeWidth="1">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" />
        </polygon>
        
        {/* Aktogay SW Prospect - Diffuse, early-stage target */}
        <circle cx="320" cy="350" r="25" fill="#F59E0B" opacity="0.15" strokeDasharray="3,2" stroke="#F59E0B">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="480" cy="180" r="20" fill="#F59E0B" opacity="0.2" strokeDasharray="3,2" stroke="#F59E0B">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* Soviet-Era Drillholes - Historical data points */}
        <circle cx="440" cy="275" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="465" cy="285" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="455" cy="290" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="385" cy="248" r="2" fill="#FFFFFF" opacity="0.7" />
        <circle cx="580" cy="385" r="2" fill="#FFFFFF" opacity="0.7" />
        
        {/* ASTER Alteration Halos - Spectral anomalies */}
        <circle cx="450" cy="280" r="35" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.3" strokeDasharray="4,2" />
        <circle cx="380" cy="240" r="25" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.25" strokeDasharray="4,2" />

        {/* Analysis Grid Overlay */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Structural Lines */}
        <path d="M 200 200 L 400 180 L 600 220 L 800 280" stroke="#6B7280" strokeWidth="1" opacity="0.4" strokeDasharray="5,5" />
        <path d="M 250 300 L 450 280 L 650 320 L 850 380" stroke="#6B7280" strokeWidth="1" opacity="0.4" strokeDasharray="5,5" />
        
        {/* Concentration Zones */}
        <ellipse cx="450" cy="280" rx="60" ry="40" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.3" strokeDasharray="10,5" />
        <ellipse cx="520" cy="320" rx="50" ry="35" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3" strokeDasharray="10,5" />
        
        {/* Geological Labels */}
        <text x="450" y="255" textAnchor="middle" fontSize="10" fill="#10B981" fontWeight="bold">
          Kounrad Complex
        </text>
        <text x="380" y="225" textAnchor="middle" fontSize="9" fill="#3B82F6" fontWeight="medium">
          Sayak Skarn
        </text>
        <text x="320" y="340" textAnchor="middle" fontSize="9" fill="#F59E0B">
          Aktogay SW
        </text>
        
        {/* Fault Zone Label */}
        <text x="400" y="265" textAnchor="middle" fontSize="8" fill="#6B7280" transform="rotate(-8 400 265)">
          Chingiz-Balkhash Fault Zone
        </text>
        
        {/* North Arrow */}
        <g transform="translate(850, 120)">
          <polygon points="0,-15 -5,0 5,0" fill="#9CA3AF" />
          <polygon points="0,15 -5,0 5,0" fill="#6B7280" />
          <text x="10" y="5" fontSize="10" fill="#9CA3AF">N</text>
        </g>
      </svg>

      {/* Interactive Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Interactive Target Indicators */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-emerald-500/30 shadow-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Target className="w-3 h-3 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-semibold">Kounrad Analogue</span>
              <span className="text-xs text-emerald-400 font-bold">82%</span>
            </div>
            <div className="text-[10px] text-gray-400">
              Cu-Mo Porphyry • Potassic alteration zone • 3 intrusive phases
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/30 shadow-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Target className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-blue-400 font-semibold">Sayak-Type</span>
              <span className="text-xs text-blue-400 font-bold">68%</span>
            </div>
            <div className="text-[10px] text-gray-400">
              Cu-Au Skarn • Contact metamorphic • EM conductor
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-500/30 shadow-lg">
            <div className="flex items-center space-x-2 mb-1">
              <AlertTriangle className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-yellow-400 font-semibold">Aktogay SW</span>
              <span className="text-xs text-yellow-400 font-bold">45%</span>
            </div>
            <div className="text-[10px] text-gray-400">
              Cu Prospect • ASTER anomaly • Requires ground follow-up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

KazakhstanMap.displayName = 'KazakhstanMap';

// Supporting Components
const MetricCard = memo(({ title, value, change, trend, subtitle, icon }: {
  title: string;
  value: string;
  change?: string;
  trend?: string;
  subtitle?: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-[#1A1B1E] border border-[#2A2D31] rounded-lg p-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-gray-500 font-medium">{title}</span>
      {icon}
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    {change && (
      <div className={`text-xs ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
        {change}
      </div>
    )}
    {subtitle && (
      <div className="text-xs text-gray-400">{subtitle}</div>
    )}
  </div>
));

const DashboardCard = memo(({ title, children }: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-[#1A1B1E] border border-[#2A2D31] rounded-lg">
    <div className="px-4 py-3 border-b border-[#2A2D31]">
      <h3 className="text-sm font-medium text-white">{title}</h3>
    </div>
    {children}
  </div>
));

const DataSourceItem = memo(({ icon, name, status, active }: {
  icon: React.ReactNode;
  name: string;
  status: string;
  active?: boolean;
}) => (
  <div className={`flex items-center space-x-3 p-2 rounded-lg ${
    active ? 'bg-blue-500/10 border border-blue-500/20' : 'hover:bg-gray-800/50'
  }`}>
    <div className={`p-1 rounded ${active ? 'text-blue-400' : 'text-gray-400'}`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className={`text-sm ${active ? 'text-white' : 'text-gray-300'}`}>{name}</div>
      <div className="text-xs text-gray-500">{status}</div>
    </div>
  </div>
));

const SidebarItem = ({ name }: { name: string }) => (
  <div className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-400 hover:text-gray-300 cursor-default">
    <span>{name}</span>
  </div>
);

const ProcessingStep = ({ name, count, status, progress }: {
  name: string;
  count: string;
  status: string;
  progress: number;
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${
          status === 'processing' ? 'bg-blue-400' :
          status === 'active' ? 'bg-emerald-400' :
          'bg-gray-400'
        }`} />
        <span className="text-sm text-gray-300">{name}</span>
      </div>
      <span className="text-xs text-gray-500">{count}</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-1">
      <div 
        className={`h-1 rounded-full ${
          status === 'processing' ? 'bg-blue-400' :
          status === 'active' ? 'bg-emerald-400' :
          'bg-gray-400'
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const PredictionItem = ({ mineral, probability, change }: {
  mineral: string;
  probability: string;
  change: string;
}) => (
  <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
    <div className="flex items-center space-x-3">
      <div className="w-2 h-2 bg-blue-400 rounded-full" />
      <span className="text-sm text-white">{mineral}</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-white">{probability}</span>
      <span className={`text-xs ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
  </div>
);

const StatsCard = ({ title, stat, description }: {
  title: string;
  stat: string;
  description: string;
}) => (
  <div className="bg-[#1A1B1E] border border-[#2A2D31] rounded-lg p-6">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <div className="text-3xl font-bold text-blue-400 mb-2">{stat}</div>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default GeoCubeDashboard;