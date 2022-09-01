import { Inv2Component } from './inv2/inv2.component';
import { Inv1Component } from './inv1/inv1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inv1', pathMatch: 'full' },
  { path: 'inv1', component: Inv1Component },
  { path: 'inv2', component: Inv2Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
