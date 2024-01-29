export default function Footer() {
  return (
    <div className="bg-[#f37f39] h-[5vh] flex items-center justify-center">
      <p className="text-center text-white font-medium">
        {" "}
        Developed By{" "}
        <a
          className="hover:text-orange-600 transition-all duration-300 text-slate-700 bg-white px-2 py-1 rounded-md"
          href="https://masudur-rahman.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Masudur Rahman
        </a>
      </p>
    </div>
  );
}
