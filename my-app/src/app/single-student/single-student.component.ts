import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { Student } from '../../utils/student.model';

@Component({
  selector: 'app-single-student',
  imports: [],
  templateUrl: './single-student.component.html',
  styleUrl: './single-student.component.css'
})
export class SingleStudentComponent {

   // @Input() student: Student | undefined;
   
   // @Output() 
   // onShowClick: EventEmitter<number> = new EventEmitter();

   onShowClick = output<any>();

   student = input<Student>();  

  
   handleShowClick(){
      this.onShowClick.emit(this.student()?.id)
   }
}
