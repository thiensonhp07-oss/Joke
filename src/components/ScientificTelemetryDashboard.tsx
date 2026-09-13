import React, { useState, useEffect } from 'react';
import { PhysicalMetrics } from '../types';
import {
  ShieldAlert,
  Zap,
  Activity,
  Globe,
  RefreshCw,
  Maximize2,
  TrendingUp,
  Flame,
  Moon,
  Clock,
  Dumbbell,
  CheckCircle2,
  ChevronDown,
  Calendar,
  AlertCircle,
  Eye,
  Sliders,
} from 'lucide-react';

interface ScientificTelemetryDashboardProps {
  metrics: PhysicalMetrics;
  onNavigateTab: (tabId: string) => void;
  onOpenSimulator: () => void;
}

export const ScientificTelemetryDashboard: React.FC<ScientificTelemetryDashboardProps> = ({
  metrics,
  onNavigateTab,
  onOpenSimulator,
}) => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '12m' | 'all'>('7d');
  const [refreshPeriod, setRefreshPeriod] = useState<string>('Live (1s)');
  const [isLiveActive, setIsLiveActive] = useState<boolean>(true);
  const [livePulse, setLivePulse] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Live heart-beat / telemetry effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse((prev) => (prev + 1) % 100);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const topThreatVectors = [
    {
      name: 'Thức khuya & lướt TikTok/Game đêm (6.0h/ngày)',
      count: 2,
      percent: 100.0,
      detail: 'Chặn đứng chu kỳ tiết hormone tăng trưởng HGH lúc 23h-02h',
      color: 'from-orange-500 to-rose-500',
    },
    {
      name: 'Trọng lượng dư thừa (60kg đè nén đĩa sụn tiếp hợp)',
      count: 1,
      percent: 84.5,
      detail: 'BMI 24.34 tạo áp lực nén 1.4x lên khớp gối và cột sống',
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'Thiếu xung lực vận động (Bóng rổ < 1 buổi/tuần)',
      count: 1,
      percent: 72.0,
      detail: 'Thiếu lực nén - giãn đàn hồi kích thích tạo tế bào xương mới',
      color: 'from-amber-600 to-yellow-500',
    },
    {
      name: 'Khẩu phần dư Calo rỗng (Snack, mì gói, nước ngọt có ga)',
      count: 0,
      percent: 0.0,
      detail: 'Gây tích tụ mỡ nội tạng và tình trạng uể oải',
      color: 'from-slate-700 to-slate-600',
    },
  ];

  const topActionProtocols = [
    {
      action: 'Bóng rổ đối kháng & ném rổ (4 buổi/tuần)',
      score: 245,
      percent: 95,
      status: 'Đề xuất số 1',
    },
    {
      action: 'Ngủ sâu trước 22:15 đón đỉnh Hormone HGH',
      score: 187,
      percent: 78,
      status: 'Ưu tiên tối thượng',
    },
    {
      action: 'Nhảy dây tốc độ 300 - 500 cái / ngày',
      score: 142,
      percent: 62,
      status: 'Kích thích sụn',
    },
    {
      action: 'Uống 2.2L nước lọc, cắt hoàn toàn nước ngọt',
      score: 98,
      percent: 45,
      status: 'Thanh lọc chuyển hóa',
    },
    {
      action: 'Khóa Roblox & FC Mobile sau 21:30 (< 45p/ngày)',
      score: 64,
      percent: 32,
      status: 'Cắt giảm Dopamine ảo',
    },
    {
      action: 'Bổ sung Protein nạc 75g + Canxi & D3',
      score: 34,
      percent: 18,
      status: 'Xây dựng cơ bắp',
    },
  ];

  return (
    <div className="space-y-6 font-['Space_Grotesk',sans-serif]">
      {/* Top Telemetry Header Controls (Matching Screenshot Header Bar) */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-2 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
              Bảng Giám Sát Sinh Trắc Học &amp; Thể Chất
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            HỆ THỐNG TELEMETRY ĐO LƯỜNG TĂNG TRƯỞNG • HOÀNG PHI HÙNG (13T • 1M57 • 60KG)
          </p>
        </div>

        {/* Range Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* 7d toggle */}
          <div className="flex items-center bg-[#0d121d] rounded-lg border border-slate-800 p-1">
            {(['7d', '30d', '12m', 'all'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-3 py-1 rounded text-xs font-semibold uppercase transition-all ${
                  timeRange === r
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {r === '7d' ? '7 Ngày' : r === '30d' ? '30 Ngày' : r === '12m' ? '12 Tháng' : 'Tất cả'}
              </button>
            ))}
          </div>

          {/* Date range display */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0d121d] hover:bg-slate-800/60 rounded-lg border border-slate-800 text-xs font-medium text-slate-300 transition-all">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Năm Học 2026 - Lớp 7</span>
          </button>

          {/* Refresh period */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0d121d] rounded-lg border border-slate-800 text-xs text-slate-300">
            <span className="text-slate-500 uppercase text-[10px] font-bold">Chu kỳ cập nhật:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              {refreshPeriod}
            </span>
          </div>
        </div>
      </div>

      {/* TOP ROW BENTO GRID (3 COLUMNS) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* WIDGET 1: NGUY CƠ TIỀM TẨN (4 cols) - Red Theme */}
        <div className="md:col-span-12 lg:col-span-3 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 relative overflow-hidden flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            {/* Header pill */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                Yếu Tố Nguy Cơ Đang Giám Sát
              </span>
            </div>

            {/* Big Main Number */}
            <div className="space-y-1">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tighter">
                2
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Mức độ ảnh hưởng sụn tăng trưởng</span>
                <span className="text-rose-400 font-bold">100%</span>
              </div>
              {/* Progress Line */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full" />
              </div>
            </div>

            {/* 2x2 Sub metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="space-y-0.5">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">
                  Thời Gian Màn Hình
                </span>
                <span className="text-sm font-bold text-white">6.0 Giờ/ngày</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">
                  Calo Thừa Nạp Vào
                </span>
                <span className="text-sm font-bold text-rose-400">+380 kcal/d</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">
                  Phân Loại Nguy Cơ
                </span>
                <span className="text-xs font-bold text-amber-400">CẤP ĐỘ 1 (BÁO ĐỘNG)</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">
                  Khả Năng Khắc Phục
                </span>
                <span className="text-sm font-bold text-emerald-400">100% (GIAI ĐOẠN VÀNG)</span>
              </div>
            </div>
          </div>

          {/* Bottom Live Indicator */}
          <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-rose-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              GIÁM SÁT THỜI GIAN THỰC ĐANG HOẠT ĐỘNG
            </span>
          </div>
        </div>

        {/* WIDGET 2: TỐC ĐỘ DÒNG NĂNG LƯỢNG & METRICS (6 cols) - Blue/Cyan Theme */}
        <div className="md:col-span-12 lg:col-span-6 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Dòng Năng Lượng &amp; Tốc Độ Tiêu Hao Calo
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping inline-block" />
                LIVE TELEMETRY
              </span>
            </div>

            {/* 3 Metric cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#121826] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-blue-400 font-bold uppercase block tracking-wider">
                  Calo Đốt Hiện Tại
                </span>
                <div className="text-2xl font-black text-white mt-1">
                  1,420 <span className="text-xs font-normal text-slate-400">kcal</span>
                </div>
                <span className="text-[10px] text-slate-500">Mức vận động thụ động</span>
              </div>

              <div className="bg-[#121826] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                  Mục Tiêu Khi Tập Bóng Rổ
                </span>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  2,150 <span className="text-xs font-normal text-slate-400">kcal</span>
                </div>
                <span className="text-[10px] text-emerald-400/80">+730 kcal đốt mỡ</span>
              </div>

              <div className="bg-[#121826] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-purple-400 font-bold uppercase block tracking-wider">
                  Hạn Mức Calo Nạp
                </span>
                <div className="text-2xl font-black text-purple-300 mt-1">
                  1,800 <span className="text-xs font-normal text-slate-400">kcal</span>
                </div>
                <span className="text-[10px] text-purple-400/80">Thâm hụt an toàn 350 kcal</span>
              </div>
            </div>

            {/* Telemetry Visual Activity Bar */}
            <div className="bg-[#121826]/70 p-3.5 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  Hiệu suất đốt mỡ khi duy trì 4 buổi bóng rổ &amp; nhảy dây/tuần:
                </span>
                <span className="text-cyan-400 font-bold">1,420 / 2,150 kcal (66.0%)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: '66%' }}
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Giới hạn năng lượng tiêu chuẩn thiếu niên: 2,100 kcal</span>
            <button
              onClick={() => onNavigateTab('basketball')}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
            >
              Xem Bài Tập Bóng Rổ &rarr;
            </button>
          </div>
        </div>

        {/* WIDGET 3: BẢN ĐỒ SINH TRẮC HỌC TĂNG CHIỀU CAO (3 cols) - Green/Cyan Radar Theme */}
        <div className="md:col-span-12 lg:col-span-3 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 relative flex flex-col justify-between shadow-xl">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Bản Đồ Đĩa Sụn &amp; Tọa Độ Chiều Cao
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block uppercase">Mục Tiêu</span>
                <span className="text-xs font-black text-emerald-400">+21 cm</span>
              </div>
            </div>

            {/* High-tech SVG Radar Map Graphic */}
            <div className="relative h-44 w-full bg-[#121826] rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
              {/* Radar Grid Circles */}
              <svg className="w-full h-full p-2" viewBox="0 0 200 200">
                {/* Background Grid */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#1e293b" strokeWidth="1" />
                <circle cx="100" cy="100" r="35" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="#1e293b" strokeWidth="1" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="#1e293b" strokeWidth="1" />

                {/* Radar Sweep Effect */}
                <path
                  d="M 100 100 L 160 40 A 85 85 0 0 0 100 15 Z"
                  fill="url(#radarGradient)"
                  opacity="0.3"
                  className="animate-spin origin-center"
                  style={{ transformOrigin: '100px 100px', animationDuration: '6s' }}
                />

                {/* Growth Plate Nodes */}
                {/* Node 1: Knee Growth Plate */}
                <circle cx="140" cy="70" r="6" fill="#10b981" className="animate-ping opacity-75" />
                <circle cx="140" cy="70" r="4" fill="#10b981" />
                <text x="148" y="73" fill="#6ee7b7" fontSize="8" fontWeight="bold">
                  Sụn Gối (1m78)
                </text>

                {/* Node 2: Spine Node */}
                <circle cx="75" cy="65" r="4" fill="#38bdf8" />
                <text x="30" y="60" fill="#7dd3fc" fontSize="8">
                  Cột Sống
                </text>

                {/* Node 3: HGH Pituitary Node */}
                <circle cx="100" cy="35" r="4" fill="#a855f7" />
                <text x="106" y="38" fill="#d8b4fe" fontSize="8">
                  HGH 22h15
                </text>

                {/* Node 4: Baseline 1m57 */}
                <circle cx="100" cy="100" r="5" fill="#f59e0b" />
                <text x="108" y="104" fill="#fcd34d" fontSize="9" fontWeight="bold">
                  157cm
                </text>

                <defs>
                  <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Status Overlay */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] bg-slate-950/80 px-2 py-1 rounded backdrop-blur-sm border border-slate-800">
                <span className="text-slate-400">Đĩa sụn tiếp hợp:</span>
                <span className="text-emerald-400 font-bold">100% Đang mở (Active)</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Giai đoạn: Dậy thì sớm</span>
            <button
              onClick={onOpenSimulator}
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
            >
              <Maximize2 className="w-3 h-3" />
              Mở Giả Lập
            </button>
          </div>
        </div>
      </div>

      {/* SECOND ROW BENTO GRID (4 COLUMNS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
        {/* WIDGET 4: TOP VECTƠ NGUY CƠ KÌM HÃM CHIỀU CAO (3 cols) - Orange/Threat Style */}
        <div className="lg:col-span-3 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                Top Vectơ Kìm Hãm Chiều Cao
              </span>
            </div>

            <div className="space-y-3.5 pt-1">
              {topThreatVectors.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <span className="text-slate-300 font-medium leading-tight">
                      {idx + 1}. {item.name}
                    </span>
                    <span className="text-orange-400 font-bold shrink-0">
                      {item.percent > 0 ? `${item.percent.toFixed(1)}%` : '0%'}
                    </span>
                  </div>
                  {/* Horizontal Bar */}
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 block leading-tight">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-slate-800/80 text-[10px] text-slate-500">
            Dữ liệu phân tích hành vi &amp; thể trạng thực tế
          </div>
        </div>

        {/* WIDGET 5: TOP GIAO THỨC TỐI ƯU CHIỀU CAO (3 cols) - Blue Attack IP Style */}
        <div className="lg:col-span-3 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                Top Giao Thức Hành Động
              </span>
              <RefreshCw className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300 cursor-pointer" />
            </div>

            <div className="space-y-3 pt-1">
              {topActionProtocols.map((proto, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 truncate max-w-[170px]" title={proto.action}>
                      {proto.action}
                    </span>
                    <span className="text-blue-400 font-bold">{proto.score}</span>
                  </div>
                  {/* Glowing Blue Horizontal Bar */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800/60">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                      style={{ width: `${proto.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">Tổng giao thức: 6</span>
            <button
              onClick={() => onNavigateTab('schedule')}
              className="text-blue-400 hover:text-blue-300 font-bold uppercase text-[10px]"
            >
              Xem Chi Tiết (View Details)
            </button>
          </div>
        </div>

        {/* WIDGET 6: HỆ SỐ TIỀM NĂNG TĂNG TRƯỞNG (3 cols) - Purple Donut Ring Style */}
        <div className="lg:col-span-3 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 flex flex-col items-center justify-between text-center shadow-xl">
          <div className="w-full">
            <div className="flex items-center justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                Hệ Số Đạt Chuẩn &amp; Tiềm Năng
              </span>
            </div>

            {/* Circular Gauge Ring */}
            <div className="relative w-36 h-36 mx-auto my-3 flex items-center justify-center">
              {/* Outer SVG Ring */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="#1e1b4b"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="url(#purpleGlow)"
                  strokeWidth="10"
                  strokeDasharray="301.59"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inside Value */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-black text-white tracking-tight">
                  100%
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400">
                  TIỀM NĂNG VÀNG
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 px-2 leading-relaxed">
              Đĩa sụn tiếp hợp gối &amp; cột sống của Hùng <strong className="text-purple-300">100% đang mở</strong>. 
              Mục tiêu 1m78 hoàn toàn khả thi nếu thực hiện đủ 4 buổi bóng rổ/tuần!
            </p>
          </div>

          <div className="w-full pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-center">
            <span className="text-[11px] text-purple-400 font-semibold">
              Kỷ luật 30 ngày = Thấy rõ kết quả
            </span>
          </div>
        </div>

        {/* WIDGET 7: CHỈ SỐ HỆ THỐNG CƠ THỂ (3 cols) - System Metrics Style */}
        <div className="lg:col-span-3 bg-[#0d121d] rounded-2xl p-5 border border-slate-800/90 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                Chỉ Số Hệ Thống Cơ Thể
              </span>
            </div>

            <div className="space-y-4 pt-1">
              {/* Metric 1: BMI */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase font-bold text-[10px]">Chỉ Số BMI</span>
                  <span className="text-rose-400 font-bold">{metrics.bmi} (Thừa cân)</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden flex">
                  <div className="w-[30%] bg-blue-500 h-full" />
                  <div className="w-[45%] bg-emerald-500 h-full" />
                  <div className="w-[25%] bg-rose-500 h-full" />
                </div>
              </div>

              {/* Metric 2: Body Fat */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase font-bold text-[10px]">Tỷ Lệ Mỡ Cơ Thể</span>
                  <span className="text-amber-400 font-bold">{metrics.bodyFatEstPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-amber-500 rounded-full" />
                </div>
                <span className="text-[10px] text-slate-500">Mục tiêu lý tưởng: &lt; 18.0%</span>
              </div>

              {/* Metric 3: Cardio / VO2 Max */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase font-bold text-[10px]">Dung Tích Phổi &amp; Sức Bền</span>
                  <span className="text-emerald-400 font-bold">79.0%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-[79%] h-full bg-emerald-500 rounded-full" />
                </div>
                <span className="text-[10px] text-slate-500">Đủ thể lực chạy 4 hiệp bóng rổ</span>
              </div>

              {/* Metric 4: Vertical Jump */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase font-bold text-[10px]">Sức Bật Nhảy (Vertical Jump)</span>
                  <span className="text-cyan-400 font-bold">32 cm / 50 cm</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-[64%] h-full bg-cyan-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">Trạng thái: Cần tập bật nhảy</span>
            <button
              onClick={() => onNavigateTab('basketball')}
              className="text-cyan-400 hover:text-cyan-300 font-bold uppercase text-[10px]"
            >
              Luyện Bật Nhảy &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
