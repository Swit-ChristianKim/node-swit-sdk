import baseCofig from '../docusaurus.config';
import type {Config} from '@docusaurus/types';

const config: Config = {
  ...baseCofig,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
        path: 'en',
      },
      ko: {
        label: '한국어',
        htmlLang: 'ko-KR',
        path: 'ko',
      },
    },
  },
  baseUrl: '/node-swit-sdk',
};

export default config;
