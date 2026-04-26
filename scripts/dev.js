#!/usr/bin/env node

/**
 * WiseAI Finance server launcher.
 * Loads .env.local before starting Next.js so that PORT (and all other vars)
 * are available to the CLI, not just to the app runtime.
 *
 * Usage:
 *   node scripts/dev.js          # starts dev server
 *   node scripts/dev.js start    # starts production server
 */

const { resolve } = require("path");
const { existsSync, readFileSync } = require("fs");
const { spawn } = require("child_process");

const projectRoot = resolve(__dirname, "..");
const envPath = resolve(projectRoot, ".env.local");

// --- Parse .env.local manually (lightweight, no dependency needed) ---
function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;

  const content = readFileSync(filePath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    // Skip comments and empty lines
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;

    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();

    // Remove surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Only set if not already defined in system environment (system env takes priority)
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(envPath);

// --- Determine command and port ---
const mode = process.argv[2] === "start" ? "start" : "dev";
const port = process.env.PORT || "3000";

console.log(`\n🚀 WiseAI Finance — ${mode === "dev" ? "Development" : "Production"} mode`);
console.log(`   Port: ${port} (from ${process.env.PORT ? ".env.local PORT" : "default"})\n`);

// --- Spawn Next.js ---
const child = spawn("npx", ["next", mode, "--port", port], {
  cwd: projectRoot,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code));
child.on("error", (err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

// Forward signals
process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
