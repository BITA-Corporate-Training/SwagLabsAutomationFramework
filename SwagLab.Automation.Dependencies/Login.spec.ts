import test, { Page } from "@playwright/test";
import {SetPageExtensions} from '../Swaglab.Automation.Extensions/SetPageExtensions';
import {ClickPageExtensions} from '../Swaglab.Automation.Extensions/ClickPageExtensions';
import {LoginPageConstants} from '../Swaglab.Automation.constants/LoginPageConstants';
import {WaitPageExtensions} from '../Swaglab.Automation.Extensions/WaitPageExtensions';
import {GetPage} from '../SwagLab.Automation.Dependencies/GetPage.spec'



export async function LoginPage(page){

    console.log('Environment: ', process.env.NODE_ENV);
    

    //Object Creation
    var setPageExtensions = new SetPageExtensions(page);
    var clickPageExtensions = new ClickPageExtensions(page);
    var waitExtensions = new WaitPageExtensions(page);

 //Login Testcases
        await page.goto(process.env.url);
        await setPageExtensions.SetTextBoxValueByPlaceholder(LoginPageConstants.userNameTextboxPlaceholderText, process.env.email);
        await waitExtensions.WaitForTimeout(1000);
        await setPageExtensions.SetTextBoxValueByPlaceholder(LoginPageConstants.passwordTextboxPlaceholderText, process.env.password);
        await waitExtensions.WaitForTimeout(1000);
        await clickPageExtensions.ClickButtonByLocatorAsync(LoginPageConstants.loginButtonId);

        //Debug
        await waitExtensions.WaitForTimeout(5000);
}