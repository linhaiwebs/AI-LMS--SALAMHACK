import { Manrope } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./Provider";
import { validateEnv, getEnvSummary } from "@/config/env";

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
  title: "WiseAI Finance - AIの力で、投資をもっと賢く",
  description:
    "データ駆動のアプローチと高度な機械学習アルゴリズムで、あなたの金融リテラシーと投資戦略を次のレベルへと引き上げます。",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={clsx(manrope.variable, "font-[var(--font-manrope)]")}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
