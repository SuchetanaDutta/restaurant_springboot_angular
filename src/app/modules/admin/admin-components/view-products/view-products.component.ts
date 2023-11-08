import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
    selector: 'app-view-products',
    templateUrl: './view-products.component.html',
    styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent {

    categoryId: any = this.activatedroute.snapshot.params['categoryId'];
    Products: any = [];
    isSpinning: boolean;
    validateForm: FormGroup;
    size: NzButtonSize = 'large';

    constructor(private adminService: AdminService,
        private activatedroute: ActivatedRoute, 
        private fb:FormBuilder,
        private message: NzMessageService) { }

    ngonInit(): void {
        this.validateForm = this.fb.group({
            title: [null, [Validators.required]],
        });
        this.getProductsByCategory(); 
    }

    submitForm() {
        this.isSpinning = true;
        this.Products = [];
        this.adminService.getProductsByCategoryAndTitle(this.categoryId, this.validateForm.get(['title'])!.value).subscribe((res) => {
            console.log(res);
            res.foreach(element => {
                element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
                this.Products.push(element);
                this.isSpinning = false;
            });
        });
    }

    getProductsByCategory() {
        this.Products = [];
        this.adminService.getProductsByCategory(this.categoryId).subscribe((res) => {
            res.forEach(element => {
                element.processedImg = 'data:Image/jpeg;base64,' + element.returnedImg; 
                this.Products.push(element);
            });
        });
    }

    deleteProduct(productId: number){
        this.adminService.deleteProduct(productId).subscribe((res) => {
            if (res == null) {
                this.getProductsByCategory();
                this.message
                    .success(
                        'Product Deleted Successfully.',
                        { nzDuration: 5000 }
                    );
            } else {
                this.message.error(
                    'Something went wrong',
                    { nzDuration: 5000 }
                )
            }
        });
    }

}