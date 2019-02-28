import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductCardComponent } from './component/product-card/product-card.component';

//Importing the services 
import { ProductsListService } from './services/products-list.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductCardComponent,
    PageNotFoundComponent,
    ProductDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
