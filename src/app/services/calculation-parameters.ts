import { ProductInfo } from '../products/services/product-info';

export interface CalculationParameters {
    product: ProductInfo;

    doApply: boolean;
}
