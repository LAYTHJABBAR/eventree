describe("Register and log in", () => {
    it("should visit root", () => {
      cy.visit("Events");
    });
  
    it("should navigate to Register and register new accout ", () => {
      cy.get(".ui.basic.inverted.button")
        .contains("Register")
        .click();
  
      cy.get(".ui.large.form").within($form => {
        cy.get('input[name="displayName"]').type("david");
        cy.get('input[name="email"]').type("david@test.com");
        cy.get('input[name="password"]').type("654321");
        cy.root().submit();
      });
  
      cy.get("i.dropdown.icon").click();
      cy.get("i.power.icon").click();
    });
  });
  
  // //login to the event page with the registered account
  
  describe("Login", () => {
    it("should visit root", () => {
      cy.visit("/");
    });

    it("should navigate to the event page", () => {
      // cy.wait(1000);
      cy.visit("/events");
    });
  
    it("should navigate to the login page", () => {
      cy.get(".ui.basic.inverted.button")
        .contains("Login")
        .click();
  
      cy.get(".ui.large.form").within($form => {
        cy.get('input[name="email"]').type("david@test.com");
        cy.get('input[name="password"]').type("654321");
        cy.root().submit();
      });
      cy.get("i.dropdown.icon").click();
      cy.get("i.power.icon").click();
    });
  });
  
  //try to log in with the wrong email and write password
  
  describe("Login with wrong email address", () => {
    it("should visit root", () => {
      cy.visit("/");
    });
  
    it("should navigate to Events", () => {
      cy.visit("/");
    });
  
    it("should navigate to the event page", () => {
      // cy.wait(1000);
      cy.visit("/events");
    });
  
    it("should navigate to the login page", () => {
      cy.get(".ui.basic.inverted.button")
        .contains("Login")
        .click();
  
      cy.get(".ui.large.form").within($form => {
        cy.get('input[name="email"]').type("davi@test.com");
        cy.get('input[name="password"]').type("654321");
        cy.root().submit();
        cy.get(".ui.basic.red.label").contains(
          "No User Registered Under this Email"
        );
      });
      cy.visit("/events");
    });
  });
  
  //login with wrong password
  
  describe("Login with wrong password", () => {
    it("should visit root", () => {
      cy.visit("/");
    });
  
    it("should navigate to Events", () => {
      cy.visit("/");
    });
  
    it("should navigate to the event page", () => {
      // cy.wait(1000);
      cy.visit("/events");
    });
  
    it("should navigate to the login page", () => {
      cy.get(".ui.basic.inverted.button")
        .contains("Login")
        .click();
  
      cy.get(".ui.large.form").within($form => {
        cy.get('input[name="email"]').type("david@test.com");
        cy.get('input[name="password"]').type("654323");
        cy.root().submit();
        cy.get(".ui.basic.red.label").contains("Wrong password");
      });
      cy.visit("/events");
    });
  });
  
  // login with wrong email format
  
  describe("Login with wrong email format", () => {
    it("should visit root", () => {
      cy.visit("/");
    });
  
    it("should navigate to Events", () => {
      cy.visit("/");
    });
  
    it("should navigate to the event page", () => {
      // cy.wait(1000);
      cy.visit("/events");
    });
  
    it("should navigate to the login page", () => {
      cy.get(".ui.basic.inverted.button")
        .contains("Login")
        .click();
  
      cy.get(".ui.large.form").within($form => {
        cy.get('input[name="email"]').type("david");
        cy.get('input[name="password"]').type("654323");
        cy.root().submit();
        cy.get(".ui.basic.red.label").contains("Wrong Email Format");
      });
      cy.visit("/events");
    });
  });
  //login without writing the email and password
  describe("Login without email and password", () => {
    it("should visit root", () => {
      cy.visit("/");
    });
  
    it("should navigate to Events", () => {
      cy.visit("/");
    });
  
    it("should navigate to the event page", () => {
      // cy.wait(1000);
      cy.visit("/events");
    });
  
    it("should navigate to the login page", () => {
      cy.get(".ui.basic.inverted.button")
        .contains("Login")
        .click();
  
      cy.get(".ui.large.form").within($form => {
        cy.root().submit();
        cy.get(".ui.basic.red.label").contains("Please enter a valid Email");
      });
      cy.visit("/events");
    });
  });
  

  //test for creating new event


  describe("Navigate to the event page and create event", () => {
    it("should navigate to Events", () => {
              cy.visit("/events");
            });
          
            it("should navigate to the login page", () => {
              cy.get(".ui.basic.inverted.button")
                .contains("Login")
                .click();
          
              cy.get(".ui.large.form").within($form => {
                cy.get('input[name="email"]').type("david@test.com");
                cy.get('input[name="password"]').type("654321");
                cy.root().submit();
              });
   
      cy.get(".ui.yellow.button")
        .should("be.visible")
        .click();
      cy.get("div.ui.purple.header").contains("Event details");
  
      cy.get('input[name="title"]').type("Test Event");
      // cy.get('input[name="category"]').type('Drinks')
  
      cy.get(".ui.selection.dropdown")
        .click()
        .get(".text:first")
        .click();
      cy.get('textarea[name="description"]').type("This is a test event");
  
      cy.get('input[placeholder="Event city"]').type("Test Event");
      cy.get('input[placeholder="Event venue"]').type("Calgary Tower");
      cy.contains("Calgary Tower").click();
  
      cy.get('input[placeholder="Event date"]').click();
      cy.get(
        ".react-datepicker__day.react-datepicker__day--011.react-datepicker__day--weekend"
      ).click();
  
      cy.get('input[name="title"]').click();
      cy.get(".ui.purple.button").click();
    });
})