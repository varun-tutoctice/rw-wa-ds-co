import { isPlatformBrowser } from '@angular/common';
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';

export const WINDOW = new InjectionToken('WindowToken');

export interface AppWindow extends Window {
  gigya: any;
  __gigyaConf: any;
}

export class BrowserWindowRef {
  get nativeWindow(): AppWindow {
    return window as unknown as AppWindow;
  }
}

export function windowFactory(browserWindowRef: BrowserWindowRef, platformId: Object): AppWindow | null {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  return null;
}

export const BrowserWindowProvider: ClassProvider = {
  provide: BrowserWindowRef,
  useClass: BrowserWindowRef
};

/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
export const WindowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [BrowserWindowRef, PLATFORM_ID]
};


