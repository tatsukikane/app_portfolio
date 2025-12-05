'use client';

import { App } from '@/types/app';
import Link from 'next/link';
import { track } from '@vercel/analytics';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-900"
      style={{
        background: `linear-gradient(135deg, ${app.color}15 0%, ${app.color}05 100%)`,
      }}
    >
      {/* グラデーション背景 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />
      
      {/* アイコンとカテゴリー */}
      <div className="relative mb-6 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${app.color}20` }}
          >
            {app.icon}
          </div>
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {app.category}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {app.name}
            </h3>
          </div>
        </div>
      </div>

      {/* 説明 */}
      <p className="relative mb-4 text-gray-600 dark:text-gray-300">
        {app.description}
      </p>

      {/* 特徴（最初の3つ） */}
      <ul className="relative mb-6 space-y-2">
        {app.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span
              className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: app.color }}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* タグ */}
      <div className="relative mb-4 flex flex-wrap gap-2">
        {app.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: `${app.color}80` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Websiteリンク */}
      {app.websiteUrl && (
        <div className="relative mb-4">
          <Link
            href={app.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('app_website_click', { app_id: app.id, app_name: app.name })}
            className="inline-flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{ 
              borderColor: app.color,
              color: app.color
            }}
          >
            <svg
              className="h-4 w-4"
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

      {/* ダウンロードボタン */}
      <div className="relative flex flex-wrap gap-3">
        {app.appStoreUrl && (
          <Link
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('app_store_click', { app_id: app.id, app_name: app.name, store: 'app_store' })}
            className="flex-1 min-w-[120px] rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: app.color }}
          >
            App Store
          </Link>
        )}
        {app.googlePlayUrl && (
          <Link
            href={app.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('app_store_click', { app_id: app.id, app_name: app.name, store: 'google_play' })}
            className="flex-1 min-w-[120px] rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: app.color }}
          >
            Google Play
          </Link>
        )}
      </div>

      {/* ホバー時の光るエフェクト */}
      <div
        className="absolute -inset-1 bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
        style={{
          background: `linear-gradient(135deg, ${app.color}, ${app.color}80)`,
        }}
      />
    </div>
  );
}

