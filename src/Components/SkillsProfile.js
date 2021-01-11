import React from 'react';
import './SkillsProfile.css';


function SkillsProfile() {
    return (
        <div className='skills-container'>

            <div class='skills-summary'>
                <p className="summary">
                    Almost all my skills were not taught to me in class. Most of them were self taught in order to apply new technologies to my projects and increase the possibilities of what I can do behind a keyboard.
                    Every single project I start is done with the purpose of improving my skills in order to become a better programmer and share this newborn passion with others.

                 </p>
            </div>

            <div className='skills-container-wrapper'>
                <div className='languages-skills'>
                    <h2>LANGUAGES</h2>
                    <p className='items'><i class="fab fa-cuttlefish" id='c'></i>C</p>
                    <p className='items'> <i className='fab fa-python' id='python'/>Python</p>
                    <p className='items'> <i className='fab fa-js' id='javascript' />JavaScript</p>
                </div>
                <div className='frontend-skills'>
                    <h2>FRONTEND SKILLS</h2>
                    <p className='items'><i className='fab fa-html5' id='html' />HTML</p>
                    <p className='items'><i className='fab fa-css3-alt' id='css' />CSS</p>
                    <p className='items'><i className='fab fa-react' id='react'/>ReactJS</p>
                    <p className='items'><i className='fab fa-react' id='reactnative' />React Native</p>
                </div>
                <div className='backend-skills'>
                    <h2>BACKEND SKILLS</h2>
                    <p className='items'><i className='fab fa-node' id='node' />Node.js</p>
                    <p className='items'><i className='fas fa-flask' id='flask'/>Flask</p>
                    <p className='items'><i className='fas fa-database' id='database'/>MySQL / PostgreSQL</p>
                    <p className='items'><i className='fab fa-aws' id='aws'/>AWS - CodePipeline, CodeDeploy, EC2/S3</p>
                </div>
                <div className='extra-skills'>
                <h2>EXTRA SKILLS</h2>
                <p className='items'> <i class="fas fa-angle-double-right" />Git</p>
                <p className='items'><i class="fas fa-angle-double-right" />Data Structures and Algorithms</p>
                <p className='items'><i class="fas fa-angle-double-right" />NPM and Yarn</p>
            </div>
            </div>


        </div>
    )
}

export default SkillsProfile
