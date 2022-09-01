import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
dataURL="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  getData():Observable<any>
  {
    return this.http.get<any>(this.dataURL);
  }
}
