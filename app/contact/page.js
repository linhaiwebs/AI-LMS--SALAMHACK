import React from "react";
import InfoPageLayout from "@/components/InfoPageLayout";
import { Mail } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "お問い合わせ | WiseAI Finance",
  description: "WiseAI Finance お問い合わせフォーム",
};

export default function ContactPage() {
  return (
    <InfoPageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-on-surface mb-4">お問い合わせ</h1>
          <p className="text-on-surface-variant mb-8">
            ご質問やご要望がございましたら、お気軽にお問い合わせください。担当者より2営業日以内にご返信いたします。
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-on-surface-variant">
                support@wiseai-finance.com
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
              <label className="block text-sm font-medium text-on-surface mb-1">お名前</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">メールアドレス</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">お問い合わせ種別</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                <option>サービスについて</option>
                <option>料金について</option>
                <option>技術的な問題</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">メッセージ</label>
              <textarea
                required
                rows={5}
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
    </InfoPageLayout>
  );
}
