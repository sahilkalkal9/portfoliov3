import "../../App.scss"
import about from "./about.png"
import pro from "./pro.png"
import blog from "./blog.png"
import ch from "./ch.png"
import chw from "./chw.png"
import userw from "./userw.png"
import prow from "./prow.png"
import blogw from "./blogw.png"
import { Link, useLocation } from "react-router-dom"
import homee from "./home.png"
import homew from "./homew.png"
import nm from "./nm.png"
import nmw from "./nmw.png"

function Nav({ mode, setMode }) {


    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const handleToggle = () => {
        var t = localStorage.getItem("theme")
        if (t == "dark") {

            localStorage.setItem("theme", "light")
            setMode("light")
        }
        else if (t == "light") {

            localStorage.setItem("theme", "dark")
            setMode("dark")
        }
        else {
            localStorage.setItem("theme", "dark")
            setMode("dark")
        }
    };



    // console.log(mode)




    return (
        <div className="Nav">
            <div className={mode == "dark" ? "nav-box nav-box-dark" : "nav-box"}>
                <div className="menu-box">
                    <Link to='/' className="menu-home">
                        <div className={isActive("/") || isActive("/") ? "menu active-menu" : (mode == "dark" ? "menu menu-dark" : "menu")}>
                            <img className={isActive("/") || isActive("/") ? "menu-img active" : "menu-img"} src={isActive("/") || isActive("/") ? homew : (mode == "dark" ? homew : homee)} />
                            <p className={isActive("/") || isActive("/") ? "menu-text menu-text-dark active-menu-text menu-text-dark" : (mode == "dark" ? "menu-text menu-text-dark" : "menu-text")}>Home</p>
                        </div>
                    </Link>
                    <Link to='/about'>
                        <div className={isActive("/about") || (isActive("/") && window.innerWidth > 1000) ? "menu active-menu" : (mode == "dark" ? "menu menu-dark" : "menu")}>
                            <img className={isActive("/about") || (isActive("/") && window.innerWidth > 1000) ? "menu-img active" : "menu-img"} src={isActive("/about") || (isActive("/") && window.innerWidth > 1000) ? userw : (mode == "dark" ? userw : about)} />
                            <p className={isActive("/about") || (isActive("/") && window.innerWidth > 1000) ? "menu-text menu-text-dark active-menu-text menu-text-dark" : (mode == "dark" ? "menu-text menu-text-dark" : "menu-text")}>About</p>
                        </div>
                    </Link>


                    <Link to='/projects'>
                        <div className={isActive("/projects") ? "menu active-menu" : (mode == "dark" ? "menu menu-dark" : "menu")}>
                            <img className={isActive("/projects") ? "menu-img active" : "menu-img"} src={isActive("/projects") ? prow : (mode == "dark" ? prow : pro)} />
                            <p className={isActive("/projects") ? "menu-text menu-text-dark active-menu-text menu-text-dark" : (mode == "dark" ? "menu-text menu-text-dark" : "menu-text")}>Projects</p>
                        </div>
                    </Link>

                    {/* <Link to='/blogs'>
                        <div className={isActive("/blogs") ? "menu active-menu" : "menu"}>
                            <img className={isActive("/blogs") ? "menu-img active" : "menu-img"} src={isActive("/blogs") ? blogw : blog} />
                            <p className={isActive("/blogs") ? "menu-text menu-text-dark active-menu-text menu-text-dark" : (mode == "dark" ? "menu-text menu-text-dark" : "menu-text")}>Blogs</p>
                        </div>
                    </Link> */}

                    <Link to='/contact'>
                        <div className={isActive("/contact") ? "menu active-menu" : (mode == "dark" ? "menu menu-dark" : "menu")}>
                            <img className={isActive("/contact") ? "menu-img active" : "menu-img"} src={isActive("/contact") ? chw : (mode == "dark" ? chw : ch)} />
                            <p className={isActive("/contact") ? "menu-text menu-text-dark active-menu-text menu-text-dark" : (mode == "dark" ? "menu-text menu-text-dark" : "menu-text")}>Contact</p>
                        </div>
                    </Link>


                    <div onClick={handleToggle} className={mode == "dark" ? "menu active-menu" : (mode == "dark" ? "menu menu-dark" : "menu")}>
                        <img className={mode == "dark" ? "menu-img active" : "menu-img"} src={(mode == "dark" ? nmw : nm)} />
                        <p className={mode == "dark" ? "menu-text menu-text-dark active-menu-text menu-text-dark" : (mode == "dark" ? "menu-text menu-text-dark" : "menu-text")}>Dark</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Nav;