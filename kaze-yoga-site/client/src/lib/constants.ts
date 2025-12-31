/**
 * 風ヨガ サイト定数
 * 外部リンク、テキスト、画像パスなどを一元管理
 */

export const SITE_CONFIG = {
  name: '風ヨガ',
  subtitle: '～こころとからだの癒しの時間～',
  catchphrase: '呼吸を味わう',
  description: '呼吸と優しい動きを中心に、ストレス・疲労感・痛みを手放すヨガサークル',
};

export const EXTERNAL_LINKS = {
  googleForm: 'https://forms.gle/example', // 予約フォーム（後から設定）
  lineOfficialAccount: 'https://line.me/R/ti/p/example', // 公式LINE（後から設定）
  instagram: 'https://instagram.com/example', // Instagram（後から設定）
  googleMaps: 'https://maps.google.com/?q=example', // 会場地図（後から設定）
};

export const INSTRUCTOR_INFO = {
  name: 'インストラクター名', // 後から差し替え
  qualifications: [
    '理学療法士',
    'ヨガインストラクター（全米ヨガアライアンス RYT200）',
  ],
  yogaHistory: 'ヨガ歴・指導歴は後から更新してください',
  message: '安心して参加できる雰囲気づくり、体と心の変化に寄り添う姿勢を大切にしています。',
  imageUrl: '/images/instructor-placeholder.jpg',
};

export const SCHEDULE_INFO = {
  frequency: '第1・第3金曜日',
  time: '19:00～20:00',
  capacity: '約10名（参加状況により増員の可能性あり）',
  location: '東神楽町 ふれあい交流館',
  fee: '300円',
  paymentMethod: '現金のみ',
  items: [
    'ヨガマット（貸し出し可）',
    'ブランケット・タオル（必要な人のみ）',
  ],
};

export const UPCOMING_SESSIONS = [
  {
    id: 1,
    date: '2025年1月17日（金）',
    time: '19:00～20:00',
    status: '予約受付中',
  },
  {
    id: 2,
    date: '2025年2月7日（金）',
    time: '19:00～20:00',
    status: '予約受付中',
  },
  {
    id: 3,
    date: '2025年2月21日（金）',
    time: '19:00～20:00',
    status: '予約受付中',
  },
];

export const CIRCLE_CONCEPT = {
  purpose: '普段意識しない「呼吸」や「自身の感覚」に意識を向け、優しい動きで心身を整えるヨガサークル',
  features: [
    {
      title: '呼吸中心',
      description: 'ヨガの基本である呼吸に意識を向け、リラックス効果を高めます。',
    },
    {
      title: 'ゆったりしたペース',
      description: '無理のない動きで、初心者から経験者まで安心して参加できます。',
    },
    {
      title: '痛みや不調への配慮',
      description: '体に不調がある方にも対応した、やさしいポーズを提供します。',
    },
  ],
  targetAudience: [
    '初心者OK',
    '年齢・性別不問',
    '運動が苦手な人も歓迎',
  ],
  values: [
    '呼吸',
    '感覚への気づき',
    '無理をしないこと',
  ],
};

export const IMAGES = {
  hero: '/images/hero-yoga.jpg',
  instructor: '/images/instructor-placeholder.jpg',
  breathing: '/images/breathing-abstract.jpg',
  yogaClass: '/images/yoga-class.jpg',
  nature: '/images/nature-breath.jpg',
};
