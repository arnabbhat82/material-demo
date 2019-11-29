import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';


const MaterialComponents = [MatButtonModule, MatButtonToggleModule];
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents
  ]
})
export class MaterialModule { }
