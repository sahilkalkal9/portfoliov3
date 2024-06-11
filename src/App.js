import logo from './logo.svg';
import './App.scss';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Contact from "./components/contact/contact"
import Projects from "./components/projects/projects"
import Blogs from "./components/blogs/blogs"
import { useEffect, useState } from 'react';

function App() {


  const [mode, setMode] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    var t = localStorage.getItem("theme")
    if (t == "light") {
      setMode("light")
    }
    else if (t == "dark") {
      setMode("dark")
    }
    else {
      setMode("light")
      localStorage.setItem("theme", "light")
    }
  })



  return (
    <>
      <div className={mode == "dark" ? "AppBigScreen AppBigScreenDark" : "AppBigScreen"}>

        <Home mode={mode} setMode={setMode} />
        <div className={mode == "dark" ? 'second second-dark' : 'second'}>
          <Routes>
            <Route path='/' element={<About mode={mode} />} />
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/projects' element={<Projects mode={mode} />} />
            <Route path='/contact' element={<Contact mode={mode} />} />
            <Route path='/blogs' element={<Blogs mode={mode} />} />
          </Routes>
        </div>
        <div className='third'>
          <Nav mode={mode} setMode={setMode} />
        </div>

      </div>

      <div className={mode == "dark" ? "AppSmallScreen AppSmallScreen-dark" : "AppSmallScreen"}>

        <div className="third">
          <Nav mode={mode} setMode={setMode} />
        </div>
        <div className={mode == "dark" ? 'secondss secondss-dark' : 'secondss'}>
          <Routes>
            <Route path='/' element={<Home mode={mode} />} />
          </Routes>
        </div>
        <div className={mode == "dark" ? 'seconds seconds-dark' : 'seconds'}>
          <Routes>

            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/projects' element={<Projects mode={mode} />} />
            <Route path='/contact' element={<Contact mode={mode} />} />
            <Route path='/blogs' element={<Blogs mode={mode} />} />
          </Routes>
        </div>


      </div>
    </>
  );
}

export default App;
