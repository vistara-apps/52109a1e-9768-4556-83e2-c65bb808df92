# Base Liquidity Navigator

A Next.js Base Mini App that helps traders find and route the best DEX liquidity for optimal trades on Base.

## Features

- **Real-time DEX Liquidity Scanner**: Scans and ranks liquidity across major DEXs on Base
- **Automated Trade Routing**: Intelligently routes trades to minimize slippage
- **Slippage & Fee Analytics**: Dashboard visualizing trading costs and performance
- **Mobile-First Design**: Optimized for mobile trading experience

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- OnchainKit & MiniKit
- Recharts for analytics
- Lucide React for icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js App Router
├── components/          # React components
├── lib/                # Utilities and types
├── public/             # Static assets
└── README.md
```

## Key Components

- `AppShell`: Main layout with navigation
- `TradeInterface`: Token swapping interface
- `AnalyticsDashboard`: Trading analytics and charts
- `LiquidityPools`: Pool discovery and ranking
- `TokenInput`: Token selection and amount input

## Base Mini App Integration

This app uses MiniKitProvider for Base integration and includes:
- Frame actions for trading and analytics
- Wallet connection via OnchainKit
- Real-time liquidity data fetching
- Transaction routing and execution

## License

MIT License
