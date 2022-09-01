import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-ls-task',
  templateUrl: './ls-task.component.html',
  styleUrls: ['./ls-task.component.css']
})
export class LsTaskComponent implements OnInit {
  userfrm!: any;
  uData: any = [];
  data: any;
  status = 'Add';
  uData2:any=[];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.userfrm = this.fb.group({
      id: 1,
      uname: [''],
      email: [''],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      dob: ['']
    })
    this.fetchData();

  }

  fetchData() {
    let d1 = JSON.parse(localStorage.getItem('user') || '{}');
    this.uData.push(d1);
  }

  submit() {

    let data = JSON.stringify(this.userfrm.value);
    
    let oldVal =  JSON.parse(localStorage.getItem('user') || '{}');
   if(localStorage.getItem('user'))
   {
     this.uData2.push(data);
    let data2 = JSON.stringify([oldVal,this.uData2]);

    localStorage.setItem('user', data2);


   }
   else{
     localStorage.setItem('user', data);
   }
    this.userfrm.reset();
  }

  edit(data:any)
  {
    this.userfrm.patchValue({
      id:data.id,
      uname:data.uname,
      email:data.email,
      mobile:data.mobile,
      dob:data.dob
    })
  }
  
}
