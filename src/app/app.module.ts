import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { FullviewComponent } from './fullview/fullview.component';
import { MiniviewComponent } from './miniview/miniview.component';
import { AppRoutingModule,routingComponents } from './/app-routing.module';
import { MonthlyviewComponent } from './monthlyview/monthlyview.component';
import { HttpClientModule } from '@angular/common/http';
import { AllrequestsComponent } from './allrequests/allrequests.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AddrequestComponent,
    FullviewComponent,
    MiniviewComponent,
    MonthlyviewComponent,
    AllrequestsComponent


    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
