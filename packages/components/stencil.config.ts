import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: `@rockssh/slots`,
      directivesProxyFile: `../wrapper/src/proxy/proxies.ts`,
      outputType: 'scam',
      customElementsDir: 'dist/components',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
