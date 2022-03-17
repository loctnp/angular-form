import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../model/student';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  name:any
  constructor() { }

  course = [
    "Angular",
    "VueJS",
    "Golang",
    "Python",
  ]
  s = new Student("Ron","monsieurron@gmail.com","0123456789","Angular","toi")
  ngOnInit(): void {
  }



  errorFlag = false;
  courseValidation(value:string){
    if(value === "none"){
      this.errorFlag = true;
    }else{
      this.errorFlag = false;
    }
  }

}
