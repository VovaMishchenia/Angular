import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../../Event';
@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  // age:number;
  // isPrimary:boolean;
  // param:any;

  @Input() currentEvent: Event;
  isSelected: boolean = false;
  isHidden:boolean=false;
  @Output() onHidden=new EventEmitter<number>();
  hidden(hidden:number){
    this.onHidden.emit(hidden);
  }
  @Output() onShow=new EventEmitter<number>();
  show(id:number){
    this.onShow.emit(id);
  }
  constructor() {
  }
  
  
  setSelected() {
    this.isSelected = !this.isSelected;
  }
  ngOnInit(): void {
    this.isHidden=this.currentEvent.hidden;
  }

}
