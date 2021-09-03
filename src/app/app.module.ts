import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';
import { ChoiceViewComponent } from './choice-view/choice-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceViewComponent
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
