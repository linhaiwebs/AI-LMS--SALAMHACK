import React from "react";
import Link from "next/link";
import InfoPageLayout from "@/components/InfoPageLayout";
import { BookOpen, MessageSquare, Mail } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "ヘルプセンター | 金脳",
  description: "金脳 ヘルプセンター - ご利用ガイドとサポート",
};

export default function HelpPage() {
  const guides = [
    {
      icon: BookOpen,
      title: "はじめての方へ",
      description: "アカウント作成から最初のコース受講まで、ステップバイステップでご案内します。",
      links: ["アカウントの作成方法", "コースの探し方", "学習の進め方"],
    },
    {
      icon: MessageSquare,
      title: "アカウント・プラン",
      description: "プランの変更、キャンセル、アカウント設定についてご案内します。",
      links: ["プランの変更方法", "キャンセル手続き", "パスワードのリセット"],
    },
    {
      icon: Mail,
      title: "お問い合わせ",
      description: "解決しない問題がある場合は、サポートチームにお問い合わせください。",
      links: ["お問い合わせフォーム", "よくある質問"],
    },
  ];

  return (
    <InfoPageLayout>
      <h1 className="text-3xl font-bold text-on-surface mb-4">ヘルプセンター</h1>
      <p className="text-on-surface-variant mb-10">
        金脳のご利用に関するサポート情報をご提供します。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {guides.map((guide) => (
          <div
            key={guide.title}
            className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]"
          >
            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <guide.icon className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-on-surface mb-2">{guide.title}</h2>
            <p className="text-sm text-on-surface-variant mb-4">{guide.description}</p>
            <ul className="space-y-2">
              {guide.links.map((link) => (
                <li key={link}>
                  <Link href="/faq" className="text-sm text-primary hover:underline">
                    → {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-surface-container rounded-2xl p-8 text-center">
        <h2 className="text-xl font-semibold text-on-surface mb-2">お探しの答えが見つかりませんか？</h2>
        <p className="text-sm text-on-surface-variant mb-6">
          サポートチームがお手伝いします。お気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
        >
          お問い合わせ
        </Link>
      </div>
    </InfoPageLayout>
  );
}
