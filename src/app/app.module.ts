import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavbarTempleteComponent } from './navbar-templete/navbar-templete.component';
import { LogoComponent } from './logo/logo.component';
import { LogoTemplateComponent } from './logo-template/logo-template.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarHeaderTopComponent } from './navbar-header-top/navbar-header-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTempleteComponent,
    LogoComponent,
    LogoTemplateComponent,
    FooterComponent,
    NavbarHeaderTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
