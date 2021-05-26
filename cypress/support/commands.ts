import addContext from "mochawesome/src/addContext";
declare global {
  // eslint-disable-next-line  @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      addTestContext: (title: string, value: string) => Chainable<void>
      preserveAllCookiesOnce
      clickElement:(locator:string)=> Chainable<void>
    }
  }
}

Cypress.Commands.add('clickElement', (locator) => {
  cy.get(locator).click();
})

Cypress.Commands.add('addTestContext', (title, value) => {
    cy.once('test:after:run', test => addContext({test}, {title, value}));
})

Cypress.Commands.add('preserveAllCookiesOnce', () => {
    cy.getCookies().then(cookies => {
        const namesOfCookies = cookies.map(c => c.name)
        Cypress.Cookies.preserveOnce(...namesOfCookies)
    })
})
