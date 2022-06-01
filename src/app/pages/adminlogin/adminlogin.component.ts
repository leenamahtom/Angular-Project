import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
session:any;

saveData(){
  let data = { id: 1, name: 'xyz' };

  localStorage.setItem('session',JSON.stringify(data));
}

loadData(){
  let data : any = localStorage.getItem('session');
  this.session = JSON.parse(data);
}

  constructor() {
   }

  ngOnInit(): void {
  }

}
