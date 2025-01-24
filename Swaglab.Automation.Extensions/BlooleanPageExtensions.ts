import { Page } from "playwright/test"

export class BlooleanPageExtensions{

    private page: Page;

    //Textbox By Role

    async isTextBoxByRoleVisible(textboxName: string){
        return await this.page.getByRole('textbox', {name: textboxName}).isVisible();
    }

    async isTextBoxByRoleEditable(textboxName: string){
        return await this.page.getByRole('textbox', {name: textboxName}).isEditable();
    }

//Textbox by Placeholder

    async isTextBoxByPlaceholderVisible(placeholderName: string){
        return await this.page.getByPlaceholder(placeholderName).isVisible();
    }

    async isTextBoxByPlaceholderEditable(placeholderName: string){
        return await this.page.getByPlaceholder(placeholderName).isEditable();
    }

//Textbox by Locator [Id, Class, XPath or Css Selector]

    async isTextboxByLocatorVisible(locator: string){
        return await this.page.locator(locator).isVisible();
    }

    async isTextboxByLocatorEditable(locator: string){
        return await this.page.locator(locator).isEditable();
    }

//Button By Role

    async isButtonByNameVisible(buttonName: string){
        await this.page.getByRole('button', {name: buttonName}).isVisible();
    }

    async isButtonByNameEnabled(buttonName: string){
        await this.page.getByRole('button', {name: buttonName}).isEnabled();
    }

//Button By Locator [Id, Class, XPath or Css Selector]

    async isButtonByLocatorVisible(buttonName: string){
        return await this.page.locator(buttonName).isVisible();
    }

    async isButtonByLocatorEnabled(buttonName: string){
        return await this.page.locator(buttonName).isEnabled();
    }

// Checkbox 

    async isCheckBoxChecked(checkboxNameOrAriaLabelName: string){
        await this.page.getByRole('checkbox', {name: checkboxNameOrAriaLabelName}).isChecked()   //Aria role or aria - label or accessible role 
    }

    async isCheckBoxVisible(checkboxNameOrAriaLabelName: string){
        await this.page.getByRole('checkbox', {name: checkboxNameOrAriaLabelName}).isVisible()   //Aria role or aria - label or accessible role 
    }

    async isCheckBoxEnabled(checkboxNameOrAriaLabelName: string){
        await this.page.getByRole('checkbox', {name: checkboxNameOrAriaLabelName}).isEnabled()   //Aria role or aria - label or accessible role 
    }

//Any HTML Element [Close Icon, Div, Span, Textarea or any Element which has Id, Class, XPath or Css Selector]

    async isUIElementByLocatorVisible(elementLocator: string){
        return await this.page.locator(elementLocator).isVisible();
    }

    async isUIElementByLocatorHidden(elementLocator: string){
        return await this.page.locator(elementLocator).isHidden();
    }

    async isUIElementByLocatorEditable(elementLocator: string){
        return await this.page.locator(elementLocator).isEditable();
    }

    async isUIElementByLocatorEnabled(elementLocator: string){
        return await this.page.locator(elementLocator).isEnabled();
    }

    async isUIElementByLocatorDisabled(elementLocator: string){
        return await this.page.locator(elementLocator).isDisabled();
    }


}