import { PublicKey } from '@solana/web3.js';
import { BaseParsedAction } from '../../core/base';
import { BN } from '@coral-xyz/anchor';

type TradeInfo = {
    solAmount: bigint;
    tokenAmount: bigint;
    tokenMint: PublicKey;
    traderTokenAccount: PublicKey;
    trader: PublicKey;
    timestamp: number;
    virtualSolReserves: bigint;
    virtualTokenReserves: bigint;
};

type CreateInfo = {
    name: string;
    symbol: string;
    uri: string;
    tokenMint: PublicKey;
    tokenDecimals: number;
    createdBy: PublicKey;
};

type CompleteInfo = {
    tokenMint: PublicKey;
    bondingCurve: PublicKey;
    timestamp: number;
};

export type DecodedInstructionData = {
    amount: BN;
};

export interface PumpFunAction extends BaseParsedAction {
    info: TradeInfo | CreateInfo | CompleteInfo;
}
