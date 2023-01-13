import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../services/authclient/authSlice";
import { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { client } = useSelector((state) => state.authclient);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const showfun = () => {
    setshow(!show);
  };

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <i class="fa-solid fa-piggy-bank"></i> BMCA
          </span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={showfun}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            show
              ? "block w-full flex-grow lg:flex lg:items-center lg:w-auto"
              : "hidden md:block lg:block w-full flex-grow lg:flex lg:items-center lg:w-auto"
          }
        >
          {/* <div class=""> */}
          <div class="text-sm lg:flex-grow">
            <Link to="/">
              <a
                href="javascript:void(0)"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Home
              </a>
            </Link>
            <Link to="/account">
              <a
                href="javascript:void(0)"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Account
              </a>
            </Link>
            {client ? (
              <a
                onClick={onLogout}
                href="javascript:void(0)"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                logout
              </a>
            ) : (
              <>
                <Link to="/register">
                  <a
                    href="javascript:void(0)"
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Register
                  </a>
                </Link>
                <Link to="/login">
                  <a
                    href="javascript:void(0)"
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                  >
                    Login
                  </a>
                </Link>
              </>
            )}
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              get started
            </a>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
