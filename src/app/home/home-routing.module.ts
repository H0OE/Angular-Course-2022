import { Hom2Component } from './hom2/hom2.component';
import { Hom1Component } from './hom1/hom1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hom1/dash', pathMatch: 'full' },
  {
    path: 'hom1',
    component: Hom1Component,
    children: [
      {
        path: 'dash',
        loadChildren: () =>
          import('./dash/dash.module').then((m) => m.DashModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
  {
    path: 'hom2',
    component: Hom2Component,
    children: [
      {
        path: 'dash',
        loadChildren: () =>
          import('./dash/dash.module').then((m) => m.DashModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
