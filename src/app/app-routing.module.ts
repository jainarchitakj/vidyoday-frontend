import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
//import { DashComponent } from './dashboard/dash/dash.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PriceTableComponent } from './pages/price-table/price-table.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { RefundComponent } from './pages/refund/refund.component';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';

import { ViewAllSchemesComponent } from './schemes/view-all-schemes/view-all-schemes.component';
import { ViewSchemeByIdComponent } from './schemes/view-scheme-by-id/view-scheme-by-id.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'price', component: PriceTableComponent },
  { path: 'terms', component: TermsconditionsComponent },
  { path: 'refund-policy', component: RefundComponent },
  { path: 'privacy-policy', component: PrivacypolicyComponent },

  { path: 'schemes', component: ViewAllSchemesComponent },
  { path: 'schemes/view/:id', component: ViewSchemeByIdComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'main', component: DashboardComponent }
    ]
  }





  //{ path: 'dashboard', component: DashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
