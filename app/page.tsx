import { apps } from '@/data/apps';
import AppHero from '@/components/AppHero';
import TableOfContents from '@/components/TableOfContents';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 via-orange-50 to-cyan-50">
      {/* メインヒーローセクション */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 via-orange-100 to-cyan-100">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 via-pink-200/50 via-orange-200/50 to-cyan-200/50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:py-32">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              毎日をアップデートする
            </span>
            <br />
            <span className="text-gray-800">小さな魔法たち🪄</span>
          </h1>
        </div>
      </div>

      {/* 目次 */}
      <TableOfContents apps={apps} />

      {/* 各アプリの詳細セクション */}
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        {apps.map((app, index) => (
          <div key={app.id} id={app.id} className="mb-8 scroll-mt-44 sm:scroll-mt-32 md:scroll-mt-28 lg:scroll-mt-24">
            <AppHero app={app} reverse={index % 2 === 1} />
          </div>
        ))}
      </div>

      {/* フッター */}
      <footer className="border-t border-purple-200 bg-white/90 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-600 sm:px-8">
          <p>© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
