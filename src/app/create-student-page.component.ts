import { Component, inject } from "@angular/core";
import { StudentsService } from "./students.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-create-student-page",
  template: `
    <form (ngSubmit)="create()" class="main-container">
      <label for="studentName">
        Student Name
      </label>
      <input type="text" name="studentName" [(ngModel)]="studentName" placeholder="Type student name" id="studentName">
      <label for="studentAge">
        Student Age
      </label>
      <input type="number" name="studentAge" [(ngModel)]="studentAge" placeholder="Type student age" id="studentAge">
      <button>{{buttonText}}</button>
    </form>
  `,
  styles:[`

  `]
})
export class CreateStudentPageComponent {
  studentsService = inject(StudentsService);
  router = inject(Router);
  oldName?:string;
  studentName?: string;
  studentAge?: number;
  route = inject(ActivatedRoute)
  buttonText:string ="create";


  create() {
    if(this.buttonText === "update"){
      this.studentsService.update(
        this.oldName!
        ,{
        name: this.studentName!,
        age: this.studentAge!,
      });
    }
    else {
      this.studentsService.create({
        name: this.studentName!,
        age: this.studentAge!,
      });
    }
    this.router.navigate(['/'])
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.studentName = params['studentName'];
      this.oldName = this.studentName;
      this.studentAge =params[`studentAge`];
      if(this.studentName!=undefined && this.studentName?.length > 0){
      this.buttonText = "update";
      }
    });
  }

}
