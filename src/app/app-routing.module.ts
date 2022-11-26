import { LandingComponent } from './@shared/components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './@core/auth/guards/authorized.guard';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Layout_HomePage/homepage/homepage.component';

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
    // canActivate: [AuthorizedGuard],
    // data: {
    //   role: 'Admin',
    // },
  },
  {
    path: 'Spmanagement',
    loadChildren: () =>
      import('./spmanagement/spmanagement.module').then(
        (m) => m.SPmanagementModule
      ),
    // canActivate: [AuthorizedGuard],
    // data: {
    //   role: 'Service provider',
    // },
  },
  {
    path: 'usermanagement',
    loadChildren: () =>
      import('./usermanagement/usermanagement.module').then(
        (m) => m.UsermanagementModule
      ),
    // canActivate: [AuthorizedGuard],
    // data: {
    //   role: 'Client',
    // },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
