import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';


const MaterialComponents = [MatButtonModule];
@NgModule({
  exports: [MatButtonModule],
  imports: [MatButtonModule
  ]
})
export class MaterialModule { }
