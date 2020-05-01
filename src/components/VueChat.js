import React from "react";
import Header from "./Header";


import chat_1 from "../assets/chat_1.png";
import chat_2 from "../assets/chat_2.png";

export default function VueChat(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1 className="project__heading--title heading-primary primary-stroke">
                    Vue Chat
                </h1>
                <h3 className="project__heading--description heading-secondary primary-fill">
                    Full-stack Chatroom<br></br>Vue Js Node Js and Socket.IO
                </h3>
            </div>
            <div className="project__video">
                <img
                    className="project__image u-margin-bottom-medium"
                    src={chat_1}
                    alt="home page"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor-placement="center-bottom"
                />
            </div>
            <div className="project__description">
                <p
                    className="tagline primary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Chatroom for multiple users
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
                    Vue chat is a web application for goup chat. It contains both client side and server side
                    parts. The frontend part used Vue Js, whole node js in the backend side.The feature of
                    communication from server to client is one of main factors in ensuring real-timeliness of
                    client application. This web application uses socket.io as client-server communication.
                    Socket.IO is JavaScript implementation to work with HTML 5 WebSockets.
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    This project began as a full stack development assignment to
                    practice on JavaScript for both client side and server side.

                    and this UI design of it is also by myself. You can learn more by heading to the GitHub{" "}
                    <a
                        href="https://github.com/WincciChow/chatroom-vue"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>
                    .
                </p>
            </div>

            <img
                className="project__image"
                src={chat_2}
                alt="basket page"
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
