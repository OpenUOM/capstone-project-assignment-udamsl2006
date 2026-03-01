import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { faTrash, faPlus, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { AppServiceService } from "../../app-service.service";

@Component({
  selector: "app-teacher-table",
  templateUrl: "./teacher-table.component.html",
  styleUrls: ["./teacher-table.component.css"],
})
export class TeacherTableComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  teacherData: any[] = [];
  selected: string = "Teachers";

  constructor(private service: AppServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getTeacherData();
  }

  addNewTeacher() {
    this.router.navigate(["addTeacher"]);
  }

  editTeacher(id: any) {
    const navigationExtras: NavigationExtras = {
      state: { id: id },
    };
    this.router.navigate(["editTeacher"], navigationExtras);
  }

  getTeacherData() {
    this.selected = "Teachers";
    this.service.getTeacherData().subscribe(
      (response: any) => {
        // Standardized mapping to a single-level array
        this.teacherData = Object.keys(response).map((key) => response[key]);
      },
      (error) => console.log("ERROR - ", error)
    );
  }

  search(value: string) {
    if (!value.trim()) {
      this.getTeacherData();
    } else {
      this.service.getTeacherData().subscribe(
        (response: any) => {
          const allTeachers = Object.keys(response).map((key) => response[key]);
          this.teacherData = allTeachers.filter((teacher) =>
            teacher.name.toLowerCase().includes(value.toLowerCase().trim())
          );
        },
        (error) => console.log("ERROR - ", error)
      );
    }
  }

  deleteTeacher(itemid: any) {
    if (confirm("Are you sure you want to delete this teacher?")) {
      this.service.deleteTeacher({ id: itemid }).subscribe(() => {
        this.getTeacherData();
      });
    }
  }

  initializeDB() {
    this.service.initializeDB().subscribe(
      () => console.log("DB is Initialized"),
      (error) => console.log("ERROR - ", error)
    );
  }
}
