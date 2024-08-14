import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    data: { title: 'Timeline' }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TimelineModule {
  static routes = routes;
 }
