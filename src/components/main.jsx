import React, { Component } from "react";
import axios from "axios";
import * as util from "util";

const theServer = "https://videoquizconverter.herokuapp.com/quizzes"; // For API
class Counter extends Component {
  state = {
    videoURL: "https://www.youtube.com/watch?v=QN-jeJLGCio", // default video
    videoFILE: null,
  };
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.state.videoURL = this.url;
    console.log(this.state.videoURL);
    //  axios.post("api/uploadfile", this.state.videoURL);
    const quiz_links = axios
      .get("https://videoquizconverter.herokuapp.com/quizzes", {
        link: JSON.stringify(videoURL),
      })
      .then(() => {
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        alert("Error with API");
      });
    alert(quiz_links);
  }
  onUpload(e) {
    e.preventDefault();
    this.state.videoFILE = this.file;
    console.log(this.state.videoFILE);
    axios
      .post(
        "https://videoquizconverter.herokuapp.com/quizzes",
        this.state.videoFILE
      )
      .then(() => {
        alert("Success");
      })
      .catch((error) => {
        alert("Error with API");
      });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {" "}
            About Us{" "}
          </a>
        </nav>
        <h1> WELCOME TO QUIZLET FINDER </h1>
        <h3> Submit Video URL Here: </h3>
        <form className="form-horizontal">
          {" "}
          <input type="url" ref={(a) => (this.url = a)} name="url"></input>
        </form>
        <button type="button" onClick={this.onSubmit} className="btn-2">
          Submit
        </button>
        <h3> Submit Video mp4 File Here: </h3>
        <form className="form-horizontal">
          {" "}
          <input type="file" ref={(a) => (this.file = a)} name="file"></input>
        </form>
        <button type="btn-horizontal" onClick={this.onUpload} className="btn-2">
          Upload
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
