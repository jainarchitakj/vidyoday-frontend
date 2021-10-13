import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
//import { DashComponent } from './dashboard/dash/dash.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewAllSchemesComponent } from './schemes/view-all-schemes/view-all-schemes.component';
import { ViewSchemeByIdComponent } from './schemes/view-scheme-by-id/view-scheme-by-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GalleryComponent } from './pages/gallery/gallery.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PriceTableComponent } from './pages/price-table/price-table.component';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { RefundComponent } from './pages/refund/refund.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    AboutusComponent,
    ContactusComponent,
    ViewAllSchemesComponent,
    ViewSchemeByIdComponent,
   
    GalleryComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    PriceTableComponent,
    TermsconditionsComponent,
    PrivacypolicyComponent,
    RefundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
