/**
 * NotesSection コンポーネント
 * デザイン: 禅的ミニマリズム
 * 注意事項、利用規約、免責事項、プライバシーポリシー
 */

export default function NotesSection() {
  return (
    <section
      id="notes"
      className="py-20 md:py-32 bg-white"
      style={{ color: 'var(--text)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* セクションタイトル */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20"
          style={{ color: 'var(--green)' }}
        >
          注意事項・規約
        </h2>

        {/* 注意事項 */}
        <div className="mb-12">
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: 'var(--green)' }}
          >
            注意事項
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span
                className="text-2xl flex-shrink-0"
                style={{ color: 'var(--green)' }}
              >
                •
              </span>
              <span>
                <strong>無理をしない：</strong>
                自分のペースで無理のない範囲で参加してください。体に違和感を感じたら、すぐにインストラクターにお知らせください。
              </span>
            </li>
            <li className="flex gap-4">
              <span
                className="text-2xl flex-shrink-0"
                style={{ color: 'var(--green)' }}
              >
                •
              </span>
              <span>
                <strong>体調不良時は参加を控える：</strong>
                発熱、強い痛み、その他体調に不安がある場合は、参加をお控えください。
              </span>
            </li>
            <li className="flex gap-4">
              <span
                className="text-2xl flex-shrink-0"
                style={{ color: 'var(--green)' }}
              >
                •
              </span>
              <span>
                <strong>自己責任での参加：</strong>
                ヨガの実施に伴う怪我や体調の変化については、自己責任でお願いします。
              </span>
            </li>
          </ul>
        </div>

        {/* 利用規約 */}
        <div className="mb-12">
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: 'var(--green)' }}
          >
            利用規約
          </h3>
          <p className="opacity-80 leading-relaxed mb-4">
            本ウェブサイトの利用にあたっては、以下の規約をご同意いただくものとします。
          </p>
          <ul className="space-y-3 opacity-80">
            <li className="flex gap-3">
              <span>1.</span>
              <span>本サイトの情報は予告なく変更される場合があります。</span>
            </li>
            <li className="flex gap-3">
              <span>2.</span>
              <span>本サイトの利用により生じたいかなる損害についても、当サークルは責任を負いません。</span>
            </li>
            <li className="flex gap-3">
              <span>3.</span>
              <span>本サイトの内容の無断転載、複製は禁止します。</span>
            </li>
          </ul>
        </div>

        {/* 免責事項 */}
        <div className="mb-12">
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: 'var(--green)' }}
          >
            免責事項
          </h3>
          <p className="opacity-80 leading-relaxed">
            当サークルで提供するヨガは、医学的治療ではありません。医師の診察が必要な症状がある場合は、医療機関にご相談ください。ヨガの実施に伴う怪我や体調の変化については、当サークルは一切の責任を負いません。
          </p>
        </div>

        {/* プライバシーポリシー */}
        <div>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: 'var(--green)' }}
          >
            プライバシーポリシー
          </h3>
          <div className="space-y-4 opacity-80">
            <div>
              <h4 className="font-bold mb-2">個人情報の取り扱い</h4>
              <p>
                Googleフォームおよび公式LINEを通じて取得した個人情報は、予約確認、連絡、改善目的のみに使用します。第三者への提供は行いません。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Googleフォーム・LINE利用について</h4>
              <p>
                Googleフォームおよび公式LINEは、それぞれのプライバシーポリシーに従います。詳細は各サービスのプライバシーポリシーをご確認ください。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">情報セキュリティ</h4>
              <p>
                お客様の個人情報を安全に管理するため、適切なセキュリティ対策を講じています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
