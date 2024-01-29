// if use mongodb then use this schema
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

const commentsSchema = new mongoose.Schema({
  blogId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Comments = mongoose.model("Comments", commentsSchema);

// if use MySql then use this schema
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Blogs = sequelize.define("Blog", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const Commentss = sequelize.define("Comments", {
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
