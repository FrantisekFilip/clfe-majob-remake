import { BaseModel } from 'src/app/common-services/models/base-model';

export class AddressModel extends BaseModel {
    public streetName: string;

    public registrationNumber: string;

    public postcode: string;

    public municipality: string;
}
