import {Page,Locator, expect} from '@playwright/test';

export class ClickedProduct{
    readonly page: Page;  //declare properties

    constructor(page: Page){        //runs when we create an object from the class(const loginPage=new LoginPage(page);)
        this.page=page;}

    async validatePageTitle(title:string){
     await expect(this.page).toHaveTitle(title);

    }

}