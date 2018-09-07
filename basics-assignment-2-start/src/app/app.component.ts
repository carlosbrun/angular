import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username:string = '';
  isEmpty:boolean = true;

  resetUsername(event: any){
    this.username = '';
    this.isEmpty = true;
  }

  onKeypress(event){
    if(this.username!==''){
      this.isEmpty = false;
    }else{
      this.isEmpty = true;
    }
  }

}
