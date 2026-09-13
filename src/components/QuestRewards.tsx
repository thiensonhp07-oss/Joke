import React, { useState } from 'react';
import { initialQuests } from '../data/hungData';
import { QuestItem } from '../types';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, ShieldCheck, Zap, Trophy, Sparkles, Star } from 'lucide-react';

export const QuestRewards: React.FC = () => {
  const [quests, setQuests] = useState<QuestItem[]>(initialQuests);

  const completedXP = quests
    .filter((q) => q.isCompleted)
    .reduce((acc, curr) => acc + curr.xp, 0);

  const totalXP = quests.reduce((acc, curr) => acc + curr.xp, 0);
  const userLevel = Math.floor(completedXP / 150) + 1;

  const toggleQuest = (id: string) => {
    setQuests((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const nextState = !q.isCompleted;
          if (nextState) {
            // Trigger Confetti Celebration!
            try {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#06B6D4', '#10B981', '#F59E0B', '#8B5CF6'],
              });
            } catch (err) {
              // Ignore if canvas-confetti fails
            }
          }
          return { ...q, isCompleted: nextState };
        }
        return q;
      })
    );
  };

  return (
    <div className="space-y-8">
      {/* Top Level Progress Bar Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-900 p-6 border border-amber-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Trophy className="w-4 h-4 text-amber-400" />
              Nhiệm Vụ Kỷ Luật Phong Cách Gaming Roblox
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Bảng Đổi Thói Quen Nhận Huy Chương Đột Phá
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Biến việc tập luyện bóng rổ &amp; cai nghiện lướt TikTok thành trò chơi Level Up thực tế. 
              Mỗi nhiệm vụ hoàn thành giúp Hùng nhận XP và tích lũy huy chương thể lực!
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-amber-500/30 text-center shrink-0 w-full md:w-auto">
            <span className="text-xs text-slate-400 block font-medium">Cấp Độ Hiện Tại Cho Hùng</span>
            <div className="text-3xl font-black text-amber-400 font-['Space_Grotesk'] my-0.5">
              Level {userLevel} ⭐
            </div>
            <span className="text-[11px] text-amber-300/80">
              Tích lũy: {completedXP} / {totalXP} XP
            </span>
          </div>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-3">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-slate-300 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" /> Tiến Trình Kỷ Luật Tuần
          </span>
          <span className="text-amber-400">{Math.round((completedXP / totalXP) * 100)}% Hoàn Thành</span>
        </div>

        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${(completedXP / totalXP) * 100}%` }}
          />
        </div>
      </div>

      {/* Quest Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quests.map((quest) => (
          <div
            key={quest.id}
            onClick={() => toggleQuest(quest.id)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer shadow-md space-y-3 ${
              quest.isCompleted
                ? 'bg-slate-900 border-emerald-500/50 shadow-emerald-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {quest.badge}
              </span>
              <span className="text-xs font-bold text-cyan-400 font-['Space_Grotesk']">
                +{quest.xp} XP
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                {quest.title}
                {quest.isCompleted && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{quest.description}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500">Trạng thái:</span>
              <span className={quest.isCompleted ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                {quest.isCompleted ? 'Đã hoàn thành! 🎉' : 'Bấm để đánh dấu đã hoàn thành'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
