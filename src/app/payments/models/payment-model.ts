import { BaseModel } from 'src/app/common-services/models/base-model';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { PaymentResultModel } from './payment-result-model';

export class PaymentModel extends BaseModel {
    public amount: MoneyModel;

    public result: PaymentResultModel;
}
