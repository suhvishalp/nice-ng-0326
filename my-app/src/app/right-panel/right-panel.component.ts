import { Component } from '@angular/core';
import { StudentComponent } from "../student/student.component";
import { StudentListComponent } from "../student-list/student-list.component";

@Component({
  selector: 'app-right-panel',
  imports: [StudentComponent, StudentListComponent],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.css'
})
export class RightPanelComponent {

}
