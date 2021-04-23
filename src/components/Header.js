import React,{useState, useEffect} from 'react';
import HeaderNavigationHelper from './sub/HeaderNavigationHelper'
import PageTitle from './PageTitle'
import { Spin as Hamburger } from 'hamburger-react'
import Menu from './Menu'
import Logo from '../imageSource/Logo'

function Header(props) {
    let [bgColor, setBgColor] = useState('var(--bluishBlack)');
    let [menuClass, setMenuClass] = useState('menu');
    let [hamburgerColor, setHamburgerColor] = useState('var(--yellowishWhite)');
    let [logoColor, setLogoColor]= useState('var(--yellowishWhite)')

    let toggleMenu =()=>{
        if(bgColor !== 'var(--bluishBlack)'){
            setBgColor('var(--bluishBlack)')
            setMenuClass('menu')
            setHamburgerColor('var(--yellowishWhite)')
            setLogoColor('var(--yellowishWhite)')
        } else {
            const bgColorOptions = ['#28c499', '#DBCE69', '#F27C68', '#6553fe']
            let pickColor =()=>Math.floor(Math.random()*4)
            setBgColor(bgColorOptions[pickColor()])
            setMenuClass('menuActive')
            setHamburgerColor('var(--bluishBlack)')
            setLogoColor('var(--bluishBlack)')
        }
    }

    return (
        <div style={{
            backgroundColor: bgColor
        }} className='headerAndMenu'>
            <header className='header'>
                <>
                <div className="logoAndMenuIcon">
                    <Logo logoColor={logoColor}></Logo>
                    <PageTitle></PageTitle>
                    <div onClick={toggleMenu}>
                        <Hamburger color={hamburgerColor}></Hamburger>
                    </div>
                </div>
                    <HeaderNavigationHelper></HeaderNavigationHelper>
                </>
            </header>
            <Menu menuClass={menuClass}></Menu>
        </div>
    );
}

export default Header;