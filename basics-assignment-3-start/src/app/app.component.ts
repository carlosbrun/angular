import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;
  logarray : Array<String> = [];
  biggerThan4 = false;

  displayAndLog(){
    this.isVisible=!this.isVisible;
    this.logarray.push(this.getTimeStamp());
    if(this.logarray.length==4){
      this.biggerThan4 = true;
    }
  }

  // Adapted from https://gist.github.com/wanderrful/660b83d459892e304ed2b87285c2d8b6
  getTimeStamp(): String {
    // Create a date object with the current time
    let now: Date = new Date();
    // Create an array with the current month, day and time
    let date: Array<String> = [ String(now.getMonth() + 1), String(now.getDate()), String(now.getFullYear()) ];
    // Create an array with the current hour, minute and second
    let time: Array<String> = [ String(now.getHours()), String(now.getMinutes()), String(now.getSeconds())];
    // If seconds and minutes are less than 10, add a zero
    for (let i of time) {  
        if ( Number(i) < 10 ) {
          i = "0" + i;
        }
    }
    // Return the formatted string
    return date.join("/")+"-"+time.join(":"); 
  }
}