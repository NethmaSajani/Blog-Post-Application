import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Styles/blogs.css";

const Blog = (props) => (
  <div id="container1">
    <h4 id="header">{props.blog.Title}</h4>
    <br></br>
    <p id="content">{props.blog.Content}</p>
    <br></br>
    <p id="date">{props.blog.createdAt}</p>
    <br></br>

    <div id="btn_content">
      <Link className="update_btn" to={`/update/${props.blog._id}`}>
        Edit Blog
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="dlt_btn"
        onClick={() => {
          props.deleteBlog(props.blog._id);
        }}
      >
        Delete Blog
      </button>
    </div>

    <hr></hr>
  </div>
);

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  // This method fetches blogs from the database
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

  // This will display all blogs
  return (
    <div>
      <h1 id="title">ALL BLOGS</h1>
      {blogList()}
    </div>
  );
}
