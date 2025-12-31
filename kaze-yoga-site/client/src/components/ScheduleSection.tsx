/**
 * ScheduleSection コンポーネント
 * デザイン: 禅的ミニマリズム
 * 開催頻度、時間、定員、会場、参加費、持ち物を紹介
 */

import { SCHEDULE_INFO, UPCOMING_SESSIONS, EXTERNAL_LINKS } from '@/lib/constants';
import { MapPin, Clock, Users, DollarSign } from 'lucide-react';

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="py-20 md:py-32 bg-white"
      style={{ color: 'var(--text)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* セクションタイトル */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20"
          style={{ color: 'var(--green)' }}
        >
          スケジュール・開催案内
        </h2>

        {/* 開催情報 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 開催頻度 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--beige)' }}>
            <div className="flex items-start gap-4">
              <Clock size={32} style={{ color: 'var(--green)' }} className="flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--green)' }}>
                  開催頻度
                </h3>
                <p>{SCHEDULE_INFO.frequency}</p>
              </div>
            </div>
          </div>

          {/* 開催時間 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--beige)' }}>
            <div className="flex items-start gap-4">
              <Clock size={32} style={{ color: 'var(--green)' }} className="flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--green)' }}>
                  開催時間
                </h3>
                <p>{SCHEDULE_INFO.time}</p>
              </div>
            </div>
          </div>

          {/* 定員 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--beige)' }}>
            <div className="flex items-start gap-4">
              <Users size={32} style={{ color: 'var(--green)' }} className="flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--green)' }}>
                  定員
                </h3>
                <p>{SCHEDULE_INFO.capacity}</p>
              </div>
            </div>
          </div>

          {/* 会場 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--beige)' }}>
            <div className="flex items-start gap-4">
              <MapPin size={32} style={{ color: 'var(--green)' }} className="flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--green)' }}>
                  開催場所
                </h3>
                <p>{SCHEDULE_INFO.location}</p>
                <a
                  href={EXTERNAL_LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium mt-2 inline-block hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--green)' }}
                >
                  Googleマップで見る →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 参加費・持ち物 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 参加費 */}
          <div>
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: 'var(--green)' }}
            >
              参加費
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b" style={{ borderColor: 'var(--beige)' }}>
                <span>運営協力費</span>
                <span className="font-bold text-lg">{SCHEDULE_INFO.fee}</span>
              </div>
              <div>
                <p className="text-sm opacity-70">
                  <span className="font-bold">支払い方法：</span>
                  {SCHEDULE_INFO.paymentMethod}
                </p>
              </div>
            </div>
          </div>

          {/* 持ち物 */}
          <div>
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: 'var(--green)' }}
            >
              持ち物
            </h3>
            <ul className="space-y-3">
              {SCHEDULE_INFO.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="text-lg mt-1"
                    style={{ color: 'var(--green)' }}
                  >
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 今後の開催予定 */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: 'var(--green)' }}
          >
            今後の開催予定
          </h3>
          <div className="space-y-4">
            {UPCOMING_SESSIONS.map((session) => (
              <div
                key={session.id}
                className="p-6 rounded-lg flex justify-between items-center"
                style={{ backgroundColor: 'var(--beige)' }}
              >
                <div>
                  <p className="font-bold mb-2">{session.date}</p>
                  <p className="text-sm opacity-70">{session.time}</p>
                </div>
                <span
                  className="px-4 py-2 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: 'var(--green)',
                    color: '#fff',
                  }}
                >
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 予約ボタン */}
        <div className="text-center">
          <a
            href={EXTERNAL_LINKS.googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'var(--green)' }}
          >
            予約はこちら（Googleフォーム）
          </a>
        </div>
      </div>
    </section>
  );
}
