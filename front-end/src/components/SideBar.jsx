import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="px-6 py-10 text-lg text-[#737262]">
      <Link
        to="profile"
        className="flex cursor-pointer items-center justify-start gap-5 rounded-md bg-[#FBFBFA] px-5 py-2 drop-shadow-md hover:drop-shadow-lg"
      >
        <div className="overflow-hidden rounded-full bg-black">
          <img
            className="h-[40px] w-[40px]"
            src="https://th.bing.com/th/id/OIP.QG1sB95pGQ6Bx3vKXF-ZyAHaIO?pid=ImgDet&rs=1"
          />
        </div>
        <p className="font-semibold">minhpn02</p>
      </Link>
      <hr className="my-6" />
      <div className="flex flex-col gap-2">
        <NavLink
          to="flashcard"
          className="flex cursor-pointer items-center justify-center gap-5 rounded-md bg-[#FBFBFA] px-5 py-2 drop-shadow-md hover:drop-shadow-lg"
        >
          Flash card
        </NavLink>
        <NavLink
          to="blog"
          className="flex cursor-pointer items-center justify-center gap-5 rounded-md bg-[#FBFBFA] px-5 py-2 drop-shadow-md hover:drop-shadow-lg"
        >
          My Blog
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
