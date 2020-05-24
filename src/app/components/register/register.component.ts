import { Component } from '@angular/core';
import { Student } from 'src/app/domain/student.model';
import { Teacher } from 'src/app/domain/teacher.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  student: Student;
  teacher: Teacher;
  schoolPrincipal: SchoolPrincipal;

  constructor() { }
  
}
