import { PublicKey } from '@solana/web3.js';
import { BaseParsedAction, BaseParsedTransaction } from 'core/base';

export const INIT_LOG_TYPE = 0
export const DEPOSIT_LOG_TYPE = 1
export const WITHDRAW_LOG_TYPE = 2
export const SWAP_BASE_IN_LOG_TYPE = 3
export const SWAP_BASE_OUT_LOG_TYPE = 4

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

export type InitPoolInfo = {
    baseDecimals: number
    quoteDecimals: number
    timestamp: bigint
    baseAmountIn: bigint
    quoteAmountIn: bigint
    user: PublicKey,
    poolId: PublicKey,
    marketId: PublicKey
}

export type AddLiquidityInfo = {
    user: PublicKey,
    poolId: PublicKey
}

export type RemoveLiquidityInfo = {
    lpAmountOut: bigint,
    poolLpAmount: bigint,
    baseReserve: bigint,
    quoteReserve: bigint,
    baseAmountOut: bigint,
    quoteAmountOut: bigint,
    baseMint: PublicKey,
    quoteMint: PublicKey,
    user: PublicKey,
    poolId: PublicKey
}

export type SwapInfo = {
    amountIn: bigint
    amountOut: bigint
    baseReserve: bigint
    quoteReserve: bigint
    tokenIn: PublicKey
    tokenOut: PublicKey
    user: PublicKey
    poolId: PublicKey
}

export interface RaydiumV4Action extends BaseParsedAction {
    info: InitPoolInfo | AddLiquidityInfo | RemoveLiquidityInfo | SwapInfo;
}

export interface RaydiumV4Transaction extends BaseParsedTransaction<RaydiumV4Action> {
    actions: RaydiumV4Action[];
}
