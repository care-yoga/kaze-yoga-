/**
 * AboutSection コンポーネント
 * デザイン: 禅的ミニマリズム
 * サークルの目的、特徴、対象者、大切にしていることを紹介
 */

import { CIRCLE_CONCEPT } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white"
      style={{ color: 'var(--text)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* セクションタイトル */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16"
          style={{ color: 'var(--green)' }}
        >
          サークルについて
        </h2>

        {/* 目的 */}
        <div className="mb-16 md:mb-24">
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto">
            {CIRCLE_CONCEPT.purpose}
          </p>
        </div>

        {/* 特徴 */}
        <div className="mb-16 md:mb-24">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: 'var(--green)' }}
          >
            ヨガの特徴
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {CIRCLE_CONCEPT.features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: 'var(--green)' }}
                >
                  {feature.title}
                </h4>
                <p className="text-base leading-relaxed opacity-80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 対象者 */}
        <div className="mb-16 md:mb-24">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: 'var(--green)' }}
          >
            対象者
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {CIRCLE_CONCEPT.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="px-6 py-3 rounded-full border-2"
                style={{
                  borderColor: 'var(--green)',
                  color: 'var(--green)',
                }}
              >
                {audience}
              </div>
            ))}
          </div>
        </div>

        {/* 大切にしていること */}
        <div>
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: 'var(--green)' }}
          >
            大切にしていること
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {CIRCLE_CONCEPT.values.map((value, idx) => (
              <div
                key={idx}
                className="w-40 h-40 rounded-full border-2 flex items-center justify-center text-center p-4"
                style={{
                  borderColor: 'var(--green)',
                  color: 'var(--green)',
                }}
              >
                <span className="font-bold text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
