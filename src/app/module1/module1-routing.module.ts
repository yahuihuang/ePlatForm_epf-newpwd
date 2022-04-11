import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Func1Component } from './func1/func1.component';
import { Module1Component } from './module1.component';

const routes: Routes = [
  {
    path: '',
    component: Module1Component
  },
  {
    path: 'func1',
    component: Func1Component
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
