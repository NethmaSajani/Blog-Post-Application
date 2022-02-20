import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../App.css";

const Blog = (props) => (
  <div className="container" style={{ padding: "10px" }}>
    <Row>
      <Col>
        <h5>{props.blog.Title}</h5>
        <p id="content">{props.blog.Content}</p>
        <p>{props.blog.createdAt}</p>
        <br></br>
      </Col>
      <Col id="column">
        <div>
          <button
            style={{ marginBottom: "10px" }}
            className="btn btn-link"
            onClick={() => {
              props.deleteBlog(props.blog._id);
            }}
          >
            Delete Blog
          </button>
        </div>
        <div>
          <button>
            <Link className="btn btn-link" to={`/update/${props.blog._id}`}>
              Edit Blog
            </Link>
          </button>
        </div>
      </Col>
    </Row>
    <hr></hr>
  </div>
);

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  // This method fetches the records from the database
  useEffect(() => {
    async function getBlogs() {
      const response = await fetch(`http://localhost:8070/blog/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const blogs = await response.json();
      setBlogs(blogs);
    }

    getBlogs();

    return;
  }, [blogs.length]);

  //This method will delete a blog
  async function deleteBlog(id) {
    await fetch(`http://localhost:8070/blog/delete/${id}`, {
      method: "DELETE",
    });

    const newBlogs = blogs.filter((el) => el._id !== id);
    setBlogs(newBlogs);
  }

  // This method will map out all blogs
  function blogList() {
    return blogs.map((blog) => {
      return (
        <Blog
          blog={blog}
          deleteBlog={() => deleteBlog(blog._id)}
          key={blog._id}
        />
      );
    });
  }

  // This following section will display all blogs
  return (
    <div>
      <h1 id="title">ALL BLOGS</h1>
      {blogList()}
    </div>
  );
}
