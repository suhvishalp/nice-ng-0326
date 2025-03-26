import { Component } from '@angular/core';
import { STUDENTS } from '../../utils/dummy-students';


@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

    randomIndex = Math.floor(Math.random() * STUDENTS.length);

    studentName = STUDENTS[this.randomIndex].name
    imageUrl = STUDENTS[this.randomIndex].imageUrl



}
