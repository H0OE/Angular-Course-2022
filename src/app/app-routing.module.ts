import { ClientComponent } from './client/client/client.component';
import { ProductComponent } from './product/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent, data: { preload: true } },
  { path: 'client', component: ClientComponent, data: { preload: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
