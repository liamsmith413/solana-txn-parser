import { struct, u8 } from '@solana/buffer-layout';
import { pubKey, uint64, uint128 } from '../../../core/layout';
import { InitPool, Deposit, Withdraw, SwapBaseIn, SwapBaseOut } from './types';

export const INIT_POOL_LAYOUT = struct<InitPool>([
    uint64('timestamp'),
    u8('quoteDecimals'),
    u8('baseDecimals'),
    uint64('quoteLotSize'),
    uint64('baseLotSize'),
    uint64('quoteAmountIn'),
    uint64('baseAmountIn'),
    pubKey('marketId'),
])

export const DEPOSIT_LAYOUT = struct<Deposit>([
    uint64('maxBaseAmount'),
    uint64('maxQuoteAmount'),
    uint64('fixedSide'),
    uint64('baseReserve'),
    uint64('quoteReserve'),
    uint64('poolLpAmount'),
    uint128('pnlX'),
    uint128('pnlY'),
    uint64('baseAmountIn'),
    uint64('quoteAmountIn'),
    uint64('mintedLpAmount'),
])

export const WITHDRAW_LAYOUT = struct<Withdraw>([
    uint64('withdrawLpAmount'),
    uint64('userLpAmount'),
    uint64('baseReserve'),
    uint64('quoteReserve'),
    uint64('poolLpAmount'),
    uint128('pnlX'),
    uint128('pnlY'),
    uint64('baseAmountOut'),
    uint64('quoteAmountOut'),
])

export const SWAP_BASE_IN_LAYOUT = struct<SwapBaseIn>([
    uint64('amountIn'),
    uint64('minimumAmountOut'),
    uint64('direction'),
    uint64('userSource'),
    uint64('baseReserve'),
    uint64('quoteReserve'),
    uint64('amountOut'),
])

export const SWAP_BASE_OUT_LAYOUT = struct<SwapBaseOut>([
    uint64('maxAmountIn'),
    uint64('amountOut'),
    uint64('direction'),
    uint64('userSource'),
    uint64('baseReserve'),
    uint64('quoteReserve'),
    uint64('amountIn'),
])
