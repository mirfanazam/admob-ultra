import { registerPlugin } from '@capacitor/core';

import type { AdmobUltraPlugin } from './definitions';

const AdmobUltra = registerPlugin<AdmobUltraPlugin>('AdmobUltra', {
  web: () => import('./web').then(m => new m.AdmobUltraWeb()),
});

export * from './definitions';
export { AdmobUltra };
