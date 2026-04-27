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
  title: "金脳 - AIの力で、投資をもっと賢く",
  description:
    "データ駆動のアプローチと高度な機械学習アルゴリズムで、あなたの金融リテラシーと投資戦略を次のレベルへと引き上げます。",
};

// Check if Clerk publishable key looks valid (not a placeholder)
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
const hasValidClerkKey = clerkKey.startsWith("pk_test_") && !clerkKey.includes("YOUR_");

function ConditionalClerkProvider({ children }) {
  if (!hasValidClerkKey) {
    return children;
  }
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default function RootLayout({ children }) {
  return (
    <ConditionalClerkProvider>
      <html lang="ja">
        <body className={clsx(manrope.variable, "font-[var(--font-manrope)]")}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ConditionalClerkProvider>
  );
}
