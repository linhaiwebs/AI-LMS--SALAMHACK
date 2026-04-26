/**
 * Environment variable validation for WiseAI Finance.
 * Call `validateEnv()` at app startup to ensure all required variables are set.
 */

let _validated = false;

const requiredVars = [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "NEXT_PUBLIC_DATABSE_CONNECTION_STRING",
  "GEMINI_API_KEY",
];

const optionalVars = {
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: "/sign-in",
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: "/sign-up",
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: "/dashboard",
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: "/dashboard",
  INNGEST_EVENT_KEY:
    "kredD78zfedLFN_5pq6_UwjIOFnAwZW6AArZePX67QiCKUsyUqRt_OlQtnG5L0eI1x1q2HblJKXVD1RzQpg5lQ",
  PORT: "3000",
};

/**
 * Validates that all required environment variables are set.
 * Returns an object with `valid` (boolean) and `missing` (string[]) fields.
 * Only logs warnings once per process to avoid noisy build output.
 */
export function validateEnv() {
  const missing = requiredVars.filter(
    (key) => !process.env[key] || process.env[key].includes("YOUR_")
  );

  // Set defaults for optional vars
  for (const [key, defaultValue] of Object.entries(optionalVars)) {
    if (!process.env[key]) {
      process.env[key] = defaultValue;
    }
  }

  // Only log once per process
  if (!_validated) {
    _validated = true;
    if (missing.length > 0) {
      console.error(
        "\n❌ Missing required environment variables:\n" +
          missing.map((key) => `   - ${key}`).join("\n") +
          "\n\nPlease copy .env.example to .env.local and fill in the values.\n"
      );
    } else {
      console.log("✅ Environment configuration valid");
    }

    // Warn about placeholder values
    const placeholders = requiredVars.filter(
      (key) => process.env[key] && process.env[key].includes("YOUR_")
    );
    if (placeholders.length > 0) {
      console.warn(
        "\n⚠️  Placeholder values detected in:\n" +
          placeholders.map((key) => `   - ${key}`).join("\n") +
          "\n\nReplace them with actual values in .env.local\n"
      );
    }
  }

  return {
    valid: missing.length === 0,
    missing,
  };
}

/**
 * Returns a safe summary of the current env config (masks sensitive values).
 */
export function getEnvSummary() {
  const mask = (val) => {
    if (!val) return "(not set)";
    if (val.length <= 8) return "****";
    return val.slice(0, 4) + "..." + val.slice(-4);
  };

  return {
    CLERK_PUBLISHABLE_KEY: mask(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY),
    CLERK_SECRET_KEY: mask(process.env.CLERK_SECRET_KEY),
    DB_CONNECTION: mask(process.env.NEXT_PUBLIC_DATABSE_CONNECTION_STRING),
    GEMINI_API_KEY: mask(process.env.GEMINI_API_KEY),
    SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "(default)",
    SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "(default)",
    PORT: process.env.PORT || "3000",
  };
}
