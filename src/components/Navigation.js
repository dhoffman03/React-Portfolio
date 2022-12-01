import React from "react";

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#about"
                            onClick={() => setCurrentTab('About')}
                            className={currentTab === 'About' ? 'nav-link-active' : 'nav-link'}
                        >About Me</a>
                    </li>

                    <li>
                        <a href="#portfolio"
                            onClick={() => setCurrentTab('Portfolio')}
                            className={currentTab === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                        >Portfolio</a>
                    </li>

                    <li>
                        <a href="#contact"
                            onClick={() => setCurrentTab('Contact')}
                            className={currentTab === 'Contact' ? 'nav-link-active' : 'nav-link'}
                        >Contact</a>
                    </li>

                    <li>
                        <a href="#resume"
                            onClick={() => setCurrentTab('Resume')}
                            className={currentTab === 'Resume' ? 'nav-link-active' : 'nav-link'}
                        >Resume</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navigation;