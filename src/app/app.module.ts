import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';
import { ComponentHostDirective } from '../directives/component-host.directive';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletViewComponent,
    ChoiceViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    WalletViewComponent,
    ChoiceViewComponent
  ],
  providers: [BrowserWindowProvider, WindowProvider, ComponentHostDirective],
  
 // schemas: [CUSTOM_ELEMENTS_SCHEMA]
 // bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private injector: Injector) {
 
  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('rewards-component', el);
  }

 }
