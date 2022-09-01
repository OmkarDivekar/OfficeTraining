import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
   msg:string='';
   show:boolean=true;
   inputData:any=[];
  constructor() { }
  array=[
    {'id':1, name:'John',gender:'male', status:'0', flag:false}, //Active
    {'id':2, name:'Deo',gender:'male', status:'1', flag:false}, //Pending
    {'id':3, name:'Deo',gender:'male', status:'2', flag:false}, //Wating for approval
    {'id':4, name:'Text',gender:'male', status:'3', flag:false}, //Closed
  ];

  product=[ {id:1, name:'Laptop', price:25000, availble:3},
            {id:2, name:'Mobile', price:35000, availble:2},
            {id:3, name:'Refrigerator', price:55000, availble:4}];
  
  ngOnInit(): void {
  }

  onClick(i:any){
    this.array[i].flag=true;
  }

  clicked(v :any)
  {
    let vv =this.product[v].availble = this.product[v].availble-1;
    console.log(vv);
    if(vv>0)
    { 
      this.msg = this.product[v].name + " Added to the cart";
    }
    else{
      
      alert("No more Items available");
      this.msg = this.product[v].name + " Out Of stock";
    }
  }
  onSave(ele:any)
  {
    this.inputData.push(ele.value);
  }
  submitData(data:any,i:any)
  {
    this.array[i].name = data.value;
    console.log(this.array[i].name);
  }

}
