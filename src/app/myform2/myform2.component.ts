import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-myform2',
  templateUrl: './myform2.component.html',
  styleUrls: ['./myform2.component.css']
})
export class Myform2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Cách 1
    // this.regForm2 = new FormGroup({
    //   name: new FormControl('Ron',Validators.required),
    //   email: new FormControl('monsieurron@gmail.com'),
    //   password: new FormControl(''),
    //   confirmPass: new FormControl('')
    // })
    this._formBuilder = new FormBuilder()
    this.regForm2 = this._formBuilder.group({
      name:['Ron', [Validators.required, Validators.minLength(3)]],
      email: ['monsieurron@gmail.com'],
      password:[''],
      confirmPass:['']
    })
  }
  _formBuilder: any

  setDefaultValues(){
    this.regForm2.setValue({
      name:'Nhi',
      email: 'nhibabe@gmail.com',
      password:'',
      confirmPass:''
    })
  }

  get name(){
    return this.regForm2.controls['name']
  }

  regForm2: any

}
