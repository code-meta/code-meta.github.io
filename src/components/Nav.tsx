import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed left-0 right-0 max-w-7xl w-full py-2 px-4 mx-auto z-50 top-6">
      <div className="flex flex-col gap-y-2 font-medium items-end">
        <Link to="#">Projects</Link>
        <Link to="#">About</Link>
      </div>
    </div>
  );
};

export default Nav;
