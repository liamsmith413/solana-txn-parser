import { clusterApiUrl, Connection, ParsedTransactionWithMeta } from '@solana/web3.js';
import fs from 'fs';
import { RaydiumV4Parser } from '../../src/parser/raydium';

describe('Raydium Parser', () => {
    const swapTransaction = JSON.parse(
        fs.readFileSync('tests/raydium/parsed-swap-txn.json', 'utf-8')
    ) as unknown as ParsedTransactionWithMeta;
    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const parser = new RaydiumV4Parser(connection, { maxPoolCache: 100 });

    test('parse should correctly identify swap action [swap base in]', async () => {
        // const sig = "43W2EWitbiL5cANu6b82otcRyBAJ7gWZfqvoJKuev3MY4JKSp8oKQmePx92ApWC6aT3oYuUZjt27QyQpQD2o8yK2"
        // const parsedTxn = await connection.getParsedTransaction(sig, { maxSupportedTransactionVersion: 0})
        // fs.writeFileSync('tests/raydium/parsed-swap-txn.json', JSON.stringify(parsedTxn, null, 2))
        parser.parse(swapTransaction);
    });

    test('parse should correctly identify swap action [swap base out]', () => {});

    test('parse create pool info', () => {});

    test('parse add liquidity action', () => {});

    test('parse remove liquidity action', () => {});

    test('parseMultiple should parse multiple transactions', () => {});
});
