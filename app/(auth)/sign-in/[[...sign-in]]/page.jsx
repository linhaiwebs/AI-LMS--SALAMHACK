import { SignIn } from '@clerk/nextjs'
import { Brain } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="bg-white min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative hidden lg:block lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="AI投資教育"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-2xl font-bold mb-2">AIで学ぶ、投資の基礎知識。</h2>
            <p className="text-sm opacity-90">パーソナライズされた学習で、金融リテラシーを効果的に身につけましょう。</p>
          </div>
        </aside>

        <main className="flex items-center justify-center px-6 py-12 sm:px-8 lg:col-span-7 lg:px-12 xl:col-span-6">
          <div className="w-full max-w-md flex flex-col items-center gap-6">
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
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

            <div className="w-full flex justify-center">
              <SignIn />
            </div>

            <p className="text-center text-xs text-gray-400">
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