/**
 * Footer コンポーネント
 * デザイン: 禅的ミニマリズム
 * 深緑背景 + 白テキスト
 */

import { SITE_CONFIG, EXTERNAL_LINKS } from '@/lib/constants';
import { MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 md:py-16 text-white"
      style={{ backgroundColor: 'var(--green)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* フッター上部 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/20">
          {/* サイト情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-sm opacity-80">{SITE_CONFIG.catchphrase}</p>
          </div>

          {/* クイックリンク */}
          <div>
            <h4 className="font-bold mb-4">クイックリンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  サークルについて
                </a>
              </li>
              <li>
                <a
                  href="#instructor"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  インストラクター
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  スケジュール
                </a>
              </li>
              <li>
                <a
                  href="#notes"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  注意事項
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h4 className="font-bold mb-4">フォロー</h4>
            <div className="flex gap-4">
              <a
                href={EXTERNAL_LINKS.lineOfficialAccount}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="text-center text-sm opacity-70">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
