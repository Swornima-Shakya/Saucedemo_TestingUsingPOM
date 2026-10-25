
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail if test.only is used in CI */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests on CI */
  retries: process.env.CI ? 2 : 2,

  /* Number of workers */
  workers: process.env.CI ? 1 : undefined,

  /* HTML test report */
  reporter: 'html',

  /* Shared settings for all browser projects */
  use: {
    screenshot: 'only-on-failure',
    /* Run browsers without opening visible windows */
    headless: false,

    /* Collect trace when retrying a failed test */
    trace: 'on-first-retry',
  },

  /* Configure browser projects */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  //   {
  //     name: 'Microsoft Edge',
  //     use: {
  //       ...devices['Desktop Edge'],
  //       channel: 'msedge',
  //     },
  //   },
  ],
});
