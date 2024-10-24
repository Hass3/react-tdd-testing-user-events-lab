import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />)
  const nameInput = screen.getByPlaceholderText("name")
  expect(nameInput).toBeInTheDocument()
  const emailInput =  screen.getByPlaceholderText("email")
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App/>)
  const cyberSecurity = screen.getByRole("checkbox", {name : /cyber security/i})
  expect(cyberSecurity).toBeInTheDocument();
  const softwarEngineering = screen.getByRole("checkbox", {name : /software engineering/i})
  expect(softwarEngineering).toBeInTheDocument();
  const dataAnalyst = screen.getByRole("checkbox", {name : /data analyst/i})
  expect(dataAnalyst).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App/>)
  const cyberSecurity = screen.getByRole("checkbox", {name : /cyber security/i})
  expect(cyberSecurity).not.toBeChecked()
  const softwarEngineering = screen.getByRole("checkbox", {name : /software engineering/i})
  expect(softwarEngineering).not.toBeChecked()
  const dataAnalyst = screen.getByRole("checkbox", {name : /data analyst/i})
  expect(dataAnalyst).not.toBeChecked()

});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App/>)
  const nameInput = screen.getByPlaceholderText("name")
  userEvent.type(nameInput, "hass")
  const emailInput =  screen.getByPlaceholderText("email")
  userEvent.type(emailInput, "hass@gmail.com")
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App/>)
  const cyberSecurity = screen.getByRole("checkbox", {name : /cyber security/i})
  userEvent.click(cyberSecurity,true)
  const softwarEngineering = screen.getByRole("checkbox", {name : /software engineering/i})
  userEvent.click(softwarEngineering,true)
  const dataAnalyst = screen.getByRole("checkbox", {name : /data analyst/i})
  userEvent.click(dataAnalyst,true)
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />)
   const button = screen.getByRole("button", {name: /submit/i})
   userEvent.click(button)
   expect(screen.getByText(/thanks for the support/i)).toBeInTheDocument()
});



/**The requirement for this lab is to add a newsletter signup form to your portfolio page. The form should include:


a set of checkboxes allowing the user to select their interests
a button to submit the form */