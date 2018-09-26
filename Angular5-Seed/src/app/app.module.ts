import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { MycasePipe } from './products/myUpper.pipe';
import {  DiscountofferPipe } from './products/discountOffer.pipe';
import { ProductFilterPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product_detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { RouterGaurds } from './products/product_router.gaurds';

@NgModule({
    // it will contain all components & pipe
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        MycasePipe,
        DiscountofferPipe,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent

    ],

    // All module  come here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent }
        ])

    ],

    // Only  main component
    bootstrap: [
        AppComponent
    ],

    // All the services & router gaurds
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class AppModule {

}
