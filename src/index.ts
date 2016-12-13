import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';

import 'expose?Zone!zone.js';
import 'reflect-metadata';

import { AppModule }                from './app/app.module'


platformBrowserDynamic().bootstrapModule(AppModule);