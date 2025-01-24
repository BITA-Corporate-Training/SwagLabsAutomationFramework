import { Page } from "@playwright/test";

export class GetPageExtensions{

    private page: Page

    async GetTextBoxValue(placeholderText){
        return  await this.page.getByPlaceholder(placeholderText).inputValue();
    }

    //Generic => Specific
    async GetInnerTextByLocator(locator){
        await this.page.locator(locator).innerText();
    }
}