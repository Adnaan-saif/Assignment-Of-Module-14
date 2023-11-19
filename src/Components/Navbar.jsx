import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <div>
            <div className="navbar shadow bg-green-200">
            <div className="flex-1 text-amber-600">
                <a>DesignAGENCY</a>
            </div>
            <div className="flex-none text-zinc-900">
                <ul className="menu menu-horizontal">
                <li className=' mr-1'><NavLink to={"/"}>Home</NavLink></li>
                <li className=' mr-1'><NavLink to={"/team"}>Team</NavLink></li>
                <li className=' mr-1'><NavLink to={"/service"}>Service</NavLink></li>
                <li className=' mr-1'><NavLink to={"/project"}>Project</NavLink></li>
                <li className=' mr-1'><NavLink to={"/testimonial"}>Testimonial</NavLink></li>
                <li>
                    <button className=" bg-transparent border-green-600 border mr-2">Button</button>
                </li>
                <li>
                    <button className=" bg-green-500 text-black mr-2">Register</button>
                </li>
                </ul>
            </div>
            </div>
         {props.children}
        </div>
    );
};

export default Navbar;