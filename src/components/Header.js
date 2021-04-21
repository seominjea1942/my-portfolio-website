import React from 'react';
import HeaderNavigationHelper from './HeaderNavigationHelper'
import { Spin as Hamburger } from 'hamburger-react'
import Logo from '../imageSource/Logo'

function Header(props) {
    return (
        <header className='header'>
            <div>
                <Logo></Logo>
                <Hamburger></Hamburger>
                <HeaderNavigationHelper></HeaderNavigationHelper>
            </div>
        </header>
    );
}

export default Header;