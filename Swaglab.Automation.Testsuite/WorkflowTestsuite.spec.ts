import test, { Page } from "@playwright/test";
import {SetPageExtensions} from '../Swaglab.Automation.Extensions/SetPageExtensions';
import {ClickPageExtensions} from '../Swaglab.Automation.Extensions/ClickPageExtensions';
import {WaitPageExtensions} from '../Swaglab.Automation.Extensions/WaitPageExtensions';
import {GetPage} from '../SwagLab.Automation.Dependencies/GetPage.spec'
import { LoginPage } from "../SwagLab.Automation.Dependencies/Login.spec";
import { log } from "console";

test.describe('Organizing Constants and Extensions', async()=>{

    //Declare Initialization
    var page: Page;
    var setPageExtensions;
    var clickPageExtensions;
    var waitExtensions;


    //page or context test fixtures can not be part of beforeAll
    test.beforeAll('Pre Condition', async()=>{

        //Page Creation
        page = await GetPage();

        //Login Action
        await LoginPage(page);

        //Object Creation
        setPageExtensions = new SetPageExtensions(page);
        clickPageExtensions = new ClickPageExtensions(page);
        waitExtensions = new WaitPageExtensions(page);
    });

    test.afterAll('Post Condition', async()=>{
        //Page Teardown
        await page.close();
    });

    test('Status of Login', async()=>{
        console.log("Logged In");
    });

})