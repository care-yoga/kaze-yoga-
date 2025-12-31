/**
 * InstructorSection コンポーネント
 * デザイン: 禅的ミニマリズム
 * インストラクターのプロフィール、資格、ヨガ歴、想いを紹介
 */

import { INSTRUCTOR_INFO } from '@/lib/constants';

export default function InstructorSection() {
  return (
    <section
      id="instructor"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--beige)', color: 'var(--text)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* セクションタイトル */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20"
          style={{ color: 'var(--green)' }}
        >
          インストラクター紹介
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 画像 */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={INSTRUCTOR_INFO.imageUrl}
                alt={INSTRUCTOR_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* プロフィール */}
          <div>
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--green)' }}
            >
              {INSTRUCTOR_INFO.name}
            </h3>

            {/* 資格 */}
            <div className="mb-8">
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: 'var(--green)' }}
              >
                資格
              </h4>
              <ul className="space-y-2">
                {INSTRUCTOR_INFO.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="text-xl mt-1"
                      style={{ color: 'var(--green)' }}
                    >
                      ✓
                    </span>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ヨガ歴 */}
            <div className="mb-8">
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: 'var(--green)' }}
              >
                ヨガ歴・指導歴
              </h4>
              <p className="opacity-80">{INSTRUCTOR_INFO.yogaHistory}</p>
            </div>

            {/* 想い */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: 'var(--green)' }}
              >
                想い
              </h4>
              <p className="opacity-80 leading-relaxed">
                {INSTRUCTOR_INFO.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
