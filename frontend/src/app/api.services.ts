import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // ========== Teacher APIs ==========

  listTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listTeachers`);
  }

  getTeacherInfo(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/getTeacherInfo`, { id });
  }

  addTeacher(id: number, name: string, age: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/addTeacher`, { id, name, age });
  }

  editTeacher(id: number, name: string, age: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/editTeacher`, { id, name, age });
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/deleteTeacher`, { id });
  }

  // ========== Student APIs ==========

  listStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listStudents`);
  }

  getStudentInfo(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/getStudentInfo`, { id });
  }

  addStudent(id: number, name: string, age: number, hometown: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/addStudent`, { id, name, age, hometown });
  }

  editStudent(id: number, name: string, age: number, hometown: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/editStudent`, { id, name, age, hometown });
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/deleteStudent`, { id });
  }
}