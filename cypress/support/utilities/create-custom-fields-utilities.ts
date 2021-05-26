import {CustomFieldsPage} from "../models/custom-fields-page";
import {CreateOperationHandler} from '../create-operation-handler'
import {ICustomFields} from '../interfaces/IcustomFields'
export class CreateCustomFieldsUtilities implements CreateOperationHandler {
  customFieldsPage = new CustomFieldsPage();
  duplicateCheck: boolean;

  //function to perform creation operation
  operation (obj: ICustomFields): void {
      cy.visit("https://gmftraining.qa.defisolutions.com/Home/Landing/")
      cy.url().then((url) => {
          if (url.includes("/Home/Landing")) {
              cy.get(this.customFieldsPage.configItemLink).last().click();
          }
      })

      cy.url().should('contain', 'Home/ConfigurationNormal').then(() => {
          cy.addTestContext('PASSED', 'Configuration page displayed');
      })

      cy.clickElement(this.customFieldsPage.createCustomFieldLink);
      cy.url().should('contain', 'Admin/DataElement').then(() => {
          cy.addTestContext('PASSED', 'Create custom fields page displayed');
      })

      cy.get(this.customFieldsPage.resultsTable, {timeout: 10000}).should('be.visible').then(() => {
          cy.addTestContext('PASSED', 'All elements loaded');
      });

      cy.get(this.customFieldsPage.groupDropDown).select(obj.Group);
      cy.get(this.customFieldsPage.searchTxt).clear();
      cy.get(this.customFieldsPage.searchTxt).type(obj.Name);
      cy.get(this.customFieldsPage.searchTxt).should('have.value', obj.Name);

      this.duplicateCheck = false;
      cy.get(this.customFieldsPage.resultsTable).find('td').each(($ele) => {

          if ($ele.text().includes(obj.Name)) {
              this.duplicateCheck = true;
              cy.addTestContext('PASSED', 'Element already exists');
              return false;
          }
      }).then(() => {
          if (!this.duplicateCheck) {
              cy.clickElement(this.customFieldsPage.newBtn);
              this.populateStaticElements(obj);
          }
      })
  }

  //Function to populate static Elements
  populateStaticElements (obj: ICustomFields): void {
      cy.get(this.customFieldsPage.newDialogBox, {timeout: 10000}).should('be.visible').then(() => {
          cy.addTestContext('PASSED', 'Data Element dialog box is displayed');
      });

      cy.get(this.customFieldsPage.nameTxt).type(obj.Name).then(() => {
          if (obj.Active) {
              cy.addTestContext('PASSED', 'Active Check Box is checked');
          }
      });

      if (obj.Mandatory) {
          cy.clickElement(this.customFieldsPage.mandatoryCheckBox).then(() => {
              cy.addTestContext('PASSED', 'Mandatory Check Box is checked');
          });
      }

      if (obj.Sensitive) {
          cy.clickElement(this.customFieldsPage.sensitiveCheckBox).then(() => {
              cy.addTestContext('PASSED', 'Sensitive Check Box is checked');
          });
      }

      if (obj.CoApplicantOnly) {
          cy.clickElement(this.customFieldsPage.coApplicantCheckBox).then(() => {
              cy.addTestContext('PASSED', 'Co-applicant Check Box is checked');
          });
      }

      cy.get(this.customFieldsPage.orderTxt).clear().type(obj.Order.toString()).then(() => {
          cy.addTestContext('PASSED', 'Order value is entered');
      })

  }
}
