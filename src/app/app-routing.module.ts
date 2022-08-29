import { Home2Component } from './home/home2/home2.component';
import { Home1Component } from './home/home1/home1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/home1', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home/home1', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home1',
        component: Home1Component,
      },
      {
        path: 'home2',
        component: Home2Component,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
