import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {

  productId: any = this.activatedroute.snapshot. params ['productId'];
  isSpinning = false;
  validateForm !: FormGroup;
  imgChanged = false;
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null = null;
  existingImage: string | null = null;

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
    name: [null, [Validators. required]],
    price: [null, [Validators.required]],
    description: [null, [Validators.required]],
    });
    this.getProductById();
  }

  getProductById() {
    this. adminService.getProductById(this.productId).subscribe((res) => {
      console.log(res);
      const productDto = res;
      this.existingImage = 'data:image/jpeg; base64, ' + res.returnedImg;
      this.validateForm.patchValue(productDto);
    })
  }

    onFileSelected(event: any) {
      this. selectedFile = event. target.files[0];
      this.previewImage();
      this. imgChanged = true;
      this.existingImage = null;
    }

    previewImage() {
      const reader = new FileReader();
      reader.onload = () => {
      this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
  }
}