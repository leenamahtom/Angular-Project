import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


const MaterialComponent:any= [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})

export class MaterialModule { }
