import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../my-parent/my-child/message';
@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit {

  parentMessage: string = "Parent Says Hello!!!!";
  
  messageObj: Message;
  
  messageList: any = ["Hello!!", "Hey!!"];

  constructor() {
   
  }

  ngOnInit() {
    this.messageObj = {
      text: 'Hello!!',
      author: "Tony"
    }
  }

  updateMessageObject() {
    // this.messageObj.text = "Howdy!! There, how are you???";
    
    this.messageObj = {
      text: "Howdy!! There, how are you???",
      author: "Tony"
    }
  }

  updateMessageArray() {
    
    // this.messageList.push("Howdy!!");
    
    this.messageList = this.messageList.concat("How are you?");
    
  }

  updateMessageString() {
    this.parentMessage = "New message for you";
  }

}
