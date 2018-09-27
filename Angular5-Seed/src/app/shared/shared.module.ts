import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    providers: [],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent
    ]
})


export class SharedModule {

}
