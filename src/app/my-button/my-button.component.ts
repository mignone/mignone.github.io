import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.sass']
})
export class MyButtonComponent implements OnInit {

  @Input() title = "Click Me!"

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    window.alert("You clicked me!");
  }

}
