import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  studfrm!:any;
  sData:any=[];
  student:any={};
  constructor(private fb: FormBuilder) { }
   cityData=['Kolhapur','Mumbai','Pune','Raigad','Goa','Nashik'];
   gender=['Male','Female'];
  ngOnInit(): void {
   this.studFormData();
  }

  studFormData()
  {
    this.studfrm = this.fb.group({
      id:[''],
      fname:[''],
      mname:[''],
      lname:[''],
      gender:[''],
      qualification:[''],
      city:['']
    })
 this.getData()
  }
  saveQuali(val:any)
  {
      let v = val.target.value;
      console.log(v);
  }
  
  storeData(student:any)
  {
    
    if(localStorage.getItem('student') )
    {
      this.sData = JSON.parse(localStorage.getItem('student') || '{}');
      this.sData = [student,...this.sData];
    }
    else{
      this.sData = [student];
    }
    localStorage.setItem('student',JSON.stringify(this.sData));
 
    
  }
  submit(){
    let data =this.studfrm.value;
    this.student = Object.assign(this.student,data);
    this.storeData(this.student);
    this.studfrm.reset();
   
  }
  edit(data:any)
  {
    this.studfrm.patchValue({
      id: data.id,
      fname: data.fname,
      mname  : data.mname,
      lname : data.lname,
      gender : data.gender,
      qualification : data.qualification,
      city : data.city
    })
  }

  getData(){
    let obj = JSON.parse(localStorage.getItem('student') || '{}');
    this.sData = obj;
  }
  onDelete(obj: any) {
    const oldRecord = JSON.parse(localStorage.getItem('student') || '{}');
    let num = oldRecord.findIndex((a: any) => a.id == obj.id);
    oldRecord.splice(num, 1);

    localStorage.setItem('student', JSON.stringify(oldRecord));
    this.getData();
  }
  
}
