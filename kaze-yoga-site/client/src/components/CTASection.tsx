/**
 * CTASection コンポーネント
 * デザイン: 禅的ミニマリズム
 * 予約、LINE登録、Instagramへのリンク
 */

import { EXTERNAL_LINKS } from '@/lib/constants';
import { MessageCircle, Instagram, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--beige)', color: 'var(--text)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* セクションタイトル */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20"
          style={{ color: 'var(--green)' }}
        >
          参加のご案内
        </h2>

        {/* CTA ボタン */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 予約ボタン */}
          <a
            href={EXTERNAL_LINKS.googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <Calendar
              size={48}
              style={{ color: 'var(--green)' }}
              className="mb-4"
            />
            <h3
              className="text-xl font-bold mb-2 text-center"
              style={{ color: 'var(--green)' }}
            >
              予約する
            </h3>
            <p className="text-sm text-center opacity-70">
              Googleフォームで
              <br />
              簡単に予約できます
            </p>
          </a>

          {/* LINE登録ボタン */}
          <a
            href={EXTERNAL_LINKS.lineOfficialAccount}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle
              size={48}
              style={{ color: 'var(--green)' }}
              className="mb-4"
            />
            <h3
              className="text-xl font-bold mb-2 text-center"
              style={{ color: 'var(--green)' }}
            >
              公式LINEに登録
            </h3>
            <p className="text-sm text-center opacity-70">
              最新情報や
              <br />
              お問い合わせはこちら
            </p>
          </a>

          {/* Instagram ボタン */}
          <a
            href={EXTERNAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <Instagram
              size={48}
              style={{ color: 'var(--green)' }}
              className="mb-4"
            />
            <h3
              className="text-xl font-bold mb-2 text-center"
              style={{ color: 'var(--green)' }}
            >
              Instagramを見る
            </h3>
            <p className="text-sm text-center opacity-70">
              活動の雰囲気を
              <br />
              チェック
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
