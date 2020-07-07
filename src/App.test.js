import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import RequestForm from "./components/RequestForm";

test("renders List link", () => {
  const { getByText } = render(
    <Router>
      <Home />
    </Router>
  );
  const listLink = getByText("My list");
  expect(listLink).toBeInTheDocument();
  expect(<RequestForm />).toBeInTheDocument();
});
