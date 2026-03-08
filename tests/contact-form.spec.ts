import test, { expect } from '@playwright/test';

test.describe('Test describe', () => {
    test('always success', async ({ page }) => {
        await page.goto('');

        await expect(page).toHaveTitle(
            'Fast and reliable end-to-end testing for modern web apps | Playwright',
        );
    });

    test('always error', async ({ page }) => {
        await page.goto('');

        await expect(page).toHaveTitle('34534534534534534534');
    });

    test('random success/error', async ({ page }) => {
        const isSuccess = Math.random() > 0.5;
        console.log(`isSuccess: ${isSuccess}`);

        await page.goto('');

        if (isSuccess) {
            await expect(page).toHaveTitle(
                'Fast and reliable end-to-end testing for modern web apps | Playwright',
            );
        } else {
            await expect(page).toHaveTitle('34534534534534534534');
        }
    });
});
