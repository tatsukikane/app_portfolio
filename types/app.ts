export interface App {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  longDescription: string;
  catchphrase: string; // キャッチコピー
  userBenefit: string; // ユーザーベネフィット
  problem: string; // 解決する課題
  features: string[];
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

