import {Page,Locator, expect} from '@playwright/test';

export class Cart{
    readonly page: Page;  //declare properties

    constructor(page: Page){        //runs when we create an object from the class(const loginPage=new LoginPage(page);)
        this.page=page;}

    async openCart(){
     await this.page.locator('.shopping_cart_link').click();
    
    }

    async verifyCartProducts(ProductName:string){
        await expect(this.page.getByText(ProductName,{exact:true})).toBeVisible();
    }

    async RemoveItems(ProductName:string){
       const item= this.page.locator('.cart_item').filter({hasText:ProductName})

        await item.getByRole('button',{name:'Remove'}).click();
    }

    async VerifyRemoval(ProductName: string){
        await expect(this.page.getByText(ProductName,{exact:true})).toHaveCount(0);
    }

    async CheckoutTime(){
        await this.page.getByRole('button',{name:'Çheckout'}).click();
    }
}