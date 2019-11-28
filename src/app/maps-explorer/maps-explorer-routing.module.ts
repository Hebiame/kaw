import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapsExplorerComponent} from "./maps-explorer/maps-explorer.component";


const routes: Routes = [
  { path: 'maps', component: MapsExplorerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsExplorerRoutingModule { }
