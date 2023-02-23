describe("test", () => {
  it("test", () => {
    cy.visit("/app/events");
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
  // Fout melding testen
// cy.get('#email').type('team@be')
  cy.get('#emailAddress').type('Amotek@team.be')
  cy.get('#supplierLocation').clear()
  cy.get('#supplierLocation').type('Kontich')
  cy.get('input[placeholder=\"1 (702) 123-4567\"]').clear()
  cy.get('input[placeholder=\"1 (702) 123-4567\"]').type('32489087777')
  cy.get("#SupplierCategory").clear()
  cy.get("#SupplierCategory").type('D')
  cy.contains('Save').click()

  // New activity toevoegen

  cy.contains('New Activity').click()
  cy.get('#activityTitle').type("Meeting")
  cy.get('#minAttendants').type(50)
  cy.get('#maxAttendants').type(100)
  cy.get('#price').type(15)
  cy.get('#category').type('B')
  cy.get('#location').type('Kip dorp 49')
  cy.get('#activityDescription').type('Het is een test')
  cy.get('#activityDuration').click()
  cy.get('a.ant-picker-now-btn').click();
  cy.get('span.ant-upload-picture-card-wrapper').attachFile('image/Picture1.png')
  cy.contains('Submit Activity').click()

  // Editen van de activity

  cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div[2]/div/div/div/div/div/div/table/tbody/tr[1]/td[5]/div/div[1]/img').click()
  cy.get('#activityTitle').clear()
  cy.get('#activityTitle').type("Test")
  cy.get('#activityDescription').clear()
  cy.get('#activityDescription').type('Het is een grote test')
  cy.get('#activityDuration').click()
  cy.get('#activityDuration').clear()
  cy.get('#activityDuration').type('07:30')
  cy.get('#category').clear()
  cy.get('#category').type('W')
  cy.get('#price').clear()
  cy.get('#price').type(25)
  cy.get('#minAttendants').clear()
  cy.get('#minAttendants').type(75)
  cy.get('#maxAttendants').clear()
  cy.get('#maxAttendants').type(175)
  cy.get('#location').clear()
  cy.get('#location').type('Kontich')
  cy.contains('Save').click()
  cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div[2]/div/div/div/div/div/div/table/tbody/tr[1]/td[5]/div/div[2]').click()
  // Optioneel ofwel is het delete of wel cancel
  cy.contains('Delete').click()
//  cy.contains('Cancel').click(  
  

 
  

  
  //Upload images
  
  

//   cy.visit('https://heroku-cocomo-frontend-dev.herokuapp.com/app/suppliers')
//   cy.contains("Suppliers").click();
//   cy.wait(2000);
//   cy.visit("https://heroku-cocomo-frontend-dev.herokuapp.com/app/suppliers/create-new-supplier")
 });
 });

 after(() => {
  if(this.currentTest.state === "failed") {
    cy.task('recordFailedVideo');
  } else {
    // If the test succeeded, capture a video of the test results
    cy.task('recordSuccessfulVideo');
  }

  
})

afterEach(() => {
  if (this.currentTest.state === 'failed') {
    // If the test failed, capture a screenshot of the test results
    cy.screenshot(`${this.currentTest.fullTitle()}-failed`, {capture: 'viewport'});
  }
});
