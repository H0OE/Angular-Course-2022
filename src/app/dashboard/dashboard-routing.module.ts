import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        title: 'soy view 1',
        path: 'view1',
        component: View1Component,
      },
      {
        title: 'soy view 2',
        path: 'view2',
        component: View2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
