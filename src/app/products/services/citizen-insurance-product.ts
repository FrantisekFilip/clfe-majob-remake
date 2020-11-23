import { ProductInfo } from './product-info';
import { Product } from './product';

export class CitizenInsuranceProduct extends Product implements ProductInfo {
    public static readonly productCode = 'citizenInsurance';

    public get code(): string {
        return CitizenInsuranceProduct.productCode;
    }

    constructor(
        name: string,
        shortName: string,
        public readonly discount: number
    ) {
        super(name, shortName);
    }
}
