import { Component, WritableSignal, computed, signal } from '@angular/core';
import { STUDENTS } from '../../utils/dummy-students';
import { Student } from '../../utils/student.model';


@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

    randomIndex = Math.floor(Math.random() * STUDENTS.length);

    // student :Student = STUDENTS[this.randomIndex];
    // imageUrl: string = this.student.imageUrl

    student = signal(STUDENTS[this.randomIndex]);
    imageUrl = computed(()=> this.student().imageUrl);

    handleShowAnotherStduent(){
      const randomIndex = Math.floor(Math.random() * STUDENTS.length);
      //this.student = STUDENTS[randomIndex];
      //this.imageUrl = this.student.imageUrl

      this.student.set(STUDENTS[randomIndex])
    }

}
