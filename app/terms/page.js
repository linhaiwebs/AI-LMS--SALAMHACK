import React from "react";
import InfoPageLayout from "@/components/InfoPageLayout";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "利用規約 | 金脳",
  description: "金脳 利用規約",
};

export default function TermsPage() {
  return (
    <InfoPageLayout>
      <h1 className="text-3xl font-bold text-on-surface mb-8">利用規約</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant text-sm leading-relaxed">
        <p>最終更新日：2024年4月1日</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第1条（適用）</h2>
        <p>本規約は、金脳（以下「当サービス」）が提供するすべてのサービスの利用に適用されます。利用者（以下「ユーザー」）は、本サービスを利用することにより、本規約に同意したものとみなされます。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第2条（利用登録）</h2>
        <p>ユーザーは、当サービスが定める方法により登録を行うものとします。登録情報に虚偽があった場合、当サービスは登録を取消すことができます。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第3条（提供サービス）</h2>
        <p>当サービスは、AIを活用した金融教育コンテンツの提供、市場分析情報の提供、およびパーソナライズされた学習コースの提供を行います。提供される情報は教育目的のみであり、投資勧誘や金融商品の購入を推奨するものではありません。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第4条（禁止事項）</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>法令または公序良俗に違反する行為</li>
          <li>当サービスの運営を妨害する行為</li>
          <li>他のユーザーまたは第三者の権利を侵害する行為</li>
          <li>当サービスの情報を不正に取得または改ざんする行為</li>
          <li>アカウントを第三者に譲渡または貸与する行為</li>
        </ul>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第5条（免責事項）</h2>
        <p>当サービスで提供される情報は、一般的な教育目的のみを目的としており、投資アドバイス、金融助言、または証券の売買の推奨を構成するものではありません。投資の決定はユーザー自身の判断と責任において行ってください。過去の実績は将来の成果を保証するものではありません。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第6条（サービスの変更・終了）</h2>
        <p>当サービスは、ユーザーへの事前通知なく、サービス内容の変更または提供の終了を行うことができます。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第7条（知的財産権）</h2>
        <p>当サービスに含まれるすべてのコンテンツ、デザイン、ロゴ等の知的財産権は、当サービスに帰属します。</p>

        <h2 className="text-xl font-semibold text-on-surface mt-8">第8条（準拠法・管轄）</h2>
        <p>本規約は日本法に準拠し、本規約に関する紛争は東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
      </div>
    </InfoPageLayout>
  );
}
