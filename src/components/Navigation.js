import React from "react";

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <a href="#about"
                    onClick={() => setCurrentTab('About')}
                    className={currentTab === 'About' ? 'nav-link-active' : 'nav-link'}
                >About Me</a>

                <a href="#projects"
                >Portfolio</a>

                <a href="#contact"
                >Contact</a>

                <a href="#resume"
                >Resume</a>
            </div>
        </nav>
    )
}

export default Navigation;

// Requirements
    // About Me -- Defadivt section
    // Portfolio
    // Contact
    // Resume
    // Current tab highlighted