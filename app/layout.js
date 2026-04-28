import { Manrope } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./Provider";
import { validateEnv, getEnvSummary } from "@/config/env";

export const dynamic = "force-dynamic";

// Validate environment variables at build/startup time
const envStatus = validateEnv();
if (envStatus.valid) {
  console.log("✅ Environment configuration valid");
} else {
  console.warn(
    "⚠️  App may not work correctly. Fix .env.local before deploying."
  );
}

// Log safe summary in development
if (process.env.NODE_ENV === "development") {
  console.log("🔧 Environment config:", getEnvSummary());
}

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "金脳 - AIで学ぶ投資教育",
  description:
    "AIを活用したパーソナライズ学習で、金融リテラシーと投資の基礎知識を効果的に身につける教育プラットフォーム。",
};

const jaLocalization = {
  locale: "ja-JP",
  socialButtonsBlockButton: "{{provider}}で続ける",
  socialButtonsBlockButtonManyInView: "{{provider}}で続ける",
  dividerText: "または",
  formFieldLabel__emailAddress: "メールアドレス",
  formFieldLabel__emailAddresses: "メールアドレス",
  formFieldLabel__phoneNumber: "電話番号",
  formFieldLabel__username: "ユーザー名",
  formFieldLabel__emailAddress_username: "メールアドレスまたはユーザー名",
  formFieldLabel__password: "パスワード",
  formFieldLabel__currentPassword: "現在のパスワード",
  formFieldLabel__newPassword: "新しいパスワード",
  formFieldLabel__confirmPassword: "パスワード確認",
  formFieldLabel__firstName: "名前",
  formFieldLabel__lastName: "苗字",
  formFieldInputPlaceholder__emailAddress: "example@email.com",
  formFieldInputPlaceholder__password: "パスワードを入力",
  formFieldInputPlaceholder__firstName: "名前",
  formFieldInputPlaceholder__lastName: "苗字",
  formFieldAction__forgotPassword: "パスワードをお忘れですか？",
  formButtonPrimary: "続ける",
  formButtonPrimary__verify: "認証する",
  backButton: "戻る",
  signIn: {
    start: {
      title: "ログイン",
      subtitle: "アカウントにログインしてください",
      actionText: "アカウントをお持ちでない方は",
      actionLink: "新規登録",
      actionLink__use_email: "メールアドレスでログイン",
      actionLink__use_phone: "電話番号でログイン",
      actionLink__use_username: "ユーザー名でログイン",
      actionLink__use_passkey: "パスキーでログイン",
    },
    password: {
      title: "パスワードを入力",
      subtitle: "アカウントのパスワードを入力してください",
      actionLink: "パスワードをお忘れですか？",
    },
    forgotPassword: {
      title: "パスワードをリセット",
      subtitle: "パスワードリセットの手順をお送りします",
      subtitle_email: "メールアドレスにリセットリンクを送信します",
      subtitle_phone: "電話番号にリセットコードを送信します",
      resendButton: "再送信",
    },
    resetPassword: {
      title: "新しいパスワードを設定",
      formButtonPrimary: "パスワードを変更",
      successMessage: "パスワードが変更されました",
    },
    emailCode: {
      title: "認証コードを入力",
      subtitle: "メールに送信されたコードを入力してください",
      resendButton: "コードを再送信",
    },
    phoneCode: {
      title: "認証コードを入力",
      subtitle: "電話番号に送信されたコードを入力してください",
      resendButton: "コードを再送信",
    },
  },
  signUp: {
    start: {
      title: "新規登録",
      subtitle: "アカウントを作成してください",
      actionText: "すでにアカウントをお持ちの方は",
      actionLink: "ログイン",
    },
  },
  userButton: {
    action__signOut: "ログアウト",
    action__manageAccount: "アカウント管理",
    action__addAccount: "アカウントを追加",
  },
  userProfile: {
    start: {
      headerTitle: "アカウント設定",
    },
  },
  footerPageLink__help: "ヘルプ",
  footerPageLink__privacy: "プライバシー",
  footerPageLink__terms: "利用規約",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={jaLocalization}>
      <html lang="ja">
        <body className={clsx(manrope.variable, "font-[var(--font-manrope)]")}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
