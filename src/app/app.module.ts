import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradsComponentComponent } from './grads-component/grads-component.component';
import { GradsRoutingComponentComponent } from './grads-routing-component/grads-routing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GradsComponentComponent,
    GradsRoutingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
