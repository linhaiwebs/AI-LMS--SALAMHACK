import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="font-bold text-slate-900 dark:text-white text-lg mb-4">
            WiseAI Finance
          </div>
          <p className="text-slate-500 mb-4 text-sm">
            © 2024 WiseAI Finance. All rights reserved.
          </p>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">
            サービス
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              AI市場分析
            </Link>
            <Link
              href="/create"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              コース作成
            </Link>
            <Link
              href="/pricing"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              料金プラン
            </Link>
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">
            サポート
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/help"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              ヘルプセンター
            </Link>
            <Link
              href="/faq"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              よくある質問
            </Link>
            <Link
              href="/contact"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">
            法務情報
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/terms"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/tokushoho"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}