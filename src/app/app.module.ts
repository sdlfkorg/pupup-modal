import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { DomService } from './services/dom.service';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    SampleComponent
  ],
  providers: [
    DomService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
