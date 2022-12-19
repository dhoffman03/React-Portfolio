import React from 'react';
import ANightIn from '../assets/images/A-Night-In.png'
import BackStock from '../assets/images/BackStock.png'
import CodeMovie from '../assets/images/codemovie.png'
import LandingPage from '../assets/images/Landing-Page.png'
import NotesExpress from '../assets/images/Notes-Express.png'
import PasswordGenerator from '../assets/images/Password-Generator.png'
import WeatherDashboard from '../assets/images/Weather-Dashboard.png'
import { FiGithub } from 'react-icons/fi';

function Portfolio() {
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://dhoffman03.github.io/A-Night-In/' target='_blank' rel='noreferrer'>
                        <img src={ANightIn} className='card-img-top' alt='A-Night-In application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>A Night In</h5>
                        <a href='https://github.com/dhoffman03/A-Night-In.git' target='_blank' rel='noreferrer'>Github Repo < FiGithub /></a>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://backstock-2022.herokuapp.com/' target='_blank' rel='noreferrer'>
                        <img src={BackStock} className='card-img-top' alt='BackStock application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>BackStock</h5>
                        <a href='https://github.com/PDKetchum/project-2-BackStock.git' target='_blank' rel='noreferrer'>Github Repo< FiGithub /></a>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://codemovie.herokuapp.com/' target='_blank' rel='noreferrer'>
                        <img src={CodeMovie} className='card-img-top' alt='Note taking application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>CodeMovie!</h5>
                        <a href='https://github.com/AMore080/ecommerce.git' target='_blank' rel='noreferrer'>Github Repo< FiGithub /></a>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://dhoffman03.github.io/mini-project-1/' target='_blank' rel='noreferrer'>
                        <img src={LandingPage} className='card-img-top' alt='Landing Page application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>Landing Page</h5>
                        <a href='https://github.com/dhoffman03/mini-project-1.git' target='_blank' rel='noreferrer'>Github Repo< FiGithub /></a>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://dhoffman03.github.io/Password-Generator/' target='_blank' rel='noreferrer'>
                        <img src={PasswordGenerator} className='card-img-top' alt='Password Generator application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>Password Generator</h5>
                        <a href='https://github.com/dhoffman03/Password-Generator.git' target='_blank' rel='noreferrer'>Github Repo< FiGithub /></a>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://notes-express-11.herokuapp.com/' target='_blank' rel='noreferrer'>
                        <img src={NotesExpress} className='card-img-top' alt='Note taking application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>Notes Taker</h5>
                        <a href='https://github.com/dhoffman03/Note-Taker.git' target='_blank' rel='noreferrer'>Github Repo< FiGithub /></a>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='card h-100 project'>
                    <a href='https://dhoffman03.github.io/Weather-Dashboard/' target='_blank' rel='noreferrer'>
                        <img src={WeatherDashboard} className='card-img-top' alt='Weather Dashboard application' />
                    </a>
                    <div className='card-body details text-center'>
                        <h5 className='card-title'>Weather Dashboard</h5>
                        <a href='https://github.com/dhoffman03/Weather-Dashboard.git' target='_blank' rel='noreferrer'>Github Repo< FiGithub /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;
