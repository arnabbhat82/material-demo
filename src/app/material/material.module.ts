import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';


const MaterialComponents = [MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule];
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents
  ]
})
export class MaterialModule { }
