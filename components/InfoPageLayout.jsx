import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InfoPageLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-24 pb-16 max-w-4xl mx-auto px-4 md:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
