import React, { useState } from 'react';
import { twelveMonthGrowthData } from '../data/hungData';
import { TwelveMonthGrowthPoint } from '../types';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Gamepad2,
  Dumbbell,
  Scale,
  Flame,
  Zap,
  Activity,
  ArrowRight,
  ShieldAlert,
  Award,
} from 'lucide-react';

interface TwelveMonthGrowthSectionProps {
  viewRole: 'student' | 'parent';
}

export const TwelveMonthGrowthSection: React.FC<TwelveMonthGrowthSectionProps> = ({ viewRole }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(6); // Default 6 months in
  const [chartMode, setChartMode] = useState<'dual' | 'height' | 'weight'>('dual');
  const [scenarioFilter, setScenarioFilter] = useState<'both' | 'lazy' | 'active'>('both');

  const monthData: TwelveMonthGrowthPoint = twelveMonthGrowthData[selectedMonth];

  // Calculate BMIs for the selected month
  // Hùng height in meters
  const lazyHeightM = monthData.lazyHeightCm / 100;
  const lazyBmi = Number((monthData.lazyWeightKg / (lazyHeightM * lazyHeightM)).toFixed(2));

  const activeHeightM = monthData.activeHeightCm / 100;
  const activeBmi = Number((monthData.activeWeightKg / (activeHeightM * activeHeightM)).toFixed(2));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top 3D Cyber Glass Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-950 p-6 sm:p-8 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
        {/* Glow ambient background lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-rose-500/20 to-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Dự Báo Tăng Trưởng 12 Tháng (Interactive 3D Simulation)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
              Biểu Đồ Chiều Cao &amp; Cân Nặng 12 Tháng: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">
                Hùng Lười Cày Game 🎮 vs Tập Bóng Rổ Bứt Phá 🏀
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {viewRole === 'student' ? (
                <span>
                  Hùng ơi, nếu bạn duy trì lối sống <strong>ngồi 6 tiếng/ngày lướt TikTok &amp; chơi Roblox</strong>, cơ thể nặng <strong>60kg</strong> sẽ nhanh chóng vọt lên <strong className="text-rose-400">66.5kg</strong> (béo bụng, tích mỡ) và chiều cao chỉ tăng lẹt đẹt thêm 1.8cm. 
                  Nhưng nếu đổi sang <strong>45 phút bóng rổ/ngày</strong>, bạn sẽ <strong>đốt sạch 7.5kg mỡ thừa</strong>, cao bứt phá lên <strong className="text-emerald-400">163.8cm</strong> sau 12 tháng!
                </span>
              ) : (
                <span>
                  Báo cáo dự báo thể chất 12 tháng: Hoàng Phi Hùng (13 tuổi, 1m57, 60kg). Tình trạng lười vận động cày game liên tục khiến tỷ lệ mỡ cơ thể tăng lên 31.5%, gây quá tải khớp gối và kiềm hãm sụn tăng trưởng chiều cao. 
                  Đảo ngược thói quen bằng môn bóng rổ sẽ giúp cháu hạ BMI từ 24.34 về 19.55 chuẩn thể thao.
                </span>
              )}
            </p>
          </div>

          {/* Quick Metrics Comparison Badge */}
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl shrink-0 w-full lg:w-auto space-y-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block text-center">
              Chênh Lệch Sau 12 Tháng (Tháng 12)
            </span>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[10px] text-slate-400 block font-medium">Chiều Cao Đột Phá</span>
                <span className="text-xl font-black text-emerald-400 font-['Space_Grotesk']">+5.0 cm</span>
                <span className="text-[10px] text-emerald-300 block">So với lười cày game</span>
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-[10px] text-slate-400 block font-medium">Giảm Mỡ Thừa</span>
                <span className="text-xl font-black text-cyan-400 font-['Space_Grotesk']">-14.0 kg</span>
                <span className="text-[10px] text-cyan-300 block">Cơ thể thon gọn 52.5kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Graph & Control Panel */}
      <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
              <Activity className="w-5 h-5 text-cyan-400" />
              Đồ Thị Tăng Trưởng Kép (Chiều Cao &amp; Cân Nặng 12 Tháng)
            </h3>
            <p className="text-xs text-slate-400">
              Trục bên Tái (cm): Chiều cao • Trục bên Phải (kg): Cân nặng &amp; mỡ thừa
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Chart View Toggle */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
              <button
                onClick={() => setChartMode('dual')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  chartMode === 'dual'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📊 Đồ Thị Kép
              </button>
              <button
                onClick={() => setChartMode('height')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  chartMode === 'height'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📏 Chiều Cao (cm)
              </button>
              <button
                onClick={() => setChartMode('weight')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  chartMode === 'weight'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚖️ Cân Nặng (kg)
              </button>
            </div>

            {/* Scenario Filter Toggle */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
              <button
                onClick={() => setScenarioFilter('both')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scenarioFilter === 'both'
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚔️ So Sánh 2 Lộ Trình
              </button>
              <button
                onClick={() => setScenarioFilter('lazy')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scenarioFilter === 'lazy'
                    ? 'bg-rose-500/30 text-rose-300 border border-rose-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎮 Lười Cày Game
              </button>
              <button
                onClick={() => setScenarioFilter('active')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scenarioFilter === 'active'
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🏀 Đột Phá Bóng Rổ
              </button>
            </div>
          </div>
        </div>

        {/* Recharts Container */}
        <div className="h-80 sm:h-96 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={twelveMonthGrowthData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <defs>
                <linearGradient id="activeHeightGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="lazyHeightGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="monthLabel" stroke="#94A3B8" tick={{ fontSize: 11 }} />

              {/* Left Y-Axis for Height */}
              {(chartMode === 'dual' || chartMode === 'height') && (
                <YAxis
                  yAxisId="left"
                  domain={[155, 166]}
                  stroke="#10B981"
                  tickFormatter={(v) => `${v}cm`}
                  tick={{ fontSize: 11 }}
                />
              )}

              {/* Right Y-Axis for Weight */}
              {(chartMode === 'dual' || chartMode === 'weight') && (
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[48, 70]}
                  stroke="#F59E0B"
                  tickFormatter={(v) => `${v}kg`}
                  tick={{ fontSize: 11 }}
                />
              )}

              <Tooltip
                contentStyle={{
                  backgroundColor: '#090D16',
                  borderColor: '#334155',
                  borderRadius: '16px',
                  color: '#F8FAFC',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
                  fontSize: '12px',
                }}
                formatter={(value: any, name: any) => {
                  if (name === 'activeHeightCm') return [`${value} cm`, '🏀 Chiều Cao Đột Phá'];
                  if (name === 'lazyHeightCm') return [`${value} cm`, '🎮 Chiều Cao Lười Cày Game'];
                  if (name === 'activeWeightKg') return [`${value} kg`, '🏀 Cân Nặng Đột Phá Săn Chắc'];
                  if (name === 'lazyWeightKg') return [`${value} kg`, '🎮 Cân Nặng Béo Tích Mỡ'];
                  return [value, name];
                }}
                labelFormatter={(label) => `📅 Mốc Thời Gian: ${label}`}
              />

              <Legend
                wrapperStyle={{ paddingTop: '15px', fontSize: '11px' }}
                formatter={(value) => {
                  if (value === 'activeHeightCm') return '🏀 Chiều cao Đột Phá (cm)';
                  if (value === 'lazyHeightCm') return '🎮 Chiều cao Lười cày game (cm)';
                  if (value === 'activeWeightKg') return '🏀 Cân nặng Săn chắc (kg)';
                  if (value === 'lazyWeightKg') return '🎮 Cân nặng Tích mỡ (kg)';
                  return value;
                }}
              />

              {/* HEIGHT DATA LINES / AREAS */}
              {(chartMode === 'dual' || chartMode === 'height') && (scenarioFilter === 'both' || scenarioFilter === 'active') && (
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="activeHeightCm"
                  stroke="#10B981"
                  strokeWidth={3}
                  fill="url(#activeHeightGrad)"
                  name="activeHeightCm"
                />
              )}

              {(chartMode === 'dual' || chartMode === 'height') && (scenarioFilter === 'both' || scenarioFilter === 'lazy') && (
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="lazyHeightCm"
                  stroke="#F43F5E"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fill="url(#lazyHeightGrad)"
                  name="lazyHeightCm"
                />
              )}

              {/* WEIGHT DATA LINES */}
              {(chartMode === 'dual' || chartMode === 'weight') && (scenarioFilter === 'both' || scenarioFilter === 'active') && (
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="activeWeightKg"
                  stroke="#06B6D4"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#06B6D4' }}
                  activeDot={{ r: 7 }}
                  name="activeWeightKg"
                />
              )}

              {(chartMode === 'dual' || chartMode === 'weight') && (scenarioFilter === 'both' || scenarioFilter === 'lazy') && (
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="lazyWeightKg"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ r: 4, fill: '#F59E0B' }}
                  activeDot={{ r: 7 }}
                  name="lazyWeightKg"
                />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Interactive 3D Time Scrubber & Physique Transformation Cards */}
      <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Kéo Thanh Thời Gian 12 Tháng
            </span>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Mô Phỏng Biến Đổi Thể Chất Theo Từng Mốc Tháng
            </h3>
          </div>

          <div className="p-3 bg-slate-950 rounded-2xl border border-amber-500/30 flex items-center gap-3">
            <span className="text-xs text-slate-400">Đang chọn mốc:</span>
            <span className="text-lg font-black text-amber-400 font-['Space_Grotesk']">
              {monthData.monthLabel}
            </span>
          </div>
        </div>

        {/* 12-Month Interactive Slider Control */}
        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span>Tháng 0 (Bắt đầu)</span>
            <span className="text-cyan-400 font-['Space_Grotesk']">Tháng {selectedMonth} / 12</span>
            <span>Tháng 12 (1 Năm sau)</span>
          </div>
          <input
            type="range"
            min="0"
            max="12"
            step="1"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-slate-800 h-3 rounded-xl cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            {twelveMonthGrowthData.map((d) => (
              <span
                key={d.month}
                onClick={() => setSelectedMonth(d.month)}
                className={`cursor-pointer hover:text-white transition-all ${
                  d.month === selectedMonth ? 'text-amber-400 font-bold scale-110' : ''
                }`}
              >
                T{d.month}
              </span>
            ))}
          </div>
        </div>

        {/* Side-by-Side 3D Card Physique Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lazy Gaming Path 3D Card */}
          <div className="relative group bg-gradient-to-b from-slate-950 via-rose-950/20 to-slate-950 rounded-3xl p-6 border border-rose-500/30 shadow-2xl transition-all duration-300 hover:border-rose-500/60 hover:shadow-rose-500/10 hover:-translate-y-1 space-y-5 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg border border-rose-500/30">
                  🎮
                </div>
                <div>
                  <h4 className="text-base font-bold text-rose-400 font-['Space_Grotesk']">
                    Lực Âm: Lười Vận Động &amp; Cày Game
                  </h4>
                  <p className="text-[11px] text-slate-400">Xem TikTok 2.5h • Roblox/FC Mobile 3.5h</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-lg border border-rose-500/30">
                Nguy cơ Béo Tích Mỡ
              </span>
            </div>

            {/* 3D Simulated Avatar Box for Lazy Path */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-rose-500/20 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 block font-medium">Chỉ số thể hình tại {monthData.monthLabel}:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                    {monthData.lazyHeightCm} cm
                  </span>
                  <span className="text-lg font-bold text-rose-400 font-['Space_Grotesk']">
                    {monthData.lazyWeightKg} kg
                  </span>
                </div>
                <div className="text-xs text-rose-300/90 font-medium">
                  BMI: <strong className="text-rose-400">{lazyBmi}</strong> • Body Fat:{' '}
                  <strong className="text-rose-400">{monthData.lazyBodyFatPercent}%</strong>
                </div>
              </div>

              {/* Visual Avatar Simulation Badge */}
              <div className="p-3 bg-slate-950 rounded-xl border border-rose-500/30 text-center shrink-0 w-28">
                <div className="text-3xl mb-1 animate-bounce">📱🍔</div>
                <span className="text-[10px] font-bold text-rose-400 block">Bụng Xệ &amp; Thừa Mỡ</span>
                <span className="text-[9px] text-slate-500">Cột sống khòm</span>
              </div>
            </div>

            {/* Impact Details */}
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Hệ quả thể chất:</strong> Ngồi cày game liên tục tích lũy mỡ vùng bụng. Mỡ thừa tăng lên <strong>{monthData.lazyBodyFatPercent}%</strong> làm kích hoạt đóng sụn tăng trưởng sớm!
                </span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Học tập &amp; Giấc ngủ:</strong> Thức đến 23h45 cày rank Roblox gây suy giảm Hormone HGH bứt phá chiều cao đêm.
                </span>
              </div>
            </div>
          </div>

          {/* Active Basketball Path 3D Card */}
          <div className="relative group bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 rounded-3xl p-6 border border-emerald-500/40 shadow-2xl transition-all duration-300 hover:border-emerald-500/70 hover:shadow-emerald-500/10 hover:-translate-y-1 space-y-5 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
                  🏀
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-400 font-['Space_Grotesk']">
                    Lực Dương: Kỷ Luật Bóng Rổ &amp; Ngủ Sớm
                  </h4>
                  <p className="text-[11px] text-slate-400">Tập bóng rổ 45p/ngày • Ngủ chuẩn 22h15</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                Thúc Đẩy Chiều Cao Vọt
              </span>
            </div>

            {/* 3D Simulated Avatar Box for Active Path */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/20 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 block font-medium">Chỉ số thể hình tại {monthData.monthLabel}:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                    {monthData.activeHeightCm} cm
                  </span>
                  <span className="text-lg font-bold text-emerald-400 font-['Space_Grotesk']">
                    {monthData.activeWeightKg} kg
                  </span>
                </div>
                <div className="text-xs text-emerald-300/90 font-medium">
                  BMI: <strong className="text-emerald-400">{activeBmi} (Chuẩn)</strong> • Body Fat:{' '}
                  <strong className="text-emerald-400">{monthData.activeBodyFatPercent}% (VĐV)</strong>
                </div>
              </div>

              {/* Visual Avatar Simulation Badge */}
              <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/30 text-center shrink-0 w-28">
                <div className="text-3xl mb-1 animate-pulse">🏀⚡</div>
                <span className="text-[10px] font-bold text-emerald-400 block">Dáng Cao Thon Gọn</span>
                <span className="text-[9px] text-slate-500">Cột sống thẳng tắp</span>
              </div>
            </div>

            {/* Impact Details */}
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-2">
                <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Đốt mỡ siêu tốc:</strong> Cân nặng giảm về <strong>{monthData.activeWeightKg}kg</strong> săn chắc, cơ bụng phẳng, giảm hoàn toàn nguy cơ béo phì lứa tuổi 13.
                </span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Kích thích sụn xương:</strong> Bật nhảy cao dứt điểm bóng rổ tạo dòng lực nén đàn hồi giúp sụn đùi dài ra liên tục thêm <strong>+6.8cm/năm</strong>!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
