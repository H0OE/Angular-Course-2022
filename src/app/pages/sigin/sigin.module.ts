import { NgModule } from '@angular/core';
import { SiginComponent } from './sigin.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Route[] = [
  {
    path: '',
    component: SiginComponent,
  },
];

@NgModule({
  declarations: [SiginComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    CommonModule,
  ],
})
export class SiginModule {}
