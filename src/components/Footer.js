import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { DiStackoverflow } from 'react-icons/di';


function Footer() {
    return (
        <footer>
                 <p className='text-center pt-5 '>
                    <strong>Designed by Dymond Hoffman</strong>
                    <strong className='ps-3'>|</strong>

                    <a href='https://github.com/dhoffman03' className='px-3'>< FiGithub /></a>

                    <a href='https://www.linkedin.com/in/dymondhoffman/' className='px-3'>< FiLinkedin /></a>

                    <a href='https://stackoverflow.com/users/19372576/dymond-h' className='px-3'>< DiStackoverflow /></a>

                </p>               
        </footer>
    )
}

export default Footer;
