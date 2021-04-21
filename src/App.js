import "tailwindcss/tailwind.css"
import './App.css';
import Header from './components/Header'
import HeroBox from './components/HeroBox'
import PortfolioContent from './components/PortfolioContent'
import {useState,useEffect} from 'react'

function App() {
  let [headerWidth, setHeaderWidth] = useState();

  useEffect(()=>{
    let header = document.querySelector('.header')
    let currentHeaderWidth = window.getComputedStyle(header).getPropertyValue('width')
    console.log(currentHeaderWidth)
    setHeaderWidth(currentHeaderWidth)
  },[headerWidth])

  return (
    <div className="App">
      <Header></Header>
      <div style={{marginLeft: headerWidth}} className='pfContainer'>
        <HeroBox></HeroBox>
        <PortfolioContent pfType='UX'></PortfolioContent>
        <PortfolioContent pfType='SWE'></PortfolioContent>
      </div>
    </div>
  );
}

export default App;
