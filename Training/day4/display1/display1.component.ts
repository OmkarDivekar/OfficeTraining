import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
mycity:any;
  constructor(private share : DataShareService) {
    this.share.cityName.subscribe((data:any)=>{
      this.mycity = data;
    })
   }

  ngOnInit(): void {
  }

  sendData(val:any){
    this.share.cityName.next(val.value);
  }
}
