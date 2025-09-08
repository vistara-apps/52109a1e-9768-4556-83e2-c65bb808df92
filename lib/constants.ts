export const SUPPORTED_TOKENS = [
  {
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    logoUrl: '/tokens/eth.png'
  },
  {
    symbol: 'USDC',
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    decimals: 6,
    logoUrl: '/tokens/usdc.png'
  },
  {
    symbol: 'WETH',
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    logoUrl: '/tokens/weth.png'
  },
  {
    symbol: 'DAI',
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    decimals: 18,
    logoUrl: '/tokens/dai.png'
  }
];

export const SUPPORTED_DEXS = [
  {
    name: 'Uniswap V3',
    id: 'uniswap-v3',
    color: '#FF007A',
    logoUrl: '/dexs/uniswap.png'
  },
  {
    name: 'Aerodrome',
    id: 'aerodrome',
    color: '#0052FF',
    logoUrl: '/dexs/aerodrome.png'
  },
  {
    name: 'PancakeSwap',
    id: 'pancakeswap',
    color: '#1FC7D4',
    logoUrl: '/dexs/pancakeswap.png'
  },
  {
    name: 'SushiSwap',
    id: 'sushiswap',
    color: '#FA52A0',
    logoUrl: '/dexs/sushiswap.png'
  }
];

export const MOCK_LIQUIDITY_POOLS = [
  {
    poolId: '1',
    dexName: 'Uniswap V3',
    tokenA: 'ETH',
    tokenB: 'USDC',
    reserveA: BigInt('1000000000000000000000'),
    reserveB: BigInt('3500000000'),
    liquidity: BigInt('14587000000000000000000'),
    timestamp: new Date(),
    apy: 12.5,
    volume24h: BigInt('5000000000'),
    fees24h: BigInt('15000000')
  },
  {
    poolId: '2',
    dexName: 'Aerodrome',
    tokenA: 'ETH',
    tokenB: 'USDC',
    reserveA: BigInt('800000000000000000000'),
    reserveB: BigInt('2800000000'),
    liquidity: BigInt('9500000000000000000000'),
    timestamp: new Date(),
    apy: 8.2,
    volume24h: BigInt('3200000000'),
    fees24h: BigInt('9600000')
  },
  {
    poolId: '3',
    dexName: 'PancakeSwap',
    tokenA: 'ETH',
    tokenB: 'USDC',
    reserveA: BigInt('600000000000000000000'),
    reserveB: BigInt('2100000000'),
    liquidity: BigInt('7200000000000000000000'),
    timestamp: new Date(),
    apy: 15.8,
    volume24h: BigInt('2100000000'),
    fees24h: BigInt('6300000')
  }
];

export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free',
    price: 0,
    dailyLookups: 10,
    features: ['Basic liquidity scanning', 'Limited analytics']
  },
  basic: {
    name: 'Basic',
    price: 5,
    dailyLookups: 100,
    features: ['Advanced routing', 'Full analytics', 'Priority support']
  },
  premium: {
    name: 'Premium',
    price: 15,
    dailyLookups: -1, // unlimited
    features: ['Unlimited lookups', 'Real-time alerts', 'Custom strategies', 'API access']
  }
};
