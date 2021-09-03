import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BrowserWindowProvider,
    WindowProvider],
 // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
 
  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('rewards-component', el);
  }

 }
