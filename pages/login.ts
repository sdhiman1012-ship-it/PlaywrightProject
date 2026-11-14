import {expect, type Page, type Locator } from "playwright/test";

export class Loginpage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

    constructor(page: Page){

    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async open()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');

    }

    async login(username: string, password: string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    
}