import { ApplicationConfig, importProvidersFrom, provideEnvironmentInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, HttpInterceptor, HTTP_INTERCEPTORS, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { authInterceptor } from './services/AuthInterceptor';
import { AllCommunityModule, ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule, provideStore } from '@ngrx/store';
import { counterReducer } from './reducers';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

ModuleRegistry.registerModules([AllCommunityModule])

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
    // withInterceptors([
    //   authInterceptor
    // ],
    // withInterceptorsFromDi()
    ),
    importProvidersFrom(AgGridModule),
   
    //{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
    
    importProvidersFrom(
      StoreModule.forRoot({counter: counterReducer}),
      StoreDevtoolsModule.instrument({maxAge:25, logOnly:false})
    )
]
};
