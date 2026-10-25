import {Page,Locator, expect} from '@playwright/test';

export class Resultpage{
    readonly page: Page;  //declare properties

    constructor(page: Page){        //runs when we create an object from the class(const loginPage=new LoginPage(page);)
        this.page=page;}

    async directAdd(productName: string){
        const product = this.page.locator('.inventory_item').filter({
            has: this.page.getByText(productName, { exact: true })
        });

        await product.getByRole('button', {
            name: 'Add to cart'
        }).click();
    }
    
    async ClickOnProduct(link:string){
     await this.page.getByText(link).first().click();
    }

    async addToCartClick(){

        await this.page.getByRole('button', {
            name: 'Add to cart'
        }).click();
    }
}