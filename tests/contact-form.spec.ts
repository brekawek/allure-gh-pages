import test, { expect } from '@playwright/test';

test.describe('Test describe', () => {
    test('always success', async ({ page }) => {
        await page.goto('');

        await expect(page).toHaveTitle(
            'Playwright enables reliable end-to-end testing for modern web apps.',
        );
    });

    test('always error', async ({ page }) => {
        await page.goto('');

        await expect(page).toHaveTitle(
            'Playwright enables reliable end-to-end testing for modern web apps.',
        );
    });

    test('random success/error', async ({ page }) => {
        await page.goto('');

        const isSuccess = Math.random() > 0.5;
        console.log(`isSuccess: ${isSuccess}`);
        if (isSuccess) {
            await expect(page).toHaveTitle(
                'Playwright enables reliable end-to-end testing for modern web apps.',
            );
        } else {
            await expect(page).toHaveTitle(
                'Playwright enables reliable end-to-end testing for modern web apps.',
            );
        }
    });
});
