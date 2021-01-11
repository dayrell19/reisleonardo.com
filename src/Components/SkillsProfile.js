import React from 'react';
import './SkillsProfile.css';


function SkillsProfile() {
    return (
        <div className='skills-container'>
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
        </div>
    )
}

export default SkillsProfile
