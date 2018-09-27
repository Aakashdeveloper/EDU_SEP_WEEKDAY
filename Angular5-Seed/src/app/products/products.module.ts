import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { MycasePipe } from './myUpper.pipe';
import { DiscountofferPipe } from './discountOffer.pipe';
import { ProductFilterPipe } from './productFilter.pipe';
import { ProductDetailComponent } from './product_detail.component';
import { ProductService } from './product.service';
import { RouterGaurds } from './product_router.gaurds';


@NgModule({
    declarations: [
        ProductComponent,
        MycasePipe,
        DiscountofferPipe,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
        ]),
        SharedModule

    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {

}
