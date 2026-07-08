'use client';

import Image from 'next/image';
import { App } from '@/types/app';
import Link from 'next/link';
import { useState } from 'react';

interface TableOfContentsProps {
  apps: App[];
}

export default function TableOfContents({ apps }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* モバイル: スティッキーヘッダー */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-bold text-gray-900">
            ✦ Apps
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
          >
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* モバイル: ドロワーメニュー */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col overflow-y-auto bg-white shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <span className="text-base font-bold text-gray-900">✦ Apps</span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
                aria-label="メニューを閉じる"
              >
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 px-3 py-4">
              {apps.map((app) => (
                <Link
                  key={app.id}
                  href={`#${app.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-gray-50"
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl"
                    style={{ backgroundColor: `${app.color}18` }}
                  >
                    {app.icon.startsWith('/') ? (
                      <Image src={app.icon} alt={app.name} width={36} height={36} className="object-contain" />
                    ) : (
                      <span className="text-xl">{app.icon}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{app.name}</p>
                    <p className="text-xs text-gray-400">{app.category}</p>
                  </div>
                </Link>
              ))}
              <div className="mx-3 my-2 border-t border-gray-100" />
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-purple-50">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">お問い合わせ</p>
                  <p className="text-xs text-gray-400">Contact</p>
                </div>
              </Link>
            </div>
          </nav>
        </>
      )}

      {/* デスクトップ: ヘッダーナビゲーション */}
      <header className="sticky top-0 z-50 hidden border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3">
          {/* ロゴ */}
          <Link href="/" className="flex-shrink-0 text-sm font-bold text-gray-900">
            ✦ Apps
          </Link>

          {/* アプリリンク */}
          <nav className="flex flex-1 flex-wrap items-center gap-1">
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`#${app.id}`}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: `${app.color}12`,
                  color: app.color,
                }}
              >
                {app.icon.startsWith('/') ? (
                  <Image src={app.icon} alt={app.name} width={16} height={16} className="object-contain" />
                ) : (
                  <span className="text-sm">{app.icon}</span>
                )}
                <span>{app.name}</span>
              </Link>
            ))}
          </nav>

          {/* お問い合わせ */}
          <Link
            href="#contact"
            className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: '#7c3aed' }}
          >
            お問い合わせ
          </Link>
        </div>
      </header>
    </>
  );
}
