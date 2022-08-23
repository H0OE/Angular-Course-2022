import { Provider1Component } from './provider1/provider1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Provider2Component } from './provider2/provider2.component';

const routes: Routes = [
  { path: 'provider1', component: Provider1Component },
  { path: 'provider2', component: Provider2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
