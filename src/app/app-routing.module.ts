import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch:"full" },
  { path: "home", component: HomePageComponent },
  { path: "product/:id", component: ProductDetailPageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
