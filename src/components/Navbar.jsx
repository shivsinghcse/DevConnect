import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import { removeUser } from "../utils/userSlice"

const Navbar = () => {

    const user = useSelector( store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try
        {
            await axios.post(BASE_URL+"/logout", {}, {withCredentials: true})
            dispatch(removeUser())
            navigate('/login')
        }
        catch(err)
        {
            console.log(err.response.data);
        }
    }

    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="flex-1 ml-4">
                <Link to={'/'} className="text-2xl font-bold">Dev🔗Connect</Link>
            </div>
            <div className="flex gap-2">
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                {
                    user && (
                        <div className="dropdown dropdown-end flex justify-center items-center gap-4  mr-4">
                            <p>Welcome, {user.firstName}</p>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user ? user.photoUrl : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-50 w-52 p-2 shadow">
                                <li className="text-center border-b pb-2 mb-2 ">Welcome, {user.firstName}</li>
                                <li>
                                <Link to={'/profile'} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><Link onClick={handleLogout}>Logout</Link></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar