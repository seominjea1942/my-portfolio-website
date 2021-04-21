import React from 'react';
import Pimage from './sub/PImage'
import Pdescription from './sub/Pdescription'
function PortfolioBox({startPoint, endPoint}) {
    return (
        <div className='gridContainer'>
            <div style={{
                gridColumn: `${startPoint} / span ${endPoint}`
            }} className='portfolioBox'>
                <Pimage></Pimage>
                <Pdescription></Pdescription>
            </div>
        </div>
    );
}

export default PortfolioBox;