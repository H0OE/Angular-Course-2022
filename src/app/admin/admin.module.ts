import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { AdminComponent } from './admin/admin.component';
import { Admin1Component } from './admin/admin1/admin1.component';
import { Admin2Component } from './admin/admin2/admin2.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SubAdminComponent,
    AdminComponent,
    Admin1Component,
    Admin2Component,
  ],
  imports: [CommonModule, AdminRoutingModule, RouterModule],
})
export class AdminModule {}
