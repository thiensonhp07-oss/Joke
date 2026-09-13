import {
  PhysicalMetrics,
  TimeAllocation,
  HeightProjectionPoint,
  TwelveMonthGrowthPoint,
  CalorieBurnSwap,
  BasketballDrill,
  DailyScheduleItem,
  QuestItem,
} from '../types';

export const initialHungMetrics: PhysicalMetrics = {
  name: 'Hoàng Phi Hùng',
  grade: 'Lớp 7',
  age: 13,
  heightCm: 157,
  weightKg: 60,
  bmi: 24.34,
  bmiCategory: 'Thừa cân (Nguy cơ béo phì lứa tuổi 13)',
  idealWeightRange: [45, 53],
  bodyFatEstPercent: 26.5,
  postureRiskScore: 78, // High risk of forward head posture & rounded shoulders
  cardioFitnessScore: 35, // Low stamina due to sedentary lifestyle
};

export const currentDailyTimeAllocation: TimeAllocation[] = [
  { activity: 'Lướt TikTok', hours: 2.5, color: '#FF0050', category: 'screen', iconName: 'Video' },
  { activity: 'Chơi Roblox', hours: 2.0, color: '#00A2FF', category: 'screen', iconName: 'Gamepad2' },
  { activity: 'Chơi FC Mobile', hours: 1.5, color: '#10B981', category: 'screen', iconName: 'Smartphone' },
  { activity: 'Học tập & Ở trường', hours: 6.5, color: '#8B5CF6', category: 'study', iconName: 'BookOpen' },
  { activity: 'Vận động / Bóng rổ', hours: 0.4, color: '#F59E0B', category: 'active', iconName: 'Dribbble' },
  { activity: 'Giấc ngủ đêm', hours: 6.5, color: '#6366F1', category: 'sleep', iconName: 'Moon' },
  { activity: 'Ăn uống & Cá nhân', hours: 4.6, color: '#EC4899', category: 'other', iconName: 'Utensils' },
];

export const optimizedDailyTimeAllocation: TimeAllocation[] = [
  { activity: 'Lướt TikTok (Giới hạn)', hours: 0.75, color: '#FF0050', category: 'screen', iconName: 'Video' },
  { activity: 'Chơi Roblox / FC Mobile', hours: 1.0, color: '#00A2FF', category: 'screen', iconName: 'Gamepad2' },
  { activity: 'Học tập chất lượng', hours: 6.5, color: '#8B5CF6', category: 'study', iconName: 'BookOpen' },
  { activity: 'Bóng rổ & Tập thể lực', hours: 1.5, color: '#F59E0B', category: 'active', iconName: 'Dribbble' },
  { activity: 'Giấc ngủ vàng (Trước 22h15)', hours: 8.5, color: '#6366F1', category: 'sleep', iconName: 'Moon' },
  { activity: 'Ăn uống & Sinh hoạt', hours: 5.75, color: '#EC4899', category: 'other', iconName: 'Utensils' },
];

export const heightProjectionData: HeightProjectionPoint[] = [
  { age: 13, currentPathCm: 157, optimizedPathCm: 157, standardPercentile50Cm: 156.2 },
  { age: 14, currentPathCm: 161, optimizedPathCm: 164, standardPercentile50Cm: 163.8 },
  { age: 15, currentPathCm: 164, optimizedPathCm: 170, standardPercentile50Cm: 170.0 },
  { age: 16, currentPathCm: 166, optimizedPathCm: 174, standardPercentile50Cm: 173.5 },
  { age: 17, currentPathCm: 167, optimizedPathCm: 177, standardPercentile50Cm: 175.5 },
  { age: 18, currentPathCm: 168, optimizedPathCm: 179, standardPercentile50Cm: 176.8 },
];

export const radarHabitMetrics = [
  { subject: 'Vận động thể lực', Current: 25, Ideal: 85 },
  { subject: 'Chất lượng giấc ngủ', Current: 40, Ideal: 90 },
  { subject: 'Tập trung học tập', Current: 45, Ideal: 85 },
  { subject: 'Kiểm soát TikTok/Game', Current: 20, Ideal: 80 },
  { subject: 'Tư thế cột sống', Current: 30, Ideal: 85 },
  { subject: 'Dinh dưỡng cân bằng', Current: 35, Ideal: 90 },
];

