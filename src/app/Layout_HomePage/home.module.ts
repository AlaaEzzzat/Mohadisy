import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomepageComponent, HeaderComponent, ServiceProviderComponent, OurServicesComponent, OurWorkComponent, UserReviewsComponent],
  imports: [CommonModule],
})
export class HomeModule {}
