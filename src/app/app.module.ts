import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

import { LogoComponent } from './logo/logo.component';
import { LogoTemplateComponent } from './logo-template/logo-template.component';
import { FooterComponent } from './footer/footer.component';
import { GradsComponentComponent } from './grads-component/grads-component.component';
import { GradsRoutingComponentComponent } from './grads-routing-component/grads-routing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogoTemplateComponent,
    FooterComponent,
     GradsComponentComponent,
    GradsRoutingComponentComponent,
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
