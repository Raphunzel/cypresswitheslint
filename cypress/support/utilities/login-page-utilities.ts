import {LoginPage} from "../models/login-page"

export class LoginPageUtilities {
  loginPage = new LoginPage();

  loginpage (): void {
      cy.visit(Cypress.env('url'))
      cy.get(this.loginPage.userNameTxt).type('ycherukuri');
      cy.get(this.loginPage.passwordTxt).type('Yespaniyol@9');
      cy.get(this.loginPage.loginBtn).click();

      // assertions
      cy.url().should('contain', '/Home/Landing').then(() => {
          cy.addTestContext('PASSED', 'Login successful');
      })
  }
}
