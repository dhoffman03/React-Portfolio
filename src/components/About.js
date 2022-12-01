import React from "react";
import avatar from "../assets/avatar.png"

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <div>
                <div>
                    <img src={avatar} alt="Dymond Hoffman" />
                </div>
                <p>
                    Hey there! My name is Dymond. I am currently a student of UofM Coding Bootcamp. I am still new to coding and have just started my web development journey. I am eager to expand my coding skills and become a professional web developer.When I'm not coding, you can find me painting, working with clay, or napping with my cats.
                </p>
            </div>
        </section>
    )
}

export default About;