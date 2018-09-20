import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { MycasePipe } from './products/myUpper.pipe';
import {  DiscountofferPipe } from './products/discountOffer.pipe';
import { ProductFilterPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
    // it will contain all components & pipe
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        MycasePipe,
        DiscountofferPipe,
        ProductFilterPipe,
        StarComponent
    ],

    // All module  come here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // Only  main component
    bootstrap: [
        AppComponent
    ],

    // All the services & router gaurds
    providers: []
})

export class AppModule {

}
