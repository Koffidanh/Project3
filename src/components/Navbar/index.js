import React from 'react'
import { Nav, NavLink, NavMenu } from "./NavbarElements"
import BurgerMenu from "../Dropdown"

export const Navbar = () => {
    return (
        <>
            <Nav>
                <BurgerMenu />
                <NavMenu>
                    <NavLink to="/signup" exact activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Signup
                    </NavLink>
                    <NavLink to="/login" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Login
                    </NavLink>
                    <NavLink to="/member" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Member
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;