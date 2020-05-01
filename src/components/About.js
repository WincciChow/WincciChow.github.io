import React from "react";
import Stack from "./Stack";
import Header from "./Header";

export default function about(props) {
    const pathname = props.location.pathname;
    return (
        <div className="about u-margin-top-large">
            <Header pathname={pathname} />
            <Stack />
            <div className="about__introduction">
                <div className="row">
                    <div className="col-1-of-4">
                        <div
                            className="about__introduction--left"
                            data-aos="fade"
                            data-aos-delay="0"
                            data-aos-duration="1300"
                            data-aos-easing="ease-out"
                        >
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/winccizhou/"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com//WincciChow"
                                        target="_blank"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:wingsee-chow@hotmail.com">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3-of-4">
                        <div
                            className="about__introduction--right"
                            data-aos="fade"
                            data-aos-delay="0"
                            data-aos-duration="1300"
                            data-aos-easing="ease-out"
                            data-aos-anchor-placement=".about__introduction--left"
                        >
                            <p>
                                My name is Wincci Zhou. <br></br>
                                I graduated from University of Waterloo Engineering,
                                with an interest in Machine Learning and UI development.
                                My dream career is jobs that combines technology and art, which are both what I am passionate about.
                            </p>
                            <p className="footnote">&#9400; 2020 Wincci Zhou</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
