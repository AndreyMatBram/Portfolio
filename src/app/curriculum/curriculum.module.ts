import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './curriculum.component';

const routes: Routes = [
  { 
    path: '',
    component: CurriculumComponent,
    data: { title: 'CV' }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CurriculumModule {
  static routes = routes;
}

