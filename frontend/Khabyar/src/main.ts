/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// 👉 AG Grid (v35+) module imports
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// 👉 Register all community modules (required)
ModuleRegistry.registerModules([AllCommunityModule]);

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
