const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { blogs, comments } = require("./model/data");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// get server home page message
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Create, update, and delete blog
app.post("/api/blogs", (req, res) => {
  const { userId, id, title, body } = req.body;

  res.json({ success: true });
});

// Create, update, and delete comment
app.post("/api/comments", (req, res) => {
  const { blogId, id, name, email, body } = req.body;

  res.json({ success: true });
});

// Get all blogs
app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

// Get all comments for a blog
app.get("/api/blogs/:blogId/comments", (req, res) => {
  const blogId = parseInt(req.params.blogId);
  const blogComments = comments.filter((comment) => comment.blogId === blogId);
  res.json(blogComments);
});

// Get blog details by ID
app.get("/api/blogs/:blogId", (req, res) => {
  const blogId = parseInt(req.params.blogId);
  const blog = blogs.find((blog) => blog.id === blogId);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
