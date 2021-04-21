import React from 'react';

function PortfolioHeader({pfType}) {
    let uxHeader = ()=>{
        return (
            <div className='gridContainer'>
            <div className='portfolioHeader'>
                <h1>UX Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore unde ipsum doloremque commodi neque repellendus modi, officia quibusdam blanditiis? Voluptatem qui pariatur, adipisci accusamus vero error porro repudiandae et!</p>
                <div className ='splitterLine'></div>
            </div>
        </div>
        )
    }
    let sweHeader = ()=>{
        return (
            <div className='gridContainer'>
            <div className='portfolioHeader'>
                <h1>Software Engineering</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore unde ipsum doloremque commodi neque repellendus modi, officia quibusdam blanditiis? Voluptatem qui pariatur, adipisci accusamus vero error porro repudiandae et!</p>
                <div className ='splitterLine'></div>
            </div>
        </div>
        )
    }
    return (
        (pfType==='UX')?uxHeader():sweHeader()
    );
}

export default PortfolioHeader;