import {Page,Locator, expect} from '@playwright/test';

export class Lines{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;}

    async Openlines(){
        await this.page.getByRole('button',{name:'Open Menu'}).click();
    }

    async Clickoptions(link:string){
        await this.page.getByText(link).first().click();
           await this.page.getByText(link).first().click();
    }
}