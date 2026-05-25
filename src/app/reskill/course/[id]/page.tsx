"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { getCourseById } from '@/lib/constructionData';
import { useCourseStore } from '@/lib/courseStore';
import {
  ChevronLeft, Play, CheckCircle2, Clock, Award, BookOpen,
  ArrowRight, HardHat, AlertCircle, ChevronDown, ChevronUp
} from 'lucide-react';

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const course = getCourseById(id);
  const { completedLessonIds, isCompleted } = useCourseStore();
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
        <AlertCircle size={40} className="text-slate-300" />
        <p className="font-bold text-slate-500">コースが見つかりません</p>
        <Link href="/reskill" className="text-orange-500 font-bold hover:underline">コース一覧に戻る</Link>
      </div>
    );
  }

  const completedCount = course.lessons.filter(l => isCompleted(l.id)).length;
  const progress = Math.round((completedCount / course.lessons.length) * 100);
  const displayedLessons = isExpanded ? course.lessons : course.lessons.slice(0, 5);
  const firstUncompleted = course.lessons.find(l => !isCompleted(l.id));
  const startLesson = firstUncompleted || course.lessons[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ヒーローヘッダー */}
      <div className="bg-slate-900 text-white pt-6 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6">
            <Link href="/reskill" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <ChevronLeft size={14} /> コース一覧
            </Link>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{course.icon}</span>
                <span className={`text-xs font-black px-3 py-1 rounded-full ${
                  course.level === '初級' ? 'bg-emerald-500/20 text-emerald-300' :
                  course.level === '中級' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>{course.level}</span>
                <span className="text-xs font-bold text-slate-400 bg-white/10 px-3 py-1 rounded-full">{course.category}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4">{course.title}</h1>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Play size={13} className="text-orange-400" /> {course.totalLessons}レッスン</span>
                <span className="flex items-center gap-1"><Clock size={13} className="text-orange-400" /> {course.totalDuration}</span>
                <span className="flex items-center gap-1"><Award size={13} className="text-orange-400" /> {course.examInfo}</span>
              </div>
            </div>

            {/* サイドカード */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">受験要件</div>
              <p className="text-sm font-bold text-white mb-4">{course.prerequisites}</p>

              {completedCount > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                    <span>進捗</span>
                    <span className="text-orange-400">{completedCount}/{course.lessons.length} ({progress}%)</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              )}

              <Link
                href={`/reskill/lesson/${startLesson.id}`}
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/30"
              >
                {completedCount > 0 ? '学習を続ける' : '学習を始める'} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* レッスン一覧 */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="text-orange-500" size={20} />
          レッスン一覧
        </h2>

        <div className="space-y-3 relative">
          {displayedLessons.map((lesson, index) => {
            const completed = isCompleted(lesson.id);
            const thumbnailUrl = `https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`;

            return (
              <Link
                key={lesson.id}
                href={`/reskill/lesson/${lesson.id}`}
                className={`group flex gap-4 p-4 rounded-2xl border transition-all hover:shadow-md ${
                  completed ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-slate-200 hover:border-orange-200'
                }`}
              >
                {/* サムネイル */}
                <div className="shrink-0 w-32 md:w-44 aspect-video rounded-xl overflow-hidden relative bg-slate-200">
                  <img
                    src={thumbnailUrl}
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                      <Play size={14} className="text-orange-500 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  {completed && (
                    <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                      <CheckCircle2 size={9} /> 完了
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {lesson.duration}
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex-1 min-w-0 py-1">
                  <div className="text-[10px] font-black text-slate-400 mb-1.5">Lesson {index + 1}</div>
                  <h3 className={`font-black text-sm md:text-base leading-tight mb-1.5 group-hover:text-orange-600 transition-colors ${
                    completed ? 'text-slate-600' : 'text-slate-800'
                  }`}>
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2">{lesson.description}</p>
                  <div className={`mt-3 inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-lg ${
                    completed ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {completed ? <><CheckCircle2 size={11} /> 復習する</> : <><Play size={11} /> 受講する</>}
                  </div>
                </div>
              </Link>
            );
          })}

          {!isExpanded && course.lessons.length > 5 && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
          )}
        </div>

        {course.lessons.length > 5 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 py-3 bg-white border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            {isExpanded ? <>閉じる <ChevronUp size={16} /></> : <>もっと見る ({course.lessons.length - 5}件) <ChevronDown size={16} /></>}
          </button>
        )}
      </main>

      {/* 試験情報 */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <HardHat size={18} className="text-orange-500" />
            <h3 className="font-black text-slate-800">試験・講習情報</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">試験形式</span>
              <p className="font-bold text-slate-700 mt-1">{course.examInfo}</p>
            </div>
            <div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">受験資格・前提条件</span>
              <p className="font-bold text-slate-700 mt-1">{course.prerequisites}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
