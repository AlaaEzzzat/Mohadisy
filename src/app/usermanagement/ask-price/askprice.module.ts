import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AskPriceRoutingModule } from './askprice-routing.module';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { RequiredFilesComponent } from './required-files/required-files.component';

@NgModule({
  declarations: [ProjectInfoComponent, RequiredFilesComponent],
  imports: [
    CommonModule,
    AskPriceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsermanagementModule {}
