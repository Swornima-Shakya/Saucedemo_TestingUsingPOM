import {test} from '@playwright/test'
import {LoginPage } from '../../page/loginpage' 
import {Resultpage} from '../../page/ResultPage'
import {ClickedProduct} from '../../page/productClicked'
import {Cart} from '../../page/cartpage'
import {Z_AOrder } from '../../page/alphabetOrder'
import {Lines} from '../../page/menu'


test('login click and validation using pom',async({page})=>{

    const loginPage=new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user','secret_sauce');
    await loginPage.verifyLogin();

    const  orderingAlpha=new Z_AOrder(page);
    await orderingAlpha.order();
    
    const menuopen= new Lines(page);
    await menuopen.Openlines();
    await menuopen.Clickoptions('Dynamic Catalog');
    await menuopen.Clickoptions('Slider');

    const resultpage=new Resultpage(page);
    await resultpage.directAdd('Sauce Labs Bike Light')
    await resultpage.ClickOnProduct('Sauce Labs Backpack');
     await resultpage.addToCartClick();
      
    const clicked= new ClickedProduct(page);
    await clicked.validatePageTitle('Swag Labs');

    const cartIs=new Cart(page);
    await cartIs.openCart();
    await cartIs.verifyCartProducts('Sauce Labs Backpack')
    await cartIs.RemoveItems('Sauce Labs Backpack')
    await cartIs.VerifyRemoval('Sauce Labs Backpack')

});




