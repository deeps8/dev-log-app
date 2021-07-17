import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    QuillModule.forRoot()
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
