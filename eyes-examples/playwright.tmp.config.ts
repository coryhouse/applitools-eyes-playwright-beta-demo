import { defineConfig, devices } from '@playwright/test';
import { EyesFixture } from '@applitools/eyes-playwright/fixture';
export default defineConfig<EyesFixture>({
  testDir: '.',
  outputDir: './test-results',
  reporter: [['@applitools/eyes-playwright/reporter', {open: 'always', outputFolder: './eyes-playwright-report'}]],
  use: {
    eyesConfig: {
      apiKey: 'O7Ml9wjUQkY63Bkmx9HyshMUw8bi5111Mb0EqEcMneieQ110',
      serverUrl: 'https://testeyes.applitools.com/app/test-results/?accountId=G2SLJ4NB0kqzOCLTReU_Lg__'
    }
  }
})