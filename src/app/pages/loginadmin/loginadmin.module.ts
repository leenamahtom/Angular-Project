import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginadminRoutingModule } from './loginadmin-routing.module';
import { LoginadminComponent } from './loginadmin.component';
import { MaterialModule } from '../../providers/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginadminComponent
  ],

  imports: [
    CommonModule,
    LoginadminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginadminModule { }
export class FormFieldPrefixSuffixExample {
  hide = true;
}