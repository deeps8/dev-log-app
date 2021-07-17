import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AppMaterialModule } from '../app-material.module';
import { MatButtonModule } from '@angular/material/button';

// routing for home components
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'post',
    component:PostComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
