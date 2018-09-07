import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  username = '';
  allowClearUsername = false;
 
  onClearUsername() {
    this.username = '';
    this.allowClearUsername = false;
  }
 
  onUpdateUsername(event: Event){
    console.log(this.username);
    // this.serverName = (<HTMLInputElement>event.target).value;
    if (this.username.length > 0) {
      this.allowClearUsername = true;
    }else{
      this.allowClearUsername = false;
    }
  }
 
}
