import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports:
        [
        ],
    providers: [ProductService],
})
export class ProductsModule { }
