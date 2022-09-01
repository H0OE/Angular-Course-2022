import { Dash1Component } from './dash1/dash1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dash2Component } from './dash2/dash2.component';

const routes: Routes = [
  { path: '', redirectTo: 'dash1', pathMatch: 'full' },
  { path: 'dash1', component: Dash1Component },
  { path: 'dash2', component: Dash2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule {}
