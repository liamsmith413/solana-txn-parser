import { blob, Layout } from '@solana/buffer-layout';
import { PublicKey } from '@solana/web3.js';

export const pubKey = (property: string): Layout<PublicKey> => {
    const layout = blob(32, property);
    const pubKeyLayout = layout as Layout<unknown> as Layout<PublicKey>;
    const decode = layout.decode.bind(layout);
    pubKeyLayout.decode = (buffer: Buffer, offset: number) => {
        const src = decode(buffer, offset);
        return new PublicKey(src);
    }
    return pubKeyLayout;
}

export const uint64 = (property: string): Layout<BigInt> => {
    const layout = blob(8, property);
    const uint64Layout = layout as Layout<unknown> as Layout<BigInt>;
    const decode = layout.decode.bind(layout);
    uint64Layout.decode = (buffer: Buffer, offset: number) => {
        const src = decode(buffer, offset);
        return Buffer.from(src).readBigUInt64LE();
    }
    return uint64Layout;
}

export const stringLayout = (property: string): Layout<string> => {
    const layout = blob(32, property);
    const stringLayout = layout as Layout<unknown> as Layout<string>;
    const decode = layout.decode.bind(layout);
    stringLayout.decode = (buffer: Buffer, offset: number) => {
        const src = decode(buffer, offset);
        return Buffer.from(src).toString('utf-8');
    }
    return stringLayout;
}

export const boolean = (property: string): Layout<boolean> => {
    const layout = blob(1, property);
    const booleanLayout = layout as Layout<unknown> as Layout<boolean>;
    const decode = layout.decode.bind(layout);
    booleanLayout.decode = (buffer: Buffer, offset: number) => {
        const src = decode(buffer, offset);
        return src[0] === 1;
    }
    return booleanLayout;
}