describe("Register and log in", () => {
  it("should visit root", () => {
    cy.visit("Events");
    cy.wait(1000)
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
    cy.visit("/events");
  });
  it("should navigate to the login page", () => {
    cy.get(".ui.basic.inverted.button")
      .contains("Login")
      .click();
    it("should register with Email and Password", () => {
      cy.get(".ui.large.form").within($form => {
        cy.get('input[name="email"]').type("david@test.com");
        cy.get('input[name="password"]').type("654321");
        cy.root().submit();
        cy.get("i.dropdown.icon").click();
        cy.get("i.power.icon").click();
        cy.get("./events");
      });
    });
  });
});

//try to log in with the wrong email and write password

describe("Login with wrong email address", () => {
  it("should shown no user register under this email", () => {
    cy.get(".ui.large.form").within($form => {
      cy.get('input[name="email"]').type("davi@test.com");
      cy.get('input[name="password"]').type("654321");
      cy.root().submit();
      cy.get(".ui.basic.red.label").contains(
        "No User Registered Under this Email"
      );
      cy.visit("/events");
    });
  });
});

//login with wrong password

describe("Login with wrong password", () => {
  it("should navigate to the login page", () => {
    cy.get(".ui.basic.inverted.button")
      .contains("Login")
      .click();
    it("should shown wrong password", () => {});
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
  it("should navigate to the login page", () => {
    cy.get(".ui.basic.inverted.button")
      .contains("Login")
      .click();
  });
  it("should shown wrong Email Format", () => {
    cy.get(".ui.large.form").within($form => {
      cy.get('input[name="email"]').type("david");
      cy.get('input[name="password"]').type("654323");
      cy.root().submit();
      cy.get(".ui.basic.red.label").contains("Wrong Email Format");
      cy.visit("/events");
    });
  });
});

//login without writing the email and password

describe("Login without email and password", () => {
  it("should navigate to the login page", () => {
    cy.get(".ui.basic.inverted.button")
      .contains("Login")
      .click();
  });
  it("should shown Please enter a valid Email", () => {
    cy.get(".ui.large.form").within($form => {
      cy.root().submit();
      cy.get(".ui.basic.red.label").contains("Please enter a valid Email");
      cy.visit("/events");
    });
  });
});

// test for creating new event

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
});

//update an Event
describe("Navigate to the event page and update event", () => {
it("should edit an event", () => {
  cy.visit("/events");
  cy.get(".description").contains("Hosted by david")
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .children()
    .contains("View")
    .click();
  cy.contains("Manage Event").click();
  cy.get(".ui.selection.dropdown")
    .click()
    .get(".text")
    .contains("Film")
    .click();

  cy.get('textarea[name="description"]').type(" Updated");
  cy.get(".ui.purple.button").click();
  cy.visit("/events");
  cy.wait(3000)
  cy.get("i.dropdown.icon").click();
  cy.get("i.power.icon").click();
});
})


describe("Test Secuirty Feature for the APP if trying to access restricted pages without Auth", () => {
  it("Creat Event Page'", () => {
    cy.visit('/createEvent')
    cy.get('.description').contains('Please either login or register to see this page')
  })

  it("Access Existing User Profile", () => {
    cy.visit('/profile/drIA4SuRs3UMzpBiEPrOfMYzWFN2')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Existing User Setting Dashboard", () => {
    cy.visit('/settings/basic')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Exsiting User about me Page", () => {
    cy.visit('/settings/about')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Exsiting User Photo Setting Page", () => {
    cy.visit('/settings/photos')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Exsiting User Account Page", () => {
    cy.visit('/settings/account')
    cy.get('.description').contains('Please either login or register to see this page')
  })
 it('Access Exsitting Event and trying to join without signing in', () => {
   cy.visit('/events/tldmJHjSOowEUZY5nLY7')
   cy.get('.ui.purple.button').contains('JOIN THIS EVENT').click()
   cy.get('.toastr.animated.rrt-error:visible').contains('Please login to signup for the event')
 
 })
})
