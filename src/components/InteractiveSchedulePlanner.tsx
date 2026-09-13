import React, { useState } from 'react';
import { currentSchedule, recommendedSchedule } from '../data/hungData';
import { DailyScheduleItem } from '../types';
import { Clock, CheckCircle2, AlertTriangle, Plus, Sparkles, Check, ArrowRight } from 'lucide-react';

export const InteractiveSchedulePlanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'custom'>('compare');
  const [userSchedule, setUserSchedule] = useState<DailyScheduleItem[]>(recommendedSchedule);

  // Quick calculate score of custom schedule
  const activeMinutes = userSchedule
    .filter((s) => s.category === 'active')
    .length * 45;
  const screenMinutes = userSchedule
    .filter((s) => s.category === 'screen')
    .length * 60;
  const sleepMinutes = userSchedule
    .filter((s) => s.category === 'sleep')
    .length * 60;

  const healthScore = Math.min(
    100,
    Math.round(40 + (activeMinutes / 60) * 20 - (screenMinutes / 60) * 5 + (sleepMinutes / 480) * 35)
  );

  const toggleItemState = (id: string) => {
    setUserSchedule((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRecommended: !item.isRecommended } : item
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 p-6 border border-blue-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Clock className="w-4 h-4 text-blue-400" />
              Lịch Sinh Hoạt 24h &amp; Kỷ Luật Bản Thân
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Bảng Thiết Kế Ngày Mới Rắn Rỏi Cho Hoàng Phi Hùng
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              So sánh trực quan giữa thời khóa biểu thụ động hiện tại và thời khóa biểu tối ưu tăng chiều cao. 
              Hùng có thể điều chỉnh các khung giờ để tự thiết lập mục tiêu mỗi ngày!
            </p>
          </div>

          <div className="flex items-center bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('compare')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'compare'
                  ? 'bg-blue-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📊 So Sánh 2 Lịch Sinh Hoạt
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'custom'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🛠️ Tự Thiết Lập Ngày Mới
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'compare' ? (
        /* Comparison View */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Schedule Column */}
          <div className="bg-slate-900/90 rounded-2xl p-6 border border-rose-500/30 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-rose-400 flex items-center gap-2 font-['Space_Grotesk']">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                Lịch Sinh Hoạt Hiện Tại (Cảnh Báo Lười Vận Động)
              </h3>
              <span className="text-xs font-bold bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-lg">
                Điểm Thể Lực: 35/100
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {currentSchedule.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 hover:border-rose-500/30 transition-all text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-400 font-['Space_Grotesk']">{item.time}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.category === 'screen'
                          ? 'bg-purple-500/20 text-purple-300'
                          : item.category === 'active'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : item.category === 'study'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-indigo-500/20 text-indigo-300'
                      }`}
                    >
                      {item.category === 'screen'
                        ? '🎮 Màn hình'
                        : item.category === 'active'
                        ? '🏀 Vận động'
                        : item.category === 'study'
                        ? '📚 Học tập'
                        : '🌙 Ngủ'}
                    </span>
                  </div>
                  <strong className="text-white block font-semibold">{item.activity}</strong>
                  <p className="text-[11px] text-slate-400">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Schedule Column */}
          <div className="bg-slate-900/90 rounded-2xl p-6 border border-emerald-500/30 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2 font-['Space_Grotesk']">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Lịch Sinh Hoạt Khuyên Dùng (Bứt Phá Chiều Cao)
              </h3>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-lg">
                Điểm Thể Lực: 92/100
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {recommendedSchedule.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-slate-950 rounded-xl border border-emerald-500/20 space-y-1 hover:border-emerald-500/50 transition-all text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400 font-['Space_Grotesk']">{item.time}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.category === 'screen'
                          ? 'bg-purple-500/20 text-purple-300'
                          : item.category === 'active'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : item.category === 'study'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-indigo-500/20 text-indigo-300'
                      }`}
                    >
                      {item.category === 'screen'
                        ? '🎮 Roblox/FC Mobile'
                        : item.category === 'active'
                        ? '🏀 Thể thao rèn luyện'
                        : item.category === 'study'
                        ? '📚 Học tập hiệu quả'
                        : '🌙 Giấc ngủ HGH'}
                    </span>
                  </div>
                  <strong className="text-white block font-semibold">{item.activity}</strong>
                  <p className="text-[11px] text-slate-300">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Custom Interactive Schedule Builder */
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                ⚡ Tương Tác Trực Tiếp
              </span>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                Bảng Đăng Ký Cam Kết Ngày Mới Cho Hoàng Phi Hùng
              </h3>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-cyan-500/30 flex items-center gap-3">
              <span className="text-xs text-slate-400">Chỉ số Sức Khỏe &amp; Kỷ Luật:</span>
              <span className="text-xl font-black text-cyan-400 font-['Space_Grotesk']">
                {healthScore} / 100
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {userSchedule.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleItemState(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 text-xs ${
                  item.isRecommended
                    ? 'bg-slate-950 border-emerald-500/40 text-slate-200'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border text-xs ${
                      item.isRecommended
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                        : 'bg-slate-900 border-slate-700 text-slate-600'
                    }`}
                  >
                    {item.isRecommended && <Check className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="font-bold text-cyan-300 mr-2 font-['Space_Grotesk']">{item.time}</span>
                    <strong className={item.isRecommended ? 'text-white' : 'line-through'}>{item.activity}</strong>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.notes}</p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 shrink-0">
                  {item.isRecommended ? 'Đã cam kết ✅' : 'Chưa áp dụng ❌'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
