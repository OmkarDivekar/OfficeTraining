import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-event-example',
  templateUrl: './event-example.component.html',
  styleUrls: ['./event-example.component.css']
})
export class EventExampleComponent implements OnInit {
  eventForm!: any;
  eveData: any = [];
  event = {};
  res=[];
  eventTypeArr=["Indoor","Outdoor"];
  editFlag: boolean = false;
  selectedIndex: any;
  isIndoor: boolean = true;
  isOutdoor: boolean = false;
  updatestatus: string = '';
  updateId!: number;
  constructor(private fb: FormBuilder) { }
  levels = ['State', 'District', 'City', 'Village'];
  outdoorArr=["Cricket","Hockey","BasketBall","Tennis","Kabaddi"];
  indoorArr=["Chess","Carrom","Card","Ludo","Badminton"];
  ngOnInit(): void {
    this.createForm();
    this.getData();
  }

 
  createForm() {
    this.eventForm = this.fb.group({
      id: [''],
      eventLevel: [''],
      ename: [''],
      etype: [''],
      status: ['Pending'],
      game: ['']
    })
  }

  onSubmit() {
    if (this.editFlag == true) {
      let obj = this.eventForm.value;
      let currentVal = localStorage.getItem('event');
      if (currentVal !== null) {
        const oldRecord = JSON.parse(currentVal);
        let num = oldRecord.findIndex((a: any) => a.id == obj.id);
        oldRecord.splice(num, 1, obj);

        localStorage.setItem('event', JSON.stringify(oldRecord));
        this.getData();
        this.eventForm.reset();
      }
    } else {
      let obj = this.eventForm.value;
      this.event = Object.assign(this.event, obj);
      this.addData(obj);
      this.eventForm.reset();
      this.getData();

    }
  }

  addData(event: any) {
    this.editFlag = false;
    let events = [];
    if (localStorage.getItem('event')) {
      events = JSON.parse(localStorage.getItem('event') || '{}');
      events = [event, ...events];
    } else {
      events = [event];
    }
    localStorage.setItem('event', JSON.stringify(events));
  }
  getData() {
    let obj = JSON.parse(localStorage.getItem('event') || '{}');
    this.eveData = obj;
  }
  onEdit(obj: any) {

    this.editFlag = true;

    this.eventForm.patchValue({
      id: obj.id,
      eventLevel: obj.eventLevel,
      ename: obj.ename,
      etype: obj.etype,
      status: obj.status
    })
  }
  onDelete(obj: any) {
    const oldRecord = JSON.parse(localStorage.getItem('event') || '{}');
    let num = oldRecord.findIndex((a: any) => a.id == obj.id);
    oldRecord.splice(num, 1);

    localStorage.setItem('event', JSON.stringify(oldRecord));
    this.getData();
  }
  selStatus(val: any) {
    let num = this.eveData.findIndex((x: any) => x.id == this.updateId);
    this.eveData[num].status = val
    localStorage.setItem('event', JSON.stringify(this.eveData));
  }
  myEve(id: any) {
    this.updateId = id;
    console.log(id);
  }
  selEventType(event:any, type:string, val:string){

    // if(){

    // }
    console.log(event.target.checked, type, val)
  }
}
