"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Brain,
  ArrowRight,
  PlayCircle,
  TrendingUp,
  BarChart3,
  Route,
  ShieldCheck,
  MessageSquare,
  Bookmark,
} from "lucide-react";

const Home = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const handleAuthRequiredAction = (destination) => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    } else if (user) {
      router.push(destination);
    }
  };

  const courses = [
    {
      title: "AIが導く米国株投資の基礎",
      description:
        "米国市場の構造から、AIを活用した銘柄分析の基礎手法までを学びます。",
      level: "初級",
      lessons: "全12レッスン",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOkKSYOWESd7WJNV-uYOBv7aAtEhzP0vS0rXUVQtwEIB3i8CoWeMXGpFAEZdCB8vWu28nay-zZgfXb5DzjNTznQo_jbbRmDSWOFt_-s59JPKY-DgQ5B_HQkBrpywIe-hCi-yukaWwaxAxdAH6kgVHL4DIBQrAsgOgK8aP0k15zqk7fHzU80Foq6GXtbHaahSTo2zS5DvZYNBb4KjBnzeYYu8s7ow8au9OrMLm3aCK1QobucSzqldoYaPEYVToikGH0dpFzARCnyAg",
    },
    {
      title: "アルゴリズム・トレード入門",
      description:
        "PythonとAIを用いて、基本的な自動売買ルールの構築とバックテストの実行方法を習得します。",
      level: "中級",
      lessons: "全15レッスン",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAqCJY0Ax88unOQv2ZrurSqJSFipf-zKbslxDoZTQu1ZYE456dTS9lYIQi71dYqltgKT7R1qCo6gB0pY7DS4gHz9lBFUNrIYGaOqvVm7yhQ22T-KBLMUKXmKTOkqcVm-RikWDcccQo-JdW0clEPHB4y0pyQ2hpMqIW4j5p7fRiZ764S506OONL9l5T_N73jsU6sd7ygOUnTwEj8b_QnddpzL-yUqg3zuPJNXs-zwgITyROygrybW3cMYo5lyCLO_bqzK7hQPfZEdDU",
    },
    {
      title: "ポートフォリオ最適化戦略",
      description:
        "モダンポートフォリオ理論に基づく、AIによるリスクとリターンの基礎を学ぶアプローチ。",
      level: "上級",
      lessons: "全10レッスン",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBhKUk67I_LQVvbvT5_AlrtjZJZDqo2vi1oQOW0aAxQjGaVABgEuPoc_BqAHNm9xA4TayTwBoN_Cz-TyEznVvzav0IVGP0WxTJRgGwgQN1x7KO7V_YLRBcFsOeZ1_XjrfOFKEgjNAc8zmuZi-FUt1QCBcbdZKSJ4qoP2akDLQcTYq8p9NdnEl59Ng2baCQN3OfRqn2rslZ8RSVPuRvS56ZYtJSZ9OcdOiSqk5VOfNl8knX16IEY9bftcFr4OEBSIXon5TFW732QPQg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-surface opacity-50 -z-10 rounded-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1.5 rounded-full">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary tracking-wide">
                  次世代のAI投資プラットフォーム
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
                AIの力で、
                <br />
                <span className="text-primary-container">投資をしっかり学ぶ。</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                AIを活用したパーソナライズ学習で、金融リテラシーと投資の基礎知識を効果的に身につけましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => handleAuthRequiredAction("/create")}
                  className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                >
                  <span>無料で始める</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleAuthRequiredAction("/dashboard")}
                  className="bg-transparent border border-outline text-on-surface px-6 py-3 rounded-lg text-sm font-medium hover:bg-surface-container transition-all flex items-center justify-center space-x-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>デモを見る</span>
                </button>
              </div>
            </div>

            {/* Hero Visualization */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative rounded-2xl shadow-xl w-full h-[400px] overflow-hidden bg-gradient-to-br from-primary/5 to-tertiary/5">
                <Image
                  alt="Financial data analysis visualization"
                  fill
                  className="object-cover rounded-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDb8IaeHi2T2mPkG2pCDIGYGub3paBHts5va-bZd1uTuRfT2b0zCTj11cyKrJ-f9_ugkpa-8ZyVrP1FS0T2PEG2PdoQZ0OOCTpR3Sr89oPdyWY76DblDJz7J5QA6t4TODCeD8OOQUA2Qoq1_jFS9cEQlFvgEv6WZJofXV8Vc8-euDL1dlboYZ49OYsPIueBIfVzdU6lEJXTzA75Z20PI2HH-KuC1K6XC0X1CbwL2APxSaaxntKXBCxqKY65cbkMqoFaO0XC0sIr0"
                />
              </div>
              {/* Floating Glass Card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl w-64">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-secondary-container/20 p-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">
                      学習完了率
                    </p>
                    <p className="text-2xl font-semibold text-on-surface">
                      コース対応
                    </p>
                  </div>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full mt-2">
                  <div className="bg-secondary h-2 rounded-full w-[70%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Why Choose Us */}
        <section id="about" className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-on-surface mb-4">
              次世代の投資学習体験
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
              複雑な金融知識をAIが分かりやすく解説し、あなたに最適な学習パスを提供します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Item 1 (Large) */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] flex flex-col justify-between">
              <div>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-primary-container" />
                </div>
                <h3 className="text-2xl font-semibold text-on-surface mb-3">
                  AI市場分析で学ぶ
                </h3>
                <p className="text-base text-on-surface-variant">
                  市場データの読み方や分析方法をAIが分かりやすく解説。投資の基礎知識を体系的に身につけられます。
                </p>
              </div>
              <div className="mt-8 bg-surface rounded-xl h-48 border border-outline-variant flex items-center justify-center">
                <div className="text-center space-y-3">
                  <BarChart3 className="w-12 h-12 text-outline mx-auto" />
                  <p className="text-sm text-outline">Interactive Chart</p>
                </div>
              </div>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="bg-secondary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Route className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-on-surface mb-3">
                パーソナライズされた学習
              </h3>
              <p className="text-base text-on-surface-variant">
                あなたの知識レベルや投資目標に合わせて、AIが最適なカリキュラムを自動生成します。
              </p>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="bg-tertiary-container/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-tertiary" />
              </div>
              <h3 className="text-2xl font-semibold text-on-surface mb-3">
                リスクシミュレーション
              </h3>
              <p className="text-base text-on-surface-variant">
                仮想環境でポートフォリオを構築し、様々な市場シナリオにおけるリスクを安全に体験できます。
              </p>
            </div>
            {/* Bento Item 4 (Horizontal) */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-xl overflow-hidden relative bg-gradient-to-br from-primary/10 to-tertiary/10">
                  <Image
                    alt="Financial dashboard on a tablet"
                    fill
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmXqU5sfVxOoIO4bjH9bBjF-H3PK2LaMFCdowOnf7SiMgThe7dx9-DrsPHakaf12W47F8-KentUNqcbllPBSiCGOpSpZGnvmqid0GjiWSBOBo_OjQt-b1TFPVv2udxEhZkvJlNoVHMNUk6HezO91HmgV06ih2iyw8cEMGfe97bT5al6zTzMJ08HthmowPBZBeo8WAxddzsP5O0SfEcdleXn-1G92aIMBTqbyDyDMAf1DiLY41V5iFA0RJb8aqks5807EhpeLNCso"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-on-surface mb-2">
                  AI学習アシスタント
                </h3>
                <p className="text-base text-on-surface-variant">
                  投資に関する疑問をいつでもAIに質問可能。専門用語も分かりやすく解説します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-2">
                人気コース
              </h2>
              <p className="text-base text-on-surface-variant">
                厳選された実践的なカリキュラム
              </p>
            </div>
            <button
              onClick={() => handleAuthRequiredAction("/dashboard")}
              className="text-primary-container font-medium text-sm hover:underline flex items-center"
            >
              すべて見る <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                onClick={() => handleAuthRequiredAction("/create")}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(26,33,33,0.05)] group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <Image
                    alt={course.title}
                    fill
                    className="object-cover"
                    src={course.image}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-on-surface">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <span className="text-xs text-outline">{course.lessons}</span>
                    <Bookmark className="w-4 h-4 text-outline" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3+", label: "投資教育コース" },
              { value: "24/7", label: "AI学習サポート" },
              { value: "無料", label: "フリープラン" },
              { value: "いつでも", label: "学習可能" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-on-surface mb-4">
              ユーザーの声
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
              金脳で投資スキルを磨いた方々の体験談
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "田中 健太",
                role: "個人投資家",
                text: "投資の基礎を体系的に学べるので、初心者にもおすすめです。専門用語も分かりやすく解説してくれます。",
              },
              {
                name: "佐藤 美咲",
                role: "金融アナリスト",
                text: "アルゴリズムトレードのコースは実践的で、学習内容を理解するのに役立ちました。リスク管理の観点からも有益な学習プラットフォームです。",
              },
              {
                name: "山田 雄一",
                role: "会社員",
                text: "仕事帰りのスキマ時間で学べるのが良いです。AIアシスタントに質問すれば、専門用語も分かりやすく解説してくれます。",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-on-surface mb-4">
              料金プラン
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
              あなたの学習スタイルに合わせたプランを選択
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "フリー",
                price: "¥0",
                period: "/月",
                features: [
                  "基本コース3本まで",
                  "AI学習アシスタント",
                  "コミュニティアクセス",
                ],
                cta: "無料で始める",
                highlighted: false,
              },
              {
                name: "プロ",
                price: "¥2,980",
                period: "/月",
                features: [
                  "全コース無制限アクセス",
                  "AI学習アシスタント24/7",
                  "リスクシミュレーション学習",
                  "パーソナライズ学習パス",
                ],
                cta: "プロプランで始める",
                highlighted: true,
              },
              {
                name: "エンタープライズ",
                price: "お問い合わせ",
                period: "",
                features: [
                  "チーム管理機能",
                  "カスタム学習プラン",
                  "専任サポート",
                  "API連携",
                ],
                cta: "お問い合わせ",
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] ${
                  plan.highlighted
                    ? "bg-primary text-white ring-2 ring-primary scale-105"
                    : "bg-surface-container-lowest text-on-surface"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    plan.highlighted ? "text-white" : "text-on-surface"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-on-surface"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/70" : "text-on-surface-variant"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? "text-white" : "text-secondary"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-white/90" : "text-on-surface-variant"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    plan.name === "エンタープライズ"
                      ? document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      : handleAuthRequiredAction("/sign-up")
                  }
                  className={`w-full py-3 rounded-lg font-medium text-sm transition-all ${
                    plan.highlighted
                      ? "bg-white text-primary hover:shadow-lg"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="bg-surface-tint rounded-3xl p-12 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center mix-blend-overlay"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                今すぐ投資学習を始めよう
              </h2>
              <p className="text-lg text-white/80 mb-10">
                無料アカウントを作成して、AIによるパーソナライズされた投資学習コースにアクセスしましょう。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => handleAuthRequiredAction("/sign-up")}
                  className="bg-white text-surface-tint px-8 py-4 rounded-lg text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  無料アカウント登録
                </button>
                <button
                  onClick={() => handleAuthRequiredAction("/dashboard")}
                  className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                >
                  資料をダウンロード
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-4">
                お問い合わせ
              </h2>
              <p className="text-base text-on-surface-variant mb-8">
                ご質問やご要望がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="text-sm text-on-surface-variant">
                    support@aael.live
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">
                    お名前
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">
                    メッセージ
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Google Ads Compliance Disclaimer */}
      <div className="bg-surface-container border-t border-outline-variant py-6">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <p className="text-xs text-on-surface-variant leading-relaxed text-center">
            ⚠️ <strong>重要事項：</strong>当サービスは金融教育を目的としており、投資勧誘・投資アドバイス・特定の金融商品の推奨を行うものではありません。投資にはリスクが伴い、過去の実績は将来の成果を保証するものではありません。すべての投資判断はご自身の責任において行ってください。必要に応じて、独立した金融アドバイザーにご相談ください。
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
