import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { UpperPipe } from './upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
