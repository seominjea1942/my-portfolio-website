import React from 'react';
import Pimage from './sub/PImage'
import Pdescription from './Pdescription'
function PortfolioBox(props) {
    return (
        <div className='gridContainer'>
            <div className='test'>
                <Pimage></Pimage>
                <Pdescription></Pdescription>
            </div>
        </div>
    );
}

export default PortfolioBox;