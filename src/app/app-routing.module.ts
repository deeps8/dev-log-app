import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './block/auth/auth.component';

const routes: Routes = [
  {
    path:'feeds',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'',
    redirectTo:'feeds',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'auth/:type',
    component:AuthComponent
  },
  {
    path:'auth',
    redirectTo:'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
