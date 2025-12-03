import { App } from '@/types/app';
import Link from 'next/link';

interface TableOfContentsProps {
  apps: App[];
}

export default function TableOfContents({ apps }: TableOfContentsProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-purple-200/50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
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
  );
}

