import { InjectionToken } from '@angular/core';
import { EnvironmentInterface } from '../../data-access';

export const APP_CONFIG = new InjectionToken<EnvironmentInterface>('Application config');
