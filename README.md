# Base Liquidity Navigator

A Next.js Base Mini App that helps traders find and route the best DEX liquidity for optimal trades on Base.

## Features

- **Real-time DEX Liquidity Scanner**: Scans and ranks liquidity across major DEXs on Base
- **Automated Trade Routing**: Intelligently routes trades to minimize slippage
- **Slippage & Fee Analytics**: Comprehensive dashboard for trading performance analysis
- **Mobile-First Design**: Optimized for mobile trading experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Coinbase L2)
- **Wallet Integration**: OnchainKit + MiniKit
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for analytics visualization
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local` and add your API keys:
   ```bash
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main application page
│   ├── providers.tsx      # MiniKit provider setup
│   └── globals.css        # Global styles and design tokens
├── components/            # React components
│   ├── AppShell.tsx       # Main app container
│   ├── TradeInterface.tsx # Token swapping interface
│   ├── LiquidityScanner.tsx # Real-time pool scanner
│   ├── AnalyticsDashboard.tsx # Trading analytics
│   └── ...               # Other UI components
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript type definitions
│   ├── constants.ts      # App constants and mock data
│   └── utils.ts          # Utility functions
```

## Key Components

### TradeInterface
- Token input/output selection
- Real-time price calculation
- Slippage tolerance settings
- Route optimization display

### LiquidityScanner
- Live DEX pool monitoring
- Liquidity ranking by TVL and volume
- APY and fee comparisons
- Market insights

### AnalyticsDashboard
- Trading volume and performance metrics
- Slippage analysis over time
- DEX performance breakdown
- Historical fee tracking

## Design System

The app uses a custom design system with:
- **Dark theme** with gradient backgrounds
- **Glass morphism** effects for cards and buttons
- **Floating geometric elements** for visual depth
- **Responsive grid system** (12-column, 16px gutter)
- **Consistent color palette** with semantic tokens

## Base Mini App Integration

- Uses `MiniKitProvider` for Base chain integration
- Implements proper frame actions for Farcaster
- Includes notification system for trade alerts
- Supports frame saving for user state persistence

## Development

### Adding New Features

1. Create components in `components/` directory
2. Add types to `lib/types.ts`
3. Update constants in `lib/constants.ts`
4. Follow the established design system patterns

### Styling Guidelines

- Use Tailwind CSS classes with custom design tokens
- Follow mobile-first responsive design
- Maintain glass morphism aesthetic
- Use semantic color names from the design system

## Deployment

The app is optimized for deployment on Vercel or similar platforms:

```bash
npm run build
npm start
```

## License

MIT License - see LICENSE file for details.
