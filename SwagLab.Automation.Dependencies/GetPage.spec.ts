import { chromium } from "@playwright/test";

export async function GetPage() {

    var browser = await  chromium.launch();
    var page = await browser.newPage();
    return page;
}