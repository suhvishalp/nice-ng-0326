import { Component } from '@angular/core';
import { StudentComponent } from "../student/student.component";

@Component({
  selector: 'app-right-panel',
  imports: [StudentComponent],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.css'
})
export class RightPanelComponent {

}
