import {Component, inject} from "@angular/core";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-students-filter',
  styles: [`

    button {
      padding: 0.5rem 2rem;
    }

    input{
      width: 100%;
    }

  `],
  template: `
    <form (ngSubmit)="search()" novalidate>
      <label for="studentName">
        Student Name
      </label>
      <input
        type="text"
        name="studentName"
        [(ngModel)]="studentNameQuery"
        placeholder="Type student name"
        id="studentName"
      >
      <button>Search</button>
    </form>
  `,
  host: {
    class: 'filtersContainer'
  }
})
export class StudentsFilterComponent {
  studentNameQuery: string = '';
  studentsService = inject(StudentsService);

  search() {
    this.studentsService.search(this.studentNameQuery);
  }
}
