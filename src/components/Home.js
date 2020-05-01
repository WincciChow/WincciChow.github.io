import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import crepeupImg from "../assets/crepeup-img.png";
import weatherImg from "../assets/weather_img.png";
import modelImg from "../assets/bewincci_img.png";
import chatImg from "../assets/vuechat_img.png";

export default function Home(props) {
    const pathname = props.location.pathname;
    return (
        <div className="home u-margin-top-arrow">
            <Header pathname={pathname} />
            <div className="home__welcome u-padding-left-medium">
                <span className="home__welcome--text home__welcome--text--1 primary-stroke">
                   I am a proud &nbsp;
                    <span className="home__welcome--text home__welcome--text--2 secondary-stroke">
                        UI Engineer
                    </span>
                    .
                </span>
            </div>
            <div className="home__arrow u-margin-top-large">&darr;</div>
            <div className="home__projects u-margin-top-medium u-margin-bottom-medium">
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/crepe-up">
                                    <img
                                        className="square__img"
                                        alt="project crepe"
                                        src={crepeupImg}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="weather-react">
                                    <img
                                        className="square__img"
                                        src={weatherImg}
                                        alt="weatherReact"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/model">
                                    <img
                                        className="square__img"
                                        src={modelImg}
                                        alt="model"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/vue-chat">
                                    <img
                                        className="square__img"
                                        src={chatImg}
                                        alt="vuechat"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="home__footnote">
                <div className="footnote">&#9400; 2020 Wincci Zhou</div>
            </div>
        </div>
    );
}
