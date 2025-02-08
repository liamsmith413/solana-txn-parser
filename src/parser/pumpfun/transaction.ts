import { BaseParsedTransaction } from '../../core/base';
import { PumpFunAction } from './types';

export interface PumpFunTransaction extends BaseParsedTransaction<PumpFunAction> {
    actions: PumpFunAction[];
}
