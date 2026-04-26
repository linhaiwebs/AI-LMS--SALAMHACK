import React from "react";
import Link from "next/link";
import InfoPageLayout from "@/components/InfoPageLayout";
import { Check } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "料金プラン | WiseAI Finance",
  description: "WiseAI Finance 料金プラン - 無料プランとプロプランの比較",
};

export default function PricingPage() {
  const plans = [
    {
      name: "フリー",
      price: "¥0",
      period: "/月",
      description: "AI投資学習を始めるのに最適なプラン",
      features: [
        "基本コース3本まで受講",
        "AI市場分析レポート（週1回）",
        "コミュニティフォーラム参加",
        "基本的な学習進捗トラッキング",
      ],
      cta: "無料で始める",
      href: "/sign-up",
    },
    {
      name: "プロ",
      price: "¥2,980",
      period: "/月",
      description: "本格的に投資スキルを身につけるプラン",
      features: [
        "全コース無制限アクセス",
        "AI市場分析レポート（毎日）",
        "パーソナライズされた学習パス",
        "リスクシミュレーションツール",
        "優先サポート",
        "新しいコースの先行アクセス",
      ],
      cta: "プロプランで始める",
      href: "/sign-up",
      highlighted: true,
    },
  ];

  return (
    <InfoPageLayout>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-on-surface mb-4">料金プラン</h1>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          あなたの学習スタイルに合わせてプランをお選びください。いつでもアップグレード・キャンセル可能です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] ${
              plan.highlighted
                ? "bg-primary text-white ring-2 ring-primary"
                : "bg-surface-container-lowest text-on-surface"
            }`}
          >
            <h2
              className={`text-xl font-semibold mb-2 ${
                plan.highlighted ? "text-white" : "text-on-surface"
              }`}
            >
              {plan.name}
            </h2>
            <p
              className={`text-sm mb-4 ${
                plan.highlighted ? "text-white/80" : "text-on-surface-variant"
              }`}
            >
              {plan.description}
            </p>
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
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Check
                    className={`w-4 h-4 flex-shrink-0 ${
                      plan.highlighted ? "text-white" : "text-secondary"
                    }`}
                  />
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
            <Link
              href={plan.href}
              className={`block w-full text-center py-3 rounded-lg font-medium text-sm transition-all ${
                plan.highlighted
                  ? "bg-white text-primary hover:shadow-lg"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-on-surface-variant">
        <p>すべてのプランに消費税が含まれています。クレジットカードでのお支払いに対応しています。</p>
        <p className="mt-2">エンタープライズプランについては、<Link href="/contact" className="text-primary underline">お問い合わせ</Link>ください。</p>
      </div>
    </InfoPageLayout>
  );
}
