"use client";

import React from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  TrendingUp,
  Brain,
  ShieldCheck,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Target,
  Users,
} from "lucide-react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <div className="min-h-screen bg-background text-foreground antialiased">
        {/* ===== Minimal LP Nav ===== */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="flex justify-between items-center px-6 md:px-8 h-14 max-w-6xl mx-auto">
          <Link href="/" className="text-lg font-bold text-primary">
            金脳
          </Link>
          <button
            onClick={() => router.push("/sign-in")}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all"
          >
            無料で始める
          </button>
        </div>
      </nav>

      <main className="pt-14">
        {/* ===== Hero ===== */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10 rounded-3xl" />
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">
                AI × 株式投資教育
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight mb-6">
              AIで学ぶ、株式投資の<br />
              <span className="text-primary">正しい知識と手法。</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto">
              初心者でも安心して始められるAI株式投資教育プログラム。
              リスクを理解し、データに基づいた投資判断ができる力を養います。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/sign-in")}
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
              >
                <span>無料アカウントを作成</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/pricing"
                className="bg-transparent border border-outline text-on-surface px-8 py-3.5 rounded-lg font-medium hover:bg-surface-container transition-all text-center"
              >
                料金プランを見る
              </Link>
            </div>
            <p className="text-xs text-on-surface-variant mt-4">
              クレジットカード不要　｜　30秒で登録完了
            </p>
          </div>
        </section>

        {/* ===== Social Proof ===== */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 pb-16">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-xs text-on-surface-variant">投資教育コース</p>
            </div>
            <div className="w-px h-10 bg-outline-variant hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-xs text-on-surface-variant">AI学習サポート</p>
            </div>
            <div className="w-px h-10 bg-outline-variant hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">無料</p>
              <p className="text-xs text-on-surface-variant">フリープラン</p>
            </div>
            <div className="w-px h-10 bg-outline-variant hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">いつでも</p>
              <p className="text-xs text-on-surface-variant">キャンセル可能</p>
            </div>
          </div>
        </section>

        {/* ===== 3 Features ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
              AIが変える、投資学習のカタチ
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              従来の投資本やセミナーとは違う、パーソナライズされた学習体験。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AIパーソナライズ学習",
                description:
                  "あなたの理解度と目標に合わせて、AIが最適な学習コースを自動生成。無駄なく効率的に知識を身につけられます。",
              },
              {
                icon: BarChart3,
                title: "データ駆動の学習",
                description:
                  "市場データの読み方や分析方法をAIが分かりやすく解説。情報を正しく理解する力を養います。",
              },
              {
                icon: ShieldCheck,
                title: "リスク管理を学ぶ",
                description:
                  "投資において最も重要なリスク管理を実践的に学習。シミュレーション機能で安全な環境で経験を積めます。",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== How It Works ===== */}
        <section className="bg-surface-container py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
                3ステップで始めるAI投資学習
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Users,
                  title: "無料登録",
                  description: "30秒でアカウント作成。クレジットカード不要ですぐに始められます。",
                },
                {
                  step: "2",
                  icon: Target,
                  title: "学習コースを選択",
                  description: "初心者向けから上級者向けまで。AIがあなたに最適なコースを提案します。",
                },
                {
                  step: "3",
                  icon: TrendingUp,
                  title: "実践的に学ぶ",
                  description: "リアルタイムデータとシミュレーションで、安全な環境で投資スキルを磨きます。",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Course Preview ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
              人気の投資教育コース
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              初心者から上級者まで、レベルに合わせたコースをご用意しています。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AIが導く米国株投資の基礎",
                level: "初級",
                lessons: "全12レッスン",
                duration: "約6時間",
                topics: ["米国市場の仕組み", "銘柄スクリーニングの基礎", "リスク管理の基本"],
              },
              {
                title: "アルゴリズム・トレード入門",
                level: "中級",
                lessons: "全15レッスン",
                duration: "約10時間",
                topics: ["Pythonを使った分析", "バックテスト手法", "自動売買ルールの構築"],
              },
              {
                title: "ポートフォリオ最適化戦略",
                level: "上級",
                lessons: "全10レッスン",
                duration: "約8時間",
                topics: ["モダンポートフォリオ理論", "リスク調整後リターン", "分散投資の実践"],
              },
            ].map((course) => (
              <div
                key={course.title}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-xs text-on-surface-variant flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </span>
                </div>
                <h3 className="text-base font-semibold text-on-surface mb-1">
                  {course.title}
                </h3>
                <p className="text-xs text-on-surface-variant mb-4">{course.lessons}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-on-surface-variant">{topic}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => router.push("/sign-in")}
                  className="w-full bg-primary/10 text-primary py-2.5 rounded-lg text-sm font-medium hover:bg-primary/20 transition-all"
                >
                  受講を始める
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Testimonials ===== */}
        <section className="bg-surface-container py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
                ユーザーの声
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "T.Y.",
                  role: "会社員・投資歴1年",
                  text: "投資の知識が全くなかった私でも、AIがレベルに合わせて教えてくれるので無理なく学べました。リスク管理の大切さがよくわかりました。",
                  stars: 5,
                },
                {
                  name: "M.K.",
                  role: "自営業・投資歴3年",
                  text: "これまで感覚で投資をしていましたが、データに基づいた判断の重要性を学びました。シミュレーション機能が特に役立ちます。",
                  stars: 5,
                },
                {
                  name: "S.N.",
                  role: "会社員・投資初心者",
                  text: "無料プランから始めて、価値を感じてプロプランにアップグレードしました。AI学習アシスタントがとても役立ちます。",
                  stars: 4,
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]"
                >
                  <div className="flex space-x-0.5 mb-3">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                    {Array.from({ length: 5 - review.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-outline" />
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{review.name}</p>
                    <p className="text-xs text-on-surface-variant">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Pricing Quick ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
              シンプルな料金プラン
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              いつでもプランの変更・キャンセルが可能です。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Free */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <h3 className="text-lg font-semibold text-on-surface mb-1">フリー</h3>
              <p className="text-xs text-on-surface-variant mb-4">まずはお試しください</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-on-surface">¥0</span>
                <span className="text-sm text-on-surface-variant">/月</span>
              </div>
              <ul className="space-y-2 mb-8">
                {["基本コース3本", "AI学習アシスタント", "コミュニティ参加"].map((f) => (
                  <li key={f} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-on-surface-variant">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/sign-in")}
                className="w-full bg-primary/10 text-primary py-3 rounded-lg font-medium text-sm hover:bg-primary/20 transition-all"
              >
                無料で始める
              </button>
            </div>
            {/* Pro */}
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg ring-2 ring-primary">
              <h3 className="text-lg font-semibold mb-1">プロ</h3>
              <p className="text-xs text-white/70 mb-4">本格的にスキルアップ</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥2,980</span>
                <span className="text-sm text-white/70">/月</span>
              </div>
              <ul className="space-y-2 mb-8">
                {[
                  "全コース無制限",
                  "AI学習アシスタント24/7",
                  "パーソナライズ学習",
                  "リスクシミュレーション学習",
                  "優先サポート",
                ].map((f) => (
                  <li key={f} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-sm text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/sign-in")}
                className="w-full bg-white text-primary py-3 rounded-lg font-medium text-sm hover:shadow-lg transition-all"
              >
                プロプランで始める
              </button>
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <BookOpen className="w-10 h-10 text-white/80 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                AIと一緒に、投資の正しい知識を身につけよう
              </h2>
              <p className="text-base text-white/80 mb-8">
                無料アカウントを作成して、パーソナライズされたAI投資学習を始めましょう。
              </p>
              <button
                onClick={() => router.push("/sign-in")}
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center space-x-2"
              >
                <span>無料で始める</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-white/60 mt-4">
                クレジットカード不要　｜　いつでもキャンセル可能
              </p>
            </div>
          </div>
        </section>

        {/* ===== Important Disclaimer (Google Ads Compliance) ===== */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 pb-16">
          <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant">
            <h3 className="text-sm font-semibold text-on-surface mb-3">
              ⚠️ 重要なお知らせ
            </h3>
            <div className="text-xs text-on-surface-variant leading-relaxed space-y-2">
              <p>
                当サービスは、一般的な金融教育を目的としており、投資勧誘、特定の金融商品の購入・売却の推奨、または投資アドバイスを目的とするものではありません。
              </p>
              <p>
                投資にはリスクが伴います。過去の実績や分析結果は将来の成果を保証するものではありません。すべての投資判断は、ご自身の責任において行ってください。
              </p>
              <p>
                株式投資に関する最終的な決定は、ご自身の判断と責任において行ってください。必要に応じて、独立した金融アドバイザーにご相談ください。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== LP Footer ===== */}
      <footer className="w-full py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2024 金脳. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-slate-500 hover:text-primary transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-primary transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/tokushoho" className="text-xs text-slate-500 hover:text-primary transition-colors">
              特定商取引法
            </Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-primary transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
