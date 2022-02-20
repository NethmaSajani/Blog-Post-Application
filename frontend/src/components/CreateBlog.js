import React, { useState } from "react";
import axios from "axios";

//Create new blog
function CreateBlog() {
  const [Id, setId] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Author, setAuthor] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newBlog = {
      Id,
      Title,
      Content,
      Author,
    };

    axios
      .post("http://localhost:8070/blog/add", newBlog)
      .then(() => {
        alert("Blog added succesfully!");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="row mb-3">
          <label for="inputID" className="col-sm-2 col-form-label">
            ID
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputID"
              placeholder="Enter blog id"
              required
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputTitle" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Enter title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputContent" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="inputContent"
              placeholder="Enter blog content"
              required
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputContent" className="col-sm-2 col-form-label">
            Author
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="food-type"
              required
              style={{ width: "9cm" }}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            >
              <option>Select Author</option>
              <option value="Perera">Perera</option>
              <option value="Fernando">Fernando</option>
              <option value="Silva">Silva</option>
            </select>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
