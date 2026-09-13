import React from 'react';
import { Utensils, Moon, ShieldCheck, HeartPulse, Check, X, Sparkles, Clock, AlertTriangle } from 'lucide-react';

export const NutritionSleepSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Top Banner Analysis */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 p-6 border border-emerald-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Utensils className="w-4 h-4 text-emerald-400" />
              Dinh Dưỡng Tuổi Dậy Thì &amp; Giấc Ngủ Vàng
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Công Thức Tăng Chiều Cao &amp; Giảm Mỡ Cơ Thể Cho Hùng (Lớp 7)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dinh dưỡng đúng giúp Hùng bứt phá chiều cao mà không bị mập lên! 
              Cần cung cấp đủ <strong className="text-emerald-300">Protein (75-85g/ngày)</strong> và <strong className="text-emerald-300">Canxi (1200mg/ngày)</strong> kết hợp giấc ngủ trước 22h15 để đón HGH.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-emerald-800/40 text-center shrink-0 w-full md:w-auto">
            <span className="text-xs text-slate-400 block font-medium">Khuyến Nghị Nước Uống</span>
            <div className="text-3xl font-black text-cyan-400 font-['Space_Grotesk'] my-0.5">
              2.2 Lít / ngày
            </div>
            <span className="text-[11px] text-cyan-300/80">Thay thế hoàn toàn nước ngọt</span>
          </div>
        </div>
      </div>

      {/* Grid: Nutrition Plan & Junk Food Swaps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Nutrition Rule Card */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
            🥗 Nguyên Tắc Đĩa Ăn "Tăng Cơ - Giảm Mỡ"
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                1/2
              </div>
              <div>
                <strong className="text-sm text-white font-semibold block mb-0.5">1/2 Đĩa: Rau Xanh &amp; Chất Xơ Tuổi Dậy Thì</strong>
                <p className="text-xs text-slate-300">Bông cải xanh, rau cải luộc, xà lách, dưa chuột. Chất xơ làm chậm hấp thu đường, giúp Hùng không bị tích mỡ bụng khi cày game.</p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                1/4
              </div>
              <div>
                <strong className="text-sm text-white font-semibold block mb-0.5">1/4 Đĩa: Protein Chất Lượng Cao (Đóng Xương)</strong>
                <p className="text-xs text-slate-300">Ức gà, thịt thăn heo, trứng luộc, cá hồi, đậu phụ. Cần 75g-85g đạm mỗi ngày để xây dựng mô cơ bắp săn chắc.</p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                1/4
              </div>
              <div>
                <strong className="text-sm text-white font-semibold block mb-0.5">1/4 Đĩa: Tinh Bột Phức Hợp Cân Bằng</strong>
                <p className="text-xs text-slate-300">Cơm gạo lứt, khoai lang luộc, ngô luộc hoặc 1 chén cơm trắng vừa phải. Không ăn quá nhiều cơm trắng vào buổi tối.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Junk Food Swaps Table */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Space_Grotesk']">
            🔄 Bảng Thay Thế Đồ Ăn Vặt Khi Chơi Roblox / TikTok
          </h3>

          <div className="space-y-3">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-rose-400">
                <X className="w-4 h-4 shrink-0" />
                <span>Nước ngọt có ga / Trà sữa (300 kcal)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 border-l border-slate-800 pl-3">
                <Check className="w-4 h-4 shrink-0" />
                <span>Nước lọc mát / Nước dừa (0-40 kcal)</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-rose-400">
                <X className="w-4 h-4 shrink-0" />
                <span>Snack khoai tây chiên (250 kcal)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 border-l border-slate-800 pl-3">
                <Check className="w-4 h-4 shrink-0" />
                <span>1 Quả táo giòn / Dưa chuột (60 kcal)</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-rose-400">
                <X className="w-4 h-4 shrink-0" />
                <span>Mì tôm ăn đêm sau 22h (400 kcal)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 border-l border-slate-800 pl-3">
                <Check className="w-4 h-4 shrink-0" />
                <span>1 Ly sữa tươi không đường 200ml</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200">
            🥛 <strong>Mẹo nhỏ bổ sung Canxi:</strong> Uống 1 ly sữa tươi không đường 200ml trước khi ngủ 45 phút giúp cung cấp Canxi và Tryptophan giúp ngủ sâu giấc hơn.
          </div>
        </div>
      </div>

      {/* Sleep & HGH Growth Hormone Window Diagram */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              🌙 Cơ Chế Sinh Học Tuổi Dậy Thì
            </span>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
              <Moon className="w-5 h-5 text-indigo-400" />
              Cửa Sổ Tiết Hormone Tăng Trưởng Chiều Cao (HGH)
            </h3>
          </div>
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Đi ngủ trước 22:15
          </span>
        </div>

        {/* Visual Timeline Diagram */}
        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
          <div className="relative pt-6 pb-2">
            {/* Timeline Line */}
            <div className="h-3 w-full bg-slate-800 rounded-full flex overflow-hidden">
              <div className="w-[20%] bg-slate-700" title="21:00 - 22:00: Chuẩn bị ngủ" />
              <div className="w-[15%] bg-indigo-600" title="22:00 - 23:00: Đi vào giấc ngủ sâu" />
              <div className="w-[40%] bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 animate-pulse" title="23:00 - 02:00: ĐỈNH ĐIỂM HGH TIẾT RA" />
              <div className="w-[25%] bg-slate-700" title="02:00 - 06:15: Giấc ngủ duy trì" />
            </div>

            {/* Labels on Timeline */}
            <div className="flex justify-between text-[11px] text-slate-400 pt-2 font-medium">
              <span>21:00</span>
              <span className="text-indigo-400 font-bold">22:15 (Hùng cần ngủ)</span>
              <span className="text-emerald-400 font-black">23:00 - 02:00 (HGH ĐỈNH CAO 💥)</span>
              <span>06:15</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-3.5 bg-rose-950/30 rounded-xl border border-rose-800/40 text-rose-200">
              <strong className="text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Nếu Hùng đi ngủ lúc 23:45 (Hiện Tại):
              </strong>
              Đến 00:30 mới vào giấc ngủ sâu. Hùng bị <strong>mất tới 60% lượng Hormone HGH</strong> phát triển chiều cao của đêm đó! Đây là nguyên nhân khiến trẻ lười vận động dễ bị lùn đi so với tiềm năng di truyền.
            </div>

            <div className="p-3.5 bg-emerald-950/30 rounded-xl border border-emerald-800/40 text-emerald-200">
              <strong className="text-emerald-400 font-bold block mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Nếu Hùng đi ngủ đúng 22:15 (Mục Tiêu):
              </strong>
              Cơ thể vào trạng thái NREM Sleep đúng 23:00. Tuyến yên sẽ tiết tối đa Hormone HGH để kéo dài đĩa sụn xương đùi và giúp đốt cháy mỡ thừa tự nhiên trong lúc ngủ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
