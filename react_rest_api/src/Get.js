import React, { Component } from "react";
import axios from "axios";

class Get extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3004/contacts").then((res) => {
      console.log(res);
      const contacts = res.data;
      this.setState({ contacts });
    });
  }
  render() {
    console.log("contacts", this.state.contacts);

    return (
      <div>
        <h3>get</h3>
        <div>
          {this.state.contacts.map((x) => {
            return <li key={x.id}>{x.name}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Get;
