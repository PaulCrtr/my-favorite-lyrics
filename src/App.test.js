import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Home from "./components/Home";
import List from "./components/List";
import FullLyrics from "./components/FullLyrics";
import RequestForm from "./components/RequestForm";

const testItem1 = {
  id: 10,
  artist: "test 1",
  title: "test 1",
  picture: "test 1",
  lyrics: "This is a test 1.",
};

const testItem2 = {
  id: 20,
  artist: "test 2",
  title: "test 2",
  picture: "test 2",
  lyrics: "This is a test 2.",
};

describe("App", () => {
  beforeAll(() => {
    localStorage.myLyrics = JSON.stringify([testItem1, testItem2]);
  });

  it("renders App correctly", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper).toMatchSnapshot();
  });

  it("renders Home correctly", () => {
    const homeWrapper = shallow(<Home />);
    expect(homeWrapper).toMatchSnapshot();
  });

  it("renders RequestForm correctly", () => {
    const requestFormWrapper = shallow(<RequestForm />);
    expect(requestFormWrapper).toMatchSnapshot();
  });

  it("renders List correctly", () => {
    const listWrapper = shallow(<List />);
    expect(listWrapper).toMatchSnapshot();
  });

  it("renders Lyrics correctly", () => {
    const fullLyricsWrapper = shallow(
      <FullLyrics location={{ state: { datas: testItem1 } }} />
    );
    expect(fullLyricsWrapper).toMatchSnapshot();
  });
});
