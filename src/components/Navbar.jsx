import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="lista_Header">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
                <NavLink to="/posts/create">Create Post</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contacts</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    )
}