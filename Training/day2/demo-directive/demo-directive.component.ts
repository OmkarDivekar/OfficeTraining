import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {
 flag:string="offline";
 msg:string="";
 show:string="";

  constructor() { }
   cities=['Pune', 'Kolhpaur','Mumbai', 'Delhi'];
   nums=[1,2,3,4,5];
  ngOnInit(): void {
  }
  saveData(val:any)
  {
    console.log(val);
    this.msg  = val.target.value;
  }
  saveNum(data:any)
  {
    this.show = data.target.value;
  }

}
