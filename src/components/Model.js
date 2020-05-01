import React from "react";
import Header from "./Header";

import video_mp4 from "../assets/bewinccible.mp4";
import model_1 from "../assets/model1.png";
import model_2 from "../assets/model2.png";

export default function Model(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1
                    className="project__heading--title heading-primary secondary-stroke"
                    style={{ textTransform: "none" }}
                >
                    Be Winccible
                </h1>
                <h3 className="project__heading--description heading-secondary secondary-fill">
                    Online Model Porfolio<br></br>SCSS CSS Only
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
                    className="tagline secondary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Model online portfolio with creative navigation
                </p>
                <div
                    className="divider secondary-background u-margin-bottom-small"
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
                    Be winccible is an online model porfolio project. I am personally
                    a commercial model. So I am developing this porfolio for myself and
                    adapt to my name "Wincci". It has a very creative fold out navigation
                    along with the hamburger menu. Large type in web design is applied too.

                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    This project demonstrates my learning of SCSS
                    development. You
                    can learn more about my implementation by visiting the{" "}
                    <a
                        href="https://github.com/WincciChow/creative-model-portfolio"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>{" "}
                    on GitHub.
                </p>
            </div>
            <img
                className="project__image u-margin-bottom-medium"
                src={model_1}
                alt="header"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="project__image u-margin-bottom-medium"
                src={model_2}
                alt="tours section"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <div className="footnote">&#9400; 2020 Wincci Zhou</div>
        </div>
    );
}