export const calorieSwaps: CalorieBurnSwap[] = [
  {
    gamingApp: 'Chơi FC Mobile 1 tiếng (ngồi một chỗ)',
    durationMinutes: 60,
    caloriesConsumed: 160,
    basketballDrill: 'Nhảy dây tốc độ + Dribble nâng cao',
    drillMinutesNeeded: 20,
    jumpRopesNeeded: 450,
  },
  {
    gamingApp: 'Lướt TikTok 2 tiếng buổi tối',
    durationMinutes: 120,
    caloriesConsumed: 320,
    basketballDrill: 'Chạy sân full-court & Layup dứt điểm',
    drillMinutesNeeded: 40,
    jumpRopesNeeded: 900,
  },
  {
    gamingApp: 'Chơi Roblox với bạn bè 2 tiếng',
    durationMinutes: 120,
    caloriesConsumed: 340,
    basketballDrill: 'Đấu đối kháng 3x3 bóng rổ',
    drillMinutesNeeded: 35,
    jumpRopesNeeded: 850,
  },
];

export const basketballDrillsList: BasketballDrill[] = [
  {
    id: 'b1',
    title: 'Bật Nhảy Kích Thích Sụn Chiều Cao (Jump Rope & Box Jump)',
    duration: '15 phút',
    intensity: 'Vừa',
    description: 'Nhảy dây 300 cái chia làm 3 hiệp, kết hợp bật nhảy cao chạm bảng rổ hoặc điểm cao trên tường.',
    benefit: 'Tạo áp lực nén nhịp nhàng lên đĩa sụn xương đùi và xương bắp chân, thúc đẩy kéo dài xương.',
    target: 'Kích thích HGH & Tăng sức bật',
    reps: '3 hiệp x 100 cái nhảy dây + 15 lượt bật tối đa',
  },
  {
    id: 'b2',
    title: 'Dẫn Bóng Cảm Giác Lực (Pound Dribble & Crossover)',
    duration: '15 phút',
    intensity: 'Nâng Cao',
    description: 'Nhồi bóng thấp ngang gối tay thuận/không thuận, đổi hướng dằn bóng liên tục 30s.',
    benefit: 'Đốt cháy calo nhanh gấp 2 lần đi bộ, tăng phản xạ thần kinh và sự linh hoạt cổ tay.',
    target: 'Kiểm soát bóng & Đốt mỡ thừa',
    reps: '4 hiệp x 1 phút liên tục',
  },
  {
    id: 'b3',
    title: 'Kỹ Thuật Dứt Điểm Layup & Chạy Sân (Full Court Layups)',
    duration: '20 phút',
    intensity: 'Nâng Cao',
    description: 'Dẫn bóng tốc độ từ giữa sân, thực hiện bước nhảy 1-2 dứt điểm bóng rổ cận rổ.',
    benefit: 'Rèn luyện hệ hô hấp tim mạch, săn chắc cơ đùi và cơ bụng.',
    target: 'Sức bền & Kỹ năng ghi điểm',
    reps: '15 lần lên rổ tay phải + 15 lần tay trái',
  },
  {
    id: 'b4',
    title: 'Bật Nhảy Squat Jump & Kháng Lực Thể Lực',
    duration: '10 phút',
    intensity: 'Nâng Cao',
    description: 'Squat xuống 90 độ rồi bật nhảy cao hết sức lên không trung, tiếp đất nhẹ nhàng bằng mũi chân.',
    benefit: 'Tăng mật độ xương cơ mông đùi, chỉnh tư thế đứng thẳng lưng.',
    target: 'Tăng chiều cao & Sức mạnh chân',
    reps: '3 hiệp x 12 lần',
  },
];

