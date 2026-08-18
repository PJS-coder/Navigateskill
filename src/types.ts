export type ServiceCategory = 'web' | 'app' | 'social' | 'ads';

export interface CampaignData {
  id: string;
  name: string;
  platform: 'Google Ads' | 'Meta Ads' | 'TikTok Ads';
  budget: number;
  roas: number;
  ctr: number;
  status: 'Active' | 'Optimizing' | 'Paused';
  conversions: number;
}

export interface ReelPlatform {
  id: 'instagram' | 'facebook' | 'youtube';
  name: string;
  views: string;
  likes: string;
  shares: string;
  color: string;
}

export interface ConsultationForm {
  name: string;
  email: string;
  company: string;
  services: ServiceCategory[];
  budget: string;
  message: string;
}
