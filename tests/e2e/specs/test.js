describe("Login form", () => {
  it("alerts with error when input wrong email and password", () => {
    const { email, password } = {
      email: "iferoo@instabug.com",
      password: "12345678",
    };

    // redirect to login page
    cy.visit("/login");

    // input the wrong email in email input field
    cy.get("[data-cy=emailInput]").type(email);

    // // input the wrong password in password input field
    cy.get("[data-cy=passwordInput]").type(password);

    // click the login button in the form
    cy.get("[data-cy=loginSubmit]").click();

    // check the error alert box is visible
    cy.get("[data-cy=invalidUserAlert]")
      .should("be.visible")
      .and("contain", "Your email and/or your password are incorrect");
  });

  it("alerts with error when input wrong password", () => {
    const { email, password } = {
      email: "mohamed@instabug.com",
      password: "987654321",
    };

    // redirect to login page
    cy.visit("/login");

    // input a valid email user in email input field
    cy.get("[data-cy=emailInput]").type(email);

    // // input the wrong password in password input field
    cy.get("[data-cy=passwordInput]").type(password);

    // click the login button in the form
    cy.get("[data-cy=loginSubmit]").click();

    // check the error alert box is visible
    cy.get("[data-cy=invalidUserAlert]")
      .should("be.visible")
      .and("contain", "Your email and/or your password are incorrect");
  });

  it("successful login valid users to welcome page", () => {
    const { email, password } = {
      email: "mohamed@instabug.com",
      password: "A12345678",
    };

    // redirect to login page
    cy.visit("/login");

    // input a valid email user in email input field
    cy.get("[data-cy=emailInput]").type(email);

    // // input the correct password for user in password input field
    cy.get("[data-cy=passwordInput]").type(password);

    // click the login button in the form
    cy.get("[data-cy=loginSubmit]").click();

    // we should be redirected to /welcome
    cy.url().should("include", "/welcome");

    // UI should reflect this email being logged in
    cy.get("[data-cy=welcomeTitle]").should("contain", email);
  });

  it("validate email input field for invalid email addresses", () => {
    const email = "dddd";

    // redirect to login page
    cy.visit("/login");

    // input an invalid email in email input field
    cy.get("[data-cy=emailInput]").type(email).blur();

    // check validation email error message appear
    cy.get("[data-cy=emailError]")
      .should("be.visible")
      .and("contain", "Enter a valid email address");

    // check input email error styling
    cy.get("[data-cy=emailInput]")
      .should("have.class", "error")
      .should("have.css", "border-color")
      .and("eq", "rgb(242, 66, 32)");
  });

  it("validate routing to welcome without login", () => {

    // redirect to login page
    cy.visit("/welcome");

    // we should be redirected to /welcome
    cy.url().should("include", "/login");

  });
});
