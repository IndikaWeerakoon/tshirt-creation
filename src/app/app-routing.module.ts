import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent } from './architect/structure/structure.component';
import { AdminComponent } from './admin/admin.component';
import { StructureModule } from './architect/structure/structure.module';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path: '', 
    component:StructureComponent,
    children:[
      {
        path: '',
        loadChildren: './architect/structure/structure.module#StructureModule',
      }

    ]

  },
  {path:'app/controll/admin' , component:AdminComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
