import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
msg:any;
msg1:string="";
saveText:any;
count:number=0;
formData:any;
myDate=  new Date(2022,8,15);
  constructor(private fb: FormBuilder) { }
  qualiData=['BE','BSC','MS','MSC'];
  ngOnInit(): void {
    this.formData = this.fb.group({
      firstName:[''],
      lastName:[''],
      mobileNo:[''],
      education:['']
  })
  }

  showMsg(val:any){
    this.msg = val.target.value;
  }
  keyUp(b:any)
  {
    this.msg1 = b.target.value ;
  }

  blurFun()
  {
    console.log("good morning");
    this.saveText="good morning";
  }
  mouseUp()
  {
   
    this.count = this.count + 1;
  }
  saveQuali(val:any)
  {
    let v = val.target.value;
    console.log(v);
  }

}
