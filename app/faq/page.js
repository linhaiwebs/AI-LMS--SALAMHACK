import React from "react";
import InfoPageLayout from "@/components/InfoPageLayout";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "よくある質問 | WiseAI Finance",
  description: "WiseAI Finance よくある質問（FAQ）",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "WiseAI Financeはどんなサービスですか？",
      a: "WiseAI Financeは、AIを活用した株式投資教育プラットフォームです。パーソナライズされた学習コース、リアルタイムの市場分析、リスクシミュレーションなどを提供し、初心者から上級者まで投資スキルの向上をサポートします。",
    },
    {
      q: "投資の初心者でも利用できますか？",
      a: "はい、初心者向けのコースをご用意しています。AIがあなたのレベルに合わせた学習パスを提案するため、投資の知識がない方でも無理なく始められます。",
    },
    {
      q: "無料プランでも利用できますか？",
      a: "はい、フリープランでは基本コース3本まで受講でき、週1回のAI市場分析レポートもご覧いただけます。さらに多くの機能をご利用になりたい場合は、プロプランへのアップグレードが可能です。",
    },
    {
      q: "提供される情報は投資アドバイスですか？",
      a: "いいえ、当サービスで提供されるすべての情報は教育目的のみです。特定の銘柄の購入や売却を推奨するものではありません。投資の決定はご自身の判断と責任において行ってください。",
    },
    {
      q: "いつでもプランの変更やキャンセルはできますか？",
      a: "はい、プランのアップグレード・ダウングレード、およびキャンセルはいつでも可能です。キャンセルした場合、当月末までサービスをご利用いただけます。",
    },
    {
      q: "決済方法は何に対応していますか？",
      a: "現在、クレジットカード（Visa、Mastercard、American Express、JCB）に対応しています。",
    },
    {
      q: "学習の進捗は保存されますか？",
      a: "はい、すべての学習進捗はアカウントに自動保存されます。いつでも続きから学習を再開できます。",
    },
    {
      q: "モバイルでも利用できますか？",
      a: "はい、ブラウザ版はスマートフォンやタブレットにも対応しています。どこでも学習を続けられます。",
    },
  ];

  return (
    <InfoPageLayout>
      <h1 className="text-3xl font-bold text-on-surface mb-4">よくある質問</h1>
      <p className="text-on-surface-variant mb-10">
        よくいただくご質問にお答えします。解決しない場合は、
        <Link href="/contact" className="text-primary underline">お問い合わせ</Link>
        ください。
      </p>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-outline-variant pb-6">
            <h2 className="text-base font-semibold text-on-surface mb-2">Q. {faq.q}</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">A. {faq.a}</p>
          </div>
        ))}
      </div>
    </InfoPageLayout>
  );
}
