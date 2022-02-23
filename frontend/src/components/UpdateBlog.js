import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function UpdateBlog() {
  const [form, setForm] = useState({
    Id: "",
    Title: "",
    Content: "",
    Author: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:8070/blog/update/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const blog = await response.json();
      if (!blog) {
        window.alert(`Blog with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(blog);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedBlog = {
      Title: form.Title,
      Content: form.Content,
      Author: form.Author,
    };

    // This will send a post request to update
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedBlog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This will display the form to update
  return (
    <div>
      <h3>Update Blog</h3>
      <div className="container">
        <form onSubmit={onSubmit}>
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
                  updateForm(e.target.value);
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
                  updateForm(e.target.value);
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
                  updateForm(e.target.value);
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
                  updateForm(e.target.value);
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
    </div>
  );
}
