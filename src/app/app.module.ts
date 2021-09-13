import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {createCustomElement} from '@angular/elements';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentHostDirective } from '../directives/component-host.directive';
import { ReducersList } from './store/reducers/app.reducers';

import { ChoiceEffects } from './store/effects/app.effects';
import { HttpClientModule } from '@angular/common/http';;
import { AppComponent } from './app.component';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';


@NgModule({
  declarations: [
    AppComponent,
    WalletViewComponent,
    ChoiceViewComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(ReducersList),
    EffectsModule.forRoot([ChoiceEffects]),
    /**Do Not Remove, Required for Effects */
    HttpClientModule
  ],
  entryComponents: [
    WalletViewComponent,
    ChoiceViewComponent,
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
