import React from 'react';
import myResume from '../assets/files/Dymond_Hoffman_Resume.pdf'
import { FiDownloadCloud } from "react-icons/fi";

function Resume() {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Developer Proficiencies</h2>
                    <div>
                        <p>Front-end Proficiencies</p>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>APIs</li>
                        </ul>
                    </div>

                    <div>
                        <p>Back-end Proficiencies</p>
                        <ul>
                            <li>MySQL</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="card mb-3">
                <div class="card-body">
                    <h2 class="card-title">Resume</h2>
                    <div>
                        <a href={myResume} download><FiDownloadCloud /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;