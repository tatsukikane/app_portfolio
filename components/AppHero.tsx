import { App } from '@/types/app';
import Link from 'next/link';

interface AppHeroProps {
  app: App;
  reverse?: boolean;
}

export default function AppHero({ app, reverse = false }: AppHeroProps) {
  return (
    <section className="overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl">
      <div
        className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* 左側：コンテンツ */}
        <div className="flex-1 space-y-6 px-4 py-8 lg:px-8">
          {/* カテゴリーとアイコン */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-3xl text-5xl shadow-xl transition-transform duration-300 hover:scale-110"
              style={{ backgroundColor: `${app.color}20` }}
            >
              {app.icon}
            </div>
            <div>
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                {app.category}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                {app.name}
              </h2>
            </div>
          </div>

          {/* キャッチコピー */}
          <p
            className="text-2xl font-bold leading-relaxed lg:text-3xl"
            style={{ color: app.color }}
          >
            {app.catchphrase}
          </p>

          {/* 課題 */}
          <div className="rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-gray-700">{app.problem}</p>
          </div>

          {/* ベネフィット */}
          <p className="text-lg leading-relaxed text-gray-700">
            {app.userBenefit}
          </p>

          {/* 主な機能 */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              主な機能
            </h3>
            <ul className="space-y-3">
              {app.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: app.color }}
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            {app.appStoreUrl && (
              <Link
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: app.color }}
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.28 7.59 9.5 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Storeでダウンロード
              </Link>
            )}
            {app.googlePlayUrl && (
              <Link
                href={app.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: app.color }}
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Playでダウンロード
              </Link>
            )}
          </div>
        </div>

        {/* 右側：ビジュアル */}
        <div className="flex-1">
          <div
            className="relative overflow-hidden rounded-3xl p-12 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${app.color}25 0%, ${app.color}15 100%)`,
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-40`}
            />
            <div className="relative flex h-96 items-center justify-center">
              <div
                className="flex h-64 w-64 items-center justify-center rounded-3xl text-9xl shadow-2xl transition-transform duration-500 hover:scale-110"
                style={{ backgroundColor: `${app.color}30` }}
              >
                {app.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

