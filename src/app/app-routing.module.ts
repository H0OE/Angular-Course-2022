import { ClientComponent } from './client/client/client.component';
import { ProductComponent } from './product/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/product/product1', pathMatch: 'full' },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    data: { preload: true },
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
