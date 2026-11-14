import {expect, type Page, type Locator } from "@playwright/test";

export class dashboard
{
constructor(private readonly page: Page) {}
async Home()
{
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
}

async openRecruitment() {
  await this.page.getByRole("link", { name: "Recruitment" }).click();
  await expect(this.page).toHaveURL(/recruitment/);
}
}