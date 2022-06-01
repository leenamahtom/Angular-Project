import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponent:any= [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})

export class MaterialModule { }
