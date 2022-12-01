import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { DiStackoverflow } from "react-icons/di";


function Footer() {
    return (
        <footer>
            <h2>Designed by Dymond Hoffman</h2>
            <ul>
                <li><a href="https://github.com/dhoffman03">< FiGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/dymondhoffman/">< FiLinkedin /></a></li>
                <li><a href="https://stackoverflow.com/users/19372576/dymond-h">< DiStackoverflow /></a></li>
            </ul>

        </footer>
    )
}

export default Footer;
