import { BaseModel } from 'src/app/common-services/models/base-model';
import { PaymentMethodModel } from './payment-method-model';

export class PaymentResultModel extends BaseModel {
    public success: boolean;

    public paymentMethod: PaymentMethodModel;
}
