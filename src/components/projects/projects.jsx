import "../../App.scss"
import node from "./node-js.png"
import projects from "./project.json"

function Projects({ mode }) {
    console.log(mode)
    return (
        <div className={mode == "dark" ? "About About-dark" : "About"}>
            <div className={mode == "dark" ? "about-box about-box-dark" : "about-box"}>
                <p className={mode == "dark" ? "head head-dark" : "head"}>Projects</p>

                <div className="projects">
                    {
                        projects.map((p) => (
                            <div className={mode == "dark" ? "project foup project-dark" : "project foup"}>
                                <div className="pro-head">
                                    <p className={mode == "dark" ? "pro-year pro-year-dark" : "pro-year"}>{p.year}</p>
                                    {/* <div className="preview-box">
                                        <img className="pre-img" src={require(`./${p.src}`)} />
                                    </div> */}
                                    <div className="img-box">
                                        {/* <img className="proImg" src={require(`./${p.src}`)} /> */}
                                        <div className="pro-det-box">
                                            <p className={mode == "dark" ? "pro-name pro-name-dark" : "pro-name"}>{p.name}</p>
                                            {/* <p className="pro-dets-text">{p.tagline}</p> */}
                                        </div>
                                    </div>
                                    <p className={mode == "dark" ? "pro-text pro-text-dark" : "pro-text"}>
                                        {p.desc}
                                    </p>
                                </div>
                                <div className="pro-dets">

                                    <div className="pro-buttons">
                                        <a className="proButton fouprm" href={p.code} target="blank">
                                            <p className={mode == "dark" ? "button-text button-text-dark" : "button-text"} >Repo</p>
                                        </a>
                                        <a className={mode == "dark" ? "proButton foupvt foupvt-dark" : "proButton foupvt"} href={p.demo} target="blank">
                                            <p >Visit</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects