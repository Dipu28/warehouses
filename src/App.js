import React from "react";
import "./App.css";
import CreateList from "./CreateList";
import Lists from "./Lists";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        name: "",
        city: "",
      },
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3001/posts")
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            loading: false,
            alldata: result,
          })
        )

        .catch(console.log);
    });
  }

  handleChange(event) {
    var name = this.state.singledata.name;
    var city = this.state.singledata.city;
    if (event.target.name === "name") name = event.target.value;
    else city = event.target.value;

    this.setState({
      singledata: {
        name: name,
        city: city,
      },
    });
  }

  createList() {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then(
      this.setState({
        singledata: {
          name: "",
          city: "",
        },
      })
    );
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          name: "Loading...",
          city: "Loading...",
        },
      },
      () => {
        fetch("http://localhost:3001/posts/" + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                name: result.name,
                city: result.citycity ? result.citycity : "",
              },
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch("http://localhost:3001/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            name: "",
            city: "",
          },
        });
        this.getLists();
      });
  }

  deleteList(event, id) {
    fetch("http://localhost:3001/posts/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            name: "",
            city: "",
          },
        });
        this.getLists();
      });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <div>
        <Lists
          alldata={this.state.alldata}
          singledata={this.state.singledata}
          getList={this.getList}
          updateList={this.updateList}
          deleteList={this.deleteList}
          handleChange={this.handleChange}
        />
      </div>
    );
    return (
      <div>
        <span>
          <div className="app__button">
            <button
              type="button"
              className="app__button-btn"
              onClick={this.getLists}
            >
              Get Lists
            </button>
          </div>

          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
      </div>
    );
  }
}

export default App;
