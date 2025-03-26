import { Component } from '@angular/core';
import { STUDENTS } from '../../utils/dummy-students';
import { Student } from '../../utils/student.model';
import { SingleStudentComponent } from "../single-student/single-student.component";

@Component({
  selector: 'app-student-list',
  imports: [SingleStudentComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

    studentData: Student[] = STUDENTS;

    selectedStudent:Student | undefined = undefined;

    handleOnShowClick(id :number){
      this.selectedStudent = this.studentData.find(stud => stud.id == id)
    }

    getCourseOfSelectedStudent(){
      return this.selectedStudent?.courses;
    }
}
