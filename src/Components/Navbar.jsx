import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }



    const navLinks = <>

        <li><NavLink to={'/'}><span className="text-base font-medium text-[#1E1E1E]">Home</span></NavLink></li>
        <li><NavLink to={'/update'}><span className="text-base font-medium text-[#1E1E1E]">Update Profile</span></NavLink></li>
        <li><NavLink to={'/contact'}><span className="text-base font-medium text-[#1E1E1E]">Contact</span></NavLink></li>

    </>

    // const userLogin = <>

    //     <NavLink to={'/login'}><span className="btn text-base font-medium text-[#1E1E1E]">Login</span></NavLink>

    // </>


    return (
        <div className="my-10">
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <NavLink to={'/'}><a className="text-4xl font-extrabold text-[#1E1E1E]">Prime Residence</a></NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user
                            ? 
                            <div onClick={handleSignOut}><span className="btn text-base font-medium text-[#1E1E1E]">Sign out</span></div>
                            :
                            <NavLink to={'/login'}><span className="btn text-base font-medium text-[#1E1E1E]">Login</span></NavLink>

                        }
                        {/* {userLogin}
                        <div onClick={handleSignOut}><span className="btn text-base font-medium text-[#1E1E1E]">Sign out</span></div> */}
                        <div className="ml-4 w-14 rounded-full">
                            {
                                user
                                ? 
                                <div className="relative group">
                                    <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Test"  />
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-sm font-bold border border-orange-900 bg-orange-500 text-center text-white">Hover test</p>
                                    </div>
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;