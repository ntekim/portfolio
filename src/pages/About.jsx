import { Link } from "react-router-dom";

export function About() {
    return (
        <section className="about_content grid" id="about">
            <div className="about-profile">
                <div className="about_data">
                    <p className="about_description">
                        Rigt now, my interest has brought me into the HNG Internship Program.
                        <br />
                        HNG Internship Program is a fast paced program design to help 
                        Entry Level developers to upskill, and gain exposure to a how 
                        real-time work environment looks like.
                        <br />
                        <br />
                        While it's open to everyone, 
                        it's not the place for someone who just got started, 
                        and trying to navigate the tech space.
                    </p>

                    <a href="https://hng.tech/internship" target="_blank" className="button">More About HNG</a>
                    {/* <Link to="/contact" className="button">
                                <i className="uil uil-user button_icon"></i>
                                Contact
                    </Link> */}
                </div>
            </div>
        </section>
    )
}