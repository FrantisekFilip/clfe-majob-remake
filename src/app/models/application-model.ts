import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { BaseModel } from 'src/app/common-services/models/base-model';
import { MoneyModel } from '../common-services/models/money-model';
import { ProductInfo } from 'src/app/products/services/product-info';
import { AgreementsModel } from './agreements-model';
import { CitizenInsuranceParametersModel } from './citizen-insurance-parameters-model';
import { ContractParametersModel } from './contract-parameters-model';
import { EmployeeInsuranceParametersModel } from './employee-insurance-parameters-model';
import { InstalmentsModel } from '../bu-services/models/instalments-model';
import { InsurancePeriodModel } from '../bu-services/models/insurance-period-model';
import { ContractDurationModel } from '../bu-services/models/enumerations';

export class ApplicationModel extends BaseModel {
    public citizenInsuranceParameters: CitizenInsuranceParametersModel;

    public employeeInsuranceParameters: EmployeeInsuranceParametersModel;

    public get products(): ProductInfo[] {
        const products: ProductInfo[] = [];
        ApplicationModel.addProduct(products, this.citizenInsuranceParameters);
        ApplicationModel.addProduct(products, this.employeeInsuranceParameters);
        return products;
    }

    public commencementDate: Date;

    public policyHolder: ClientInfoModel;

    public mainAddress: AddressModel;

    public contactAddress: AddressModel;

    public insuredPerson: ClientInfoModel;

    public agreements: AgreementsModel;

    public agreementsAccepted: boolean;

    public contactMethodsAllowed: boolean;

    public instalments: InstalmentsModel;

    public totalYearlyInsurance: MoneyModel;

    public insurancePeriod: InsurancePeriodModel;

    public duration: ContractDurationModel;

    private static addProduct(products: ProductInfo[], parameters: ContractParametersModel): void {
        if (parameters && parameters.doApply) {
            products.push(parameters.product);
        }
    }
}
