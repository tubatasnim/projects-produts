import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar-style'>
                <CustomLink to="/">HOME</CustomLink>

                <CustomLink to="/Reviews">REVIEWS</CustomLink>
                <CustomLink to="/DashBoard">DASHBOARD</CustomLink>
                <CustomLink to="/Blogs">BLOGS</CustomLink>
                <CustomLink to="/About">ABOUT US</CustomLink>


            </nav>

        </div>
    );
};

export default Header;