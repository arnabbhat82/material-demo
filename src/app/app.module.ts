import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
