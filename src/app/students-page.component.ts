import {Component} from "@angular/core";

@Component({
  selector: "app-students-page",
  template: `
    <div class="main-container">
      <h2>
        Students
        <a routerLink="/create">
          Create!
        </a>
      </h2>
      <app-students-filter/>
      <app-students-list/>
    </div>
  `,
  styles:[`
    .main-container h2{
      text-align: center;
    }
    .main-container a{
      text-decoration-line: none;
      color: #fdfd31;
      background-color: #88888882;
      padding: 0.4rem;
      border-radius: 0.4rem;
    }
    .main-container a:hover{
      text-decoration-line: underline;
      outline: 0.1rem solid yellow;
    }

  `]
})
export class StudentsPageComponent {
}
