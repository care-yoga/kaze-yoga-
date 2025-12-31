/**
 * WavesDivider コンポーネント
 * セクション間の境界線として、複数層の波が動くアニメーション
 * デザイン: 禅的ミニマリズム × 有機的曲線
 * 4層の波（透明度が異なる）がスクロール時に色が白→ベージュに変化
 */

export default function WavesDivider() {
  return (
    <div className="waves-container">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" />
          <use xlinkHref="#gentle-wave" x="48" y="3" />
          <use xlinkHref="#gentle-wave" x="48" y="5" />
          <use xlinkHref="#gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </div>
  );
}
