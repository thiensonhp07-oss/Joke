export interface PhysicalMetrics {
  name: string;
  grade: string;
  age: number;
  heightCm: number;
  weightKg: number;
  bmi: number;
  bmiCategory: string;
  idealWeightRange: [number, number];
  bodyFatEstPercent: number;
  postureRiskScore: number; // 0-100
  cardioFitnessScore: number; // 0-100
}

export interface TimeAllocation {
  activity: string;
  hours: number;
  color: string;
  category: 'screen' | 'sleep' | 'active' | 'study' | 'other';
  iconName: string;
}

export interface HeightProjectionPoint {
  age: number;
  currentPathCm: number;
  optimizedPathCm: number;
  standardPercentile50Cm: number;
}

export interface TwelveMonthGrowthPoint {
  month: number;
  monthLabel: string;
  lazyHeightCm: number;
  lazyWeightKg: number;
  lazyBodyFatPercent: number;
  activeHeightCm: number;
  activeWeightKg: number;
  activeBodyFatPercent: number;
}

export interface CalorieBurnSwap {
  gamingApp: string;
  durationMinutes: number;
  caloriesConsumed: number;
  basketballDrill: string;
  drillMinutesNeeded: number;
  jumpRopesNeeded: number;
}

export interface BasketballDrill {
  id: string;
  title: string;
  duration: string;
  intensity: 'Dễ' | 'Vừa' | 'Nâng Cao';
  description: string;
  benefit: string;
  target: string;
  reps: string;
}

export interface DailyScheduleItem {
  id: string;
  time: string;
  activity: string;
  category: 'screen' | 'active' | 'study' | 'sleep' | 'meal';
  isRecommended: boolean;
  notes: string;
}

export interface QuestItem {
  id: string;
  title: string;
  description: string;
  category: 'sports' | 'digital' | 'sleep' | 'nutrition';
  xp: number;
  isCompleted: boolean;
  badge: string;
}
