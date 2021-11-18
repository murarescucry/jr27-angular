import {Component, OnInit} from "@angular/core";
import {Student, StudentService} from "../services/student/student.service";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"]
})
export class FirstComponent implements OnInit {
  students: Array<Student> = [];

  constructor(private studentService: StudentService) {
    // this.studentService.getStudents();
  }

  ngOnInit(): void {
  }

}
