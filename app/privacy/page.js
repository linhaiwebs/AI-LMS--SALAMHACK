import React from "react";
import InfoPageLayout from "@/components/InfoPageLayout";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "プライバシーポリシー | 金脳",
  description: "金脳 プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <InfoPageLayout>
      <h1 className="text-3xl font-bold text-on-surface mb-8">プライバシーポリシー</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant text-sm leading-relaxed">
        <p>最終更新日：2024年4月1日</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">1. 収集する情報</h2>
        <p>当サービスは以下の情報を収集することがあります。</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>氏名、メールアドレス等の登録情報</li>
          <li>サービス利用履歴、学習進捗データ</li>
          <li>Cookieおよび類似技術により自動取得される情報</li>
          <li>デバイス情報、ブラウザ種別、IPアドレス</li>
        </ul>

        <h2 className="text-xl font-semibold text-on-surface mt-8">2. 利用目的</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>サービスの提供・運営</li>
          <li>ユーザーサポートの提供</li>
          <li>パーソナライズされたコンテンツの提供</li>
          <li>サービス改善のための分析</li>
          <li>お知らせやマーケティング情報の配信（同意がある場合）</li>
        </ul>

        <h2 className="text-xl font-semibold text-on-surface mt-8">3. 第三者提供</h2>
        <p>当サービスは、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>ユーザーの同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>サービス提供に必要な業務委託先への提供（適切な管理のもと）</li>
        </ul>

        <h2 className="text-xl font-semibold text-on-surface mt-8">4. データセキュリティ</h2>
        <p>当サービスは、SSL暗号化通信、アクセス制御、その他の合理的な技術的・組織的措置により、個人情報の安全管理に努めます。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">5. Cookieの利用</h2>
        <p>当サービスは、ユーザー体験の向上およびアクセス分析の目的でCookieを使用します。ブラウザの設定によりCookieを無効にすることができますが、一部機能が利用できなくなる場合があります。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">6. ユーザーの権利</h2>
        <p>ユーザーは自身の個人情報について、開示、訂正、削除、利用停止を請求することができます。お問い合わせフォームよりご連絡ください。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">7. プライバシーポリシーの変更</h2>
        <p>当サービスは、本ポリシーを随時変更することがあります。重要な変更がある場合は、サービス内でお知らせします。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">8. お問い合わせ</h2>
        <p>プライバシーに関するお問い合わせは、support@aael.liveまでご連絡ください。</p>
      </div>
    </InfoPageLayout>
  );
}
