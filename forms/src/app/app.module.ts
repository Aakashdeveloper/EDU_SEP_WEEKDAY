import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { UpperPipe } from './upper.pipe';
import { FormPosterService } from './services/form-poster.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ FormPosterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
