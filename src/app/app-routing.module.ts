import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokenRouteComponent } from './broken-route/broken-route.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'broken-route', component: BrokenRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
