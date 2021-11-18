import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Student {
  name: string,
  email: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsRequestUrl = "https://jsonplaceholder.typicode.com/users"

  constructor (private httpClient: HttpClient) { }

  getStudents(): Observable<any> {
    return this.httpClient.get(this.studentsRequestUrl);
  }

  getStudentById(id: number): Observable<any> {
    const studentByIdRequestUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.httpClient.get(studentByIdRequestUrl);
  }

  updateStudent(student: Student): Observable<any> {
    const updateStudentUrl = `https://jsonplaceholder.typicode.com/users/${student.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.put(updateStudentUrl, student, httpOptions);
  }

  createStudent(student: Student): Observable<any> {
    const updateStudentUrl = `https://jsonplaceholder.typicode.com/users/`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.post(updateStudentUrl, student, httpOptions);
  }

  deleteStudent(student: Student): Observable<any> {
    const updateStudentUrl = `https://jsonplaceholder.typicode.com/users/${student.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.delete(updateStudentUrl, httpOptions);
  }
}
