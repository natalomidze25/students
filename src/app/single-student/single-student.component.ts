import {Component, HostListener, inject, Input} from "@angular/core";
import { StudentInterface } from "../student.types";
import {StudentsService} from "../students.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-single-student",
  template: `
    <span class="student__name">
      {{ student.name }}
      </span>
    <span class="student__age" *ngIf="expanded">
        {{ student.age }}
      </span>
    <div>
      <button (click)="delete(student.name,student.age)" class="sngl-stdnt-delete-button">Delete</button>
      <button class="sngl-stdnt-update-button" [routerLink]="['/create']" [queryParams]="{ studentName: student.name,studentAge:student.age }">Update</button>
    </div>
  `,
  styleUrls: ["./single-student.component.css"],
  host: {
    class: "student",
  }
})
export class SingleStudentComponent {
  @Input() student!: StudentInterface;
  studentsService = inject(StudentsService);
  router = inject(Router);

  expanded = false;

  @HostListener("click")
  toggle() {
    this.expanded = !this.expanded;
  }
  delete(nameParam:any,ageParam:any){
    this.studentsService.delete({
      name: nameParam!,
      age: ageParam!,
    });
  }

  update(){

  }
}
