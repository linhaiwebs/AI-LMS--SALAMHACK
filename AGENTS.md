# WiseAI Finance (知恵塾金融) - AI LMS Project

## Project Overview
Japanese AI finance education platform built with Next.js 15, Tailwind CSS v4, and Clerk authentication.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with custom Material Design 3 color system
- **Auth**: Clerk (@clerk/nextjs)
- **Database**: Neon PostgreSQL + Drizzle ORM
- **AI**: Google Generative AI (Gemini 1.5 Flash)
- **Background Jobs**: Inngest
- **Icons**: lucide-react
- **Fonts**: Manrope (primary), Inter (labels/captions)

## Environment Configuration

### Setup
```bash
cp .env.example .env.local
# Edit .env.local with your actual API keys
```

### Required Variables
| Variable | Description | Source |
|----------|-------------|--------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key (pk_test_...) | https://dashboard.clerk.com |
| `CLERK_SECRET_KEY` | Clerk secret key (sk_test_...) | https://dashboard.clerk.com |
| `NEXT_PUBLIC_DATABSE_CONNECTION_STRING` | Neon PostgreSQL connection URL | https://console.neon.tech |
| `GEMINI_API_KEY` | Google Gemini AI API key | https://aistudio.google.com/apikey |

### Optional Variables (with defaults)
| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | /sign-in | Sign-in page route |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | /sign-up | Sign-up page route |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | /dashboard | Post-login redirect |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | /dashboard | Post-registration redirect |
| `INNGEST_EVENT_KEY` | (hardcoded fallback) | Inngest event key |

### Env Validation
The app uses `config/env.js` to validate env vars at startup:
- `validateEnv()` - Checks required vars, logs warnings for missing/placeholder values
- `getEnvSummary()` - Returns masked summary for safe logging

**Note**: The env var `NEXT_PUBLIC_DATABSE_CONNECTION_STRING` has a typo ("DATABSE" not "DATABASE") to match the existing codebase.

## Design System
The color system follows Material Design 3 tokens. Key colors:
- `primary`: #4236b1 (indigo) - main brand color
- `primary-container`: #5b51ca - CTAs and highlights
- `secondary`: #006c49 (green) - success/finance indicators
- `secondary-container`: #6cf8bb - green accents
- `tertiary`: #3b4390 (deep blue) - additional accent
- `surface` family: #f4fbfa background tones
- `outline`: #787585, `outline-variant`: #c8c4d5

Dark mode is fully supported with inverted color tokens.

## Routes & Backend Entry Points
- `/` - Homepage (public)
- `/sign-in` - Clerk sign-in (public)
- `/sign-up` - Clerk sign-up (public)
- `/dashboard` - User dashboard (protected)
- `/create` - Course creation wizard (protected)
- `/course/[courseId]` - Course content pages (protected)
- `/dashboard/profile` - User profile (protected)
- `/dashboard/upgrade` - Plan upgrade (protected)

### API Routes
- `POST /api/generate-course-outline` - AI course generation
- `GET /api/courses` - List courses
- `POST /api/courses` - Get courses by user
- `GET /api/study-type` - Study type info
- `GET /api/study-type-content` - Study content
- `POST/GET/PUT /api/inngest` - Inngest webhook endpoint

## Protected Routes
Dashboard, create, and course routes require authentication via Clerk middleware.

## Build Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npx drizzle-kit push` - Push schema to database
- `npx drizzle-kit studio` - Database browser

## Stitch Design Source
- Project: aijapan2 (ID: 6136275101206377454)
- 6 screens: ホーム, 料金プラン, 会社概要, お問い合わせ, 学生ダッシュボード, 講師ダッシュボード
