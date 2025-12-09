import '../styles/Home.css'

function Home(){
    return (
        <div className="home">
            <div className="home-image">
                <img src="https://picsum.photos/200"></img>
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