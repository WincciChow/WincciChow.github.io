import React from "react";

export default function Stack(props) {
    return (
        <div className="stack">
            <span className="stack__item stack__item--1 secondary-fill">
                JavaScript
            </span>
            <span className="stack__item stack__item--2 primary-fill">
                React
            </span>
            <span className="stack__item stack__item--3 primary-stroke">
                REDUX
            </span>
            <span className="stack__item stack__item--4 secondary-fill">
                Node<span className="secondary-stroke">JS</span>
            </span>
            <span className="stack__item stack__item--9 primary-fill">
                <span className="secondary-stroke"> Object- Oriented</span> Programming
            </span>
            <span className="stack__item stack__item--5 primary-fill">
                SCSS <span className="primary-stroke">CSS</span>{" "}
               Animation
            </span>
            <span className="stack__item stack__item--6 secondary-fill">
                Sketch
            </span>
            <span className="stack__item stack__item--7 primary-stroke">
                InVision
            </span>
            <span className="stack__item stack__item--8 secondary-fill">
                Vue<span className="secondary-stroke">JS</span>
            </span>
            <span className="stack__item stack__item--10 primary-fill">
                PHP<span className="primary-stroke">SQL</span>
            </span>
            <span className="stack__item stack__item--11 secondary-fill">
                UI Design
            </span>
            <span className="stack__item stack__item--12 primary-stroke">
                BOOTSTRAP
            </span>
        </div>
    );
}
