import { UserAuthGuard } from './@shared/Guards/user-auth.guard';
import { SpAuthGuard } from './@shared/Guards/sp-auth.guard';
import { LandingComponent } from './@shared/components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
   
  },

  {
    path: 'Admin',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'Spmanagement',
    loadChildren: () =>
      import('./spmanagement/spmanagement.module').then(
        (m) => m.SPmanagementModule
      ),
      canActivate:[SpAuthGuard]
  },
  {
    path: 'usermanagement',
    loadChildren: () =>
      import('./usermanagement/usermanagement.module').then(
        (m) => m.UsermanagementModule
      ),
      canActivate:[UserAuthGuard]

  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
