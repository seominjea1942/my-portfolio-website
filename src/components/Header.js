import React from 'react';
import HeaderNavigationHelper from './sub/HeaderNavigationHelper'
import PageTitle from './PageTitle'
import { Spin as Hamburger } from 'hamburger-react'
import Logo from '../imageSource/Logo'

function Header(props) {
    return (
        <header className='header'>
            <>
            <div className="logoAndMenuIcon">
                <Logo></Logo>
                <PageTitle></PageTitle>
                <Hamburger></Hamburger>
            </div>
                <HeaderNavigationHelper></HeaderNavigationHelper>
            </>
        </header>
    );
}

export default Header;