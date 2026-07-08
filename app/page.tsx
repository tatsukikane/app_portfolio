import Image from 'next/image';
import { apps } from '@/data/apps';
import AppHero from '@/components/AppHero';
import TableOfContents from '@/components/TableOfContents';
import ContactForm from '@/components/ContactForm';
import { OrganizationJsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <div className="min-h-screen">
      <OrganizationJsonLd siteUrl="https://app-tatsukikane.vercel.app" />

      {/* ナビゲーション */}
      <TableOfContents apps={apps} />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6 lg:py-32">
        {/* 背景グラデーション */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_#fce7f3_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,_#e0f2fe_0%,_transparent_50%)]" />
        </div>

        {/* フローティングアイコン群 */}
        <div className="relative mx-auto mb-10 flex max-w-xs items-end justify-center gap-3 sm:max-w-sm sm:gap-4">
          {apps.map((app, i) => (
            <div
              key={app.id}
              className="animate-float overflow-hidden rounded-2xl shadow-lg"
              style={{
                animationDelay: `${i * 0.25}s`,
                width: i === 2 ? '64px' : '48px',
                height: i === 2 ? '64px' : '48px',
                backgroundColor: `${app.color}20`,
              }}
            >
              {app.icon.startsWith('/') ? (
                <Image
                  src={app.icon}
                  alt={`${app.name}のアイコン`}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-2xl">
                  {app.icon}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* メインコピー */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
          毎日をアップデートする
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            小さな魔法たち
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base text-gray-500 sm:text-lg lg:text-xl">
          日常の「あったらいいな」を形にした、
          <br className="hidden sm:block" />
          iOS・Androidアプリ {apps.length} 選。
        </p>

        {/* スクロールインジケーター */}
        <a
          href={`#${apps[0].id}`}
          className="inline-flex flex-col items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-600"
        >
          <span>アプリを見る</span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </section>

      {/* 各アプリの詳細セクション */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:pb-20">
        {apps.map((app, index) => (
          <div
            key={app.id}
            id={app.id}
            className="scroll-reveal mb-8 scroll-mt-20 sm:scroll-mt-20 lg:mb-16 lg:scroll-mt-20"
          >
            <AppHero app={app} reverse={index % 2 === 1} />
          </div>
        ))}
      </div>

      {/* 問い合わせフォーム */}
      <ContactForm />

      {/* フッター */}
      <footer className="border-t border-gray-100 bg-white/80 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium text-gray-700">
            毎日をアップデートする小さな魔法たち
          </p>
          <p className="mt-1 text-xs text-gray-400">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
