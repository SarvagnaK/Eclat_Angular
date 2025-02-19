import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ChildComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Data Binding Example';
  parentMessage = 'Hello from Parent';
}
