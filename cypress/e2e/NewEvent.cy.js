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

     cy.contains('New event').click()
      cy.get('#title').type('Meeeting')
       cy.get('#startDate').click()
      cy.get('a.ant-picker-today-btn').eq(0).click()
     cy.get('#startTime').click()
      cy.get('a.ant-picker-now-btn').eq(0).click()
      cy.get('#endDate').click()
      cy.get('a.ant-picker-today-btn').eq(1).click()
      cy.get('#endTime').click()
      cy.get('a.ant-picker-now-btn').eq(1).click()
      cy.get('#location').type('Kontich')
      cy.get('input[type="checkbox"]').check();
      cy.get('#description').type('Dit is een test')
      cy.contains('Next').click()

      cy.get('#guestCount').type('50')
      cy.get('#estimatedPricePerPerson').type('15')
      cy.contains('Next').click()

      cy.get('#circleImage').attachFile('image/Picture1.png')
      cy.get('#rectangularImage').attachFile('image/Picture1.png')
      cy.contains('Create event').click()

     cy.contains('Events').click()
     cy.get('.ant-dropdown-trigger.ant-table-filter-trigger').eq(0).click();
     cy.get('input.ant-input').eq(1)
     .type('Meeeting');
     cy.contains('Search').click({force:true})
   //  cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div/div/div/div/div/table/tbody/tr/td[6]/div/div[1]').eq(0).click()


     cy.contains('Manage Event').click({force:true})

     // Info
     cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[2]/a/span').click()
      cy.contains('Edit').click({force:true})

     cy.get('#title').clear()
      cy.get('#title').type("Meeting")
      cy.get('#estimatedPricePerPerson').clear()
      cy.get('#estimatedPricePerPerson').type('20')
      cy.get('#startDate').clear({force:true})
      cy.get('#startDate').type('2023-03-02')
      cy.get('#startTime').clear({force:true})
      cy.get('#startTime').type('07:30')
      cy.get('#endDate').clear({force:true})
      cy.get('#endDate').type('2023-05-28')
      cy.get('#endTime').clear({force:true})
      cy.get('#endTime').type('17:30')
      cy.get('#parkingInfo').type('20')
      cy.get('#location').clear()
     cy.get('#location').type('Antwerpen')
    cy.get('#guestCount').clear()
      cy.get('#guestCount').type('20')


      cy.get('#description').clear()
      cy.get('#description').type('Dit is een test')

      cy.get('button.ant-btn.ant-btn-text.ant-btn-sm.ant-btn-icon-only.ant-upload-list-item-card-actions-btn[title="Remove file"]').eq(0)
      .click();
      cy.xpath('//*[@id="eventLogoImage"]').attachFile('image/Picture1.png')

       cy.get('button.ant-btn.ant-btn-text.ant-btn-sm.ant-btn-icon-only.ant-upload-list-item-card-actions-btn[title="Remove file"]').eq(1).click()
   //  cy.xpath('//*[@id="eventBackgroundImage"]').attachFile('image/Picture1.png')

      cy.get('#websiteBackgroundImage').attachFile('image/Picture1.png')

      cy.get('#websiteLogoImage').attachFile('image/Picture1.png')

      cy.contains('Save').click()
   //   cy.xpath('/html/body/div[2]/div/div[3]/div/div/div[1]/div/button').click()


     //  Guests

      cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[3]/a/span').click({force:true});
      cy.contains('Add New Guest').click()
      cy.get('#guestFirstName').type('Amotek')
      cy.get('#guestLastName').type('Group')
      cy.get('#guestMail').type('team@amotek.be')
      cy.get('#guestAddress').type('Kontich')
      cy.get('input[placeholder=\"1 (702) 123-4567\"]').type('8984787555')
      cy.contains('Add').click({force:true})

     cy.get('#name').type('Voetbal')
      cy.get('#fromDate').clear({force:true})
      cy.get('#fromDate').type('2023-03-03')
      cy.get('#fromTime').clear({force:true})
      cy.get('#fromTime').type('18:30')
      cy.get('#toDate').clear({force:true})
      cy.get('#toDate').type('2023-03-15')
      cy.get('#toTime').clear({force:true})
      cy.get('#toTime').type('20:30')
      cy.get('#budget').type('20')
      cy.contains('Submit').click()
  //   cy.xpath('/html/body/div[2]/div/div[3]/div/div/div[1]/div/button').click()


     // Budget

    cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[5]/a/span').click({force:true})
     cy.xpath('//*[@id="root"]/section/section/main/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[1]').click()
     cy.contains('Add Item').click()
     cy.get('#name').type('Kegels',{force:true})
     cy.get('#name').type('Kegels',{force:true})
      cy.contains('Show Fields').click()

      cy.get('#name').eq(0).clear({force:true})
      cy.get('#name').type('Kegels', {force:true})
      cy.get('#deadlineToDo').type('Kopen ')
     cy.get('#deadlineTitle').type('Kegels kopen')
      cy.get('#deadlineLastDate').type('2023-03-13',{force:true})
      cy.get('#deadlineDescription').type('Dit is een test')


    // Deadlines

    cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[6]/a').click({force:true})
     cy.contains('Add Deadline').click()

       cy.get('#deadlineLastDate').click()
       cy.get('#deadlineLastDate').type('2023-02-28')

      cy.get('#deadlineTitle').type('ASAP')
       cy.get('#deadlineDescription').type('Dit is een test')
       cy.get('#deadlineToDo').type('Aankopen doen')
       cy.contains('Add').click({force:true})

     cy.get('#name').type('Test' , {force:true})
       cy.get('#budget').type('20', {force:true})
       cy.contains('Submit').click( {force:true})
  //    cy.xpath('/html/body/div[2]/div/div[3]/div/div/div[1]/div/button').click()


 
       cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[7]/a').click({force:true})
       cy.contains('Add new question').click()
 //     cy.xpath('//*[@id="rc_select_0"]').click()
      // Dropdown lukt niet
      cy.get('#topic').type('Testingss', {force:true})
     cy.get('#create_question').type('Dit is een test')
      cy.contains('Start conversation').click()
      cy.xpath('//*[@id="root"]/section/section/main/div/div[3]/div/div[1]/div/div/div/div/div/div/table/tbody/tr/td[4]/div/div[2]').eq(0).click()
      cy.contains('Cancel').click()
      // Q&A kan niet worden verwijderd

//     // Script

     cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[8]/a').click()

     //Album

     cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[1]/div[9]/a').click()

//     // Delete the created event
  
    cy.contains('Events').click()
    cy.get('.ant-dropdown-trigger.ant-table-filter-trigger').eq(0).click();
    cy.get('input.ant-input').eq(1)
    .type('Meeting.amotek.be');
    cy.contains('Search').click({force:true})
    cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div/div/div/div/div/table/tbody/tr[1]/td[6]/div/div[2]').click()

  //  cy.xpath('/html/body/div[6]/div/div/div/div[2]/div/div[2]/button[2]').click()
      cy.contains('Delete').click()

    // Logout

 //   cy.contains('Logout').click()
    




    























    


});
});