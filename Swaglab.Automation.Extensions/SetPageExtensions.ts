    import { Locator, Page } from "playwright/test"
    import { StringifyOptions } from "querystring";

    export class SetPageExtensions{

        private page: Page;

        constructor(page){
            this.page = page
        }

        //This Ext used to Set the Textbox value by placeholder [para: placeholder text, textbox value]
        async SetTextBoxValueByPlaceholder(placeholderText, textboxValue){
            await this.page.getByPlaceholder(placeholderText).fill(textboxValue);
        }

        //This Ext used to set Textbox value by Role
        async SetTextboxValueByRole(placeholderOrAssociatedText, textboxValue){
            await this.page.getByRole('textbox', {name: placeholderOrAssociatedText}).fill(textboxValue);
        }

        //This Ext used to set Textbox value by Locator [class, id, Xpath, css]
        //One has to pass any one of value [class, id, Xpath, css]
        async SetTextboxValueById(IdValue: string, textboxValue:string){
            await this.page.locator(IdValue).fill(textboxValue)
        }

        async SetTextboxValueByIdandSpan(IdValue: string, textboxValue:string){ //html, action, locator
            await this.page.locator(IdValue).fill(textboxValue)
        }

        async SetTextboxValueByClass(classValue, textboxValue){
            await this.page.locator(classValue).fill(textboxValue)
        }
        async SetTextboxValueByXpath(XPathValue: string, textboxValue: string){
            await this.page.locator(XPathValue).fill(textboxValue)
        }
        async SetTextboxValueByCssSelector(CSSSelectorValue, textboxValue){
            await this.page.locator(CSSSelectorValue).fill(textboxValue)
        }

    //Set Textbox value by Role
    async SetTextBoxValueByRole(placeholderName:string, inputValue:any)
    {
        await this.page.getByRole('textbox', {name: placeholderName}).fill(inputValue);
    }

    //Set Textbox value by Locator [Id, Class, XPath, Css Selector] 

    async SetTextBoxValueByLocator(textboxLocator:string, inputValue:any)
    {
        await this.page.locator(textboxLocator).fill(inputValue);
    }


    // Clear TextBox value
    async ClearTextBoxValueByRole(placeholderName:string){
        await this.page.getByRole('textbox', {name: placeholderName}).clear();
    }

    async ClearTextBoxValueByPlaceholder(placeholderName:string)
    {
        await this.page.getByPlaceholder(placeholderName).clear();
    }

    // Set Dropdown value by Value

    async SetDropdownValueByIndex(dropdownLocator, index){
        await this.page.selectOption(dropdownLocator, {index: index});
    }

    async SetDropdownValueByValue(dropdownLocator, value){
        await this.page.selectOption(dropdownLocator, {value: value});
    }

    async SetDropdownValueByLabel(dropdownLocator, label){
        await this.page.selectOption(dropdownLocator, {label: label});
    }

    // async SetDropdownValueByMultipleLabel(dropdownLocator: any, label: { [x: string]: any; }[]){
    //     await this.page.selectOption(dropdownLocator, [label] );
    // }

    // Set Check box value by Role

    async SetCheckboxValueByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).check() // aria label or accessible name
    }

    async SetCheckboxValueUnCheckByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).uncheck() // aria label or accessible name
    }

    // Set Check box value by Loccator [Id, Class, Css Selector, XPath]

    async SetCheckboxValueByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).check() // aria label or accessible name
    }

    async SetCheckboxValueUnCheckByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).uncheck() // aria label or accessible name
    }

    // Set Radio button

    async SetRadioButtonValueByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).click() // aria label or accessible name
    }

    async SetRadioButtonValueUnClickkByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).click() // aria label or accessible name
    }

    // Set Radio button value by Loccator [Id, Class, Css Selector, XPath]

    async SetRadioButtonValueByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).click() // aria label or accessible name
    }

    async SetRadioButtonValueUnclickByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).click() // aria label or accessible name
    }


    // Alert

    async SetAlertAccept(){

        this.page.on('dialog', dialog =>{
            dialog.accept();
        });
    }

    async SetAlertDismiss(){

        this.page.on('dialog', dialog =>{
            dialog.dismiss();

        });
    }

    async SetAlertPromptByTextAndAccept(promptText){

        this.page.on('dialog', dialog =>{
            dialog.accept(promptText);
        });
    }

    async SetAlertAcceptAndGetMessage(promptText){

        this.page.on('dialog', dialog =>{
            var _promptMessage = dialog.message();
            dialog.accept(promptText);
            return _promptMessage;
        });
    }

        
    }

    // constructor(page){
    //     this.page=page;
    // }