import { TranslateService } from '@ngx-translate/core';
import { UserMessage } from 'src/app/common-services/services/user-message';

export class InsurancePeriodModel {
    private _period: number;

    public get period(): number {
        return this._period;
    }

    public set period(value: number) {
        this._period = value;
    }

    public viewValue(translate: TranslateService): string {
        const period = this._period;

        if (!period) {
            return null;
        } else {
            let key: string;

            if (period === 0) {
                key = 'periods.years.zero';
            } else if (Math.abs(period) === 1) {
                key = 'periods.years.one';
            } else if (Math.abs(period) <= 4) {
                key = 'periods.years.twoToFour';
            }
            else {
                key = 'periods.years.fiveAndMore';
            }

            return UserMessage.translateMessage(translate, key, [period.toString()]);
        }
    }
}
