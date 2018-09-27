import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/products.module';

@NgModule({
    // it will contain all components & pipe
    declarations: [
        AppComponent,
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
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent }
        ]),
        ProductModule
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
