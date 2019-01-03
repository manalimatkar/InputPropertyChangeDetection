import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyParentComponent } from './my-parent/my-parent.component';
import { MyChildComponent } from './my-parent/my-child/my-child.component';
@NgModule({
  declarations: [
    AppComponent,
    MyParentComponent,
    MyChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
