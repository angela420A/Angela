import '../styles/Home.css'

function Home(){
    return (
        <div id='home-page' className="home">
            <div className="home-image">
                <div className='home-image-frame'>
                    <img src="https://camo.githubusercontent.com/7ebcb73f313ec96ab95b8c5514e50b64896a776da8fb6a018b4a7a199a1907ea/68747470733a2f2f692e70696e696d672e636f6d2f353634782f38302f63312f61632f38306331616337633738393531316439323865373361333662653865643537382e6a7067"></img>
                </div>
            </div>
            <div className="home-content">
                <div className="hm-content-title">
                    <h1>hi! I'm <span>Angela</span></h1>
                </div>
                <div className="hm-content-text">
                    <p>I'm Angela, an ML/AI Engineer based in Taipei City.</p>
                    <p> I am fascinated by the challenge of translating complex models into robust, user-facing products.</p>
                </div>
                <div className="hm-content-button">
                    {/* mailto:angelaguo309@gmail.com */}
                    <a href="#"> 
                        <span>Hi there!</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;