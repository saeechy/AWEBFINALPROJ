import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewdeleteComponent } from './viewdelete/viewdelete.component';
import { FormComponent } from './form/form.component';

import { ContactFormComponent } from './contactform/contactform.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewdeleteComponent,
    FormComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Required for API calls
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }