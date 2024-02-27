import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { PipeAsyncComponent } from './component/pipe-async/pipe-async.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    PipeAsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
