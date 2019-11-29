import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';


const MaterialComponents = [MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule];
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents
  ]
})
export class MaterialModule { }
