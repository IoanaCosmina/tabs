import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

function Header() {
    return (
        <div className="tabs">
            <Tab>
                <NavLink to="/tabs" exact activeClassName="is-active">Home</NavLink>
            </Tab>
            <Tab>
                <NavLink to="/tabs/about" activeClassName="is-active">About</NavLink>
            </Tab>
            <Tab>
                <NavLink to="/tabs/features" activeClassName="is-active">Features</NavLink>
            </Tab>
        </div>
    );
};

export default Header;