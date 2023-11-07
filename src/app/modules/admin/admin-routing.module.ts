import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { addCategoryComponent } from './admin-components/add-category/add-category.component';
import { PostProductComponent } from './admin-components/post-product/post-product.component';
import { ViewProductsComponent } from './admin-components/view-products/view-products.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "category", component: addCategoryComponent},
  { path: ":categoryId/product", component: PostProductComponent},
  { path: ":categoryId/Products", component: ViewProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
