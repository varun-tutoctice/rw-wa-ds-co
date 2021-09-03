import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChoiceviewComponent } from './choiceview/choiceview.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceviewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [BrowserWindowProvider,
    WindowProvider],
  
 // schemas: [CUSTOM_ELEMENTS_SCHEMA]
 //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
 
  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('rewards-component', el);
  }

 }
