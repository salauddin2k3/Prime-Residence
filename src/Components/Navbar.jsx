import { NavLink } from "react-router-dom";


const Navbar = () => {


    const navLinks = <>

        <li><NavLink to={'/'}><span className="text-base font-medium text-[#1E1E1E]">Home</span></NavLink></li>
        <li><NavLink to={'/update'}><span className="text-base font-medium text-[#1E1E1E]">Update Profile</span></NavLink></li>
        <li><NavLink to={'/contact'}><span className="text-base font-medium text-[#1E1E1E]">Contact</span></NavLink></li>

    </>


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
                        <a className="text-4xl font-extrabold text-[#1E1E1E]">Prime Residence</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Login</a>
                        <div className="ml-4 w-14 rounded-full">
                            <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;