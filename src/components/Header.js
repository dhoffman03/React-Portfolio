import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <header>
            <div>
                <h1>Dymond Hoffman</h1>
            </div>
            <div>
                <Navigation
                    currentTab={currentTab}
                    handleTabChange={handleTabChange}
                ></Navigation>
            </div>
        </header>
    )
}

export default Header;
