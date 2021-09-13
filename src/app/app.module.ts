import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';
import { BrowserWindowProvider, WindowProvider } from '../providers/window.provider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChoiceviewComponent } from './choiceview/choiceview.component';
import { VoucherComponent } from './voucher/voucher.component';
import { ComponentHostDirective } from '../directives/component-host.directive';
import { ReducersList } from './store/reducers/app.reducers';

import { ChoiceEffects } from './store/effects/app.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceviewComponent,
    VoucherComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(ReducersList),
    EffectsModule.forRoot([ChoiceEffects]),
    /**Do Not Remove, Required for Effects */
    HttpClientModule
  ],
  entryComponents: [
    ChoiceviewComponent,
    VoucherComponent
  ],
  providers: [BrowserWindowProvider, WindowProvider, ComponentHostDirective],
  
 // schemas: [CUSTOM_ELEMENTS_SCHEMA]
 /* Comment Out When Building*/
 bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
 
  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('rewards-component', el);
  }

 }
