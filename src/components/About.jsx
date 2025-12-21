import '../styles/About.css'

function About(){
    return(
        <div id='about-page' className='about'>
             <div className='auto-show'>
                <div className='about-title'>
                    <h1>/ about me</h1>
                </div>
                <div className='about-content'>
                    <div className='about-content-text'>
                        <div className='content-text-intro'>
                            <p>I am currently a
                                <b> ML/AI Engineer </b>
                                at
                                <a href="https://www.gamania.com/en" alt="Gamania"> Gamania</a>
                                , working in the Big Data and Application Department under Gamania Game.
                            </p>
                        </div>
                        <div className='content-text-skill'>
                            <p>Here are some technologies I have been working with:</p>
                            <div className='ct-text-skill-list'>
                                <ul>
                                    <li>Python</li>
                                    <li>JavaScript ES6+</li>
                                    <li>C#</li>
                                </ul>
                                <ul>
                                    <li>Machine / Deep Learning</li>
                                    <li>Generative AI</li>
                                    <li>ASP .NET MCP</li>
                                </ul>
                            </div>
                        </div>
                        <div className='content-text-add'>
                            <p>Outside of my professional focus, I enjoy dedicating my time to building interesting and high-value personal projects.</p>
                        </div>
                    </div>
                    <div className='about-content-image'>
                        <div className='content-image-pfp'>
                            <img src="https://camo.githubusercontent.com/7ebcb73f313ec96ab95b8c5514e50b64896a776da8fb6a018b4a7a199a1907ea/68747470733a2f2f692e70696e696d672e636f6d2f353634782f38302f63312f61632f38306331616337633738393531316439323865373361333662653865643537382e6a7067" alt="" />
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default About;