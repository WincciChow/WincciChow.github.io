import React from "react";
import Header from "./Header";

import crepe_1 from "../assets/Black-s.png";
import styleguild from "../assets/styleguild-crepe.png";
import crepe1 from "../assets/app1.png";
import crepe2 from "../assets/app2.png";
import crepe3 from "../assets/app3.png";
import crepe4 from "../assets/app4.png";
import crepe5 from "../assets/app5.png";
import crepe6 from "../assets/app6.png";
import crepe7 from "../assets/app7.png";
import crepe8 from "../assets/app8.png";

export default function CrepeUp(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1 className="project__heading--title heading-primary secondary-stroke">
                    Project CrepeMeUp
                </h1>
                <h3 className="project__heading--description heading-secondary secondary-fill">
                    UI Designer
                </h3>
            </div>
            <div className="project__intro">
                <img
                    className="project__image u-margin-bottom-medium"
                    src={crepe_1}
                    alt="landing page"
                />
            </div>
            <div className="project__description">
                <p
                    className="tagline secondary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Final project of Brianstation UI Design Certificate Program
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
                    Crepe Me Up is an mobile app UI design work for online ordering
                    of crepe cakes. I adopted macaron color scheme since it is a symbol
                    of sweetness.The color complements each other magnificently. I also
                    did POP testing and wireframe design for this project.
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    I used Sketch for the Uer Interface Design part and created interactive mockup
                    by InVision. You can check up the prototyping from{" "}
                    <a
                        href="https://invis.io/KRV5A6MB45F"
                        target="_blank"
                        className="link"
                    >
                        this link
                    </a>{" "}
                    on InVision. UI Design and Style Guildlines are showcaseing as followings.
                </p>
            </div>
            <div className="project__video">
            <img
                className="project__image u-margin-bottom-medium"
                src={styleguild}
                alt="user details page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            </div>
            <img
                className="app__image"
                src={crepe1}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe2}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe3}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe4}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe5}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe6}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe7}
                alt="landing page"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="app__image"
                src={crepe8}
                alt="landing page"
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
