import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit {

  parentMessage: string = "Parent Says Hello!!!!";


  constructor() {
   
  }

  ngOnInit() {
  }

}
