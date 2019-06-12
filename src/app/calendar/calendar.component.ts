import { Component, OnInit, ViewChild } from '@angular/core';
import { popup } from './popup.animation';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [ popup ]
})
export class CalendarComponent implements OnInit {
  date = new Date(new Date().getFullYear(), new Date().getMonth() );
  previusButton = false;
  daysArray: any [];
  weeknames = ['SUN', 'MON', 'TUE', 'WEB', 'THU', 'FRI', 'SAT'];
  popUp = false;
  popupAnimationState = 'start';
  day = 0;
  week: Date;
  heidText = false;
  cangeableAnimationState = 'end';
  eventsArray = new Array(31);
  @ViewChild('container') container;

  createEventsArray(){
    for(var i = 0; i<=10; i++){
      this.eventsArray[Math.round(Math.random()*31)] = true;
    }
  }

  constructor() { }

  ngOnInit() {
   this.resize(this.container.nativeElement.clientWidth);
   this.createDaysArray();
   this.createEventsArray();
  }


  nextMounth(){
    this.createEventsArray();
    if (this.date.getMonth() == 11) {
      this.date = new Date(this.date.getFullYear() + 1, 0, 1);
    } else {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    }
    if(this.date > new Date()){
      this. previusButton = true;
    }
    this.createDaysArray();
  }


  previusMounth(){
    this.createEventsArray();
    if (this.date.getMonth() == 0) {
      this.date = new Date(this.date.getFullYear() - 1, 11, 1);
    } else {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
    }
    if(this.date <= new Date()){
      this. previusButton = false;
    }
    this.createDaysArray()
  }

  getMounth(){
    return this.date.getMonth();
  }

  getWeek(){
    return this.date.getDay();
  }

  createDaysArray(){
    let maunthDays = null;
    let M =this.getMounth();
      if (M == 0 ||M == 2 ||M == 4 ||M == 6 ||M == 7 ||M == 9 ||M == 11) maunthDays = 31;
      else if ( M == 3 ||M == 5 ||M == 8 ||M == 10) maunthDays = 30;
      else if (M == 1 ) this.date.getFullYear() % 4 == 0? maunthDays = 29: maunthDays = 28;
    
    this.daysArray = [];
    for(let i = 0; i < maunthDays; i++){
      this.daysArray.push(i+1);
    }
    for(let j = 0; j<this.date.getDay(); j++){
      this.daysArray.unshift(null);
    }
  }
  openEvents(day){
    if(this.eventsArray[day]){
      this.popUp = true;
      setTimeout(()=>{
        this.popupAnimationState = this.cangeableAnimationState;
      }, 10 )
      this.day = day;
      this.week = new Date(this.date.getFullYear(), this.date.getMonth() + 0, day )
      setTimeout(()=>{
        this.heidText = true;
      }, 250)
    }
    
  }
  closeEvents(id){
    this.heidText = false;
    this.popupAnimationState = 'start';
    setTimeout(()=>{
      this.popUp = false;
    }, 200) ;
    
  }

  resize(container){
    if(container > 500){
      this.cangeableAnimationState = 'end';
    }
    else {this.cangeableAnimationState = 'endXs';}
  }
}
