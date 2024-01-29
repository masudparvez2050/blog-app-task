import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

const Favorites = () => {
  const [searchItems, setSearchItems] = useState("");
  const [storedFavorites, setStoredFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleUnfavorite = (blogId) => {
    // Update the favorite status locally
    setStoredFavorites((prevFavorites) =>
      prevFavorites.filter((favBlog) => favBlog.id !== blogId)
    );

    // Update the favorite list in localStorage
    localStorage.setItem(
      "favorites",
      JSON.stringify(storedFavorites.filter((favBlog) => favBlog.id !== blogId))
    );
  };

  const filteredBlogs = storedFavorites.filter((blog) => {
    return blog.title.toLowerCase().includes(searchItems.toLowerCase());
  });

  return (
    <div className="h-[75vh]">
      <div className="bg-[#f37f39] h-24 flex justify-center items-center drop-shadow-md">
        <h2 className="text-white text-3xl font-semibold drop-shadow-md">
          Favorite Blogs
        </h2>
      </div>
      {filteredBlogs.length > 0 ? (
        <div className="flex justify-center h-auto my-4 ">
          {" "}
          <div className="border rounded shadow-2xl  sm:w-3/4 h-full">
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
                      onClick={() => handleUnfavorite(blog.id)}
                      className="bg-white text-[#f37f39] border border-[#f37f39] p-2 my-2 ml-3 rounded-md"
                    >
                      Unfavorite
                    </button>

                    <img
                      className="w-[30px] h-[30px] mr-4 "
                      src="../../image/heart-2.png"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <p className=" text-gray-600 text-2xl font-semibold">
            No favorite blogs yet.
          </p>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Favorites;
