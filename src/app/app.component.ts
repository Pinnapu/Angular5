import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  items =[
    "Angular", "React", "Javscript"
  ]
  newitem ="";
  pushitem = function(){
    if(this.newitem!= ""){
      this.items.push(this.newitem);
      this.newitem="";
    }
  }
  removeitem = function(index){
    this.items.splice(index,1);
  }
}
