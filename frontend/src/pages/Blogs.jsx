import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  //   const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/blogs")
      .then((response) => {
        const blogsWithFavorite = response.data.map((blog) => ({
          ...blog,
          isFavorite: false,
        }));
        setBlogs(blogsWithFavorite);

        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            storedFavorites.some((favBlog) => favBlog.id === blog.id)
              ? { ...blog, isFavorite: true }
              : blog
          )
        );
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleFavorite = (blogId) => {
    // Update the favorite status locally for the specific blog
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId ? { ...blog, isFavorite: !blog.isFavorite } : blog
      )
    );
    // Update the favorite list in localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = storedFavorites.some(
      (favBlog) => favBlog.id === blogId
    );

    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = storedFavorites.filter(
        (favBlog) => favBlog.id !== blogId
      );
    } else {
      // Find the blog object by id from the current state
      const blogToAdd = blogs.find((blog) => blog.id === blogId);
      updatedFavorites = [...storedFavorites, blogToAdd];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // for search queries filtering blogs
  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchItems.toLowerCase());
  });

  return (
    <div className="h-[75vh]">
      <div className="bg-[#f37f39] h-24 flex justify-center items-center drop-shadow-md">
        <h2 className="text-white text-3xl font-semibold drop-shadow-md">
          Blog Home
        </h2>
      </div>
      <div className="flex justify-center h-auto my-4 ">
        {" "}
        <div className="border rounded shadow-2xl sm:w-3/4 ">
          {/* Search Input */}
          <div className="m-2 mb-0 mx-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-[#f37f39] focus:border-[#f38c4c]"
            />
          </div>
          <div className=" gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/4 pr-2">
            {filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className=" mx-4 border border-orange-200 rounded-md my-4 bg-white p-2 w-[95%] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-300 drop-shadow-md"
              >
                <Link to={`/blogs/${blog.id}`}>
                  <div className=" ">
                    <img
                      className="w-full py-2 pr-4 m-2 "
                      src={`${blog.image}`}
                      alt=""
                    />
                    <div className="ml-3">
                      {" "}
                      <p className="font-semibold text-xl my-2 text-slate-800">
                        Title: {blog.title}
                      </p>
                      <p className=" text-slate-700">{blog.body}</p>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleFavorite(blog.id)}
                    className={
                      blog.isFavorite
                        ? `bg-white text-[#f37f39] border border-[#f37f39] p-2 my-2 ml-3 rounded-md`
                        : `bg-[#f37f39] text-white p-2 my-2 ml-3 rounded-md`
                    }
                  >
                    {blog.isFavorite ? "Unfavorite" : "Add Favorite"}
                  </button>
                  {blog.isFavorite ? (
                    <img
                      className="w-[30px] h-[30px] mr-4 "
                      src="../../image/heart-2.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[30px] h-[30px] mr-4 "
                      src="../../image/heart-1.png"
                      alt=""
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
