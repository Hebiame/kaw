import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import {MapsExplorerModule} from "./maps-explorer/maps-explorer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    MapsExplorerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
