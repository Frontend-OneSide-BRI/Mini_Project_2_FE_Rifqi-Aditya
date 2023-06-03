import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col justify-between gap-1 mb-14 sm:flex-row sm:justify-start sm:items-center sm:gap-7">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl">PEOPL.</h1>
      <a
        className={`text-sm md:text-base hover:cursor-pointer hover:text-black ${
          pathname === "/" ? "text-black" : "text-stone-600"
        }`}
        href="/"
      >
        Home
      </a>
      <a
        className={`text-sm md:text-base hover:cursor-pointer hover:text-black ${
          pathname === "/galleries" ? "text-black" : "text-stone-600"
        }`}
        href="galleries"
      >
        Galleries
      </a>
    </div>
  );
};

export default Navbar;
