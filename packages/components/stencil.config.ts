import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  plugins: [
    sass()
  ],
  extras: {
    appendChildSlotFix: true,
  },
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
