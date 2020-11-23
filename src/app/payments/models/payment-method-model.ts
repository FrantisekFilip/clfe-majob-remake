import { BaseModel } from 'src/app/common-services/models/base-model';
import { ValidatableModel } from 'src/app/common-services/models/validatable-model';
import { PaymentMethod } from './../services/payment-method';

export class PaymentMethodModel extends BaseModel {
    public readonly value: PaymentMethod;

    public readonly name: string;

    constructor(method: PaymentMethod) {
        super();
        this.value = method;
        const name: string = PaymentMethodModel.getMethodName(method);

        if (name) {
            this.name = name;
        }
    }

    private static getMethodName(method: PaymentMethod): string {
        if (method === PaymentMethod.Express) {
            return 'express';
        }
        else if (method === PaymentMethod.Delayed) {
            return 'delayed';
        }
        else {
            return null;
        }
    }

    public validate(): ValidatableModel {
        if (!this.name) {
            this.createAndAddErrorMessage('UNKNOWN_PAYMENT_METHOD', [this.value ? this.value.toString() : 'unknown']);
        }

        return this;
    }
}
