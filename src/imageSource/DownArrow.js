import React from 'react';

function DownArrow({logoColor}) {
    return (
        <svg id="downArrow" className='arrowIcon' style={{fill:logoColor}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><polygon points="23.19 15.82 21.19 13.79 14.43 20.56 14.43 -0.02 11.57 -0.02 11.57 20.56 4.81 13.79 2.81 15.82 13 26.02 23.19 15.82"/></svg>
    );
}

export default DownArrow;