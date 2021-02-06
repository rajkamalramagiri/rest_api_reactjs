import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    id: "",
    name: "",
  };
  handleAdd = () => {
    console.log("clicked");

    axios
      .post("http://localhost:3004/contacts", {
        id: this.state.id,
        name: this.state.name,
      })
      .then((res) => {
        console.log(res);
        const contacts = res.data;
        this.setState({ contacts });
      });
  };
  render() {
    return (
      <div>
        <h1>post</h1>
        <label>enter id</label>
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => this.setState({ id: e.target.value })}
        />
        <br />
        <label> enter name</label>
        <input
          value={this.state.name}
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleAdd}> Add</button>
      </div>
    );
  }
}

export default Post;
