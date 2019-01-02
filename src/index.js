import React from "react";
import ReactDOM from "react-dom";

import Users from "./users";
import "./styles.css";

class App extends React.Component {
  state = {
    users: [
      { id: 1, name: "Prakadees", age: 27 },
      { id: 2, name: "Ram", age: 29 },
      { id: 3, name: "Kuamr", age: 33 }
    ]
  };
  delEntry = id => {
    const users = Object.assign([], this.state.users);
    let newUsr = users.filter(usr => usr.id != id);
    this.setState({ users: newUsr });
  };
  changeEntry = (id, e) => {
    let newUser = this.state.users.map(function(user) {
      if (user.id === id) {
        user.name = e.target.value;
      }
      return user;
    });
    this.setState({ user: newUser });
  };
  render() {
    return this.state.users.map((user, ind) => (
      <Users
        onEntryChange={this.changeEntry.bind(this, user.id)}
        onDelete={this.delEntry.bind(this, user.id)}
        id={user.id}
        age={user.age}
      >
        {" "}
        {user.name}{" "}
      </Users>
    ));
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
