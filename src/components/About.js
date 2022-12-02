import React from 'react';
import avatar from '../assets/images/avatar.png'

function About() {
    return (
        <section>
            <h2 className='title text-center'>About Me</h2>
            <div className='d-flex align-items-center justify-content-evenly about'>
                <div className='about-profile text-center'>
                    <img src={avatar} alt='Dymond Hoffman' />
                </div>
                <div className='bio'>
                    <p>
                        Hey there! My name is Dymond. I am currently a student of UofM Coding Bootcamp. I am still new to coding and have just started my web development journey. I am eager to expand my coding skills and become a professional web developer. When I'm not coding, you can find me painting, working with clay, or napping with my cats.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About;