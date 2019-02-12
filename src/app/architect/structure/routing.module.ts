import { Routes } from '@angular/router';
import { HomeComponent } from '../../mainApp/home/home.component';
import { AboutComponent } from '../../mainApp/about/about.component';
import { ContactUsComponent } from '../../mainApp/contact-us/contact-us.component';

export const StructureRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'contact',     component: ContactUsComponent },
];

