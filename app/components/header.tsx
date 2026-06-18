"use client";

import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    return (
        <div className="flex flex-row bg-blue-500/50 text-white p-4 justify-between dark:bg-slate-800 dark:text-slate-100">
            <h1 className="text-2xl font-bold my-auto">タスク管理アプリ</h1>
            <div className="relative w-auto py-auto flex flex-row">
                <span className="absolute inset-y-3 left-5 flex items-center">
                    <Search className="h-5 w-5 text-white dark:text-slate-400" />
                </span>
                <input
                    type="text"
                    placeholder="タスクを検索..."
                    className="w-64 h-10 tracking-widest rounded-md border border-white/20 bg-blue-500/10 px-10 m-2 text-white placeholder:text-white/60 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-100 dark:placeholder:text-slate-400"
                />
                <div className="my-auto">
                    <button
                        type="button"
                        aria-label="テーマを切り替え"
                        disabled={!mounted}
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className={`relative inline-flex h-10 w-17 items-center justify-between rounded-md px-2 py-3 transition-colors disabled:opacity-50 ${isDark ? "bg-stone-600" : "bg-blue-500/50"}`}
                    >
                        <span
                            className={`absolute top-1 left-0.5 h-8 w-8 rounded-md bg-white/40 transition-transform duration-200 ${isDark ? "translate-x-8" : "translate-x-0"
                                }`}
                        />
                        <Sun className={`relative z-10 h-5 w-5 ${isDark ? "text-white/60" : "text-white"}`} />
                        <Moon className={`relative z-10 h-5 w-5 ${isDark ? "text-white" : "text-white/60"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}