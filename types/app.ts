export interface FAQ {
  question: string;
  answer: string;
}

export interface App {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  longDescription: string;
  catchphrase: string;
  userBenefit: string;
  problem: string;
  features: string[];
  faqs?: FAQ[];
  category: string;
  color: string;
  gradient: string;
  icon: string;
  screenshots?: string[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  websiteUrl?: string;
  tags: string[];
}
