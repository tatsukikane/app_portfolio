'use client';

import { App } from '@/types/app';
import Link from 'next/link';
import { useState } from 'react';

interface TableOfContentsProps {
  apps: App[];
}

export default function TableOfContents({ apps }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* モバイル: ハンバーガーメニュー */}
      <nav className="sticky top-0 z-50 border-b border-purple-200/50 bg-white/90 backdrop-blur-md shadow-sm lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-600">目次</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100"
              aria-label="メニューを開く"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* モバイル: ドロワーメニュー */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-80 overflow-y-auto bg-white shadow-2xl lg:hidden">
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">目次</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100"
                  aria-label="メニューを閉じる"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-2">
                {apps.map((app) => (
                  <Link
                    key={app.id}
                    href={`#${app.id}`}
                    onClick={handleLinkClick}
                    className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-gray-50 active:bg-gray-100"
                    style={{
                      borderLeft: `4px solid ${app.color}`,
                    }}
                  >
                    <span className="text-3xl">{app.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">
                        {app.name}
                      </div>
                      <div className="text-xs text-gray-500">{app.category}</div>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* デスクトップ: 従来の横並び表示 */}
      <nav className="hidden border-b border-purple-200/50 bg-white/90 backdrop-blur-md shadow-sm lg:sticky lg:top-0 lg:z-50 lg:block">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-gray-600">目次:</span>
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`#${app.id}`}
                className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: `${app.color}15`,
                  color: app.color,
                }}
              >
                <span className="text-lg">{app.icon}</span>
                <span>{app.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

