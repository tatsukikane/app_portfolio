import { App } from '@/types/app';
import Link from 'next/link';

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
      <div className="relative mb-6 flex flex-wrap gap-2">
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

      {/* リンクボタン */}
      <div className="relative flex gap-3">
        {app.appStoreUrl && (
          <Link
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
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
            className="flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
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

