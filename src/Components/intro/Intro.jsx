import Me from '../../Assets/img/perfil.png'
import "./Intro.css"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h2 className="i-name">Álisson</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UX / UI Design</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a web developer with a passion for design and technology. I have a strong background in PHP, HTML, CSS and Javascript.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;