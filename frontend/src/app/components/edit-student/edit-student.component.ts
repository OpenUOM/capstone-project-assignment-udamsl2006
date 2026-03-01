import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentData: any;
  studentId: any;

  constructor(private service: AppServiceService, private router: Router) {
    // Capture navigation state inside the constructor where it is guaranteed to exist
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.studentId = navigation.extras.state.id;
    }
  }

  ngOnInit(): void {
    if (this.studentId) {
      this.getStudentData();
    } else {
      // Safety redirect if the ID is missing (e.g., on page refresh)
      this.router.navigate(['studentTable']);
    }
  }

  getStudentData() {
    const payload = { id: this.studentId };
    this.service.getOneStudentData(payload).subscribe(
      (response: any) => {
        // Handle both array and object responses to prevent mapping errors
        this.studentData = Array.isArray(response) ? response[0] : response;
      },
      (error) => {
        console.log('ERROR - ', error);
      }
    );
  }

  editStudent(values: any) {
    // Ensure the ID is attached to the payload sent to editStudent(payload) in service
    const payload = { ...values, id: this.studentId };
    
    this.service.editStudent(payload).subscribe(
      (response) => {
        console.log('Student updated successfully');
        // Redirect back to the table view
        this.router.navigate(['studentTable']);
      },
      (error) => {
        console.log('ERROR - ', error);
      }
    );
  }
}
