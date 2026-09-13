import React, { useState } from 'react';
import { PhysicalMetrics, HeightProjectionPoint } from '../types';
import { heightProjectionData } from '../data/hungData';
import { TwelveMonthGrowthSection } from './TwelveMonthGrowthSection';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Scale, AlertTriangle, TrendingUp, Sparkles, CheckCircle2, ShieldAlert, Activity, ArrowRight } from 'lucide-react';

interface BodyStatsSectionProps {
  metrics: PhysicalMetrics;
  viewRole: 'student' | 'parent';
}

export const BodyStatsSection: React.FC<BodyStatsSectionProps> = ({ metrics, viewRole }) => {
  // Interactive Simulation State
  const [simHeight, setSimHeight] = useState<number>(metrics.heightCm);
  const [simWeight, setSimWeight] = useState<number>(metrics.weightKg);
  const [bbHoursPerWeek, setBbHoursPerWeek] = useState<number>(1);
  const [sleepBedTime, setSleepBedTime] = useState<string>('23:45');

  // Calculate simulated BMI
  const simBmi = Number((simWeight / Math.pow(simHeight / 100, 2)).toFixed(2));

  // Dynamic Height Projection Calculation based on simulation sliders
  const calculateSimulatedGrowth = (): HeightProjectionPoint[] => {
    // Base bonus from basketball & early sleep
    const sleepScore = sleepBedTime <= '22:15' ? 2 : sleepBedTime <= '23:00' ? 1 : 0;
    const bbScore = bbHoursPerWeek >= 4 ? 3 : bbHoursPerWeek >= 2 ? 1.5 : 0;
    const totalAdvantage = sleepScore + bbScore; // max ~5cm extra height bonus at age 18

    return heightProjectionData.map((pt) => {
      const extra = totalAdvantage * ((pt.age - 13) / 5);
      return {
        ...pt,
        optimizedPathCm: Number((pt.optimizedPathCm + extra * 0.4).toFixed(1)),
      };
    });
  };

  const dynamicChartData = calculateSimulatedGrowth();
  const projectedAdultHeight = dynamicChartData[dynamicChartData.length - 1].optimizedPathCm;
  const currentPathAdultHeight = dynamicChartData[dynamicChartData.length - 1].currentPathCm;

  return (
    <div className="space-y-8">
      {/* Overview Headline Alert Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              Chẩn Đánh Thể Chất Học Sinh Lớp 7
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Phân Tích Chỉ Số Thể Hình Hoàng Phi Hùng (157cm - 60kg)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {viewRole === 'student' ? (
                <span>
                  Hùng ơi, ở tuổi 13, bạn đang cao <strong>1m57</strong> và nặng <strong>60kg</strong>. 
                  Chỉ số BMI <strong>{metrics.bmi}</strong> đang cho thấy cơ thể bị tích lũy mỡ thừa do lười vận động. 
                  Nhưng đừng lo! Tuổi dậy thì lớp 7 chính là <strong className="text-amber-300">"Thời Điểm Vàng"</strong> để bạn bật nhảy cao thêm <strong>12-22cm</strong> nữa nếu chỉnh lại thói quen!
                </span>
              ) : (
                <span>
                  Báo cáo y tế lứa tuổi học đường: Hoàng Phi Hùng (13 tuổi) có BMI <strong>24.34</strong> (vượt bách phân vị 94th chuẩn WHO). 
                  Tình trạng nặng 60kg khi cao 1m57 làm tăng tải trọng lên khớp gối, gây nguy cơ ngưng trệ đĩa sụn tăng trưởng chiều cao sớm nếu không cắt giảm 6h lướt TikTok/chơi game và tăng bài tập bóng rổ bật nhảy.
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-center gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-center w-full md:w-auto">
            <span className="text-xs text-slate-400 font-medium">Tiềm Năng Chiều Cao Tuổi 18</span>
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-['Space_Grotesk']">
              {projectedAdultHeight} cm
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Chênh lệch +{(projectedAdultHeight - currentPathAdultHeight).toFixed(1)}cm so với giữ nguyên thói quen
            </span>
          </div>
        </div>
      </div>

      {/* Grid: BMI Visual Scale & Posture Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BMI & Weight Range Card */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
              <Scale className="w-5 h-5 text-cyan-400" />
              Thang Đo BMI Tuổi Dậy Thì (WHO Child Growth)
            </h3>
            <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
              BMI: {metrics.bmi}
            </span>
          </div>

          {/* Visual BMI Progress Bar */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex relative p-0.5 border border-slate-700">
              {/* Thin (underweight) */}
              <div className="w-[20%] bg-blue-500/80 h-full rounded-l-full" title="Thiếu cân (< 16.5)" />
              {/* Normal */}
              <div className="w-[45%] bg-emerald-500/80 h-full" title="Cân đối (16.5 - 21.5)" />
              {/* Overweight */}
              <div className="w-[25%] bg-amber-500/80 h-full" title="Thừa cân (21.5 - 25.0)" />
              {/* Obesity */}
              <div className="w-[10%] bg-rose-500/80 h-full rounded-r-full" title="Béo phì (> 25.0)" />

              {/* Hùng Marker */}
              <div
                className="absolute -top-1 bottom-0 w-3 bg-white rounded-full border-2 border-slate-950 shadow-lg transition-all"
                style={{ left: '78%' }}
                title="Vị trí của Hùng (BMI 24.34)"
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 px-1 font-medium">
              <span>Gầy (&lt;16.5)</span>
              <span className="text-emerald-400">Chuẩn (16.5-21.5)</span>
              <span className="text-amber-400 font-bold">Thừa cân (21.5-25)</span>
              <span className="text-rose-400">Béo phì (&gt;25)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Cân nặng lý tưởng ứng với 1m57</span>
              <span className="text-lg font-bold text-emerald-400 font-['Space_Grotesk']">
                46 kg - 52 kg
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Cần giảm nhẹ 6-8kg mỡ thừa</p>
            </div>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Tỷ lệ mỡ cơ thể ước tính</span>
              <span className="text-lg font-bold text-rose-400 font-['Space_Grotesk']">
                ~26.5% Body Fat
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Tập bóng rổ sẽ đưa mỡ về &lt;18%</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed space-y-1">
            <p className="font-bold text-amber-300 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              Tác hại của thừa cân 60kg ở chiều cao 1m57:
            </p>
            <p>
              Cân nặng tích lũy ở vùng bụng và đùi gây áp lực lên đĩa đệm khớp gối, giảm chiều cao bứt phá trong giai đoạn dậy thì lớp 7. 
              Ngoài ra, mỡ thừa làm tăng sản sinh Estrogen ngoại vi, làm nhanh đóng sụn tăng trưởng chiều cao sớm!
            </p>
          </div>
        </div>

        {/* Posture & Spine Warning */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
              <Activity className="w-5 h-5 text-rose-400" />
              Đánh Giá Tư Thế Cột Sống & Cổ (Do Roblox / TikTok)
            </h3>
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
              Cảnh Báo Cổ Rùa (78/100)
            </span>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Hội chứng Cổ Rùa (Forward Head Posture)</span>
                <span className="text-rose-400 font-bold">Mức độ Cao</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ngồi chơi Roblox và cắm mặt lướt TikTok 5-6 tiếng/ngày khiến đầu nhô về phía trước 4-5cm. Mỗi 1cm nhô ra tạo thêm 2.5kg áp lực tải trọng lên đốt sống cổ C1-C7!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Gù lưng trên & Khòm vai (Rounded Shoulders)</span>
                <span className="text-amber-400 font-bold">Mức độ Trung Bình</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Thiếu các bài tập kéo xà đơn và ném bóng rổ làm suy yếu cơ lưng trên (Trapezius & Rhomboids), làm Hùng trông thấp hơn thực tế 2-3cm do gù lưng.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 leading-relaxed flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Giải pháp khắc phục tư thế ngay lập tức:</strong>
                Tập bài "Wall Angels" (Đứng sát tường duỗi tay) 3 phút/ngày và kéo xà đơn thả lỏng cột sống 30 giây mỗi khi học xong bài.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 12-Month Height & Weight Growth Graph & 3D Interactive Simulation Section */}
      <TwelveMonthGrowthSection viewRole={viewRole} />

      {/* Height Trajectory Chart & Interactive Growth Simulator (Age 13 -> 18) */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Mô Hình Dự Báo Chiều Cao Tuổi 13 -&gt; 18
            </div>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              So Sánh Lộ Trình Lười Vận Động vs Kỷ Luật Bóng Rổ & Ngủ Sớm
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-rose-400 font-medium">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              Thói quen hiện tại (Lười vận động)
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              Lộ trình Bóng rổ &amp; Đột phá
            </div>
          </div>
        </div>

        {/* Recharts Height Projection Area Chart */}
        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dynamicChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="age" stroke="#94A3B8" tickFormatter={(v) => `${v} tuổi`} />
              <YAxis domain={[150, 185]} stroke="#94A3B8" tickFormatter={(v) => `${v}cm`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0F172A',
                  borderColor: '#334155',
                  borderRadius: '12px',
                  color: '#F8FAFC',
                }}
                formatter={(value: any, name: any) => [
                  `${value} cm`,
                  name === 'optimizedPathCm'
                    ? '🏀 Lộ Trình Đột Phá Bóng Rổ'
                    : name === 'currentPathCm'
                    ? '📱 Thói Quen Lười Vận Động'
                    : '📏 Chuẩn Trung Bình Nam (WHO)',
                ]}
                labelFormatter={(label) => `Độ tuổi: ${label} tuổi`}
              />
              <Area
                type="monotone"
                dataKey="optimizedPathCm"
                stroke="#10B981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorOptimized)"
                name="optimizedPathCm"
              />
              <Area
                type="monotone"
                dataKey="currentPathCm"
                stroke="#F43F5E"
                strokeWidth={2}
                strokeDasharray="4 4"
                fillOpacity={1}
                fill="url(#colorCurrent)"
                name="currentPathCm"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Interactive Sliders to Test Scenarios */}
        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Bảng Giả Lập Tùy Chỉnh Thói Quen Hàng Ngày Cho Hoàng Phi Hùng
            </h4>
            <span className="text-xs text-slate-400">Thay đổi thông số để xem dự báo chiều cao ngay lập tức!</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Slider 1: Basketball Hours */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Tần suất Bóng Rổ / tuần:</span>
                <span className="text-emerald-400 font-bold">{bbHoursPerWeek} buổi ({bbHoursPerWeek * 45} phút)</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={bbHoursPerWeek}
                onChange={(e) => setBbHoursPerWeek(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-400">Hiện tại: &lt;1 buổi -&gt; Cần nâng lên 4 buổi</p>
            </div>

            {/* Slider 2: Bedtime Selection */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Giờ đi ngủ buổi tối:</span>
                <span className={sleepBedTime <= '22:15' ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                  {sleepBedTime} {sleepBedTime <= '22:15' ? '✨ (Rất Tốt)' : '⚠️ (Thiếu HGH)'}
                </span>
              </div>
              <select
                value={sleepBedTime}
                onChange={(e) => setSleepBedTime(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="22:00">22:00 (Tối ưu nhất - HGH Đỉnh điểm)</option>
                <option value="22:15">22:15 (Chuẩn khuyến nghị Lớp 7)</option>
                <option value="23:00">23:00 (Hơi muộn - Mất 30% HGH)</option>
                <option value="23:45">23:45 (Hiện tại của Hùng - Rất muộn)</option>
              </select>
              <p className="text-[10px] text-slate-400">Hormone HGH tiết mạnh nhất từ 23:00 - 02:00 sáng</p>
            </div>

            {/* Simulated Height Result Box */}
            <div className="p-3 bg-slate-900 rounded-xl border border-emerald-500/30 flex flex-col justify-center items-center text-center">
              <span className="text-[11px] text-slate-400 font-medium">Chiều cao dự báo tuổi 18:</span>
              <div className="text-2xl font-black text-emerald-400 font-['Space_Grotesk'] my-0.5">
                {projectedAdultHeight} cm
              </div>
              <span className="text-[10px] text-cyan-300">
                Cao hơn thói quen lười: +{(projectedAdultHeight - 168).toFixed(1)} cm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
