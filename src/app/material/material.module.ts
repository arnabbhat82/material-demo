import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';


const MaterialComponents = [MatButtonModule, MatButtonToggleModule, MatIconModule];
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents
  ]
})
export class MaterialModule { }
