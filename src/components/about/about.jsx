import "../../App.scss"
import code from "./web.png"
import ui from "./ui.png"
import idea from "./idea.png"
import animal from "./rescue.png"
import html from "./html.png"
import css from "./css.png"
import js from "./js.png"
import node from "./node-js.png"
import sql from "./sql-server.png"
import react from "./react.png"
import fireb from "./firebase.png"

function About({ mode }) {

    console.log(mode)
    return (
        <div className={mode == "dark" ? "About About-dark" : "About"}>
            <div className="about-box">
                <p className={mode == "dark" ? "head head-dark" : "head"}>About</p>
                <p className={mode == "dark" ? "about-text about-text-dark" : "about-text"}>
                    Hello, I am Sahil Kalkal from India. At present, I live in New Delhi, india. I am a web developer, with a experience of 4 years in the field of web development. I am very much passionate towards my work and always open to gain new skills. Currently I am pursuing my bachelor's degree in the field of computer science engineering from Maharshi Dayanand University, Rohtak, Haryana, India.
                    <br />
                    I started web development in my 11th standard. I have built so many websites for different purposes and I have good knowledge in the field of web development. I use react.js for web development, react.js is a framework of JavaScript used for web development. I also have knowledge in the field of back end web development, I use only firebase for the back end and looking forward to expanding my knowledge in the field of web development.
                </p>
                <div className="sub-box">
                    <p className={mode == "dark" ? "sub-head sub-head-dark" : "sub-head"}>What I do ?</p>
                    <div className="whatIdoBoxes">
                        <div className={mode == "dark" ? "whatIdoBox webd webd-dark" : "whatIdoBox webd"}>
                            <img className="widImg" src={code} />
                            <div className="widdets">
                                <p className={mode == "dark" ? "widhead widhead-dark" : "widhead"}>Web Development</p>
                                <p className={mode == "dark" ? "widtext widtext-dark" : "widtext"}>
                                    With ReactJS, I craft dynamic and intuitive user interfaces that elevate user experiences. Leveraging its modular approach, I ensure scalability and maintainability in every project.</p>
                            </div>
                        </div>

                        <div className={mode == "dark" ? "whatIdoBox ui ui-dark" : "whatIdoBox ui"}>
                            <img className="widImg" src={ui} />
                            <div className="widdets">
                                <p className={mode == "dark" ? "widhead widhead-dark" : "widhead"}>UI/UX Designing</p>
                                <p className={mode == "dark" ? "widtext widtext-dark" : "widtext"}>In UI/UX design, I blend creativity with empathy to craft visually stunning and user-centric experiences. Each pixel I place is meticulously crafted to evoke emotion. </p>
                            </div>
                        </div>

                        <div className={mode == "dark" ? "whatIdoBox idea idea-dark" : "whatIdoBox idea"}>
                            <img className="widImg" src={idea} />
                            <div className="widdets">
                                <p className={mode == "dark" ? "widhead widhead-dark" : "widhead"}>Problem Solving</p>
                                <p className={mode == "dark" ? "widtext widtext-dark" : "widtext"}>Through creativity and analysis, I tackle obstacles as opportunities, unraveling complexities to forge innovative solutions that drive progress and surpass expectations.
                                </p>
                            </div>
                        </div>

                        <div className={mode == "dark" ? "whatIdoBox rescue rescue-dark" : "whatIdoBox rescue"}>
                            <img className="widImg" src={animal} />
                            <div className="widdets">
                                <p className={mode == "dark" ? "widhead widhead-dark" : "widhead"}>Animal Rescue</p>
                                <p className={mode == "dark" ? "widtext widtext-dark" : "widtext"}>I provide injured animals with vital care and support, offering them a second chance at life by ensuring they receive the medical attention and love they need to recover. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sub-box">
                    <p className={mode == "dark" ? "sub-head sub-head-dark" : "sub-head"}>Skills</p>
                    <div className="skills-box">
                        <div className={mode == "dark" ? "skill foup skill-dark" : "skill foup"}>
                            <img className="skillImg" src={html} />
                            <p className={mode == "dark" ? "skillName skillName-dark" : "skillName"}>HTML</p>
                        </div>
                        <div className={mode == "dark" ? "skill foup skill-dark" : "skill foup"}>
                            <img className="skillImg" src={css} />
                            <p className={mode == "dark" ? "skillName skillName-dark" : "skillName"}>CSS</p>
                        </div>
                        <div className={mode == "dark" ? "skill foup skill-dark" : "skill foup"}>
                            <img className="skillImg" src={js} />
                            <p className={mode == "dark" ? "skillName skillName-dark" : "skillName"}>JS</p>
                        </div>

                        <div className={mode == "dark" ? "skill foup skill-dark" : "skill foup"}>
                            <img className="skillImg" src={react} />
                            <p className={mode == "dark" ? "skillName skillName-dark" : "skillName"}>React</p>
                        </div>
                        <div className={mode == "dark" ? "skill foup skill-dark" : "skill foup"}>
                            <img className="skillImg" src={node} />
                            <p className={mode == "dark" ? "skillName skillName-dark" : "skillName"}>Node JS</p>
                        </div>
                        <div className={mode == "dark" ? "skill foup skill-dark" : "skill foup"}>
                            <img className="skillImg" src={fireb} />
                            <p className={mode == "dark" ? "skillName skillName-dark" : "skillName"}>Firebase</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About