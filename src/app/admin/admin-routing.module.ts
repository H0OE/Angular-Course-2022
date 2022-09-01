import { Ad2Component } from './ad2/ad2.component';
import { Ad1Component } from './ad1/ad1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ad1', pathMatch: 'full' },
  { path: 'ad1', component: Ad1Component },
  { path: 'ad2', component: Ad2Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
