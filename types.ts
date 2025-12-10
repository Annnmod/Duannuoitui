export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface AnStats {
  happiness: number;
  hunger: number;
  energy: number;
}

export enum AnMood {
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  SLEEPY = 'SLEEPY',
  NEUTRAL = 'NEUTRAL',
  EATING = 'EATING',
}

export interface ChatState {
  history: Message[];
  isLoading: boolean;
  error: string | null;
}
