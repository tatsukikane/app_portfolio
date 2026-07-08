import { App, FAQ } from '@/types/app';

export function SoftwareAppJsonLd({ app }: { app: App }) {
  const os: string[] = [];
  if (app.appStoreUrl) os.push('iOS');
  if (app.googlePlayUrl) os.push('Android');

  const categoryMap: Record<string, string> = {
    ライフスタイル: 'LifestyleApplication',
    プロダクティビティ: 'ProductivityApplication',
    エンターテインメント: 'EntertainmentApplication',
    ソーシャル: 'SocialNetworkingApplication',
  };

  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.longDescription || app.description,
    applicationCategory: categoryMap[app.category] ?? 'MobileApplication',
    operatingSystem: os.join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
    ...(app.appStoreUrl && { installUrl: app.appStoreUrl }),
    ...(app.websiteUrl && { url: app.websiteUrl }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ siteUrl }: { siteUrl: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tatsuki Kaneko',
    url: siteUrl,
    description:
      '毎日の暮らしをアップデートするiOS・Androidアプリを開発しています。iko、iko for Friends、DreamBox、じおめも、BaeLab など。',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: FAQ[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
