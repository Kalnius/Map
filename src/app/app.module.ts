import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { InfoComponent } from './info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [{ path: '', component: WrapperComponent }];

@NgModule({
  declarations: [AppComponent, MapComponent, WrapperComponent, InfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
