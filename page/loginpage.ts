import {Page,Locator} from '@playwright/test';

export class LoginPage{
    readonly page: Page;  //declare properties
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){        //runs when we create an object from the class(const loginPage=new LoginPage(page);)
        this.page=page;
        this.username=page.locator('#user-name'); //got it from pg id
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }

    async gotoLoginPage(){
     await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string,pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    async verifyLogin (){
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
    }
}