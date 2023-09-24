import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./modules/shared/layout.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  exports: [
    LayoutModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
