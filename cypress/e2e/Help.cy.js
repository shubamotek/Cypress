describe("test", () => {
    it("test", () => {
      cy.visit("/");
      cy.contains("Continue").click();
      cy.origin("https://black-pine-3629.eu.auth0.com", () => {
        cy.get("#username").type("systemtests@amotek.be");
        cy.get('#password').type('Amotek.System')
        cy.contains("Continue").click();
        cy.wait(2100);
    });

    cy.contains('Help').click();
    cy.contains('Report bug').click();
    cy.xpath('//*[@id="Widget884038691"]').type('team@amotek.be')
  //  cy.get('table').contains('td', '8');
  // Priority

  cy.xpath('//*[@id="Widget2064489387"]').type('Test')
  cy.xpath('//*[@id="Widget77187006"]').type('Dit is een test *IGNORE*')
  cy.contains('Add file').click()
  cy.contains('browse files').click()
  



  cy.get('a.ant-picker-now-btn').click();
  cy.get('span.ant-upload-picture-card-wrapper').attachFile('image/Picture1.png')

    
});

});
