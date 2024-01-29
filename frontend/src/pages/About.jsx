import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="h-[75vh]">
      <div className="bg-[#f37f39] h-24 flex justify-center items-center drop-shadow-md">
        <h2 className="text-white text-3xl font-semibold drop-shadow-md">
          About
        </h2>
      </div>{" "}
      <div className="h-auto  flex justify-center">
        <div className="md:w-[60%] h-full bg-white shadow-2xl p-10">
          <div>
            <p className="bg-[#f37f39] px-2 py-3 rounded-lg text-white text-lg mb-2">
              About This Project
            </p>
            <p className="bg-gray-100 text-slate-600 rounded-lg px-4 py-6">
              This project is for Doodle Inc Practical Task Project. This is a
              blog app where users can create, update and delete blogs and
              comments. The app uses Express to create REST API for the backend
              and React for the frontend. Here are some of the This project is a
              demonstration of my skills in web development using Express and
              React. I hope you enjoy using this app and find it useful. Thank
              you for your attention.
            </p>

            <p className="bg-[#f37f39] px-2 py-3 rounded-lg text-white text-lg mb-2">
              Technology Used
            </p>
            <p className="w-24 px-2 py-1 rounded-lg text-slate-800 text-lg mb-2 ml-4">
              Backend
            </p>
            <p className="bg-gray-100 text-slate-600 rounded-lg px-4 py-6">
              <li>NodeJs</li>
              <li>ExpressJs</li>
            </p>
            <p className="w-24 px-2 py-1 rounded-lg text-slate-800 text-lg mb-2 ml-4">
              Frontend
            </p>
            <p className="bg-gray-100 text-slate-600 rounded-lg px-4 py-6">
              <li>ReactJs</li>
              <li>Tailwind Css</li>
            </p>

            <p className="bg-[#f37f39] px-2 py-3 rounded-lg text-white text-base mb-2">
              <marquee direction="">
                {" "}
                NB: This project does not have any compatibility with the
                content of doodle.ins. It is only made for practical task
                purpose.
              </marquee>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
