import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from '../my-child/message';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyChildComponent implements OnInit {

  @Input() message:string; 
  @Input() messageObj:Message;
  @Input() messageList:any;

  constructor() {   
  }

  ngOnInit() {
  }

  
}
