"use client";

import React, { useState, useEffect, use, useRef } from 'react';
import Link from 'next/link';
import { getLessonByIdOnly } from '@/lib/constructionData';
import { useCourseStore } from '@/lib/courseStore';
import { toast } from 'sonner';
import {
  ChevronLeft, CheckCircle2, Play, Menu, X,
  PlayCircle, XCircle
} from 'lucide-react';

export default function LessonPlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const result = getLessonByIdOnly(id);
  const { isCompleted, completeLesson, setLastViewed } = useCourseStore();

  const [playerError, setPlayerError] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (result) setLastViewed(result.lesson.id);
  }, [id]);

  // YouTube IFrame API
  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.getElementsByTagName('script')[0].parentNode?.insertBefore(tag, document.getElementsByTagName('script')[0]);
      (window as any).onYouTubeIframeAPIReady = () => setIsApiLoaded(true);
    } else {
      setIsApiLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!result || !isApiLoaded || !(window as any).YT) return;
    const { lesson } = result;

    try {
      if (playerRef.current?.destroy) playerRef.current.destroy();
      setPlayerError(false);

      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: lesson.youtubeId,
        playerVars: { autoplay: 1, modestbranding: 1, rel: 0 },
        events: {
          onStateChange: (event: any) => {
            if (event.data === 0 && !isCompleted(lesson.id)) {
              completeLesson(lesson.id);
              setShowCelebration(true);
              toast.success('レッスン完了！', { description: `「${lesson.title}」を視聴しました` });
              setTimeout(() => setShowCelebration(false), 3000);
            }
          },
          onError: () => setPlayerError(true),
        },
      });
    } catch {
      setPlayerError(true);
    }

    return () => {
      try { playerRef.current?.destroy?.(); } catch {}
    };
  }, [result?.lesson.id, isApiLoaded]);

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <XCircle size={40} className="text-rose-500 mb-4" />
        <h2 className="text-xl font-black mb-2">レッスンが見つかりません</h2>
        <Link href="/reskill" className="mt-4 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-bold transition-all">
          コース一覧に戻る
        </Link>
      </div>
    );
  }

  const { course, lesson } = result;
  const currentIndex = course.lessons.findIndex(l => l.id === id);
  const nextLesson = course.lessons[currentIndex + 1];
  const completed = isCompleted(lesson.id);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* ナビゲーション */}
      <nav className="bg-slate-800/60 backdrop-blur border-b border-white/10 px-4 py-3 flex items-center justify-between z-40">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/reskill/course/${course.id}`}
            className="shrink-0 w-9 h-9 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
          >
            <ChevronLeft size={20} className="text-white" />
          </Link>
          <div className="min-w-0">
            <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest truncate max-w-[180px] md:max-w-xs">
              {course.title}
            </p>
            <p className="text-sm font-bold text-white truncate max-w-[200px] md:max-w-md">{lesson.title}</p>
          </div>
        </div>
        <button
          onClick={() => setIsMobileListOpen(true)}
          className="lg:hidden w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg text-slate-400"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* モバイルレッスン一覧 */}
      {isMobileListOpen && (
        <div className="fixed inset-0 bg-black/70 z-[200]" onClick={() => setIsMobileListOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-t-3xl max-h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h3 className="font-black text-white">レッスン一覧</h3>
              <button onClick={() => setIsMobileListOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
            </div>
            <div className="overflow-y-auto flex-1 py-2">
              {course.lessons.map((l, idx) => (
                <Link
                  key={l.id}
                  href={`/reskill/lesson/${l.id}`}
                  onClick={() => setIsMobileListOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors ${l.id === id ? 'bg-orange-500/10 border-l-4 border-orange-500' : ''}`}
                >
                  <div className="shrink-0">
                    {isCompleted(l.id) ? <CheckCircle2 size={16} className="text-emerald-400" /> : <PlayCircle size={16} className={l.id === id ? 'text-orange-400' : 'text-slate-500'} />}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-bold line-clamp-2 ${l.id === id ? 'text-orange-300' : 'text-slate-300'}`}>
                      {idx + 1}. {l.title}
                    </p>
                    <span className="text-[10px] text-slate-500">{l.duration}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* メインコンテンツ */}
        <main className="flex-1 overflow-y-auto bg-slate-950">
          {/* プレイヤー */}
          <div className="bg-black aspect-video w-full relative">
            <div id="youtube-player" className="w-full h-full" />
            {playerError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white gap-3">
                <XCircle size={40} className="text-red-400" />
                <p className="font-bold text-slate-300">動画を読み込めませんでした</p>
                <button onClick={() => { setPlayerError(false); window.location.reload(); }} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-sm">
                  再読み込み
                </button>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto px-6 py-8 space-y-6 pb-24">
            {/* レッスン情報 */}
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
              <div className="flex-1">
                <p className="text-xs font-black text-orange-400 uppercase tracking-widest mb-2">{course.title}</p>
                <h2 className="text-2xl font-black text-white mb-3">{lesson.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{lesson.description}</p>
              </div>
              <div className="shrink-0 flex gap-2">
                <button
                  onClick={() => {
                    completeLesson(lesson.id);
                    toast.success('完了しました！');
                    setShowCelebration(true);
                    setTimeout(() => setShowCelebration(false), 2000);
                  }}
                  className={`relative px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2 text-sm overflow-hidden ${
                    completed ? 'bg-emerald-500 text-white' : 'bg-orange-500 hover:bg-orange-400 text-white'
                  }`}
                >
                  {completed ? <><CheckCircle2 size={16} /> 完了済み</> : <><Play size={16} fill="currentColor" /> 完了にする</>}
                  {showCelebration && <div className="absolute inset-0 bg-white/20 animate-ping" />}
                </button>
                {nextLesson && (
                  <Link
                    href={`/reskill/lesson/${nextLesson.id}`}
                    className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold text-sm transition-all border border-white/10 group max-w-[180px]"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase">次のレッスン</p>
                      <p className="text-xs font-bold truncate group-hover:text-orange-300">{nextLesson.title}</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* デスクトップサイドバー */}
        <aside className="hidden lg:flex w-72 bg-slate-900 border-l border-white/10 flex-col">
          <div className="p-5 border-b border-white/10">
            <h3 className="font-black text-white text-sm">レッスン一覧</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">{course.lessons.filter(l => isCompleted(l.id)).length}/{course.lessons.length} 完了</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {course.lessons.map((l, idx) => (
              <Link
                key={l.id}
                href={`/reskill/lesson/${l.id}`}
                className={`flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors group ${l.id === id ? 'bg-orange-500/10 border-l-4 border-orange-500' : ''}`}
              >
                <div className="shrink-0">
                  {isCompleted(l.id) ? <CheckCircle2 size={16} className="text-emerald-400" /> : <PlayCircle size={16} className={l.id === id ? 'text-orange-400' : 'text-slate-500 group-hover:text-slate-300'} />}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-bold line-clamp-2 ${l.id === id ? 'text-orange-300' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {idx + 1}. {l.title}
                  </p>
                  <span className="text-[10px] text-slate-600">{l.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
