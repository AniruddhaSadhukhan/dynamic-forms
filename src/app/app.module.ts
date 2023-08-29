import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormRendererComponent } from './form-renderer/form-renderer.component';
import { FormioModule } from '@formio/angular';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
