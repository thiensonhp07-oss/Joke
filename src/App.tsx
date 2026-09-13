import React, { useState } from 'react';
import { initialHungMetrics } from './data/hungData';
import { Header } from './components/Header';
import { ScientificTelemetryDashboard } from './components/ScientificTelemetryDashboard';
import { BodyStatsSection } from './components/BodyStatsSection';
import { HabitsTimeSection } from './components/HabitsTimeSection';
import { BasketballRoutineSection } from './components/BasketballRoutineSection';
import { NutritionSleepSection } from './components/NutritionSleepSection';
import { InteractiveSchedulePlanner } from './components/InteractiveSchedulePlanner';
import { AICoachChat } from './components/AICoachChat';
import { QuestRewards } from './components/QuestRewards';
import { HeightSimulatorModal } from './components/HeightSimulatorModal';
import { Sparkles, Dumbbell, ShieldAlert, CheckCircle2, Heart, Award, FileText, BarChart3, Activity } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [viewRole, setViewRole] = useState<'student' | 'parent'>('student');
  const [isSimulatorOpen, setIsSimulatorOpen] = useState<boolean>(false);
  const [showDetailedGrowthAnalysis, setShowDetailedGrowthAnalysis] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#070a11] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Main Navigation & Profile Summary */}
      <Header
        metrics={initialHungMetrics}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        viewRole={viewRole}
        setViewRole={setViewRole}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      {/* Main Content View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Alert per Role */}
        {viewRole === 'parent' && (
          <div className="p-4 bg-purple-950/40 border border-purple-800/40 rounded-2xl flex items-start gap-3 text-xs text-purple-200">
            <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-0.5">
                Báo cáo dành riêng cho Phụ huynh &amp; Giáo viên chủ nhiệm:
              </strong>
              Em Hoàng Phi Hùng đang bước vào giai đoạn tăng trưởng thể chất tuổi dậy thì (13 tuổi). 
              Cần phối hợp giữa gia đình và trường học để giám sát thời gian sử dụng thiết bị (hiện ở mức 6h/ngày) và khuyến khích em duy trì tập bóng rổ 4 buổi/tuần.
            </div>
          </div>
        )}

        {/* Tab Switch Routing */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Scientific Telemetry Dashboard (Matching User Reference Layout) */}
            <ScientificTelemetryDashboard
              metrics={initialHungMetrics}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onOpenSimulator={() => setIsSimulatorOpen(true)}
            />

            {/* Toggle to expand Detailed Biometric Analysis */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Phân Tích Chi Tiết Chỉ Số &amp; Mô Phỏng Can Thiệp Thể Chất
                </h3>
              </div>
              <button
                onClick={() => setShowDetailedGrowthAnalysis(!showDetailedGrowthAnalysis)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-cyan-400 transition-all flex items-center gap-1.5"
              >
                {showDetailedGrowthAnalysis ? 'Thu Gọn Phân Tích' : 'Mở Rộng Phân Tích Chi Tiết'}
              </button>
            </div>

            {showDetailedGrowthAnalysis && (
              <BodyStatsSection metrics={initialHungMetrics} viewRole={viewRole} />
            )}
          </div>
        )}

        {activeTab === 'habits' && (
          <HabitsTimeSection viewRole={viewRole} />
        )}

        {activeTab === 'height' && (
          <div className="space-y-6">
            <BodyStatsSection metrics={initialHungMetrics} viewRole={viewRole} />
            <NutritionSleepSection />
          </div>
        )}

        {activeTab === 'basketball' && (
          <BasketballRoutineSection />
        )}

        {activeTab === 'schedule' && (
          <InteractiveSchedulePlanner />
        )}

        {activeTab === 'ai-coach' && (
          <AICoachChat viewRole={viewRole} />
        )}

        {activeTab === 'quests' && (
          <QuestRewards />
        )}

        {/* Action Callout Section */}
        <div className="bg-gradient-to-r from-cyan-950/30 via-[#0d121d] to-purple-950/30 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-white font-['Space_Grotesk']">
              Khởi Động Lộ Trình Tăng Chiều Cao Cho Phi Hùng Ngay Hôm Nay!
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Chỉ cần thay đổi 45 phút TikTok buổi tối sang 45 phút tập bóng rổ và đi ngủ lúc 22h15, Hùng sẽ nhận thấy sự thay đổi vượt trội về thể lực và vóc dáng chỉ sau 30 ngày!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('basketball')}
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <Dumbbell className="w-4 h-4" />
              Xem Lịch Tập Bóng Rổ
            </button>
            <button
              onClick={() => setActiveTab('ai-coach')}
              className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              Hỏi Trợ Lý AI Coach
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#070a11] py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-2">
        <p>
          Trang web Đánh giá &amp; Tối ưu hóa Thể chất - Dinh dưỡng - Học tập dành cho <strong className="text-slate-300">Hoàng Phi Hùng (Lớp 7)</strong>
        </p>
        <p className="text-[11px] text-slate-600">
          Xây dựng theo tiêu chuẩn tăng trưởng thiếu niên WHO &amp; Y học thể thao Việt Nam • 2026
        </p>
      </footer>

      {/* Height Simulator Floating Modal */}
      <HeightSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        currentHeight={initialHungMetrics.heightCm}
        currentWeight={initialHungMetrics.weightKg}
      />
    </div>
  );
}
