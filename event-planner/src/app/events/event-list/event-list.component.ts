import { Component, OnInit } from '@angular/core';
import { EventService } from '../EventService';
import { Event } from '../Event';
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private service: EventService) {

  }
  events: Event[];
  hiddenEvents:Event[];
  ngOnInit(): void {
    this.events = this.service.getAllEvents();
    this.hiddenEvents=this.service.getHiddenEvents();
  }
  onHidden(hidden: number) {
    
    this.service.addToHidden(hidden);
    //this.events=this.service.hiddenData;
  }
  onShow(id:number){
    this.service.removeFromHidden(id);
  }


}
