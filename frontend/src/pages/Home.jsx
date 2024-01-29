import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" h-[90vh] bg-slate-900 ">
      <div className="h-[86vh] bg-[url('./assets/image/bg_pic.jpg')] bg-cover flex md:flex-row flex-col justify-center items-center opacity-80">
        <div className=" md:w-1/2  flex flex-col justify-center items-center">
          <div className="text-center md:text-left md:ml-20">
            <p className="text-white text-3xl md:text-7xl font-bold drop-shadow-lg mb-5 mt-[-4rem] p-4 border-4 rounded-lg">
              Empowering{" "}
              <span className="text-[#f37f39] font-extrabold">Future</span>
            </p>{" "}
            <p className="text-white text-2xl md:text-5xl md:mb-3">
              With State of the Art Tech
            </p>
            <p className="text-white text-2xl md:text-5xl mb-4">Solutions!</p>
          </div>
        </div>
        <div className=" md:w-1/2   flex justify-center items-center">
          <p className="text-white text-2xl md:text-5xl font-semibold border-4 hover:border-[#f37f39] p-4 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-orange-600">
            <Link to={`/blogs`}>
              Go to{" "}
              <span className="text-[#f37f39] drop-shadow-lg ">Blogs</span>
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
