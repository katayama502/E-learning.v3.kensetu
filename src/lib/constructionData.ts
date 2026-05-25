export interface Lesson {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  description: string;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  level: '初級' | '中級' | '上級';
  totalLessons: number;
  totalDuration: string;
  icon: string;
  lessons: Lesson[];
  examInfo: string;
  prerequisites: string;
}

export const COURSES: Course[] = [
  // ─────────────────────────────────────────────
  // 1. フォークリフト運転技能講習
  // ─────────────────────────────────────────────
  {
    id: 'forklift',
    title: 'フォークリフト運転技能講習',
    category: '荷役機械',
    categoryColor: 'bg-orange-500',
    description: 'フォークリフトの構造、操作方法、荷役作業の安全に関する法令を学習します。最大荷重1トン以上のフォークリフト運転に必要な資格です。',
    level: '初級',
    totalLessons: 8,
    totalDuration: '約35時間',
    icon: '🏗️',
    examInfo: '学科試験＋実技試験｜合格基準：各科目40点以上・合計60点以上',
    prerequisites: '特になし（満18歳以上）',
    lessons: [
      {
        id: 'forklift-01',
        title: 'フォークリフト運転技能講習【入門・概要】',
        youtubeId: 'hWzbHxhYjig',
        duration: '約10分',
        description: '資格の概要・取得までの流れ・講習内容の全体像を解説。これから受講する方向けの入門動画。',
        order: 1,
      },
      {
        id: 'forklift-02',
        title: 'フォークリフト技能講習〜学科編〜',
        youtubeId: 'j7lSq71tlwo',
        duration: '約20分',
        description: 'フォークリフトの種類・構造・各部名称を学科の視点からわかりやすく解説。',
        order: 2,
      },
      {
        id: 'forklift-03',
        title: 'フォークリフト技能講習【第2回 学科試験対策】',
        youtubeId: '1FgxBnwo87M',
        duration: '約15分',
        description: '荷役装置・マスト・フォークの構造と操作に関する学科試験のポイントを解説。',
        order: 3,
      },
      {
        id: 'forklift-04',
        title: 'フォークリフト運転技能講習【第8回 実技編】',
        youtubeId: '-w7zFHonHu4',
        duration: '約12分',
        description: '走行・旋回・後退の基本操作を実技映像で確認。試験前の最終チェックに最適。',
        order: 4,
      },
      {
        id: 'forklift-05',
        title: '安全衛生教育教材／フォークリフト（日本語）',
        youtubeId: 'BMKGEyiScp4',
        duration: '約25分',
        description: 'パレット積み下ろし作業の正しい手順・安全確認ポイントを映像で学ぶ公式教材。',
        order: 5,
      },
      {
        id: 'forklift-06',
        title: 'フォークリフト運転技能講習【第6回 NG集】',
        youtubeId: '0RXCM2xi3pE',
        duration: '約10分',
        description: '日常点検でよくある間違いと正しい点検方法。NG例から正しい手順を学ぶ。',
        order: 6,
      },
      {
        id: 'forklift-07',
        title: '死亡事故を防ぐ「絶対遵守事項」と「法令罰則」を徹底解説',
        youtubeId: 'EB9vr7YuOZw',
        duration: '約20分',
        description: '労働安全衛生法・フォークリフト作業に関わる法令・罰則規定をわかりやすく解説。',
        order: 7,
      },
      {
        id: 'forklift-08',
        title: 'フォークリフト技能講習【第6回 合格のコツ・まとめ】',
        youtubeId: 'x0WFsM6eGF4',
        duration: '約15分',
        description: '災害事例と試験合格のコツ・総まとめ。学科・実技両方のポイントを最終確認。',
        order: 8,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. 玉掛け技能講習
  // ─────────────────────────────────────────────
  {
    id: 'tamakake',
    title: '玉掛け技能講習',
    category: 'クレーン関係',
    categoryColor: 'bg-blue-600',
    description: 'クレーン等の玉掛け作業（吊り荷のワイヤーロープかけ外し）に必要な技能講習です。1トン以上の荷を扱うすべての現場で必要とされます。',
    level: '初級',
    totalLessons: 9,
    totalDuration: '約19時間',
    icon: '⚙️',
    examInfo: '学科試験＋実技試験｜合格基準：学科60点以上・実技60点以上',
    prerequisites: '特になし（満18歳以上）',
    lessons: [
      {
        id: 'tamakake-01',
        title: '玉掛け技能講習を見てみよう【全体像】',
        youtubeId: 'UFkpsR60cLE',
        duration: '約15分',
        description: '玉掛け技能講習の全体像・クレーンの種類と構造の基礎知識を解説。',
        order: 1,
      },
      {
        id: 'tamakake-02',
        title: '玉掛けワイヤロープとは？主な種類と加工について',
        youtubeId: 'MEZ9iqeSsug',
        duration: '約12分',
        description: 'ワイヤーロープの構造・ストランド・よりの種類と各種加工方法を詳しく解説。',
        order: 2,
      },
      {
        id: 'tamakake-03',
        title: '玉掛けワイヤーの選定方法を分かりやすく解説',
        youtubeId: 'z6RljKFED2w',
        duration: '約15分',
        description: 'チェーンスリング・ベルトスリングの種類と正しい選定・使用方法。',
        order: 3,
      },
      {
        id: 'tamakake-04',
        title: '玉掛けワイヤロープの制限使用荷重（安全荷重）',
        youtubeId: 'hyubQmX-prY',
        duration: '約10分',
        description: '荷の質量計算・安全荷重の求め方・使用角度と荷重の関係を図解で解説。',
        order: 4,
      },
      {
        id: 'tamakake-05',
        title: '【玉掛け学科実技試験】この動画で不安を解消！',
        youtubeId: 'dQbOU0SdK2A',
        duration: '約20分',
        description: '目掛け・あや掛け・絞り掛けの正しい掛け方と試験本番の流れを解説。',
        order: 5,
      },
      {
        id: 'tamakake-06',
        title: '玉掛け技能講習でこんな問題が出る！',
        youtubeId: '2SW21WHZHu4',
        duration: '約18分',
        description: '多点吊り・2点吊り・4点吊りの手順と学科試験頻出問題を解説。',
        order: 6,
      },
      {
        id: 'tamakake-07',
        title: 'たった18分でクレーン玉掛けの手合図が覚えれます！',
        youtubeId: 'W9-D6PKdAr0',
        duration: '18分',
        description: 'クレーンオペレーターへの標準手合図を全種類・わかりやすく実演解説。',
        order: 7,
      },
      {
        id: 'tamakake-08',
        title: '玉掛け技能講習の内容【安全作業のポイント】',
        youtubeId: 'uidtlSZzt8A',
        duration: '約12分',
        description: '吊り荷下への立入禁止・地切り確認・安全作業の全体的なポイントを解説。',
        order: 8,
      },
      {
        id: 'tamakake-09',
        title: '【玉掛け#01】手合図の基本と関係法令',
        youtubeId: 'qmv1GQW9SnA',
        duration: '約10分',
        description: '玉掛け作業に関わる法令・クレーン則の要点・資格要件の確認。',
        order: 9,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. 移動式クレーン運転士
  // ─────────────────────────────────────────────
  {
    id: 'mobile-crane',
    title: '移動式クレーン運転士',
    category: 'クレーン関係',
    categoryColor: 'bg-blue-600',
    description: '吊り上げ荷重5トン以上の移動式クレーンを運転するための国家資格。大型建設現場・港湾・プラント工事に欠かせない上位資格です。',
    level: '上級',
    totalLessons: 10,
    totalDuration: '約4か月（学科＋実技）',
    icon: '🏚️',
    examInfo: '学科試験（安全・法令・力学・電気）＋実技試験（運転）',
    prerequisites: '小型移動式クレーン技能講習修了者など',
    lessons: [
      {
        id: 'mc-01',
        title: '移動式クレーン特別教育（学科）サンプル',
        youtubeId: 'QYT3qUkVG90',
        duration: '約15分',
        description: '移動式クレーンの種類・構造・名称の基礎を学科講義形式で解説。',
        order: 1,
      },
      {
        id: 'mc-02',
        title: '免許過去問解説「原動機及び電気に関する知識」',
        youtubeId: 'nyz9p8oPhnw',
        duration: '約20分',
        description: 'ディーゼルエンジン・電装系の基礎知識と過去問の頻出ポイントを解説。',
        order: 2,
      },
      {
        id: 'mc-03',
        title: '免許過去問解説(第3弾) part.1「クレーンに関する知識」',
        youtubeId: 'v7a1-zogqHo',
        duration: '約25分',
        description: '油圧系統・アウトリガー・安全装置に関する知識と過去問解説。',
        order: 3,
      },
      {
        id: 'mc-04',
        title: '移動式クレーン運転実技教習',
        youtubeId: 'S_YKImDKrC4',
        duration: '約18分',
        description: 'アウトリガー張り出し・ブーム操作・吊り荷移動の実技教習映像。',
        order: 4,
      },
      {
        id: 'mc-05',
        title: '移動式クレーン特別教育【実技教育の実施例解説】',
        youtubeId: 'HNNsQ5DCmcQ',
        duration: '約20分',
        description: 'ブーム起伏・旋回・巻き上げ操作の手順と複合操作の注意点を実演。',
        order: 5,
      },
      {
        id: 'mc-06',
        title: '免許過去問解説 part.1「移動式クレーンに関する知識」',
        youtubeId: 'OPcqyOgnDPk',
        duration: '約22分',
        description: 'つり上げ荷重・定格荷重・性能曲線の読み方と計算問題を解説。',
        order: 6,
      },
      {
        id: 'mc-07',
        title: '免許過去問解説(第3弾) part.4「力学に関する知識」',
        youtubeId: 'lMmkVO8LU4E',
        duration: '約25分',
        description: '重心・モーメント・転倒防止の原則を数式と図解で徹底解説。',
        order: 7,
      },
      {
        id: 'mc-08',
        title: '免許過去問解説(第2弾) part.4「力学に関する知識」',
        youtubeId: '5U6PpJMtOO4',
        duration: '約22分',
        description: '強風・悪天候時の対応・荷振れ防止・走行時注意事項と力学の応用問題。',
        order: 8,
      },
      {
        id: 'mc-09',
        title: '免許過去問解説(第2弾) part.3「関係法令」',
        youtubeId: 'QCFnSXJpSoA',
        duration: '約20分',
        description: 'クレーン則・作業計画作成義務・定期検査・資格要件など法令全般。',
        order: 9,
      },
      {
        id: 'mc-10',
        title: '免許過去問解説(第2弾) part.1「クレーンに関する知識」',
        youtubeId: 'OPcqyOgnDPk',
        duration: '約20分',
        description: '実技試験の採点基準・合格のポイント・よくある失点箇所の解説。',
        order: 10,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. 車両系建設機械（整地・運搬・掘削）
  // ─────────────────────────────────────────────
  {
    id: 'construction-vehicle',
    title: '車両系建設機械（整地・運搬・掘削）',
    category: '建設機械',
    categoryColor: 'bg-yellow-500',
    description: 'ブルドーザー・パワーショベル・モーターグレーダーなど整地・掘削用建設機械の運転に必要な技能講習です。土木工事の基本資格として幅広く求められます。',
    level: '初級',
    totalLessons: 9,
    totalDuration: '約38時間',
    icon: '🚜',
    examInfo: '学科試験＋実技試験｜合格基準：各科目40点以上・合計60点以上',
    prerequisites: '特になし（満18歳以上）',
    lessons: [
      {
        id: 'cv-01',
        title: '車両系建設機械（整地等）運転技能講習【概要】',
        youtubeId: 'nGYe1T4YPIQ',
        duration: '約15分',
        description: 'ショベル・ブルドーザー・グレーダーなど機種ごとの特徴と用途を解説。',
        order: 1,
      },
      {
        id: 'cv-02',
        title: '車両系建設機械（整地・運搬・積込み・掘削）運転技能講習',
        youtubeId: '7qgvqdrvMqY',
        duration: '約20分',
        description: 'ディーゼルエンジンの各部構造・冷却系・燃料系の仕組みと整備ポイント。',
        order: 2,
      },
      {
        id: 'cv-03',
        title: '車両系建設機械（整地等）運転技能講習【コベルコ建機公式】',
        youtubeId: 'FIHT8Hi29oQ',
        duration: '約18分',
        description: 'クローラ式・ホイール式の走行装置と各操作レバーの機能を公式映像で確認。',
        order: 3,
      },
      {
        id: 'cv-04',
        title: '小型車両系建設機械運転特別教育【油圧・基礎】',
        youtubeId: '8zsgVYInCzw',
        duration: '約15分',
        description: '油圧ポンプ・バルブ・シリンダーの構造と動作原理をわかりやすく解説。',
        order: 4,
      },
      {
        id: 'cv-05',
        title: '【車両系建設機械（整地等）】実技講習の模範運転',
        youtubeId: 'CwjpO6GCbfE',
        duration: '約20分',
        description: 'ブレード・バケット・アームの操作手順と複合操作の注意点を模範映像で学習。',
        order: 5,
      },
      {
        id: 'cv-06',
        title: '【小型車両系建設機械（整地等）】実技講習模範運転〜コース走行編〜',
        youtubeId: 'MLqA9lXiX9c',
        duration: '約18分',
        description: '傾斜地走行・軟弱地盤・狭隘路での安全な走行方法を実技映像で確認。',
        order: 6,
      },
      {
        id: 'cv-07',
        title: '【車両系建設機械（解体用）】実技講習の模範運転',
        youtubeId: 'rWsRqpR0-nA',
        duration: '約20分',
        description: '掘削・すくい・旋回・積み込みの効率的かつ安全な作業手順を実演。',
        order: 7,
      },
      {
        id: 'cv-08',
        title: '車両系建設機械（基礎工事用）運転技能講習【点検整備】',
        youtubeId: 'llBK2xzzMq4',
        duration: '約15分',
        description: '作業前・作業後点検の手順とチェックポイント・定期整備の内容。',
        order: 8,
      },
      {
        id: 'cv-09',
        title: '車両系建設機械（解体用）運転技能講習【安全・法令】',
        youtubeId: 's772Up96SHQ',
        duration: '約18分',
        description: '誘導者の配置・立入禁止・転落防止対策と労働安全衛生法の要点。',
        order: 9,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. 高所作業車運転技能講習
  // ─────────────────────────────────────────────
  {
    id: 'aerial-work',
    title: '高所作業車運転技能講習',
    category: '高所作業',
    categoryColor: 'bg-green-600',
    description: '作業床の高さが10m以上の高所作業車の運転に必要な技能講習。電気工事・通信工事・建設工事など高所での作業現場で広く使用されます。',
    level: '初級',
    totalLessons: 7,
    totalDuration: '約17時間',
    icon: '🔧',
    examInfo: '学科試験＋実技試験｜合格基準：各科目40点以上・合計60点以上',
    prerequisites: '特になし（満18歳以上）',
    lessons: [
      {
        id: 'aw-01',
        title: '高所作業車運転技能講習【種類と構造】',
        youtubeId: 'GDB1Gil1D7Y',
        duration: '約15分',
        description: 'ブーム式・シザース式・垂直昇降式の種類と各部名称を解説。',
        order: 1,
      },
      {
        id: 'aw-02',
        title: '【ユニック車】高所作業車の操作の基本を実演解説！',
        youtubeId: 'yoyJ2TqTSgE',
        duration: '約20分',
        description: '地上操作・上部バスケット内操作の手順と注意事項を実演映像で解説。',
        order: 2,
      },
      {
        id: 'aw-03',
        title: '高所作業車運転技能講習（実技）【アウトリガー設置】',
        youtubeId: 'a7P4oO-2gwY',
        duration: '約15分',
        description: 'アウトリガー設置手順・地耐力確認・傾斜地での対応を実技映像で確認。',
        order: 3,
      },
      {
        id: 'aw-04',
        title: '高所作業車運転技能講習【点検・整備】',
        youtubeId: 'n8ThYvRbhIo',
        duration: '約12分',
        description: '安全装置・作業床・ブームの作業前点検方法と整備のポイント。',
        order: 4,
      },
      {
        id: 'aw-05',
        title: '【作業別安全衛生対策のポイント】高所作業車',
        youtubeId: '3ma0TVNZuCA',
        duration: '約18分',
        description: '安全帯の使用方法・バスケット内での安全確保・墜落転落防止対策。',
        order: 5,
      },
      {
        id: 'aw-06',
        title: '高所作業車技能講習01【電線・障害物・安全対策】',
        youtubeId: 'f1w8a_QbK2s',
        duration: '約15分',
        description: '電線接触事故の防止・安全離隔距離・風速規制・障害物への接近注意。',
        order: 6,
      },
      {
        id: 'aw-07',
        title: '高所作業車特別教育（学科教育）サンプル【法令】',
        youtubeId: 'gSTI74mxkXQ',
        duration: '約12分',
        description: '高所作業車に関わる法令・資格要件・作業計画書の作成方法。',
        order: 7,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. アーク溶接等特別教育
  // ─────────────────────────────────────────────
  {
    id: 'arc-welding',
    title: 'アーク溶接等特別教育',
    category: '溶接',
    categoryColor: 'bg-red-600',
    description: 'アーク溶接機を使用した溶接・溶断作業に必要な特別教育。製造業・建設業・修理業など幅広い現場で必要とされます。',
    level: '初級',
    totalLessons: 6,
    totalDuration: '約11時間',
    icon: '⚡',
    examInfo: '学科教育＋実技教育（修了試験あり）',
    prerequisites: '特になし（満18歳以上）',
    lessons: [
      {
        id: 'arc-01',
        title: '安心安全な溶接を行うために！【アーク溶接等特別教育】',
        youtubeId: 'RSV7NhBO1bk',
        duration: '約20分',
        description: '被覆アーク溶接・MIG/MAG溶接の原理と種類・特別教育の全体像を解説。',
        order: 1,
      },
      {
        id: 'arc-02',
        title: 'アーク溶接等特別教育 サンプル（SAT株式会社）',
        youtubeId: 'bsjWETNmZp8',
        duration: '約15分',
        description: '溶接機の構造・電流設定・溶接棒の種類と選定方法を講義形式で解説。',
        order: 2,
      },
      {
        id: 'arc-03',
        title: 'アーク溶接実技【基本作業手順】',
        youtubeId: 'BFfdn1IA4qs',
        duration: '約18分',
        description: 'アーク発生・運棒・ビード作成の基本手順を実技映像で解説。',
        order: 3,
      },
      {
        id: 'arc-04',
        title: 'アーク溶接等の業務に係る特別教育【感電防止】',
        youtubeId: 'vUhhPEgwouI',
        duration: '約15分',
        description: '感電の原因・防護具の使用方法・安全作業のための注意事項を解説。',
        order: 4,
      },
      {
        id: 'arc-05',
        title: '【化学物質管理】金属アーク溶接等作業【ヒューム対策】',
        youtubeId: 'nkQOkpe0xzI',
        duration: '約12分',
        description: '溶接ヒュームの健康障害・換気方法・遮光フィルターの選定と使用。',
        order: 5,
      },
      {
        id: 'arc-06',
        title: '安全衛生教育教材／溶接（日本語）【火災・法令】',
        youtubeId: '11T3KTJDL9U',
        duration: '約20分',
        description: '引火性物質の取り扱い・消火器設置・特別教育に関する法令の要点。',
        order: 6,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. 足場の組立て等作業主任者
  // ─────────────────────────────────────────────
  {
    id: 'scaffold',
    title: '足場の組立て等作業主任者',
    category: '足場・架設',
    categoryColor: 'bg-purple-600',
    description: '足場（つり足場・張り出し足場・高さ5m以上）の組立て・解体または変更の作業において主任者として作業を指揮・監督する資格です。',
    level: '中級',
    totalLessons: 8,
    totalDuration: '約14時間',
    icon: '🏗️',
    examInfo: '学科試験｜合格基準：各科目40点以上・合計60点以上',
    prerequisites: '足場の組立て等に関する実務経験3年以上',
    lessons: [
      {
        id: 'scaf-01',
        title: '足場の組立て等特別教育とは【種類と特徴】',
        youtubeId: 'V-jPxMgcXAE',
        duration: '約12分',
        description: 'わく組足場・単管足場・くさび緊結式足場・吊り足場の種類と用途を解説。',
        order: 1,
      },
      {
        id: 'scaf-02',
        title: 'たった13分で足場マスター！建築工事監理指針に沿って解説',
        youtubeId: 'jFNfyk7ZbA0',
        duration: '13分',
        description: '手すり・中さん・幅木・床材の設置基準と構造要件を図解でわかりやすく解説。',
        order: 2,
      },
      {
        id: 'scaf-03',
        title: '建設現場の足場を組立てる！【組立て等特別教育】',
        youtubeId: '3TyENbnYBAU',
        duration: '約20分',
        description: '組立て計画・部材確認・組立て順序・解体手順の基本を実際の現場映像で解説。',
        order: 3,
      },
      {
        id: 'scaf-04',
        title: '【安全教育ビデオ】足場からの墜落・転落災害編',
        youtubeId: 'FPtRLr98GNk',
        duration: '約15分',
        description: '安全帯・ライフライン・開口部養生など墜落防止対策の全体像を解説。',
        order: 4,
      },
      {
        id: 'scaf-05',
        title: '【作業別安全衛生対策】枠組み足場の組立・解体作業',
        youtubeId: 'CBE9LgPG31M',
        duration: '約18分',
        description: '作業主任者の役割・責任・作業指揮の方法と作業計画書の作成。',
        order: 5,
      },
      {
        id: 'scaf-06',
        title: '足場作業等の安全〜足場からの墜落を防ごう〜',
        youtubeId: 'BFMrnq0jO5M',
        duration: '約15分',
        description: '強風・積雪時の点検・補強・使用禁止基準と気象条件への対応方法。',
        order: 6,
      },
      {
        id: 'scaf-07',
        title: '足場等に係る安全対策について【点検・法令】',
        youtubeId: 'AxsA-3o1RMo',
        duration: '約15分',
        description: '定期点検・悪天候後の点検・部材損傷の確認方法とチェックリスト。',
        order: 7,
      },
      {
        id: 'scaf-08',
        title: '足場の組立等特別教育【労働安全衛生規則・まとめ】',
        youtubeId: '3TyENbnYBAU',
        duration: '約15分',
        description: '足場に関わる法令・作業主任者の選任義務・罰則規定の総まとめ。',
        order: 8,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. 小型移動式クレーン運転技能講習
  // ─────────────────────────────────────────────
  {
    id: 'small-crane',
    title: '小型移動式クレーン運転技能講習',
    category: 'クレーン関係',
    categoryColor: 'bg-blue-600',
    description: 'つり上げ荷重1トン以上5トン未満の小型移動式クレーンを運転するための技能講習。中型クレーン作業の入門資格として広く活用されます。',
    level: '初級',
    totalLessons: 7,
    totalDuration: '約13時間',
    icon: '🏚️',
    examInfo: '学科試験＋実技試験｜合格基準：各科目40点以上・合計60点以上',
    prerequisites: '特になし（満18歳以上）',
    lessons: [
      {
        id: 'sc-01',
        title: '小型移動式クレーン運転技能講習【種類・構造】',
        youtubeId: 'i9J-RpR-xFA',
        duration: '約15分',
        description: 'トラック搭載型・小型ラフタークレーンの構造と各部名称を解説。',
        order: 1,
      },
      {
        id: 'sc-02',
        title: '小型移動式クレーン技能講習の基本操作【原動機・電気】',
        youtubeId: 'pRJYykCu4JE',
        duration: '約15分',
        description: 'エンジン・電装系の基礎知識と作業前点検のポイントを解説。',
        order: 2,
      },
      {
        id: 'sc-03',
        title: '【小型移動式クレーン】実技講習の模範運転【アウトリガー】',
        youtubeId: 'YbaJ3cadf_4',
        duration: '約18分',
        description: 'アウトリガーの最大張り出し・地耐力確認・敷板の使用方法を模範映像で確認。',
        order: 3,
      },
      {
        id: 'sc-04',
        title: '【移動式クレーン運転士免許】側面から見た実技教習の運行経路',
        youtubeId: 'mIJERVg785s',
        duration: '約15分',
        description: 'ブーム起伏・旋回・巻き上げ操作の手順と複合操作の注意点を解説。',
        order: 4,
      },
      {
        id: 'sc-05',
        title: 'GIAの学生が小型移動式クレーン運転技能講習を受講！',
        youtubeId: '3OS55Wr6fXs',
        duration: '約12分',
        description: '定格荷重・作業半径の関係・性能曲線の読み方と過負荷防止装置の機能。',
        order: 5,
      },
      {
        id: 'sc-06',
        title: 'たった18分でクレーン玉掛けの手合図が覚えれます！【連携】',
        youtubeId: 'W9-D6PKdAr0',
        duration: '18分',
        description: 'ワイヤーロープ・スリングとの組み合わせ作業・玉掛け者との合図確認。',
        order: 6,
      },
      {
        id: 'sc-07',
        title: '移動式クレーン免許 過去問解説「関係法令」【安全・法令】',
        youtubeId: 'QCFnSXJpSoA',
        duration: '約20分',
        description: '作業半径内立入禁止・強風対応・クレーン則の要点を過去問で解説。',
        order: 7,
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return COURSES.find(c => c.id === id);
}

export function getLessonById(courseId: string, lessonId: string): { course: Course; lesson: Lesson } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  return { course, lesson };
}

export function getLessonByIdOnly(lessonId: string): { course: Course; lesson: Lesson } | undefined {
  for (const course of COURSES) {
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (lesson) return { course, lesson };
  }
  return undefined;
}

export const CATEGORY_LIST = [...new Set(COURSES.map(c => c.category))];
