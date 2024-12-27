export * from './personal';
export * from './experience';
export * from './education';
export * from './site';
export * from './work';

export type Config = {
  personal: typeof import('./personal').personalConfig;
  experience: typeof import('./experience').experienceConfig;
  education: typeof import('./education').educationConfig;
  site: typeof import('./site').siteConfig;
  work: typeof import('./work').workConfig;
};
