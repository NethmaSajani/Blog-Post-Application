import React, { useState } from "react";
import axios from "axios";
import "./Styles/createblog.css";
import { useNavigate } from "react-router-dom";

//This will create new blog
function CreateBlog() {
  const [Id, setId] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Author, setAuthor] = useState("");

  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }


  //This will create blog form
  return (
    <div className="create_blog">
      <form onSubmit={sendData} id="createblogform">
        <h2 id="heading">Create Blog</h2>
        <br />
        <div>
          <label for="inputID">ID</label>
          <div>
            <input
              type="text"
              id="inputID"
              placeholder="Enter blog id"
              required
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <br />
        <div>
          <label for="inputTitle">Title</label>
          <div>
            <input
              type="text"
              id="inputTitle"
              placeholder="Enter title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <br />
        <div>
          <label for="inputContent">Content</label>
          <div>
            <textarea
              id="inputContent"
              placeholder="Enter blog content"
              required
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <br />
        <div>
          <label for="inputContent">Author</label>
          <div>
            <select
              id="dropdwn"
              required
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
        <br />
        <div style={{ marginLeft: "130px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
