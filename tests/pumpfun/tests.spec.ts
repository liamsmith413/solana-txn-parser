import { Connection, ParsedTransactionWithMeta } from '@solana/web3.js';
import { PumpFunParser } from '../../src';
import fs from 'fs';

describe('PumpFunParser', () => {
    const buyTransaction = JSON.parse(
        fs.readFileSync('tests/pumpfun/parsed-buy-txn.json', 'utf-8')
    ) as unknown as ParsedTransactionWithMeta;
    const sellTransaction = JSON.parse(
        fs.readFileSync('tests/pumpfun/parsed-sell-txn.json', 'utf-8')
    ) as unknown as ParsedTransactionWithMeta;
    const parser = new PumpFunParser();

    test('parse should correctly identify buy action', async () => {
        const signature =
            '3S2vFszSSCxdeS8JJgzhEk8MxVsDA6m1NMm8rRVfAJnKw2nepVre4kXUBwtCCqY91duXyT3wv9nCwZgUJcj9btj6';
        const connection = new Connection('https://paige-56oehh-fast-mainnet.helius-rpc.com');
        const txn = await connection.getParsedTransaction(signature, {
            commitment: 'confirmed',
            maxSupportedTransactionVersion: 0,
        });
        //console.log(txn)
        // write the transaction to a json file
        //fs.writeFileSync('tests/pumpfun/parsed-buy-txn.json', JSON.stringify(txn, null, 2));
        const results = parser.parse(txn!);
        console.dir(results, { depth: 6 });
        //console.log(programEvents['6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P'])
        // const result = parser.parse(buyTransaction);

        // expect(result.platform).toBe('pumpfun');
        // expect(result.actions).toHaveLength(1);
        // expect(result.actions[0].type).toBe('buy');
        // expect(result.actions[0].info.solAmount.toString()).toBe('79645349');
        // expect(result.actions[0].info.tokenAmount.toString()).toBe('724879458841');
        // expect(result.actions[0].info.tokenMint.toString()).toBe(
        //     'FstBRGMkNKf4wNvfieYUPS9YsbNoQJMCh6v89zajpump'
        // );
        // expect(result.actions[0].info.trader.toString()).toBe(
        //     '4SrXdKFYoiUfYzWN7YV8kdJ2TkZieDmjVCEJg4mTAun6'
        // );
        // expect(result.actions[0].info.traderTokenAccount.toString()).toBe(
        //     'HoB5DAFC69L8SzD5F1uJDEFZ3CDFy4ceA7Z1kyNMKy7B'
        // );
    });

    test('parse should correctly identify sell action', () => {
        //const result = parser.parse(sellTransaction);

        // expect(result.platform).toBe('pumpfun');
        // expect(result.actions).toHaveLength(1);
        // expect(result.actions[0].type).toBe('sell');
        // expect(result.actions[0].info.solAmount.toString()).toBe('3556271');
        // expect(result.actions[0].info.tokenAmount.toString()).toBe('94443000000');
        // expect(result.actions[0].info.tokenMint.toString()).toBe(
        //     'FstBRGMkNKf4wNvfieYUPS9YsbNoQJMCh6v89zajpump'
        // );
        // expect(result.actions[0].info.trader.toString()).toBe(
        //     '3P2pmfQAFTwcC1xWtYbVYoRn3hngya8Kd9jMaF5GfnUa'
        // );
        // expect(result.actions[0].info.traderTokenAccount.toString()).toBe(
        //     'HhE4skfuuxsbmhn5fRByP1y8A8tWJwuwHWi4x9UXGC88'
        // );
    });

    test('parseMultiple should parse multiple transactions', () => {
        //const results = parser.parseMultiple([buyTransaction, sellTransaction]);

        // expect(results).toHaveLength(2);
        // expect(results[0].platform).toBe('pumpfun');
        // expect(results[1].platform).toBe('pumpfun');
        // expect(results[0].actions[0].type == 'buy');
        // expect(results[1].actions[0].type == 'sell');
    });
});
