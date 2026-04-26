import React from "react";
import InfoPageLayout from "@/components/InfoPageLayout";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "特定商取引法に基づく表記 | WiseAI Finance",
  description: "WiseAI Finance 特定商取引法に基づく表記",
};

export default function TokushohoPage() {
  return (
    <InfoPageLayout>
      <h1 className="text-3xl font-bold text-on-surface mb-8">特定商取引法に基づく表記</h1>
      <div className="space-y-6">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {[
              ["事業者", "WiseAI Finance"],
              ["販売価格", "各プランページに記載"],
              ["対価の支払時期", "クレジットカード決済の場合：即時／請求書払いの場合：月末締め翌月末払い"],
              ["支払方法", "クレジットカード、銀行振込"],
              ["引渡時期", "オンラインサービスのため、登録完了後直ちにご利用いただけます"],
              ["返金について", "サービス提供前のキャンセルは全額返金いたします。サービス提供後の返金については、別途定める返金ポリシーに基づきます"],
              ["販売業者", "WiseAI Finance"],
              ["代表者", "―"],
              ["所在地", "―"],
              ["電話番号", "サポートページよりお問い合わせください"],
              ["メールアドレス", "support@wiseai-finance.com"],
              ["運営責任者", "―"],
              ["追加料金の有無", "記載料金以外に追加費用は発生しません"],
              ["キャンセルについて", "月額プランはいつでもキャンセル可能です。キャンセル後、当月末までサービスをご利用いただけます"],
            ].map(([label, value], i) => (
              <tr key={i} className="border-b border-outline-variant">
                <th className="text-left py-4 pr-6 font-medium text-on-surface align-top w-1/3">
                  {label}
                </th>
                <td className="py-4 text-on-surface-variant">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </InfoPageLayout>
  );
}
