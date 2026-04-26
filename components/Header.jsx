"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuthRequiredAction = (destination) => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    } else if (user) {
      router.push(destination);
    }
  };

  const navLinks = [
    { label: "ホーム", href: "/", active: true },
    { label: "料金プラン", href: "/pricing" },
    { label: "よくある質問", href: "/faq" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="flex justify-between items-center px-6 md:px-8 h-16 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          WiseAI Finance
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`py-5 transition-all duration-200 hover:opacity-80 active:scale-95 ${
                link.active
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-slate-600 dark:text-slate-400 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleAuthRequiredAction("/dashboard")}
                className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-all duration-200"
              >
                ダッシュボード
              </button>
              <UserButton />
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/sign-in")}
                className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-all duration-200"
              >
                ログイン
              </button>
              <button
                onClick={() => router.push("/sign-up")}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm font-medium"
              >
                新規登録
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 transition-all ${
                link.active
                  ? "text-primary font-semibold"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            {user ? (
              <div className="flex items-center space-x-3">
                <UserButton />
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleAuthRequiredAction("/dashboard");
                  }}
                  className="text-primary font-medium"
                >
                  ダッシュボード
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/sign-in");
                  }}
                  className="block w-full text-left py-2 text-slate-600 dark:text-slate-400 font-medium"
                >
                  ログイン
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/sign-up");
                  }}
                  className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-center"
                >
                  新規登録
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
