import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../my-parent/my-child/message';
@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit {

  parentMessage: string = "Parent Says Hello!!!!";
  
  messageObj: any;

  constructor() {
   
  }

  ngOnInit() {
    this.messageObj = {
      text: 'Hello!!',
      author: "Tony"
    }
  }

}
