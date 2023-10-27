import { Injectable } from "@angular/core";
import { StudentInterface } from "./student.types";

@Injectable()
export class StudentsService {
  originalStudents: StudentInterface[] = [
    {
      name: 'John',
      age: 20
    },
    {
      name: 'Jane',
      age: 21
    },
    {
      name: 'Jack',
      age: 22
    }
  ];

  students = [...this.originalStudents];

  search($event: string) {
    this.students = this.originalStudents.filter(student => student.name.toLowerCase().includes($event.toLowerCase()));
  }

  create(student: StudentInterface) {
    this.originalStudents.push(student);
    this.students = [...this.originalStudents];
  }

  delete(student: StudentInterface) {
    this.originalStudents = this.originalStudents.filter(st=>st.name != student.name && st.age != student.age);
    this.students = [...this.originalStudents];
  }

  update(oldName: string,student: StudentInterface) {
    let index = this.originalStudents.findIndex(stud=>stud.name == oldName);
    if(index < 0){
      alert("not found");
    }
    else {
      this.originalStudents[index].name = student.name;
      this.originalStudents[index].age = student.age;
    }
  }
}
