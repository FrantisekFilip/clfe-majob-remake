import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CommonServicesModule } from 'src/app/common-services/common-services.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    CommonServicesModule
  ],
  exports: [
    TranslateModule,
    CommonServicesModule
  ]
})
export class BuServicesModule { }
