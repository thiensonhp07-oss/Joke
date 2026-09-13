import React from 'react';
import { PhysicalMetrics } from '../types';
import { Activity, Flame, Award, Dumbbell, ShieldAlert, Sparkles, UserCheck } from 'lucide-react';

interface HeaderProps {
  metrics: PhysicalMetrics;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  viewRole: 'student' | 'parent';
  setViewRole: (role: 'student' | 'parent') => void;
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  metrics,
  activeTab,
  setActiveTab,
  viewRole,
  setViewRole,
  onOpenSimulator,
}) => {
  const tabs = [
    { id: 'overview', label: '🛰️ Bảng Giám Sát Telemetry' },
    { id: 'height', label: '📈 Dự Báo Chiều Cao & Sụn' },
    { id: 'basketball', label: '🏀 Lộ Trình Bóng Rổ' },
    { id: 'habits', label: '🎮 Thói Quen & Game/TikTok' },
    { id: 'schedule', label: '⏰ Lịch Sinh Hoạt 24h' },
    { id: 'ai-coach', label: '🤖 AI Coach Hỏi Đáp' },
    { id: 'quests', label: '🏆 Quests Kỷ Luật' },
  ];

  return (
    <header className="relative overflow-hidden bg-slate-900 border-b border-slate-800 pt-6 pb-4 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl font-black text-cyan-400 font-['Space_Grotesk']">
                  PH
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-slate-900"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-['Space_Grotesk']">
                  {metrics.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {metrics.grade} (13 tuổi)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                <span>Hồ sơ phân tích thói quen sinh hoạt & thể chất học sinh</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-medium">Cập nhật 2026</span>
              </p>
            </div>
          </div>

          {/* Role Toggle & Quick Simulator Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSimulator}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              Giả Lập Tăng Chiều Cao
            </button>

            <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewRole('student')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewRole === 'student'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Dumbbell className="w-3.5 h-3.5" />
                Giao Diện Học Sinh
              </button>
              <button
                onClick={() => setViewRole('parent')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewRole === 'parent'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                Góc Phụ Huynh/GV
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid Pill */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 p-3 bg-slate-950/60 rounded-2xl border border-slate-800/80 backdrop-blur-md mb-6">
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              📏 Chiều cao hiện tại
            </span>
            <div className="text-lg font-bold text-cyan-400 font-['Space_Grotesk'] mt-0.5">
              {metrics.heightCm} cm
            </div>
            <span className="text-[10px] text-slate-500">Chuẩn 13t: ~156.2 cm</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              ⚖️ Cân nặng hiện tại
            </span>
            <div className="text-lg font-bold text-amber-400 font-['Space_Grotesk'] mt-0.5">
              {metrics.weightKg} kg
            </div>
            <span className="text-[10px] text-amber-400/80">Vượt ~7-9kg so với chuẩn</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              📊 Chỉ số BMI
            </span>
            <div className="text-lg font-bold text-rose-400 font-['Space_Grotesk'] mt-0.5 flex items-center gap-1">
              {metrics.bmi}
              <ShieldAlert className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-[10px] text-rose-300/80 truncate">Thừa cân (Bách phân vị 94%)</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              📱 Thời gian Màn hình/ngày
            </span>
            <div className="text-lg font-bold text-purple-400 font-['Space_Grotesk'] mt-0.5">
              6.0 Giờ
            </div>
            <span className="text-[10px] text-purple-300/80">Roblox + TikTok + FC Mobile</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60 col-span-2 sm:col-span-4 lg:col-span-1">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              🏀 Tần suất Bóng Rổ
            </span>
            <div className="text-lg font-bold text-emerald-400 font-['Space_Grotesk'] mt-0.5">
              &lt; 1 Buổi / tuần
            </div>
            <span className="text-[10px] text-emerald-300/80">Cần tăng lên 4 buổi/tuần</span>
          </div>
        </div>

        {/* Main Tab Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-100'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
