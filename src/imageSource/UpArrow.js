import React from 'react';

function UpArrow({logoColor}) {
    return (
        <svg id="upArrow" className='arrowIcon' style={{fill:logoColor}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><polygon points="2.81 10.18 4.81 12.21 11.57 5.44 11.57 26.02 14.43 26.02 14.43 5.44 21.19 12.21 23.19 10.18 13 -0.02 2.81 10.18"/></svg>
    );
}

export default UpArrow;