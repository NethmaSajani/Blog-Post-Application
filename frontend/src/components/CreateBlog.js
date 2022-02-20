import React, { useState } from "react";

//Create new blog
function CreateBlog() {
  return (
    <div className="container">
      <form>
        <div className="row mb-3">
          <label for="inputID" className="col-sm-2 col-form-label">
            ID
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputID"></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputTitle" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTitle"></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputContent" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <textarea className="form-control" id="inputContent"></textarea>
          </div>
        </div>
        <div className="dropdown">
          <label for="inputContent" className="col-sm-2 col-form-label">
            Author
          </label>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select the author
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Perera
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Fernando
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Silva
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      </div>
  );
}

export default CreateBlog;
