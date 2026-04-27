import { SignIn } from '@clerk/nextjs'
import { Brain } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="bg-white min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="AI投資教育"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-2xl font-bold mb-2">AIの力で、投資をもっと賢く。</h2>
            <p className="text-sm opacity-90">データ駆動のアプローチで、あなたの金融リテラシーを次のレベルへ。</p>
          </div>
        </aside>

        <main
          className="flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl w-full flex flex-col gap-6">
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-primary">金脳</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                ログイン
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                アカウントにログインして、AI投資学習を始めましょう
              </p>
            </div>

            <SignIn
              localization={{
                signInTitle: 'ログイン',
                signUpLinkText: 'アカウントをお持ちでない方は新規登録',
                signUpActionText: '新規登録',
                socialBlockRowText: 'または',
                dividerText: 'または',
                formFieldLabel__emailAddress: 'メールアドレス',
                formFieldLabel__password: 'パスワード',
                formButtonPrimary: 'ログイン',
                forgotPasswordLinkText: 'パスワードをお忘れですか？',
                forgotPasswordActionText: 'パスワードをリセット',
                resendCodeLinkText: 'コードを再送信',
                alternativeMethodsLinkText: '別の方法でログイン',
                footerActionText: 'アカウントをお持ちでない方は',
                footerActionLinkText__signUp: '新規登録',
                cardTitle: 'ログイン',
              }}
            />

            <p className="text-center text-xs text-gray-400 mt-2">
              ログインすることで、
              <Link href="/terms" className="underline hover:text-gray-600">利用規約</Link>
              および
              <Link href="/privacy" className="underline hover:text-gray-600">プライバシーポリシー</Link>
              に同意したものとみなされます。
            </p>
          </div>
        </main>
      </div>
    </section>
  )
}