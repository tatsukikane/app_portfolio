'use client';

import Image from 'next/image';
import { App } from '@/types/app';
import Link from 'next/link';
import { useState } from 'react';
import { track } from '@vercel/analytics';
import { SoftwareAppJsonLd } from '@/components/JsonLd';

interface AppHeroProps {
  app: App;
  reverse?: boolean;
}

export default function AppHero({ app, reverse = false }: AppHeroProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const displayedFeatures = showAllFeatures ? app.features : app.features.slice(0, 3);

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white/70 shadow-lg backdrop-blur-sm lg:rounded-3xl">
      <SoftwareAppJsonLd app={app} />
      <div
        className={`flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-0 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* コンテンツ */}
        <div className="flex flex-1 flex-col justify-center space-y-5 px-5 py-6 lg:space-y-6 lg:px-10 lg:py-10">
          {/* アイコン + カテゴリー + アプリ名 */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-md lg:h-20 lg:w-20 lg:rounded-3xl"
              style={{ backgroundColor: `${app.color}18` }}
            >
              {app.icon.startsWith('/') ? (
                <Image
                  src={app.icon}
                  alt={`${app.name}のアイコン`}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-3xl lg:text-5xl">{app.icon}</span>
              )}
            </div>
            <div>
              <span className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white" style={{ backgroundColor: app.color }}>
                {app.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
                {app.name}
              </h2>
            </div>
          </div>

          {/* キャッチコピー */}
          <p
            className="text-xl font-bold leading-snug lg:text-2xl xl:text-3xl"
            style={{ color: app.color }}
          >
            {app.catchphrase}
          </p>

          {/* 課題 */}
          <blockquote
            className="rounded-xl border-l-4 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-600 lg:rounded-2xl lg:px-5 lg:py-4 lg:text-base"
            style={{ borderColor: `${app.color}60` }}
          >
            {app.problem}
          </blockquote>

          {/* ベネフィット */}
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700 lg:text-base">
            {app.userBenefit}
          </p>

          {/* 主な機能 */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400 lg:text-xs">
              主な機能
            </h3>
            <ul className="space-y-2 lg:space-y-2.5">
              {displayedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 lg:h-5 lg:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: app.color }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 lg:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            {app.features.length > 3 && (
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="mt-3 text-xs font-semibold transition-colors lg:mt-4 lg:text-sm"
                style={{ color: app.color }}
              >
                {showAllFeatures ? '▲ 折りたたむ' : `▼ さらに ${app.features.length - 3} 件を見る`}
              </button>
            )}
          </div>

          {/* CTAボタン群 */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row lg:gap-3">
            {app.appStoreUrl && (
              <Link
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('app_store_click', { app_id: app.id, app_name: app.name, store: 'app_store' })}
                className="group flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg lg:rounded-xl"
                style={{ backgroundColor: app.color }}
                aria-label={`${app.name}をApp Storeでダウンロード`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
                onClick={() => track('app_store_click', { app_id: app.id, app_name: app.name, store: 'google_play' })}
                className="group flex min-h-[44px] items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-bold shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md lg:rounded-xl"
                style={{ borderColor: app.color, color: app.color }}
                aria-label={`${app.name}をGoogle Playでダウンロード`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </Link>
            )}
          </div>

          {/* Websiteリンク */}
          {app.websiteUrl && (
            <Link
              href={app.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('app_website_click', { app_id: app.id, app_name: app.name })}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: app.color }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              詳細ページを見る
            </Link>
          )}
        </div>

        {/* iPhoneモックアップ（プレースホルダー） */}
        <div
          className="hidden flex-shrink-0 items-center justify-center p-8 lg:flex xl:p-12"
          style={{ background: `linear-gradient(145deg, ${app.color}10 0%, ${app.color}05 100%)` }}
        >
          <IPhoneMockup app={app} />
        </div>
      </div>
    </section>
  );
}

function IPhoneMockup({ app }: { app: App }) {
  const hasScreenshot = app.screenshots && app.screenshots.length > 0;

  return (
    <div className="relative" style={{ width: '180px' }}>
      {/* iPhone フレーム */}
      <div
        className="relative overflow-hidden rounded-[1.4rem] border-[4px] border-gray-800 bg-gray-900 shadow-2xl"
        style={{ aspectRatio: '9 / 19.5' }}
      >
        {/* スクリーン */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b ${app.gradient}`}
        >
          {hasScreenshot ? (
            <Image
              src={app.screenshots![0]}
              alt={`${app.name}のスクリーンショット`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 px-4 text-center">
              <div
                className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl shadow-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
              >
                {app.icon.startsWith('/') ? (
                  <Image
                    src={app.icon}
                    alt={`${app.name}アイコン`}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-3xl">{app.icon}</span>
                )}
              </div>
              <p className="text-xs font-medium text-white/60">
                スクリーンショット
                <br />
                準備中
              </p>
            </div>
          )}
        </div>

        {/* ホームインジケーター */}
        <div className="absolute bottom-2 left-1/2 z-10 h-1 w-14 -translate-x-1/2 rounded-full bg-white/30" />
      </div>

      {/* 影 */}
      <div
        className="absolute -bottom-3 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full blur-xl"
        style={{ backgroundColor: `${app.color}40` }}
      />
    </div>
  );
}
