

import { Injectable } from '@angular/core';
import { serviceConfigs } from '../configurations/service-configurations';


@Injectable()
export class ConfigService {
  configs = {};

  constructor() {
    this.configs = serviceConfigs;
  }

    public getServiceValue(serviceName: string, keyName: string): string {
      if (this.configs[serviceName]) {
          return this.configs[serviceName][keyName];
      } else {
          return null;
      }
  }


}