export const currentSchedule: DailyScheduleItem[] = [
  { id: 's1', time: '06:30', activity: 'Thức dậy uể uải, lướt nhanh TikTok 15 phút', category: 'screen', isRecommended: false, notes: 'Khiến não bộ bị nạp dopamine ồ ạt ngay khi mới ngủ dậy' },
  { id: 's2', time: '07:00 - 11:30', activity: 'Học tập tại trường lớp 7', category: 'study', isRecommended: true, notes: 'Ngồi khòm lưng trên bàn học, thiếu tập trung tiết cuối' },
  { id: 's3', time: '12:00', activity: 'Ăn trưa & Vừa ăn vừa mở TikTok/FC Mobile', category: 'screen', isRecommended: false, notes: 'Gây rối loạn tiêu hóa, không cảm nhận được độ no' },
  { id: 's4', time: '13:30 - 17:00', activity: 'Học chiều hoặc về nhà cày Roblox', category: 'screen', isRecommended: false, notes: 'Ngồi 3 tiếng liên tục không vận động' },
  { id: 's5', time: '17:30 - 18:00', activity: 'Thỉnh thoảng ném bóng rổ nhẹ nhàng 20 phút', category: 'active', isRecommended: true, notes: 'Thời gian quá ít, chưa đủ ngưỡng đốt calo' },
  { id: 's6', time: '19:30 - 21:00', activity: 'Học bài và làm bài tập về nhà', category: 'study', isRecommended: true, notes: 'Thường xuyên mất tập trung do thông báo TikTok/Roblox' },
  { id: 's7', time: '21:00 - 23:30', activity: 'Cày FC Mobile, leo rank Roblox & lướt Reels', category: 'screen', isRecommended: false, notes: 'Ức chế sản sinh Melatonin, làm trì hoãn giấc ngủ sâu' },
  { id: 's8', time: '23:45', activity: 'Đi ngủ muộn', category: 'sleep', isRecommended: false, notes: 'Mất mốc giải phóng Hormone tăng trưởng HGH tốt nhất' },
];

export const recommendedSchedule: DailyScheduleItem[] = [
  { id: 'rs1', time: '06:15', activity: 'Thức dậy, uống 300ml nước ấm & vươn người xà đơn', category: 'active', isRecommended: true, notes: 'Kích hoạt đĩa đệm cột sống kéo dài' },
  { id: 'rs2', time: '07:00 - 11:30', activity: 'Học tại trường, giữ thẳng lưng & ngực mở', category: 'study', isRecommended: true, notes: 'Giúp máu lưu thông lên não minh mẫn' },
  { id: 'rs3', time: '12:00', activity: 'Ăn trưa giàu protein (thịt/cá/trứng) & rau xanh', category: 'meal', isRecommended: true, notes: 'Nạp dinh dưỡng phục hồi tế bào' },
  { id: 'rs4', time: '16:45 - 18:00', activity: 'Tập bóng rổ & Nhảy dây theo lộ trình 45-60 phút', category: 'active', isRecommended: true, notes: 'Đốt 350-450 kcal mỡ thừa, nén kích thích sụn cao' },
  { id: 'rs5', time: '19:30 - 20:45', activity: 'Tập trung làm hết bài tập (Cất điện thoại ra phòng khách)', category: 'study', isRecommended: true, notes: 'Phương pháp Pomodoro 25p học - 5p nghỉ' },
  { id: 'rs6', time: '20:45 - 21:30', activity: 'Thưởng thức 45 phút Roblox / FC Mobile vui vẻ', category: 'screen', isRecommended: true, notes: 'Chơi game có kiểm soát như phần thưởng xứng đáng' },
  { id: 'rs7', time: '21:30', activity: 'Tắt hết thiết bị, ngâm chân hoặc giãn cơ lưng', category: 'sleep', isRecommended: true, notes: 'Thả lỏng thần kinh trước khi vào giấc' },
  { id: 'rs8', time: '22:00 - 06:15', activity: 'Giấc ngủ sâu 8 tiếng 15 phút', category: 'sleep', isRecommended: true, notes: 'Tối đa hóa Hormone tăng trưởng HGH bứt phá chiều cao' },
];

export const initialQuests: QuestItem[] = [
  {
    id: 'q1',
    title: '🏀 Chiến Binh Sân Rổ',
    description: 'Thực hiện 300 cái nhảy dây + 20 quả ném rổ/bật nhảy cao mỗi ngày.',
    category: 'sports',
    xp: 150,
    isCompleted: false,
    badge: '🏆 Bứt Phá Chiều Cao',
  },
  {
    id: 'q2',
    title: '📱 Cai Nghiện TikTok Đêm',
    description: 'Tắt TikTok & cất smartphone trước 21h30 tối.',
    category: 'digital',
    xp: 200,
    isCompleted: false,
    badge: '🛡️ Bậc Thầy Kỷ Luật',
  },
  {
    id: 'q3',
    title: '🌙 Giấc Ngủ Vàng 22h15',
    description: 'Lên giường đi ngủ đúng 22h15 để đón ngọn sóng Hormone HGH tăng trưởng.',
    category: 'sleep',
    xp: 180,
    isCompleted: false,
    badge: '👑 Thần Đồng Tăng Trưởng',
  },
  {
    id: 'q4',
    title: '🥗 Cắt Giảm Nước Ngọt & Ăn Rau',
    description: 'Uống đủ 2L nước lọc/ngày, không uống nước ngọt có ga khi chơi Roblox.',
    category: 'nutrition',
    xp: 120,
    isCompleted: false,
    badge: '💪 Cơ Thể Săn Chắc',
  },
];

