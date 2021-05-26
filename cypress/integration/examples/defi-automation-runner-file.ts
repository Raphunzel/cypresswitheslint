/// <reference types = "Cypress" />

// eslint-disable-next-line @typescript-eslint/no-var-requires
const masterObject = require("../../fixtures/master-file.json");

import { LoginPageUtilities } from '../../support/utilities/login-page-utilities';
import { DefiOperationTemplate } from '../../support/defi-operation-template';
import { CustomFieldsCreator } from '../../support/creators/custom-fields-creator';
import { ICustomFields } from '../../support/interfaces/IcustomFields';


describe('Defi Automation', () => {

    before(() => {
        const loginObj = new LoginPageUtilities();
        loginObj.loginpage();
    })

    beforeEach(() => {
        cy.preserveAllCookiesOnce();
    });

    it(`file exists`, () => {
        cy.readFile('./cypress/fixtures/master-file.json').should("exist")
    });

    const keys = Object.keys(masterObject);
    keys.forEach((value) => {
        const splitValue = masterObject[value].split("_");
        const jsonFileName = splitValue[0];
        const scenario = splitValue[1];
        const groupName = splitValue[2];
        const userName = splitValue[3];
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jsonData = require(`../../fixtures/${jsonFileName}.json`);
        const obj = jsonData.find(jsonData => jsonData.Name === userName && jsonData.Group === groupName);

        it(`${scenario} ${jsonFileName} for ${userName} in Group - ${groupName}`, () => {
            if (jsonFileName.toLowerCase() === 'custom-fields' && scenario.toLowerCase() === "create") {

                mapperFn(new CustomFieldsCreator(), obj);
            }

        });
        function mapperFn(creator: DefiOperationTemplate, Obj: ICustomFields) {
            creator.defiOperation(Obj);
        }
    })
});
