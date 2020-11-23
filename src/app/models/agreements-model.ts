import { BaseModel } from 'src/app/common-services/models/base-model';

export class AgreementsModel extends BaseModel {
    public termsAndConditions: boolean;

    public productInfo: boolean;

    public gdpr: boolean;

    public contractualInfo: boolean;

    public preset(value: boolean): void {
        this.termsAndConditions = value;
        this.productInfo = value;
        this.gdpr = value;
        this.contractualInfo = value;
    }
}
