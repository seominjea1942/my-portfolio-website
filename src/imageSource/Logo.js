import React from 'react';

function Logo({logoColor}) {
    return (
        <svg id="logo" style={{fill:logoColor}} data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M31.86,13.29V31.81h-3V18.6l-5.63,9.32h-.37l-5.64-9.34V31.81h-3V13.29h3.28L23,22.55l5.61-9.26Z"/><path d="M23,3A20,20,0,1,1,3,23,20,20,0,0,1,23,3m0-3A23,23,0,1,0,46,23,23,23,0,0,0,23,0Z"/></svg>
    );
}

export default Logo;