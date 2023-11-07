import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AdminService } from 'src/app/modules/admin/admin-services/admin.service';
import { CustomerService } from '../../customer-service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  categories: any = [];
  isSpinning: boolean;

  constructor(
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categories = [];
    this.customerService.getAllCategories().subscribe((res) => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.categories.push(element);
      });
    });
  }
}