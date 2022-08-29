import { Admin1Component } from './admin/admin1/admin1.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin2Component } from './admin/admin2/admin2.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/admin1', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin1',
        component: Admin1Component,
      },
      {
        path: 'admin2',
        component: Admin2Component,
      },
    ],
  },
  { path: 'sub-admin', component: SubAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
