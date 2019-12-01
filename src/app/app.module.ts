import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from "./homepage/homepage.module";
import { MapsExplorerModule } from "./maps-explorer/maps-explorer.module";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, pl_PL } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pl from '@angular/common/locales/pl';

registerLocaleData(pl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    MapsExplorerModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pl_PL }],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
