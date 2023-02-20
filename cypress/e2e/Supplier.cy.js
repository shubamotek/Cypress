describe("test", () => {
  it("test", () => {
    cy.visit("https://heroku-cocomo-frontend-dev.herokuapp.com/app/events/");
    cy.contains("Continue").click();
    cy.origin("https://black-pine-3629.eu.auth0.com", () => {
      cy.get("#username").type("systemtests@amotek.be");
      cy.get('#password').type('Amotek.System')
      cy.contains("Continue").click();
      cy.wait(2100);
     
   
  });

  cy.contains('Suppliers').click()
  cy.contains('New supplier').click()
  cy.get('#name').type("hello")
  cy.get('#supplierLocation').type('Antwerpen')
  cy.get('#emailAddress').type('team@amotek.be')
  cy.get("#btwNumber").type('123456')
  cy.get("#SupplierCategory").type('B')
  cy.get('input[placeholder=\"1 (702) 123-4567\"]').type('8984787555')
  cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/form/div/div[4]/div[2]/button').click()
  cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/form/div/div[4]/div[2]/div/div/div/ul/li[2]/span').click()
  // //*[@id="root"]/section/section/main/div/div[2]/form/div/div[4]/div[2]/button/svg
  //*[@id="root"]/section/section/main/div/div[2]/form/div/div[4]/div[2]/button
  //*[@id="root"]/section/section/main/div/div[2]/form/div/div[4]/div[2]/button
  

  cy.contains('Next').click()
  cy.get('#circleImage').attachFile('image/Picture1.png')
  cy.get('#rectangularImage').attachFile('image/Picture1.png')
  cy.contains('Add Supplier').click()

  // Edit van supplier 

  cy.contains('Edit').click()
  cy.get('#name').clear()
  cy.get('#name').type("Amotek")
  cy.get('#btwNumber').clear()
  cy.get('#btwNumber').type('BE14754')
  cy.get('#emailAddress').clear()
  cy.get('#emailAddress').type('Amotek@team.be')
  cy.get('#supplierLocation').clear()
  cy.get('#supplierLocation').type('Kontich')
  cy.get('input[placeholder=\"1 (702) 123-4567\"]').clear()
  cy.get('input[placeholder=\"1 (702) 123-4567\"]').type('32489087777')
  cy.get("#SupplierCategory").clear()
  cy.get("#SupplierCategory").type('D')
  cy.xpath('/html/body/div[2]/div/div[3]/div/div/div[2]/form/div[5]/div[3]/div/button').click()
  
  
  
  cy.xpath('/html/body/div[2]/div/div[3]/div/div/div[2]/form/div[5]/div[3]/div/div/div/div/ul/li[1]/span').click()

  

  


  
  

 
  

  
  //Upload images
  
  

//   cy.visit('https://heroku-cocomo-frontend-dev.herokuapp.com/app/suppliers')
//   cy.contains("Suppliers").click();
//   cy.wait(2000);
//   cy.visit("https://heroku-cocomo-frontend-dev.herokuapp.com/app/suppliers/create-new-supplier")
 });
 });