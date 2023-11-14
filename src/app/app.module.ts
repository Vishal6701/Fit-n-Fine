import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routesComponent  } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceComponent } from './price/price.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo/demo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StyleAppDirective } from './demo/style-app.directive';


@NgModule({
  declarations: [
    AppComponent,
    routesComponent,
    PriceComponent,
    ExercisesComponent,
    DemoComponent,
    StyleAppDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
