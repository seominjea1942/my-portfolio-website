import React from 'react';
import Pdescription from './sub/Pdescription'
import PImage from './sub/PImage'
function PortfolioFourInRowBox(props) {
    let pfList =[]
    for(let i =0; i<4;i++){
        pfList.push(
            <div key={i}>
                <PImage></PImage>
                <Pdescription endPoint={7}></Pdescription>
            </div>
        )
    }
    return (
        <div className="portfolioFourInRowBox"style={{
            backgroundColor:'red',
        }}>
            {pfList}
            
        </div>
    );
}

export default PortfolioFourInRowBox;