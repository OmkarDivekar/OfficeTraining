import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  myData:any;
  msg:any;
 did:any;
 text:string="";
  constructor(private api:ApiService) { }

  ngOnInit(): void {
   this.getAllData();
  }

  getAllData()
  {
    this.api.getData().subscribe((data:any)=>{
      this.myData = data;
    });
  }
  
  onClick(id:any)
  {
    // this.msg = JSON.stringify(this.myData[id-1]);
    //  console.log(id); 
       this.did= id.target.value;
    // this.dname = name;
    // this.dcity= city;
    // this.dzipcode = zipcode;

  }


}
