import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    children: [
      {
        path: 'view1',
        loadChildren: () => import('./view1/view1.module').then(m => m.View1Module)
      },
      {
        path: 'view2',
        loadChildren: () => import('./view2/view2.module').then(m => m.View2Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
