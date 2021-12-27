import { Link } from "react-router-dom"
import { BsSearch, BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import Search from "./Search";
const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
              <Link  to="/">
               <p className="flex items-center text-md bg-blue-500 font-bold text-white px-4 py-3 rounded-lg dark:bg-gray-500 dark:text-gray-900">SearchMe <BsSearch className="ml-2"/></p>
              </Link>
              <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-md dark:bg-gray-50 dark:text-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-3 hover:shadow-lg">
                {darkTheme ? <BsSun style={{ color: "#000"}} fontSize="20px"/> : <BsFillMoonStarsFill />}
              </button>
            </div>
            <Search />
        </div>
    )
}

export default Navbar
