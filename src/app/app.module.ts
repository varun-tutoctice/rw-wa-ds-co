import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';
import { ComponentHostDirective } from '../directives/component-host.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    routingComponents
  ],
  providers: [BrowserWindowProvider, WindowProvider, ComponentHostDirective],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private injector: Injector) {
 
  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('rewards-component', el);
  }

 }
