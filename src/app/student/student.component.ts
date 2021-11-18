import {AfterContentChecked, AfterContentInit, Component, OnInit} from "@angular/core";
import {Student, StudentService} from "../services/student/student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit, AfterContentInit, AfterContentChecked{
  students: Array<Student> = [];
  student: Student | undefined;

  constructor(private studentService: StudentService) {
    console.log('constructor');
    this.student = {
      name: "Andrei",
      email: "andrei@email.com",
      id: 1
    };
    this.studentService.getStudents().subscribe((data: Array<Student>) => {
      this.students = data;

      const newStudent = this.students[0];
      newStudent.name = "newStudent";

      this.studentService.createStudent(newStudent).subscribe((createData: Student) => {
        this.students = [createData];
      });

      this.studentService.deleteStudent(this.students[8]).subscribe((deleteData: any) => {
        console.log("delete: ", deleteData);
        this.students.splice(8, 1);
      });
    });

    this.studentService.getStudentById(3).subscribe((data: Student) => {
      this.student = data;
      this.student.name = "Andrei";

      this.studentService.updateStudent(this.student).subscribe((updateData: Student) => {
        console.log("updateData: ", updateData);
      });
    });
  }

  ngAfterContentChecked(): void {

    }

  ngAfterContentInit(): void {

    }

  ngOnInit(): void {
        console.log('oninit');
    }

}