export const twelveMonthGrowthData: TwelveMonthGrowthPoint[] = [
  { month: 0, monthLabel: 'Hiện tại (T0)', lazyHeightCm: 157.0, lazyWeightKg: 60.0, lazyBodyFatPercent: 26.5, activeHeightCm: 157.0, activeWeightKg: 60.0, activeBodyFatPercent: 26.5 },
  { month: 1, monthLabel: 'Tháng 1', lazyHeightCm: 157.1, lazyWeightKg: 60.6, lazyBodyFatPercent: 27.0, activeHeightCm: 157.5, activeWeightKg: 59.2, activeBodyFatPercent: 25.5 },
  { month: 2, monthLabel: 'Tháng 2', lazyHeightCm: 157.2, lazyWeightKg: 61.2, lazyBodyFatPercent: 27.4, activeHeightCm: 158.1, activeWeightKg: 58.4, activeBodyFatPercent: 24.5 },
  { month: 3, monthLabel: 'Tháng 3', lazyHeightCm: 157.4, lazyWeightKg: 61.8, lazyBodyFatPercent: 27.9, activeHeightCm: 158.8, activeWeightKg: 57.5, activeBodyFatPercent: 23.5 },
  { month: 4, monthLabel: 'Tháng 4', lazyHeightCm: 157.5, lazyWeightKg: 62.4, lazyBodyFatPercent: 28.3, activeHeightCm: 159.5, activeWeightKg: 56.7, activeBodyFatPercent: 22.5 },
  { month: 5, monthLabel: 'Tháng 5', lazyHeightCm: 157.7, lazyWeightKg: 63.0, lazyBodyFatPercent: 28.8, activeHeightCm: 160.1, activeWeightKg: 55.9, activeBodyFatPercent: 21.5 },
  { month: 6, monthLabel: 'Tháng 6', lazyHeightCm: 157.9, lazyWeightKg: 63.6, lazyBodyFatPercent: 29.2, activeHeightCm: 160.8, activeWeightKg: 55.2, activeBodyFatPercent: 20.5 },
  { month: 7, monthLabel: 'Tháng 7', lazyHeightCm: 158.1, lazyWeightKg: 64.2, lazyBodyFatPercent: 29.6, activeHeightCm: 161.4, activeWeightKg: 54.5, activeBodyFatPercent: 19.5 },
  { month: 8, monthLabel: 'Tháng 8', lazyHeightCm: 158.2, lazyWeightKg: 64.8, lazyBodyFatPercent: 30.0, activeHeightCm: 162.0, activeWeightKg: 53.9, activeBodyFatPercent: 18.8 },
  { month: 9, monthLabel: 'Tháng 9', lazyHeightCm: 158.4, lazyWeightKg: 65.3, lazyBodyFatPercent: 30.4, activeHeightCm: 162.6, activeWeightKg: 53.4, activeBodyFatPercent: 18.2 },
  { month: 10, monthLabel: 'Tháng 10', lazyHeightCm: 158.5, lazyWeightKg: 65.8, lazyBodyFatPercent: 30.8, activeHeightCm: 163.1, activeWeightKg: 53.0, activeBodyFatPercent: 17.7 },
  { month: 11, monthLabel: 'Tháng 11', lazyHeightCm: 158.7, lazyWeightKg: 66.2, lazyBodyFatPercent: 31.1, activeHeightCm: 163.5, activeWeightKg: 52.7, activeBodyFatPercent: 17.3 },
  { month: 12, monthLabel: 'Tháng 12', lazyHeightCm: 158.8, lazyWeightKg: 66.5, lazyBodyFatPercent: 31.5, activeHeightCm: 163.8, activeWeightKg: 52.5, activeBodyFatPercent: 17.0 },
];
