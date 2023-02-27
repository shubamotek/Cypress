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
    cy.get('#Widget1730235547').select('Bug report' ,{force:true})
  //  cy.xpath('//*[@id="entry.1747016377.6"]').select('6',{force:true})
  // Priority
  cy.xpath('//*[@id="Widget2064489387"]').type('Test')
  cy.xpath('//*[@id="Widget77187006"]').type('Dit is een test *IGNORE*')
  cy.xpath('//*[@id="Display1067499710"]/a').click()
  cy.contains('Add file').click()
  cy.get('')



  
  

    
});

});
