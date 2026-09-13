import React, { useState } from 'react';
import { X, Sparkles, TrendingUp, Dumbbell, Moon, ShieldCheck } from 'lucide-react';

interface HeightSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentHeight: number;
  currentWeight: number;
}

export const HeightSimulatorModal: React.FC<HeightSimulatorModalProps> = ({
  isOpen,
  onClose,
  currentHeight,
  currentWeight,
}) => {
  if (!isOpen) return null;

  const [basketballFrequency, setBasketballFrequency] = useState<number>(4);
  const [bedtimeChoice, setBedtimeChoice] = useState<string>('22:15');
  const [tiktokLimitMins, setTiktokLimitMins] = useState<number>(45);

  // Dynamic projection calculations
  const baseGrowth = 168; // Height if stays sedentary
  const bbBonus = basketballFrequency * 1.5; // up to +9cm
  const sleepBonus = bedtimeChoice === '22:00' ? 3 : bedtimeChoice === '22:15' ? 2.5 : 1;
  const tiktokBonus = tiktokLimitMins <= 45 ? 1.5 : 0.5;

  const calculatedHeight = Number((baseGrowth + bbBonus + sleepBonus + tiktokBonus).toFixed(1));
  const heightGain = Number((calculatedHeight - baseGrowth).toFixed(1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Giả Lập Chiều Cao Tuổi 18
          </span>
          <h3 className="text-xl font-extrabold text-white font-['Space_Grotesk']">
            Dự Báo Kết Quả Chiều Cao &amp; Thể Lực Cho Hùng
          </h3>
          <p className="text-xs text-slate-400">
            Điều chỉnh 3 biến số thói quen dưới đây để xem chiều cao bứt phá tương lai!
          </p>
        </div>

        {/* Sliders Form */}
        <div className="space-y-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
          {/* Basketball Frequency */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-amber-400" /> Tần suất chơi bóng rổ / tuần:
              </span>
              <span className="text-amber-400 font-bold">{basketballFrequency} buổi/tuần</span>
            </div>
            <input
              type="range"
              min="0"
              max="6"
              step="1"
              value={basketballFrequency}
              onChange={(e) => setBasketballFrequency(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Sleep Bedtime */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Moon className="w-4 h-4 text-indigo-400" /> Giờ đi ngủ tối:
              </span>
              <span className="text-indigo-400 font-bold">{bedtimeChoice}</span>
            </div>
            <select
              value={bedtimeChoice}
              onChange={(e) => setBedtimeChoice(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="22:00">22:00 - Tối ưu nhất (Đỉnh HGH)</option>
              <option value="22:15">22:15 - Khuyên dùng cho lớp 7</option>
              <option value="23:00">23:00 - Trễ (Giảm 30% HGH)</option>
              <option value="23:45">23:45 - Rất trễ (Thói quen cũ)</option>
            </select>
          </div>

          {/* TikTok Limit */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Giới hạn thời gian TikTok/ngày:</span>
              <span className="text-purple-400 font-bold">{tiktokLimitMins} phút</span>
            </div>
            <input
              type="range"
              min="15"
              max="180"
              step="15"
              value={tiktokLimitMins}
              onChange={(e) => setTiktokLimitMins(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Result Card */}
        <div className="p-5 bg-gradient-to-br from-slate-950 to-emerald-950/40 rounded-2xl border border-emerald-500/30 text-center space-y-2">
          <span className="text-xs text-slate-400 font-medium">Chiều cao dự đoán khi đạt 18 tuổi:</span>
          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-['Space_Grotesk']">
            {calculatedHeight} cm
          </div>
          <p className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Tăng thêm +{heightGain} cm so với giữ nguyên lối sống cũ!
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
        >
          Áp Dụng Lộ Trình Ngay!
        </button>
      </div>
    </div>
  );
};
