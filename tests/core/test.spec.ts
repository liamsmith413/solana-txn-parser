import { ParsedTransactionWithMeta, PublicKey } from '@solana/web3.js';
import fs from 'fs';
import { getAccountSOLBalanceChange, flattenTransactionInstructions } from '../../src/core/utils';

describe('Transaction Parser Utils', () => {
    describe('flattenTransactionInstructions', () => {
        it('should handle empty inner instructions', () => {
            const mockTransaction = {
                transaction: {
                    message: {
                        instructions: [{
                            accounts: [
                                "acct-1",
                                "acct-2",
                                "acct-3"
                            ],
                            data: "0xray-test",
                            programId: "hello-there"
                        }, {
                            accounts: [
                                "acct-1",
                                "acct-2",
                                "acct-3"
                            ],
                            data: "0xray-test",
                            programId: "hello-hyy"
                        }]
                    }
                },
                meta: {}
            };
    
            const result = flattenTransactionInstructions(mockTransaction as any);
            expect(result.length).toEqual(2);
            expect(result[0].programId).toEqual("hello-there")
            expect(result[1].programId).toEqual("hello-hyy")
        });

        it('should handle instructions with inner cpi calls', () => {
            const testTxn = JSON.parse(
                fs.readFileSync('tests/raydium/parsed-swap-txn.json', 'utf-8')
            ) as unknown as ParsedTransactionWithMeta;

            const result = flattenTransactionInstructions(testTxn)
            console.log(result)
            expect(result.length).toEqual(15)
        })
    });

    describe('getAccountSOLBalanceChange', () => {
        it('should calculate the correct balance change', () => {
            const txnData = {
                meta: {
                    postBalances: [
                        30129394, 3946560, 2039280, 310260922401375, 29512424817, 2039280, 1, 1,
                        731913600, 1461600, 934087680, 1141440, 5530000, 1009200, 0,
                    ],
                    preBalances: [
                        115657476, 946560, 0, 310260921604922, 29432779468, 2039280, 1, 1,
                        731913600, 1461600, 934087680, 1141440, 5530000, 1009200, 0,
                    ],
                },
                transaction: {
                    message: {
                        accountKeys: [
                            {
                                pubkey: new PublicKey(
                                    '4SrXdKFYoiUfYzWN7YV8kdJ2TkZieDmjVCEJg4mTAun6'
                                ),
                                signer: true,
                                source: 'transaction',
                                writable: true,
                            },
                            {
                                pubkey: new PublicKey(
                                    'ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt'
                                ),
                                signer: false,
                                source: 'transaction',
                                writable: true,
                            },
                        ],
                    },
                },
            } as unknown as ParsedTransactionWithMeta;
            const result = getAccountSOLBalanceChange(
                txnData!,
                new PublicKey('ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt')
            );
            expect(result).toBe(3000000);
        });

        it('should return 0 if account not found', () => {
            const txnData = {
                transaction: {
                    message: {
                        accountKeys: [
                            {
                                pubkey: new PublicKey(
                                    '4SrXdKFYoiUfYzWN7YV8kdJ2TkZieDmjVCEJg4mTAun6'
                                ),
                                signer: true,
                                source: 'transaction',
                                writable: true,
                            },
                            {
                                pubkey: new PublicKey(
                                    'ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt'
                                ),
                                signer: false,
                                source: 'transaction',
                                writable: true,
                            },
                        ],
                    },
                },
            } as unknown as ParsedTransactionWithMeta;
            const result = getAccountSOLBalanceChange(txnData!, PublicKey.default);
            expect(result).toBe(0);
        });
    });
});
