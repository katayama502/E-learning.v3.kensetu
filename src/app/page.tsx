import Link from "next/link";
import { HardHat, ChevronRight, Shield, Clock, Award, Users, Play, Wrench } from "lucide-react";
import { COURSES } from "@/lib/constructionData";

const STATS = [
  { label: "対応資格数", value: "8+", icon: Award },
  { label: "学習動画", value: "60+", icon: Play },
  { label: "完全無料", value: "0円", icon: Shield },
  { label: "スマホ対応", value: "24h", icon: Clock },
];

const CATEGORIES = [
  { name: "荷役機械", icon: "🏗️", desc: "フォークリフト等", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "クレーン関係", icon: "⚙️", desc: "玉掛け・移動式クレーン", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "建設機械", icon: "🚜", desc: "車両系建設機械", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
  { name: "高所作業", icon: "🔧", desc: "高所作業車", color: "bg-green-50 border-green-200 text-green-700" },
  { name: "溶接", icon: "⚡", desc: "アーク・ガス溶接", color: "bg-red-50 border-red-200 text-red-700" },
  { name: "足場・架設", icon: "🏚️", desc: "足場組立て", color: "bg-purple-50 border-purple-200 text-purple-700" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <HardHat size={20} className="text-white" />
            </div>
            <div>
              <span className="font-black text-base tracking-tight">建設重機資格ナビ</span>
              <p className="text-[10px] text-slate-400 -mt-0.5">重機オペレーター資格学習サイト</p>
            </div>
          </Link>
          <Link
            href="/reskill"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors flex items-center gap-1.5"
          >
            学習を始める <ChevronRight size={14} />
          </Link>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold px-4 py-2 rounded-full mb-6">
            <HardHat size={14} /> 建設業界の重機資格取得をサポート
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            重機の資格、<br />
            <span className="text-orange-400">動画で学ぼう。</span>
          </h1>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            フォークリフト・玉掛け・移動式クレーン・車両系建設機械など、
            現場で必要な重機資格の学習動画を無料で提供しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reskill"
              className="bg-orange-500 hover:bg-orange-400 text-white font-black px-8 py-4 rounded-2xl text-lg transition-all shadow-xl shadow-orange-900/30 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Play size={20} fill="currentColor" /> 無料で学習を開始
            </Link>
            <Link
              href="/reskill"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              資格一覧を見る <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 統計 */}
      <section className="bg-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <stat.icon size={24} className="mx-auto mb-1 text-orange-100" />
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-xs font-bold text-orange-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* カテゴリ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-slate-800 text-center mb-2">資格カテゴリー</h2>
          <p className="text-slate-500 text-center mb-10 font-medium">取得したい資格の分野を選んでください</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/reskill?category=${encodeURIComponent(cat.name)}`}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 hover:shadow-lg transition-all ${cat.color}`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="font-black text-sm">{cat.name}</div>
                  <div className="text-xs opacity-70 font-medium">{cat.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* コース一覧（抜粋） */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-800">人気の資格コース</h2>
              <p className="text-slate-500 font-medium mt-1">現場で最も求められる資格から学べます</p>
            </div>
            <Link href="/reskill" className="text-orange-500 font-bold text-sm hover:underline flex items-center gap-1">
              すべて見る <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.slice(0, 6).map((course) => (
              <Link
                key={course.id}
                href={`/reskill/course/${course.id}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all"
              >
                <div className={`h-2 ${course.categoryColor}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{course.icon}</span>
                    <span className={`text-[10px] font-black px-2 py-1 rounded-full ${
                      course.level === '初級' ? 'bg-emerald-50 text-emerald-700' :
                      course.level === '中級' ? 'bg-blue-50 text-blue-700' :
                      'bg-purple-50 text-purple-700'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-black text-slate-800 mb-1 leading-tight group-hover:text-orange-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Play size={12} /> {course.totalLessons}レッスン
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {course.totalDuration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-10">このサイトの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Play, title: "YouTube動画で学習", desc: "実際の作業映像・講義動画で直感的に理解できます" },
              { icon: Shield, title: "登録不要・完全無料", desc: "アカウント登録なしですぐに学習を開始できます" },
              { icon: Wrench, title: "実務直結コンテンツ", desc: "試験対策から現場での安全作業まで網羅しています" },
            ].map((feat) => (
              <div key={feat.title} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <feat.icon size={24} className="text-white" />
                </div>
                <h3 className="font-black text-lg">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <HardHat size={48} className="mx-auto mb-4 text-orange-100" />
          <h2 className="text-3xl font-black mb-3">今すぐ学習を始めよう</h2>
          <p className="text-orange-100 mb-8 font-medium">
            登録不要・完全無料で重機資格の学習動画にアクセスできます。
          </p>
          <Link
            href="/reskill"
            className="bg-white text-orange-600 font-black px-10 py-4 rounded-2xl text-lg shadow-xl hover:bg-orange-50 transition-all inline-flex items-center gap-2 hover:scale-105"
          >
            コース一覧へ <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
            <HardHat size={15} className="text-white" />
          </div>
          <span className="font-black text-white text-sm">建設重機資格ナビ</span>
        </div>
        <p className="text-xs">© 2024 建設重機資格ナビ. 学習コンテンツはYouTubeの公開動画を利用しています。</p>
      </footer>
    </div>
  );
}
