import { Button, FormControl, Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../helper/themehelper";

import axios from "axios";
import List from "./List";

import "../App.css";

const Edit = () => {
  const [data, setData] = useState({});
  let id = useLocation().pathname;
  id = id.substr(1);

  const dataUrl = `http://localhost:5000/guitars/${id}`;
  const getData = () => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  const handleSubmit = () => {
    axios.put(dataUrl, data);
    window.location.replace("/");
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="editGuitar">
        <h1>Edit guitar</h1>
        <form noValidate>
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>Id</label>
            <Input
              id="key"
              value={data.id}
              placeholder="Id"
              className="input-tag"
              onChange={handleChange("id")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Name
            </label>
            <Input
              id="name"
              placeholder="Name"
              className="input-tag"
              value={data.name}
              onChange={handleChange("name")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Description
            </label>
            <Input
              id="description"
              placeholder="Description"
              className="input-tag"
              value={data.description}
              multiline
              onChange={handleChange("description")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Height
            </label>
            <Input
              id="height"
              placeholder="Height"
              className="input-tag"
              value={data.height}
              onChange={handleChange("height")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Width
            </label>
            <Input
              id="width"
              placeholder="Width"
              className="input-tag"
              value={data.width}
              onChange={handleChange("width")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Color
            </label>
            <Input
              id="color"
              placeholder="Color"
              className="input-tag"
              value={data.color}
              onChange={handleChange("color")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Condition
            </label>
            <Input
              id="condition"
              placeholder="Condition"
              className="input-tag"
              value={data.condition}
              onChange={handleChange("condition")}
            />
          </FormControl>
          <br />
          <FormControl>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Photo
            </label>
            <Input
              id="photo"
              placeholder="Photo Url"
              className="input-tag"
              value={data.photo}
              multiline
              onChange={handleChange("photo")}
            />
          </FormControl>
        </form>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Link to="/" style={{ textDecoration: "None" }}>
          <Button color="secondary">Cancel</Button>
        </Link>
      </div>
    </ThemeProvider>
  );
};

export default withRouter(Edit);
