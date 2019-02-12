import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StructureRoutes } from './routing.module';
import { HomeComponent } from '../../mainApp/home/home.component';
import { AboutComponent } from '../../mainApp/about/about.component';
import { ContactUsComponent } from '../../mainApp/contact-us/contact-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(StructureRoutes)
  ]
})
export class StructureModule { }
