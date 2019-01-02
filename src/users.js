import React from "react";

function Users(props) {
  return (
    <React.Fragment>
      <li>
        Name : {props.children}, Age : {props.age}
        <input type="text" onChange={props.onEntryChange} />
        <button onClick={props.onDelete}> Delete </button>
      </li>
    </React.Fragment>
  );
}

export default Users;
