import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Fetch blog details from the API
    axios
      .get(`http://localhost:3001/api/blogs/${blogId}`)
      .then((response) => {
        setBlog(response.data);
        // Check if the current blog is in favorites and update the state accordingly
        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(storedFavorites.includes(response.data.id));
      })
      .catch((error) => console.error("Error fetching blog details:", error));

    // Check if comments are stored in localStorage
    const storedComments = JSON.parse(
      localStorage.getItem(`blog_${blogId}_comments`)
    );
    if (storedComments) {
      setComments(storedComments);
    } else {
      // Fetch comments from the API
      axios
        .get(`http://localhost:3001/api/blogs/${blogId}/comments`)
        .then((response) => {
          setComments(response.data);
          // Save comments to localStorage
          localStorage.setItem(
            `blog_${blogId}_comments`,
            JSON.stringify(response.data)
          );
        })
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [blogId]);

  return (
    <>
      <div className="h-[75vh]">
        {" "}
        <div className="h-auto  flex justify-center">
          <div className="md:w-[60%] bg-white shadow-2xl p-10">
            {" "}
            <h2 className="text-2xl md:text-4xl font-semibold my-2 text-slate-700">
              Title: {blog.title}
            </h2>
            <div className=" border object-center overflow-hidden w-full rounded-md">
              <img
                className="w-full h-[300px] py-2 pr-4 m-2 object-cover "
                src={`${blog.image}`}
                alt=""
              />
            </div>
            <div className="my-4">
              <p className=" text-slate-700 text-base">{blog.body}</p>
            </div>
            {/* -----Comments----- */}
            <div className=" bg-slate-100 rounded-md p-4">
              {" "}
              <h3 className=" bg-[#f37f39] pl-2 p-1 py-2 rounded-md text-white mb-4">
                Comments
              </h3>
              {comments.length > 0 ? (
                <>
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      <div className="flex  border mb-2 rounded-lg p-2 bg-white drop-shadow">
                        <div className="mr-2 mb-2">
                          <img
                            className="w-[50px] h-[50px]"
                            src="https://avatar.iran.liara.run/public/boy?username=Ash"
                          />
                        </div>
                        <div className="w-full">
                          <p className=" text-slate-700 font-semibold">
                            {comment.name}
                          </p>
                          <p className="text-slate-700 text-xs mt-[-6px]">
                            {comment.email}
                          </p>
                          <p className=" text-slate-700 my-2 font-medium">
                            {" "}
                            {comment.body}
                          </p>
                          <p className="w-full flex items-center">
                            <span className="ml-4 text-slate-700 text-xs">
                              Reply
                            </span>{" "}
                            <input
                              className="border text-sm rounded-lg py-1 px-2 ml-2 md:w-[50%] 
                          focus:outline-none focus:ring-[#f37f39] focus:border-[#f38c4c]"
                              type="text"
                              placeholder="reply here..."
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>
                  <h1 className=" text-slate-700">No Comment yet</h1>
                </div>
              )}
            </div>
          </div>
        </div>{" "}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
