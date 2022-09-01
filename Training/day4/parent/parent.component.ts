import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  msgParent:any;
  msgchild:any;
  constructor() { }

  ngOnInit(): void {
  }
  sendToChild(val:any)
  {
    this.msgParent = val.value;
  }
  dataFromChild(data:any){
    this.msgchild = data;
  }
}
