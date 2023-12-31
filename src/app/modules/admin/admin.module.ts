
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { addCategoryComponent } from './admin-components/add-category/add-category.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PostProductComponent } from './admin-components/post-product/post-product.component';
import { ViewProductsComponent } from './admin-components/view-products/view-products.component';
import { UpdateProductComponent } from './admin-components/update-product/update-product.component';
import { DemoNgZorroAntdModule } from 'src/app/DemoNgZorroAntdModule';
import { GetReservationsComponent } from './admin-components/get-reservations/get-reservations.component';

@NgModule({
  declarations: [
    DashboardComponent,
    addCategoryComponent,
    PostProductComponent,
    ViewProductsComponent,
    UpdateProductComponent,
    GetReservationsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDropDownModule, 
    NzButtonModule,
    NzDividerModule,
    NzGridModule,
    DemoNgZorroAntdModule
  ]
})
export class AdminModule { }
