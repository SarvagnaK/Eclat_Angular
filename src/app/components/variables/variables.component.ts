import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {
firstName: string ="sarvagna";

lastName: string ="Khatri";

courseName:string ="angular"
rollNo: number = 123;
isActive : boolean = true;

student: any;


constructor(){
  this.student="savo"
  this.student=32323;
  this.rollNo=124
  this.courseName="angular 19";
}
}
