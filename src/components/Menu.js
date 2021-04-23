import React from 'react';
import MenuItem from './sub/MenuItem'

function Menu({menuClass}) {
    const menuData =[
        {'Product Design Portfolio': 'Hello'},
        {'Software Engineering Portfolio': 'Hello'},
        {'About': 'Hello'},
        {'Resume': 'Hello'},
        {'Linked in': 'Hello'},
    ]

    const menuList = menuData.map((item, index)=>{
        return (
            <MenuItem key={index} menuHeader={item} menuDes={index}></MenuItem>
        )
    })

    return (
        <div className={menuClass}>
            {menuList}
        </div>
    );
}

export default Menu;