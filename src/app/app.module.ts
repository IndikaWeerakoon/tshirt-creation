import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureComponent } from './architect/structure/structure.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './mainApp/home/home.component';
import { AboutComponent } from './mainApp/about/about.component';
import { ContactUsComponent } from './mainApp/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
