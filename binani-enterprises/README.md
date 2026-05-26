# Binani Enterprises — Fintech Website

A world-class fintech website offering payment gateway solutions, credit card applications, and personal loan services.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Lead Storage**: Google Sheets API
- **Booking**: Calendly embed
- **Language**: TypeScript

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.local.example .env.local
```

Fill in `.env.local` with your values:

#### Google Sheets Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the **Google Sheets API**
4. Create a **Service Account** under IAM & Admin
5. Generate a JSON key and copy the `client_email` and `private_key`
6. Create a Google Sheet named "Binani Leads"
7. Create two tabs: "Credit Card Applications" and "Personal Loan Applications"
8. Share the sheet with the service account email (Editor access)
9. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/**SHEET_ID**/edit`

#### Calendly Setup
1. Create a [Calendly](https://calendly.com) account
2. Create a 30-minute event type
3. Copy the event URL (e.g. `https://calendly.com/your-name/30min`)
4. Set `NEXT_PUBLIC_CALENDLY_URL` in `.env.local`

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

## Project Structure
```
app/
├── page.tsx                    # Homepage
├── payment-gateway/page.tsx    # Gateway comparison + Calendly
├── credit-card/page.tsx        # Credit card application
├── personal-loan/page.tsx      # Personal loan application
├── privacy-policy/page.tsx     # Privacy policy
├── terms/page.tsx              # Terms & conditions
├── refund-policy/page.tsx      # Refund policy
├── contact/page.tsx            # Contact + address
└── api/leads/route.ts          # Lead submission API (Google Sheets)

components/
├── Navbar.tsx
├── Hero.tsx
├── TrustBadges.tsx
├── GatewayComparisonTable.tsx
├── CalendlyEmbed.tsx
├── CreditCardForm.tsx
├── PersonalLoanForm.tsx
├── Footer.tsx
├── Toast.tsx
└── WhatsAppFloat.tsx

lib/
├── googleSheets.ts    # Google Sheets API helper
└── validations.ts     # Zod schemas
```

## Customization

### Replace Placeholders
Search for these and update:
- `8460360600` → your phone number
- `+918460360600` → WhatsApp number (country code + number)
- `info@binanienterprises.in` → your email
- `157 Aashirwad Textile Market , Saroli Road, Surat` → your address
- `GSTIN: 24CPYPB8953C1ZL` → your GSTIN
- Calendly URL in `.env.local`

## Deployment
Deploy to [Vercel](https://vercel.com) for best Next.js performance:
```bash
npx vercel
```
Add all `.env.local` variables as Environment Variables in the Vercel dashboard.
