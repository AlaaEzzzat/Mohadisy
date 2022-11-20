import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminSettingProfileComponent } from './admin-setting-profile/admin-setting-profile.component';
import { AdminSettingUsersComponent } from './admin-setting-users/admin-setting-users.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';

import { Routes ,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes = [
  { path: '',
  component: AdminSettingsComponent,
  children: [
    {path:'profile',component:AdminSettingProfileComponent},
    {path:'users',component:AdminSettingUsersComponent},
  ]},
    ];

@NgModule({
  declarations: [
    AdminSettingsComponent,
    AdminSettingProfileComponent,
    AdminSettingUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminSettingsModule { }
