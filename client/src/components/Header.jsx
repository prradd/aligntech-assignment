import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
    return (
        <AppBar position="relative" className='header' color='transparent'>
            <Toolbar>
                <img src="https://www.aligntech.com/img/align-logo.svg" alt=""/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
