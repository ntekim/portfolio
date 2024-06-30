import { Route, Routes } from 'react-router-dom'
import './main.css'
import { Home } from '../../pages/home'
import { About } from '../../pages/About'
import { Contact } from '../../pages/Contact'


export function MainLayout() {
    return (
        <main className='main' id='main'>
            <div className="social">
                    <span className="social-follow">Follow Me</span>
                    <div className="social-links">
                        <a href="https://twitter.com/JothamNtekim1" target="_blank" className="social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/ntekim" target="_blank" className="social-link">
                            <i className="uil uil-github"></i>
                        </a>
                    </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    )
}