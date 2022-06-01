import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent {
  loginForm: any = FormGroup;
  registerList: any = [];
  constructor() {
    this.loginForm = new FormGroup({
      Firstname: new FormControl('', Validators.required),
      Lastname: new FormControl('', Validators.required),
      Mobileno: new FormControl('', Validators.required),
      Emailid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      Comment: new FormControl('', Validators.required),

      // addNew(){
      //   this.myObjArray.push({ Firstname:, Lastname:, Mobileno:, Emailid:, Password:, Comment:,});
      //   console.log(this.myObjArray);
      // }
    })

  }

  ngOnInit(): void {
  }



  myFunction() {
    
    this.registerList.push(this.loginForm.value)
    console.log(this.registerList)
    // this.loginForm.reset();
  }



}
