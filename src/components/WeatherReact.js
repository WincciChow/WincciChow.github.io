import React from "react";
import Header from "./Header";

import video_mp4 from "../assets/weather.mp4";


export default function WeatherReact(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1 className="project__heading--title heading-primary primary-stroke">
                    Weather Forecast
                </h1>
                <h3 className="project__heading--description heading-secondary primary-fill">
                    Responsive website(ongoing project)<br></br>React Redux and Boostrap
                </h3>
            </div>
            <div className="project__video">
                <video
                    className="project__video--content"
                    loop
                    autoPlay
                    muted
                    preload="metadata"
                >
                    <source src={video_mp4} type="video/mp4" />
                    Your browser is not supported!
                </video>
            </div>
            <div className="project__description">
                <p
                    className="tagline primary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Weather forecast by open weather api
                </p>
                <div
                    className="divider primary-background u-margin-bottom-small"
                    data-aos="extendRight"
                    data-aos-delay="800"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out-quart"
                ></div>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    Using React-Redux for a weather forecast web application
                    maybe a bit overkilled. But I just use this classic react project
                    to demonstrates my knowledge of React-Redux and responsive
                    design. This project is still ongoing. I am working on how to use canvas
                    in React. So that I can make the background change according to different weather conditions!
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    You may also head to the GitHub{" "}
                    <a
                        href="https://github.com/WincciChow/react-redux-weather"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>{" "}
                    to learn more about this project.
                </p>
            </div>

            <div className="footnote">&#9400; 2020 Wincci Zhou</div>
        </div>
    );
}
