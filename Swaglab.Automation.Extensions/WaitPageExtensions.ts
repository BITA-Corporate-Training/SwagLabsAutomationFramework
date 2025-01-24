import { Page } from "@playwright/test";

export class WaitPageExtensions{

    private page: Page

    constructor(page){
        this.page =  page;
    }

    async WaitForPageToBeLoaded(){
        await this.page.waitForLoadState('load')
    }

    async WaitForDomToBeLoaded(){
        await this.page.waitForLoadState('domcontentloaded')
    }

    async WaitForTimeout(timeSpan){
        await this.page.waitForTimeout(timeSpan);
    }

}