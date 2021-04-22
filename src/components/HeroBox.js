import React,{useState, useEffect} from 'react';
import HeroBoxH1 from './HeroBoxH1'

function HeroBox(props) {
    let [marginTop, setMarginTop] = useState();

    useEffect(()=>{
        let hamburgerFirstBar = document.querySelector('.hamburger-react>div')
        let hamburgerFirstBarHeight = parseInt(window.getComputedStyle(hamburgerFirstBar).getPropertyValue('height'))
        let hamburgerFirstBarTop = parseInt(hamburgerFirstBar.getBoundingClientRect().top)
        let adjustment = 2
        let getMarginTop = hamburgerFirstBarTop - hamburgerFirstBarHeight -adjustment
        setMarginTop(getMarginTop)
    },[])

    return (
        <div className="HeroBox" style={{
            marginTop: marginTop
        }}>
            <h6>See Min's portfolio as:</h6>
            <HeroBoxH1></HeroBoxH1>
            <div id='pfReel'>Video</div>
        </div>
    );
}

export default HeroBox;