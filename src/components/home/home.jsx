import "../../App.scss"
import fb from "./fb.png"
import gmail from "./mail.png"
import twitter from "./tw.png"
import github from "./gw.png"
import phone from "./phone.png"
import locationn from "./location.png"
import gmaill from "./gmail.png"
import birthday from "./cake.png"
import clock from "./clock.png"
import linkedin from "./lw.png"
import d from "./download.png"
import MyResume from "./resume.pdf"
import instagram from "./iw.png"
import inl from "./instagram.png"
import twl from "./twitter.png"
import gl from "./github.png"
import ll from "./linkedin.png"

function Home({ mode, setMode }) {
    return (
        <div className="Home">
            <div className={mode == "dark" ? "home-box home-box-dark" : "home-box"} >
                <p className={mode == "dark" ? "name name-dark" : "name"}>
                    Sahil Kalkal
                </p>
                <p className={mode == "dark" ? "role role-dark" : "role"}>
                    Web Developer
                </p>
                <div className="socials">
                    <a href="https://linkedin.com/in/sahil810" target="blank" >
                        <div className={mode == "dark" ? "social-box social-box-dark" : "social-box"}>
                            <img className="social" src={mode == "dark" ? linkedin : ll} />
                        </div>
                    </a>
                    {/* <div className={mode == "dark" ? "social-box social-box-dark" : "social-box"}>
                        <img className="social" src={gmail} />
                    </div> */}
                    <a href="https://github.com/sahilkalkal9" target="blank" >
                        <div className={mode == "dark" ? "social-box social-box-dark" : "social-box"}>
                            <img className="social" src={mode == "dark" ? github : gl} />
                        </div>
                    </a>

                    <a href="https://twitter.com/sahilkalkal_" target="blank" >
                        <div className={mode == "dark" ? "social-box social-box-dark" : "social-box"}>
                            <img className="social" src={mode == "dark" ? twitter : twl} />
                        </div>
                    </a>
                    <a href="https://instagram.com/sahil.kalkal_" target="blank" >
                        <div className={mode == "dark" ? "social-box social-box-dark" : "social-box"}>
                            <img className="social" src={mode == "dark" ? instagram : inl} />
                        </div>
                    </a>
                </div>
                <div className={mode == "dark" ? "dets dets-dark" : "dets"}>
                    <div className="det det-dark">
                        <img className={mode == "dark" ? "det-img det-img-dark" : "det-img"} src={phone} />
                        <div className="det-box">
                            <p className={mode == "dark" ? "det-head det-head-dark" : "det-head"}>
                                Phone
                            </p>
                            <p className={mode == "dark" ? "det-text det-text-dark" : "det-text"}>+91 7982294822</p>
                        </div>
                    </div>
                    <div className="det">
                        <img className={mode == "dark" ? "det-img det-img-dark" : "det-img"} src={gmaill} />
                        <div className="det-box">
                            <p className={mode == "dark" ? "det-head det-head-dark" : "det-head"}>
                                Email
                            </p>
                            <p className={mode == "dark" ? "det-text det-text-dark" : "det-text"}>sahilkalkal108@gmail.com</p>
                        </div>
                    </div>
                    <div className="det">
                        <img className={mode == "dark" ? "det-img det-img-dark" : "det-img"} src={locationn} />
                        <div className="det-box">
                            <p className={mode == "dark" ? "det-head det-head-dark" : "det-head"}>
                                Location
                            </p>
                            <p className={mode == "dark" ? "det-text det-text-dark" : "det-text"}>Delhi, India</p>
                        </div>
                    </div>
                    {/* <div className="det">
                        <img className={mode == "dark" ? "det-img det-img-dark" : "det-img"} src={birthday} />
                        <div className="det-box">
                            <p className="det-head">
                                Birthday
                            </p>
                            <p className="det-text">04 May 2003</p>
                        </div>
                    </div> */}
                    <div className="det">
                        <img className="det-img det-img-dark " src={clock} />
                        <div className="det-box">
                            <p className={mode == "dark" ? "det-head det-head-dark" : "det-head"}>
                                Timezone
                            </p>
                            <p className={mode == "dark" ? "det-text det-text-dark" : "det-text"}>UTC+5:30</p>
                        </div>
                    </div>
                </div>
                <div className="download">
                    <a href={MyResume}
                        download="Sahil Resume"
                        target="_blank"
                        rel="noreferrer"
                        className="cv">
                        Download CV
                    </a>
                    <img className="downImg" src={d} />
                </div>
            </div>
        </div>
    )
}

export default Home