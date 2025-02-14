import {
    ParsedTransaction,
    ParsedTransactionMeta,
    ParsedTransactionWithMeta,
} from '@solana/web3.js';
import { BaseParser } from '../../../core/base';
import { RaydiumV4Transaction } from './types';

export class RaydiumV4Parser implements BaseParser<RaydiumV4Transaction> {
    parse(transaction: ParsedTransactionWithMeta): RaydiumV4Transaction | null {
        console.log('Raydium transaction parser called...');
        console.log(transaction.transaction.message.instructions);
        // use logs or use instruction data
        return null;
    }
    parseMultiple(transactions: ParsedTransactionWithMeta[]): RaydiumV4Transaction[] | null {
        return null;
    }
}