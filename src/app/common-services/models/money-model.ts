import { BaseModel } from './base-model';
import { Money } from 'src/app/common-services/types/money';

export class MoneyModel extends BaseModel {
    public static readonly DefaultCurrency = 'CZK'; // TODO - from init
    private static readonly _initialValue = new Money(0, MoneyModel.DefaultCurrency);
    private _value: Money = MoneyModel._initialValue;

    public get value(): Money {
        return this._value;
    }

    public set value(value: Money) {
        this._value = value ?? MoneyModel._initialValue;
    }

    public get amount(): number {
        return this._value.amount;
    }

    public set amount(value: number) {
        if (this._value.amount !== value) {
            this._value = new Money(value, this._value.currency);
        }
    }

    public get currency(): string {
        return this._value.currency;
    }

    public set currency(value: string) {
        if (this._value.currency !== value) {
            this._value = new Money(this._value.amount, value);
        }
    }

    public static Create(amount: number, currency?: string): MoneyModel {
        const model = new MoneyModel();
        model.setValue(amount, currency);
        return model;
    }

    public static FromMoney(money: Money): MoneyModel {
        const model = new MoneyModel();
        model.value = money;
        return model;
    }

    public setValue(amount: number, currency?: string): void {
        this._value = new Money(amount, currency ?? MoneyModel.DefaultCurrency);
    }
}
