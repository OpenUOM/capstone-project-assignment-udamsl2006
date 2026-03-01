import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  teacherData: any;
  teacherId: any;

  constructor(private service: AppServiceService, private router: Router) {
    // Capture the state immediately in the constructor
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.teacherId = navigation.extras.state.id;
    }
  }

  ngOnInit(): void {
    if (this.teacherId) {
      this.getTeacherData();
    } else {
      // If no ID (e.g. on page refresh), send user back to the list
      this.router.navigate(['']); 
    }
  }

  getTeacherData() {
    const payload = { id: this.teacherId };
    this.service.getOneTeacherData(payload).subscribe(
      (response) => {
        // Assuming response is an array based on your original code
        this.teacherData = Array.isArray(response) ? response[0] : response;
      },
      (error) => {
        console.log('ERROR - ', error);
      }
    );
  }

  editTeacher(formValues: any) {
    // Merge the ID with the form values
    const payload = { ...formValues, id: this.teacherId };
    
    this.service.editTeacher(payload).subscribe(
      (response) => {
        console.log('Update Successful');
        // Navigate back to the table after successful edit
        this.router.navigate(['']); 
      },
      (error) => {
        console.log('ERROR - ', error);
      }
    );
  }
}
