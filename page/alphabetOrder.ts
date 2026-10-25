import {Page,Locator, expect} from '@playwright/test';

export class Z_AOrder{
    readonly page:Page;

    constructor(page:Page){
        this.page=page; }
    
    async order(){
        await this.page.locator('.product_sort_container').selectOption('lohi');
        await this.page.waitForTimeout(3000); 
    }
}