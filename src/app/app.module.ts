import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarTempleteComponent } from './navbar-templete/navbar-templete.component';
=======
import { LogoComponent } from './logo/logo.component';
import { LogoTemplateComponent } from './logo-template/logo-template.component';
>>>>>>> 72c1e3db4cd482e799804f7e662cea7597588204

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarTempleteComponent
=======
    LogoComponent,
    LogoTemplateComponent
>>>>>>> 72c1e3db4cd482e799804f7e662cea7597588204
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
