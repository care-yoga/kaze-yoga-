/**
 * HeroSection コンポーネント
 * デザイン: 禅的ミニマリズム × 有機的曲線
 * 90vh の大きな画像 + 波のアニメーション + テキストオーバーレイ
 * 背景画像は後から差し替え可能
 */

import { useEffect } from 'react';
import WavesDivider from './WavesDivider';
import { SITE_CONFIG, IMAGES, EXTERNAL_LINKS } from '@/lib/constants';

export default function HeroSection() {
  // スクロール時に背景色を変更
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center bg-white">
      {/* 背景画像 */}
      <img
        src={IMAGES.hero}
        alt="Hero background"
        className="absolute w-full h-full object-cover -z-10 brightness-90"
        onError={(e) => {
          (e.target as HTMLImageElement).style.backgroundColor = '#ccc';
        }}
      />

      {/* ヒーロー オーバーレイ */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 bg-white/85 backdrop-blur-sm rounded-t-full shadow-lg p-8 md:p-12 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--green)' }}>
          {SITE_CONFIG.name}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text)' }}>
          {SITE_CONFIG.catchphrase}
        </p>
      </div>

      {/* 波のアニメーション */}
      <WavesDivider />
    </div>
  );
}
