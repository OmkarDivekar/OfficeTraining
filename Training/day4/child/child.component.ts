import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() fromParent:any; @Output() toParent:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  send(data:any){
  this.toParent.emit(data.value);
  }
}
