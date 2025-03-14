import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ContactFormComponent } from './contactform/contactform.component';
import { ViewdeleteComponent } from './viewdelete/viewdelete.component';
import { ViewdeletecontactComponent } from './viewdeletecontact/viewdeletecontact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactFormComponent,
    ViewdeleteComponent,
    ViewdeletecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Required for API calls
    RouterModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }