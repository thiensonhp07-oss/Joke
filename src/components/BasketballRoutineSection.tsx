import React, { useState } from 'react';
import { basketballDrillsList, calorieSwaps } from '../data/hungData';
import { BasketballDrill } from '../types';
import { Dribbble, Zap, Flame, Calendar, Award, CheckCircle, ArrowRight, Activity, Repeat } from 'lucide-react';

export const BasketballRoutineSection: React.FC = () => {
  const [selectedGameApp, setSelectedGameApp] = useState<number>(0);
  const [customGameMins, setCustomGameMins] = useState<number>(120);

  const currentSwap = calorieSwaps[selectedGameApp];
  // Calculate dynamic calories burned & jump ropes needed based on slider
  const calcCalories = Math.round((customGameMins / 60) * 160);
  const calcJumpRopes = Math.round((customGameMins / 60) * 450);
  const calcBbMinutes = Math.round((customGameMins / 60) * 25);

  return (
    <div className="space-y-8">
      {/* Top Banner Analysis */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-900 p-6 border border-amber-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Dribbble className="w-4 h-4 text-amber-400" />
              Lộ Trình Thể Lực &amp; Bóng Rổ Tối Ưu Chiều Cao
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Chiến Lược Kích Thích Sụn Xương &amp; Đốt Mỡ Thừa Cho Hùng
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Bóng rổ là bộ môn số 1 kích thích hệ đĩa sụn tiếp hợp (Epiphyseal Plate) mở rộng ở lứa tuổi 13. 
              Các động tác vươn người bật nhảy ném rổ &amp; tranh bóng giúp kéo giãn chiều dài xương ống chân và đốt cháy tới <strong className="text-amber-300">450 - 550 kcal/giờ</strong>!
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-amber-800/40 text-center shrink-0 w-full md:w-auto">
            <span className="text-xs text-slate-400 block font-medium">Mục Tiêu Tần Suất Bóng Rổ</span>
            <div className="text-3xl font-black text-amber-400 font-['Space_Grotesk'] my-0.5">
              4 Buổi / tuần
            </div>
            <span className="text-[11px] text-amber-300/80">45 - 60 phút mỗi buổi</span>
          </div>
        </div>
      </div>

      {/* Interactive Calorie Swap Calculator */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 block">
              ⚡ Công Cụ Quy Đổi Đốt Calo
            </span>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              "Đổi Giờ Chơi Roblox / TikTok Sang Bài Tập Nhảy Dây Bóng Rổ"
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            Xem chính xác Hùng cần tập bao nhiêu để triệt tiêu năng lượng dư thừa từ việc ngồi game!
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-slate-950 rounded-2xl border border-slate-800">
          {/* Left: Input Selection */}
          <div className="space-y-4">
            <label className="text-xs font-semibold text-slate-300 block">
              1. Chọn ứng dụng giải trí Hùng hay sử dụng:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {calorieSwaps.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGameApp(idx)}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                    selectedGameApp === idx
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {idx === 0 ? '⚽ FC Mobile' : idx === 1 ? '📱 TikTok' : '🎮 Roblox'}
                </button>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Thời gian chơi/lướt hàng ngày:</span>
                <span className="text-amber-400 font-bold">{customGameMins} phút ({(customGameMins / 60).toFixed(1)} tiếng)</span>
              </div>
              <input
                type="range"
                min="30"
                max="300"
                step="15"
                value={customGameMins}
                onChange={(e) => setCustomGameMins(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400">
              🔥 Lượng calo nạp dư do ngồi thụ động: <strong className="text-rose-400 font-bold">{calcCalories} kcal</strong>
            </div>
          </div>

          {/* Right: Swap Output Result */}
          <div className="p-4 bg-slate-900/90 rounded-xl border border-amber-500/30 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Zap className="w-4 h-4" />
              Tương đương khối lượng bài tập cần thực hiện để cân bằng:
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Bật Nhảy Dây</span>
                <span className="text-xl font-black text-cyan-400 font-['Space_Grotesk']">
                  {calcJumpRopes} cái
                </span>
                <span className="text-[10px] text-slate-500 block">Kích thích sụn xương</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Đấu Bóng Rổ / Layup</span>
                <span className="text-xl font-black text-amber-400 font-['Space_Grotesk']">
                  {calcBbMinutes} phút
                </span>
                <span className="text-[10px] text-slate-500 block">Đốt mỡ siêu nhanh</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed italic">
              "Mỗi 450 cái nhảy dây sẽ giúp Hùng giải phóng thêm 10% Hormone HGH tăng trưởng chiều cao trong giấc ngủ!"
            </p>
          </div>
        </div>
      </div>

      {/* List of 4 Tailored Drills for Hoàng Phi Hùng */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-400" />
          4 Bài Tập Bóng Rổ &amp; Thể Lực Dành Cho Hùng Lớp 7 (157cm - 60kg)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {basketballDrillsList.map((drill) => (
            <div
              key={drill.id}
              className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {drill.duration} • {drill.intensity}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  {drill.target}
                </span>
              </div>

              <h4 className="text-base font-bold text-white">{drill.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{drill.description}</p>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Số lượng / Hiệp:</span>
                <span className="font-bold text-cyan-300">{drill.reps}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Schedule Plan */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-cyan-400" />
          Lịch Tập Bóng Rổ Tuần Mẫu Cho Hùng
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 bg-slate-950 rounded-xl border border-emerald-500/30">
            <strong className="text-emerald-400 block font-bold mb-1">Thứ 2 &amp; Thứ 4 (17h00 - 18h00)</strong>
            <p className="text-slate-300">Tập kỹ thuật nhồi bóng Pound Dribble + 15 lượt Layup dứt điểm hai tay.</p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-amber-500/30">
            <strong className="text-amber-400 block font-bold mb-1">Thứ 6 (17h00 - 18h15)</strong>
            <p className="text-slate-300">Đấu đối kháng 3x3 bóng rổ với bạn học cùng lớp + Bật nhảy chạm vành rổ 20 lần.</p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-cyan-500/30">
            <strong className="text-cyan-400 block font-bold mb-1">Chủ Nhật (08h00 - 09h30)</strong>
            <p className="text-slate-300">Tập Plyometrics nhảy dây 500 cái + Ném phạt 50 quả rèn tĩnh tâm.</p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-purple-500/30">
            <strong className="text-purple-400 block font-bold mb-1">Các Ngày Nghỉ Tập</strong>
            <p className="text-slate-300">Nghỉ ngơi tích cực, giãn cơ lưng trên xà đơn 3 phút tại nhà.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
