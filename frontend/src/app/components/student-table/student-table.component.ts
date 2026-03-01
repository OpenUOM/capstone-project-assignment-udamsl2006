import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { faTrash, faPlus, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { AppServiceService } from "../../app-service.service";

@Component({
  selector: "app-student-table",
  templateUrl: "./student-table.component.html",
  styleUrls: ["./student-table.component.css"],
})
export class StudentTableComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  studentData: any[] = [];
  selected: string = "Students";

  constructor(private service: AppServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getStudentData();
  }

  addNewStudent() {
    this.router.navigate(["addStudent"]);
  }

  editStudent(id: any) {
    const navigationExtras: NavigationExtras = {
      state: { id: id },
    };
    this.router.navigate(["editStudent"], navigationExtras);
  }

  getStudentData() {
    this.selected = "Students";
    this.service.getStudentData().subscribe(
      (response: any) => {
        this.studentData = Array.isArray(response)
          ? response.map((item: any) => [item])
          : Object.keys(response).map((key) => response[key]);
      },
      (error) => console.log("ERROR - ", error)
    );
  }

  search(value: string) {
    if (!value.trim()) {
      this.getStudentData();
    } else {
      this.service.searchStudent({ name: value.trim() }).subscribe(
        (response: any) => {
          this.studentData = Array.isArray(response)
            ? response.map((item: any) => [item])
            : Object.keys(response).map((key) => response[key]);
        },
        (error) => console.log("ERROR - ", error)
      );
    }
  }

  deleteStudent(itemid: any) {
    if (confirm("Are you sure you want to delete this student?")) {
      this.service.deleteStudent({ id: itemid }).subscribe(() => {
        this.getStudentData();
      });
    }
  }
}
