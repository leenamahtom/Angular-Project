import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from 'src/app/providers/material/material.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    RegisterRoutingModule,
  ]
})
export class RegisterModule { }

