import { WebPlugin } from '@capacitor/core';

import type { AdmobUltraPlugin } from './definitions';

export class AdmobUltraWeb extends WebPlugin implements AdmobUltraPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
