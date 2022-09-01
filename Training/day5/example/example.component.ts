import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
arrData:any=[];
Games=[];
frm:any;
 myGames=['kho-kho','Kabaddi'];
  constructor(private fb: FormBuilder) { }
   array:any=[
    {id:1, name:'Omkar', age:26},
    {id:2, name:'mahesh', age:29},
    {id:3, name:'raj', age:25},
    {id:1, name:'akshay', age:26,flag:true},
    {id:1, name:'akshay', age:26,flag:false}
  ]
  res=[];
  ngOnInit(): void {
    this.myMethod();
    this.frm = this.fb.group({
      games:[]
    })
  }
  selGames(data:any,val:any){
    console.log(data.target.checked,val);
    let obj = this.frm.value;
    //obj.games.push(val);
    console.log(this.frm.value);
  }
  myMethod()
  { 
    for(let i=0;i<this.array.length;i++)
    {
      for(let j =i+1;j<this.array.length;j++)
      {
          if(this.array[i].id != this.array[j] && this.array[i].flag!= false && this.array[j].flag!=false){
            this.arrData.push(this.array[j]);
            
            console.log(this.arrData);
            break;
          }
      }
    }
  }

}
