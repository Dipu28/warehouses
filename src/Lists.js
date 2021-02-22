import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";
import "./Lists.css";

function Lists(props) {
  var rows = [];
  props.alldata.forEach((element) => {
    console.log(element);

    rows.push(
      <tr className="list__h" key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.city}</td>
        <td>
          <UpdateList
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          ></UpdateList>
        </td>
        <td>
          <DeleteList
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          ></DeleteList>
        </td>
      </tr>
    );
  });
  return (
    <div className="list">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th className="list__h">Name</th>
            <th>City</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Lists;
