import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth-services/storage-service/storage.service';


const BASIC_URL = ["https://localhost:8000/"]

@Injectable({
    providedIn: 'root'
}) 
export class AdminService {
    constructor(private http: HttpClient) {}

    postCategory(categoryDto: any):Observable<any>{
        console.log(this.createAuthorizationHeader())
        return this.http.post<[]>(BASIC_URL + "api/admin/category", categoryDto,
        {
            headers:this.createAuthorizationHeader()
        }
        )
    }

    getAllCategories(): Observable<any>{
        return this.http.post<[]>(BASIC_URL + "api/admin/categories", 
        {
            headers: this.createAuthorizationHeader()
        }
        )
    }

    getAllCategoriesByTitle(title:string): Observable<any>{
        return this.http.post<[]>(BASIC_URL + 'api/admin/category/${title}', 
        {
            headers:this.createAuthorizationHeader()
        }
        )
    }

    createAuthorizationHeader():HttpHeaders{
        let authHeaders:HttpHeaders = new HttpHeaders();
        return authHeaders.set(
            "Authorization", "Bearer " + StorageService.getToken()
        );
    }
}
