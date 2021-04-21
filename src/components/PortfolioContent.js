import React from 'react';
import PortfolioHeader from './PortfolioHeader'
import PortfolioBox from './PortfolioBox'
import PortfolioFourInRowBox from './PortfolioFourInRowBox'
function PortfolioContent({pfType}) {
    return (
        <>
        <PortfolioHeader pfType={pfType}></PortfolioHeader>
        <PortfolioBox startPoint={4} endPoint={6}></PortfolioBox>
        <PortfolioBox startPoint={1} endPoint={6}></PortfolioBox>
        <div>
        <PortfolioFourInRowBox></PortfolioFourInRowBox>
        </div>
        </>
    );
}

export default PortfolioContent;