'use client';

import { App } from '@/types/app';
import Link from 'next/link';
import { useState } from 'react';
import { track } from '@vercel/analytics';

interface AppHeroProps {
  app: App;
  reverse?: boolean;
}

export default function AppHero({ app, reverse = false }: AppHeroProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const displayedFeatures = showAllFeatures ? app.features : app.features.slice(0, 3);

  return (
    <section className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl lg:rounded-3xl">
      <div
        className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* 左側：コンテンツ */}
        <div className="flex-1 space-y-4 px-4 py-4 lg:space-y-6 lg:px-8 lg:py-8">
          {/* カテゴリーとアイコン */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-lg transition-transform duration-300 hover:scale-110 lg:h-20 lg:w-20 lg:rounded-3xl lg:text-5xl overflow-hidden"
              style={{ backgroundColor: `${app.color}20` }}
            >
              {app.icon.startsWith('/') ? (
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                app.icon
              )}
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-600 lg:mb-2 lg:text-sm">
                {app.category}
              </div>
              <h2 className="text-xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
                {app.name}
              </h2>
            </div>
          </div>

          {/* キャッチコピー */}
          <p
            className="text-lg font-bold leading-relaxed lg:text-2xl xl:text-3xl"
            style={{ color: app.color }}
          >
            {app.catchphrase}
          </p>

          {/* 課題 */}
          <div className="rounded-xl bg-white/95 p-4 shadow-md backdrop-blur-sm lg:rounded-2xl lg:p-6">
            <p className="text-sm leading-relaxed text-gray-700 lg:text-base">
              {app.problem}
            </p>
          </div>

          {/* ベネフィット */}
          <p className="text-sm leading-relaxed text-gray-700 lg:text-lg">
            {app.userBenefit}
          </p>

          {/* 主な機能 */}
          <div>
            <h3 className="mb-3 text-base font-bold text-gray-900 lg:mb-4 lg:text-xl">
              主な機能
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {displayedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 lg:gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full lg:mt-2 lg:h-2 lg:w-2"
                    style={{ backgroundColor: app.color }}
                  />
                  <span className="text-sm text-gray-700 lg:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            {app.features.length > 3 && (
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="mt-3 text-sm font-semibold transition-colors lg:mt-4"
                style={{ color: app.color }}
              >
                {showAllFeatures ? '▲ 折りたたむ' : '▼ もっと見る'}
              </button>
            )}
          </div>

          {/* Websiteリンク */}
          {app.websiteUrl && (
            <div className="pt-2 lg:pt-4">
              <Link
                href={app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('app_website_click', { app_id: app.id, app_name: app.name })}
                className="inline-flex items-center gap-2 rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md lg:rounded-2xl lg:px-6 lg:py-3 lg:text-base"
                style={{ 
                  borderColor: app.color,
                  color: app.color
                }}
              >
                <svg
                  className="h-4 w-4 lg:h-5 lg:w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Website
              </Link>
            </div>
          )}

          {/* CTAボタン */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:gap-4 lg:pt-4">
            {app.appStoreUrl && (
              <Link
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('app_store_click', { app_id: app.id, app_name: app.name, store: 'app_store' })}
                className="group flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:rounded-2xl lg:px-8 lg:py-4 lg:text-lg"
                style={{ backgroundColor: app.color }}
              >
                <svg
                  className="h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.28 7.59 9.5 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="hidden sm:inline">App Storeでダウンロード</span>
                <span className="sm:hidden">App Store</span>
              </Link>
            )}
            {app.googlePlayUrl && (
              <Link
                href={app.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('app_store_click', { app_id: app.id, app_name: app.name, store: 'google_play' })}
                className="group flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:rounded-2xl lg:px-8 lg:py-4 lg:text-lg"
                style={{ backgroundColor: app.color }}
              >
                <svg
                  className="h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="hidden sm:inline">Google Playでダウンロード</span>
                <span className="sm:hidden">Google Play</span>
              </Link>
            )}
          </div>
        </div>

        {/* 右側：ビジュアル */}
        <div className="hidden flex-1 lg:block">
          <div
            className="relative overflow-hidden rounded-3xl p-8 shadow-2xl xl:p-12"
            style={{
              background: `linear-gradient(135deg, ${app.color}25 0%, ${app.color}15 100%)`,
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-40`}
            />
            <div className="relative flex h-64 items-center justify-center xl:h-96">
              <div
                className="flex h-48 w-48 items-center justify-center rounded-3xl text-7xl shadow-2xl transition-transform duration-500 hover:scale-110 xl:h-64 xl:w-64 xl:text-9xl overflow-hidden"
                style={{ backgroundColor: `${app.color}30` }}
              >
                {app.icon.startsWith('/') ? (
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  app.icon
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

