import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './Navelements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>

                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to='/works' activeStyle>
                        Works
                    </NavLink>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/signin'>Contact Me</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    );
};

export default Navbar;
