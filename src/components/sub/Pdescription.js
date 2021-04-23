import React from 'react';

function Pdescription({endPoint}) {
    return (
        <div className='gridContainer'>
            <div style={{
                    gridColumn: `1 /span ${(endPoint!==undefined)?endPoint:3}`
                }}
                className='pdescription'>
                <h3>Project Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
}

export default Pdescription;