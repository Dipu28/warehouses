import React from "react";

function CreateList(props) {
  return (
    <React.Fragment>
      <div className="app__button">
        <button
          type="button"
          className="app__button-btn"
          data-toggle="modal"
          data-target="#myModal"
        >
          Create New List
        </button>
      </div>

      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New List
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="name"
                name="name"
                value={props.singledata.name}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="city"
                name="city"
                value={props.singledata.city}
                onChange={props.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={props.createList}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateList;
