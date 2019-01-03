import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../my-child/message';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  @Input() message: string; 
  @Input() messageObj: any;

  constructor() {   
  }

  ngOnInit() {
  }

  
}
