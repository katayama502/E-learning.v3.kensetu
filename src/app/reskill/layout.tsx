"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HardHat, BookOpen, Home, Menu, X } from 'lucide-react';

export default function ReskillLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  const isLessonPage = pathname?.startsWith('/reskill/lesson/');
  if (isLessonPage) return <>{children}</>;

  const navItems = [
    { name: 'トップ', icon: Home, href: '/', exact: true },
    { name: 'コース一覧', icon: BookOpen, href: '/reskill', exact: true },
  ];

  const renderLinks = (onClick?: () => void) =>
    navItems.map((item) => {
      const isActive = item.exact ? pathname === item.href : pathname?.startsWith(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
            isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <item.icon size={18} />
          {item.name}
        </Link>
      );
    });

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* デスクトップサイドバー */}
      <aside className="hidden md:flex w-56 shrink-0 flex-col bg-white border-r border-slate-200 h-screen sticky top-0">
        <div className="px-5 py-5 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors">
              <HardHat size={18} className="text-white" />
            </div>
            <div>
              <span className="font-black text-slate-800 text-sm tracking-tight">建設重機資格ナビ</span>
              <p className="text-[10px] text-slate-400">重機オペレーター資格</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {renderLinks()}
        </nav>
        <div className="px-4 pb-5 pt-2 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 text-center font-medium">登録不要・完全無料</p>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* モバイルヘッダー */}
        <header className="md:hidden bg-white border-b border-slate-200 h-14 flex items-center justify-between px-4 sticky top-0 z-40">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-600">
            <Menu size={22} />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <HardHat size={15} className="text-white" />
            </div>
            <span className="font-black text-slate-800 text-sm">建設重機資格ナビ</span>
          </Link>
          <div className="w-10" />
        </header>
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* モバイルドロワー */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] md:hidden transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div className={`fixed left-0 top-0 bottom-0 w-64 bg-white z-[110] flex flex-col md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-5 py-5 border-b flex items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <HardHat size={18} className="text-white" />
            </div>
            <span className="font-black text-slate-800 text-sm">建設重機資格ナビ</span>
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="p-1.5 text-slate-400">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {renderLinks(() => setIsMenuOpen(false))}
        </nav>
      </div>
    </div>
  );
}
