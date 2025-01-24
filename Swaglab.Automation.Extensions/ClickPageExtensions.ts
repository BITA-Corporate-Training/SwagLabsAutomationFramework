import { Page } from "playwright";

export class ClickPageExtensions{

    private page: Page

    constructor(page){
        this.page = page;
    }



//Button by Name
    async ClickButtonByNameAsync(buttonName){
        await this.page.getByRole('button', {name: buttonName}).click();
    }

    async DoubleClickButtonByNameAsync(buttonName){
        await this.page.getByRole('button', {name: buttonName}).dblclick();
    }

//Button by Locator [Id, Class, XPath or Css Selector]
    async ClickButtonByLocatorAsync(buttonLocator){
        await this.page.locator(buttonLocator).click();
    }

//Any HTML Element [Close Icon, Div, Span, Textarea or any Element which has Id, Class, XPath or Css Selector]

    async ClickUIElementByLocatorAsync(elementLocator){
        await this.page.locator(elementLocator).click();
    }

    async DoubleClickUIElementByLocatorAsync(elementLocator){
        await this.page.locator(elementLocator).dblclick();
    }    
}

// constructor(page){
//     this.page = page
// }
