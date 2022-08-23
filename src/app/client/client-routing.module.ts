import { Client1Component } from './client1/client1.component';
import { ProviderComponent } from './../provider/provider/provider.component';
import { SharedComponent } from './../shared/shared/shared.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client2Component } from './client2/client2.component';

const routes: Routes = [
  { path: '', redirectTo: '/client/client1', pathMatch: 'full' },
  { path: 'client1', component: Client1Component },
  { path: 'client2', component: Client2Component },
  {
    path: 'shared',
    loadChildren: () =>
      import('../shared/shared.module').then((m) => m.SharedModule),
    data: { preload: true },
  },
  {
    path: 'provider',
    loadChildren: () =>
      import('../provider/provider.module').then((m) => m.ProviderModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
