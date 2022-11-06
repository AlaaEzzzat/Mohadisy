import { RequiredFilesComponent } from './required-files/required-files.component';
import { AskPriceGuard } from './../../@shared/Guards/ask-price.guard';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { UserhomeComponent } from './../userhome/userhome.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'projectInfo',
    component: ProjectInfoComponent,
    canActivate: [AskPriceGuard],
  },
  {
    path: 'uploadRequiredFiles',
    component: RequiredFilesComponent,
    canActivate: [AskPriceGuard],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskPriceRoutingModule {}
