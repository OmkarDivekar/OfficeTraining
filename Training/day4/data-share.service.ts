import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
//  cityName = new Subject();
 cityName = new BehaviorSubject("Pune");
  constructor() { }
}
