import React from 'react';
import myResume from '../assets/files/Dymond_Hoffman_Resume.pdf'
import { FiDownloadCloud } from "react-icons/fi";

function Resume() {
    return (
        <div className='text-center'>
            <div class="card resume">
                <div class="card-body">
                    <h2 class="card-title title text-center">Developer Proficiencies</h2>
                    <div>
                        <div className='box'>
                            <p className='subtitle'>Front-end Proficiencies</p>
                            <ul>
                                <li className='list'>HTML5</li>
                                <li className='list'>CSS</li>
                                <li className='list'>JavaScript</li>
                                <li className='list'>React</li>
                                <li className='list'>APIs</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <p className='subtitle'>Back-end Proficiencies</p>
                            <ul>
                                <li className='list'>MySQL</li>
                                <li className='list'>Node.js</li>
                                <li className='list'>Express.js</li>
                                <li className='list'>MongoDB</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>

            <div class="card mb-3 resume">
                <div class="card-body download">
                        <a href={myResume} download>Download My Resume!<FiDownloadCloud /></a>
                </div>
            </div>
        </div>
    )
}

export default Resume;