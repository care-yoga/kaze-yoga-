/**
 * Navigation コンポーネント
 * デザイン: シンプルで落ち着きのあるナビゲーション
 * 深緑のアクセントカラーを使用
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'トップ', href: '#top' },
  { label: 'サークルについて', href: '#about' },
  { label: 'インストラクター', href: '#instructor' },
  { label: 'スケジュール', href: '#schedule' },
  { label: '注意事項', href: '#notes' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b"
      style={{ borderColor: 'var(--beige)' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <a href="#top" className="flex items-center gap-2">
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--green)' }}
          >
            {SITE_CONFIG.name}
          </div>
        </a>

        {/* デスクトップメニュー */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'var(--green)' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: 'var(--beige)', backgroundColor: 'var(--beige)' }}
        >
          <div className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: 'var(--text)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
