import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CoupensComponent } from './coupens/coupens.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { MediaComponent } from './media/media.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisComponent } from './statis/statis.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CoupensComponent,
    DeshboardComponent,
    MediaComponent,
    SidenavComponent,
    StatisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
