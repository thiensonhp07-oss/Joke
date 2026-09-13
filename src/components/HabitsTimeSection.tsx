import React, { useState } from 'react';
import { currentDailyTimeAllocation, optimizedDailyTimeAllocation, radarHabitMetrics } from '../data/hungData';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';
import { Gamepad2, Video, Smartphone, BookOpen, Dribbble, Moon, AlertOctagon, Brain, Zap, ShieldCheck } from 'lucide-react';

interface HabitsTimeSectionProps {
  viewRole: 'student' | 'parent';
}

export const HabitsTimeSection: React.FC<HabitsTimeSectionProps> = ({ viewRole }) => {
  const [chartMode, setChartMode] = useState<'current' | 'optimized'>('current');

  const activeData = chartMode === 'current' ? currentDailyTimeAllocation : optimizedDailyTimeAllocation;

  const totalScreenTime = activeData
    .filter((d) => d.category === 'screen')
    .reduce((acc, curr) => acc + curr.hours, 0);

  return (
    <div className="space-y-8">
      {/* Top Banner Analysis */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-900 p-6 border border-purple-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              Báo Cáo Thói Quen Kỹ Thuật Số &amp; Lướt Mạng
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Phân Tích Ma Trận 24h &amp; Bẫy Dopamine (Roblox - FC Mobile - TikTok)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hoàng Phi Hùng dành trung bình <strong className="text-purple-300">6.0 tiếng/ngày</strong> cho các thiết bị màn hình 
              (TikTok 2.5h, Roblox 2h, FC Mobile 1.5h). Ngược lại, thời gian chơi bóng rổ vận động chỉ chiếm khoảng <strong className="text-amber-300">20-25 phút/ngày</strong>.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-purple-800/40 text-center shrink-0 w-full md:w-auto">
            <span className="text-xs text-slate-400 block font-medium">Tổng Thời Gian Màn Hình</span>
            <div className="text-3xl font-black text-rose-400 font-['Space_Grotesk'] my-0.5">
              {totalScreenTime} Giờ / ngày
            </div>
            <span className="text-[11px] text-rose-300/80">Chiếm 37.5% thời gian thức!</span>
          </div>
        </div>
      </div>

      {/* Grid: 24h Time Allocation Donut Chart & Habit Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 24-Hour Pie Chart */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
              ⏱️ Phân Bổ 24 Giờ Sinh Hoạt Cho Hùng
            </h3>
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setChartMode('current')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  chartMode === 'current'
                    ? 'bg-rose-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hiện Tại (Cảnh Báo)
              </button>
              <button
                onClick={() => setChartMode('optimized')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  chartMode === 'optimized'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tối Ưu Khuyên Dùng
              </button>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={activeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                  dataKey="hours"
                  nameKey="activity"
                >
                  {activeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#0F172A" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#F8FAFC',
                  }}
                  formatter={(value: any, name: any) => [`${value} tiếng (${((value / 24) * 100).toFixed(1)}%)`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Legend Breakdown */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-2">
            {activeData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-300 font-medium truncate">{item.activity}:</span>
                <span className="text-white font-bold ml-auto font-['Space_Grotesk']">{item.hours}h</span>
              </div>
            ))}
          </div>
        </div>

        {/* Habit Balance Radar Chart */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
              🕸️ Biểu Đồ Radar Thói Quen (Hiện Tại vs Mục Tiêu)
            </h3>
            <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
              Chỉ Số Cân Bằng: 32/100
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarHabitMetrics}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94A3B8" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                <Radar
                  name="Thực trạng Hùng"
                  dataKey="Current"
                  stroke="#FF0050"
                  fill="#FF0050"
                  fillOpacity={0.4}
                />
                <Radar
                  name="Chuẩn Cân Bằng Dậy Thì"
                  dataKey="Ideal"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.2}
                />
                <Legend
                  wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                  formatter={(value) => <span className="text-slate-300 font-medium">{value}</span>}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#F8FAFC',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            💡 <strong>Nhận xét chuyên môn:</strong> Hùng bị "lệch" rất nặng ở mảng <em>Vận động thể lực</em> (25 điểm) và <em>Kiểm soát TikTok/Game</em> (20 điểm). Điều này tạo áp lực tâm lý thụ động và giảm động lực tự giác học tập.
          </div>
        </div>
      </div>

      {/* Deep Dive Section: Brain Focus & Dopamine Trap */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Cơ Chế Bẫy Dopamine TikTok / Roblox Tác Động Đến Não Bộ Học Sinh Lớp 7
            </h3>
            <p className="text-xs text-slate-400">Tại sao Hùng cảm thấy lười vận động & mất tập trung khi học Toán / Tiếng Anh?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: TikTok short reels */}
          <div className="p-5 bg-slate-950 rounded-xl border border-rose-500/30 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <Video className="w-4 h-4" />
              1. Lướt TikTok Shorts (2.5 tiếng)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thuật toán lướt TikTok cung cấp phần thưởng Dopamine tức thì mỗi 10-15 giây. Khi não bộ quen với lượng Dopamine siêu cao này, việc học bài hoặc đọc sách sẽ bị não đánh giá là "nhàm chán", gây hiện tượng trì hoãn.
            </p>
          </div>

          {/* Box 2: Roblox & FC Mobile */}
          <div className="p-5 bg-slate-950 rounded-xl border border-blue-500/30 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Gamepad2 className="w-4 h-4" />
              2. Roblox &amp; FC Mobile (3.5 tiếng)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Các tính năng mở gói quà FC Mobile hay cày server Blox Fruits trong Roblox tạo tâm lý sợ bỏ lỡ (FOMO). Hùng thường xuyên thức khuya đến 23:30 để leo rank, làm mỏi mắt và đau cổ vai gáy.
            </p>
          </div>

          {/* Box 3: Sedentary result */}
          <div className="p-5 bg-slate-950 rounded-xl border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertOctagon className="w-4 h-4" />
              3. Vòng lặp "Lười Vận Động"
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Việc ngồi một chỗ 6 tiếng cày màn hình làm chậm quá trình trao đổi chất cơ bản (BMR), calo tích thành mỡ ở vùng bụng và hông. Cơ thể nặng nề 60kg lại càng làm Hùng e ngại chạy nhảy chơi bóng rổ cùng bạn.
            </p>
          </div>
        </div>

        {/* Actionable Solution Rules for Hùng */}
        <div className="p-5 bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-950 rounded-xl border border-emerald-500/30 space-y-4">
          <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Bộ Quy Tắc "Cai Nghiện Màn Hình Rắn Rỏi" Dành Riêng Cho Hoàng Phi Hùng
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <strong className="text-cyan-300 block mb-1">🎮 Quy Tắc "Game Là Phần Thưởng":</strong>
              Chỉ mở FC Mobile &amp; Roblox 45 phút sau khi đã hoàn thành toàn bộ bài tập về nhà và tập bóng rổ xong.
            </div>

            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <strong className="text-rose-300 block mb-1">📵 Quy Tắc "Không Điền Thoại Trên Giường":</strong>
              Sạc điện thoại ở bàn học ngoài tầm với sau 21h30 tối. Tuyệt đối không vừa nằm giường vừa xem TikTok.
            </div>

            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <strong className="text-amber-300 block mb-1">⚡ Quy Tắc 45p Chuyển Động:</strong>
              Mỗi 45 phút cày game, phải đứng dậy nhảy dây 50 cái hoặc vặn người giải tỏa mỏi cổ gáy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
