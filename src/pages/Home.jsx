import { Link } from "react-router-dom";
// import { UilWhatsapp } from '@iconscout/react-unicons'

export function Home() {
    return (
        <section className="home" id="home">
            <div className="home_container container grid">
                <div className="home-profile">
                    <div className="home_data">
                        <h1 className="home_title">Hi, I'm Jotham Ntekim</h1>
                        <h3 className="home_subtitle">Backend Engineer</h3>
                        <hr className="underline"/>
                        <p className="home_description">
                            I've always been interested in improving the way we live, 
                            contributing to society in my own little way. 
                            <br />
                            I'd tell you a bit more about my background and 
                            how my childhood shaped my path into becoming a software engineer later.
                            For now, let's skip to 2024.
                        </p>
                        <Link to="/about" className="button">
                                <i className="uil uil-user button_icon"></i>
                                More About Me
                        </Link>
                    </div>

                    <img src="../../assets/images/profile-3.jpeg" alt="Background Image" className="home_bg_img" />
                </div>

                

                <div className="my_info">
                    <div className="info_item">
                        <i className="uil uil-whatsapp info_icon"></i>

                        <div>
                            <h3 className="info_title">WhatsApp</h3>
                            <span className="info_subtitle">234 815 2743 652</span>
                        </div>
                    </div>
                    <div className="info_item">
                        <i className="uil uil-envelope-edit info_icon"></i>

                        <div>
                            <h3 className="info_title">Email</h3>
                            <span className="info_subtitle">jothamntekim@gmail.com</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}