import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import "./App.css";
import List from "./Components/List";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./helper/themehelper";

const App = () => {
  const [guitars, setGuitars] = useState([]);
  const dataUrl = "http://localhost:5000/guitars";
  const getData = async () => {
    await fetch(dataUrl)
      .then((response) => response.json())
      .then((json) => {
        setGuitars((old) => [...old, json]);
      });
  };
  const printData = () => {
    return (
      <div>
        <List data={guitars[0]} />
      </div>
    );
  };

  useEffect(async () => {
    await getData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <h1>Guitar App</h1>
          <Link to="/create" style={{ textDecoration: "None" }}>
            <Button color="primary">Create New Guitar</Button>
          </Link>
        </div>
        {guitars.length !== 0 && printData()}
      </div>
    </ThemeProvider>
  );
};

export default withRouter(App);
