import { User2Component } from './user2/user2.component';
import { User1Component } from './user1/user1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user1', pathMatch: 'full' },
  { path: 'user1', component: User1Component },
  { path: 'user2', component: User2Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
