import { PublicKey } from '@solana/web3.js';
import { BaseParsedAction } from '../../core/base';

export const CREATE_EVENT_SIG = 'event:CreateEvent';
export const COMPLETE_EVENT_SIG = 'event:CompleteEvent';
export const TRADE_EVENT_SIG = 'event:TradeEvent';

export enum ActionType {
    CREATE = 'create',
    COMPLETE = 'complete',
    TRADE = 'trade',
    UNKNOWN = 'unknown'
}

export type CreateEvent = {
    name: string;
    symbol: string;
    uri: string;
    mint: PublicKey;
    creator: PublicKey;
    feeBps: number;
}

export type CompleteEvent = {
    user: PublicKey;
    mint: PublicKey;
    bondingCurve: PublicKey;
    timestamp: BigInt;
}

export type TradeEvent = {
    mint: PublicKey;
    solAmount: BigInt;
    tokenAmount: BigInt;
    isBuy: boolean;
    user: PublicKey;
    timestamp: BigInt;
    virtualSolReserves: BigInt;
    virtualTokenReserves: BigInt;
}

export type TradeInfo = {
    solAmount: BigInt;
    tokenAmount: BigInt;
    tokenMint: PublicKey;
    trader: PublicKey;
    isBuy: boolean;
    timestamp: BigInt;
    virtualSolReserves: BigInt;
    virtualTokenReserves: BigInt;
};

export type CreateInfo = {
    name: string;
    symbol: string;
    uri: string;
    tokenMint: PublicKey;
    tokenDecimals: number;
    createdBy: PublicKey;
};

export type CompleteInfo = {
    user: PublicKey;
    tokenMint: PublicKey;
    bondingCurve: PublicKey;
    timestamp: BigInt;
};

export interface PumpFunAction extends BaseParsedAction {
    info: TradeInfo | CreateInfo | CompleteInfo;
}
