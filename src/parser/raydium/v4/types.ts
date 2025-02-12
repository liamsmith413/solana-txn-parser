import { struct } from '@solana/buffer-layout';
import { PublicKey } from '@solana/web3.js';

export enum ActionType {
    INIT_POOL = 'init',
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
    SWAP = 'swap'
}

export type InitPool = {
    timestamp: bigint
    quoteDecimals: number
    baseDecimals: number
    quoteLotSize: bigint
    baseLotSize: bigint
    quoteAmountIn: bigint
    baseAmountIn: bigint
    marketId: PublicKey
}

export type Deposit = {
    maxBaseAmount: bigint
    maxQuoteAmount: bigint
    fixedSide: bigint // 0n, then baseToken else quoteToken
    baseReserve: bigint
    quoteReserve: bigint
    poolLpAmount: bigint
    pnlX: bigint
    pnlY: bigint
    baseAmountIn: bigint
    quoteAmountIn: bigint
    mintedLpAmount: bigint
}

export type Withdraw = {
    withdrawLpAmount: bigint
    userLpAmount: bigint
    baseReserve: bigint
    quoteReserve: bigint
    poolLpAmount: bigint
    pnlX: bigint
    pnlY: bigint
    baseAmountOut: bigint
    quoteAmountOut: bigint
}

export type SwapBaseIn = {
    amountIn: bigint
    minimumAmountOut: bigint
    direction: bigint // 0n, then baseToken else quoteToken
    userSource: bigint
    baseReserve: bigint
    quoteReserve: bigint
    amountOut: bigint
}

export type SwapBaseOut = {
    maxAmountIn: bigint
    amountOut: bigint
    direction: bigint // 0n, then baseToken else quoteToken
    userSource: bigint
    baseReserve: bigint
    quoteReserve: bigint
    amountIn: bigint
}
