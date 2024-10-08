import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), ProductService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
