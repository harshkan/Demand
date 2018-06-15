import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { FullviewComponent } from './fullview/fullview.component';
import { MiniviewComponent } from './miniview/miniview.component';
import { MonthlyviewComponent } from './monthlyview/monthlyview.component';
const routes: Routes=[
{path:'addrequest', component: AddrequestComponent},
{path:'fullview', component: FullviewComponent},
{path:'miniview', component: MiniviewComponent},
{path:'monthlyview', component: MonthlyviewComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddrequestComponent,FullviewComponent,MiniviewComponent,MonthlyviewComponent]
