import { UndefinedParameterError } from '../errorHandling/undefined-parameter-error';
import { IncompatibleCurrencyError } from '../errorHandling/incompatible-currency-error';
import { nameof } from '../utils';

export class Money {
    public readonly amount: number;

    public readonly currency: string;

    constructor(amount: number, currency: string) {
        if (!currency) {
            throw new UndefinedParameterError(nameof(currency));
        }

        this.amount = amount;
        this.currency = currency;
    }

    private static check(value1: Money, value2: Money): void {
        if (!value1) {
            throw new UndefinedParameterError('value1');
        }

        if (!value2) {
            throw new UndefinedParameterError('value2');
        }

        if (value1.currency !== value2.currency) {
            throw new IncompatibleCurrencyError(value1.currency, value2.currency);
        }
    }

    public static plus(value1: Money, value2: Money): Money {
        this.check(value1, value2);
        return new Money(value1.amount + value2.amount, value1.currency);
    }

    public static minus(value1: Money, value2: Money): Money {
        this.check(value1, value2);
        return new Money(value1.amount - value2.amount, value1.currency);
    }

    public static multiply(value1: Money, multiplier: number): Money {
        return new Money(value1.amount * multiplier, value1.currency);
    }

    public static divide(value1: Money, divider: number): Money {
        return new Money(value1.amount / divider, value1.currency);
    }

    public static sum(values: Money[]): Money {
        if (!values) {
            return null;
        }

        let i = 0;
        let result: Money;

        for (i; i < values.length; i++) { // Find first valid value
            result = values[i];

            if (result) {
                result = result.clone(); // do not want to alter original value
                i++;
                break;
            }
        }

        for (i; i < values.length; i++) { // Add remaining values
            const value: Money = values[i];

            if (value) {
                result = Money.plus(result, value);
            }
        }

        return result;
    }

    public clone(): Money {
        return new Money(this.amount, this.currency);
    }
}
