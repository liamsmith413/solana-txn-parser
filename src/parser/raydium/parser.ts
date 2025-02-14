import {
    ParsedTransaction,
    ParsedTransactionMeta,
    ParsedTransactionWithMeta,
} from '@solana/web3.js';
import { BaseParser } from '../../core/base';
import { RaydiumTransaction } from './types';

export class RaydiumV4Parser implements BaseParser<RaydiumTransaction> {
    parse(transaction: ParsedTransactionWithMeta): RaydiumTransaction | null {
        console.log('Raydium transaction parser called...');
        console.log(transaction.transaction.message.instructions);
        // use logs or use instruction data
        return null;
    }
    parseMultiple(transactions: ParsedTransactionWithMeta[]): RaydiumTransaction[] | null {
        return null;
    }
}

export class RaydiumCLMMParser implements BaseParser<RaydiumTransaction> {
    parse(transaction: ParsedTransactionWithMeta): RaydiumTransaction | null {
        return null;
    }
    parseMultiple(transactions: ParsedTransactionWithMeta[]): RaydiumTransaction[] | null {
        return null;
    }
}

export class RaydiumCPMMParser implements BaseParser<RaydiumTransaction> {
    parse(transaction: ParsedTransactionWithMeta): RaydiumTransaction | null {
        return null;
    }
    parseMultiple(transactions: ParsedTransactionWithMeta[]): RaydiumTransaction[] | null {
        return null;
    }
}