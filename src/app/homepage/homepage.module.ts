import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {NzButtonModule, NzCardModule, NzIconModule} from "ng-zorro-antd";


@NgModule({
  declarations: [HomepageComponent],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzCardModule
    ]
})
export class HomepageModule { }
