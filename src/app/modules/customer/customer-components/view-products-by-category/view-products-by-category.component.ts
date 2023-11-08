import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../customer-service/customer.service';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.scss']
})
export class ViewProductsByCategoryComponent {

  categoryId: number = this.activatedRoute.snapshot.params["categoryId"];
  Products = [];

  constructor(private activatedRoute: ActivatedRoute,
    private service: CustomerService) { }

    ngOnInit() {
      this.getProductsByCategory();
    }

    getProductsByCategory() {
      this.service.getProductsByCategory(this.categoryId).subscribe((res) => {
        console.log(res);
        res.forEach(element => {
          element.processedImg = "data:image/jpeg;base64" + element.returnedImg;
          this.Products.push(element);
        })
      })
    }
}
