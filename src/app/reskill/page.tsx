"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { COURSES, CATEGORY_LIST } from '@/lib/constructionData';
import { useCourseStore } from '@/lib/courseStore';
import { HardHat, Play, Clock, Award, ChevronRight, Search, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');
  const [searchQuery, setSearchQuery] = useState('');
  const { completedLessonIds } = useCourseStore();

  const categories = ['すべて', ...CATEGORY_LIST];

  const filteredCourses = COURSES.filter((course) => {
    const matchCat = selectedCategory === 'すべて' || course.category === selectedCategory;
    const matchSearch = !searchQuery || course.title.includes(searchQuery) || course.description.includes(searchQuery);
    return matchCat && matchSearch;
  });

  const totalCompleted = completedLessonIds.length;

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* ページヘッダー */}
      <div className="bg-slate-900 text-white px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold mb-3">
            <HardHat size={14} /> 建設重機資格ナビ
          </div>
          <h1 className="text-3xl font-black mb-2">資格コース一覧</h1>
          <p className="text-slate-400 font-medium">現場で必要な重機資格の学習動画コース</p>
          {totalCompleted > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full">
              <Award size={12} /> {totalCompleted}レッスン完了済み
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6">
        {/* 検索・フィルター */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="コース名・キーワードで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* コース数 */}
        <p className="text-sm font-bold text-slate-500 mb-4">
          {filteredCourses.length}コース表示中
        </p>

        {/* コースグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCourses.map((course) => {
            const completedInCourse = course.lessons.filter(l => completedLessonIds.includes(l.id)).length;
            const progress = Math.round((completedInCourse / course.lessons.length) * 100);

            return (
              <Link
                key={course.id}
                href={`/reskill/course/${course.id}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all flex flex-col"
              >
                {/* カテゴリカラーバー */}
                <div className={`h-1.5 ${course.categoryColor}`} />

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{course.icon}</span>
                      <span className="text-xs font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100">
                        {course.category}
                      </span>
                    </div>
                    <span className={`text-[10px] font-black px-2 py-1 rounded-full ${
                      course.level === '初級' ? 'bg-emerald-50 text-emerald-700' :
                      course.level === '中級' ? 'bg-blue-50 text-blue-700' :
                      'bg-purple-50 text-purple-700'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-800 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2 flex-1 mb-4">
                    {course.description}
                  </p>

                  {/* 進捗バー */}
                  {completedInCourse > 0 && (
                    <div className="mb-3">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                        <span>{completedInCourse}/{course.lessons.length} 完了</span>
                        <span className="text-orange-500">{progress}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                      <span className="flex items-center gap-1"><Play size={11} /> {course.totalLessons}レッスン</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {course.totalDuration}</span>
                    </div>
                    <span className="text-orange-500 group-hover:translate-x-1 transition-transform">
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="py-20 text-center">
            <BookOpen size={40} className="mx-auto text-slate-300 mb-3" />
            <p className="text-slate-500 font-bold">該当するコースが見つかりませんでした</p>
          </div>
        )}
      </div>
    </div>
  );
}
