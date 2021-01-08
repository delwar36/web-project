import React, { useState, useRef } from "react";
import DropDownIcon from "./DropDownIcon";

import "./Dropdown.css";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "activeAccordion" : "");
        setHeightState(
            setActive === "activeAccordion" ? "0px" : `${ content.current.scrollHeight }px`
        );
        setRotateState(
            setActive === "activeAccordion" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
        <div className="accordion__section">

            <div className={`accordionMain ${ setActive }`} onClick={toggleAccordion}>
                <h3 className="accordion__title">{props.title}</h3>
                <DropDownIcon className={`${ setRotate }`} width={10} fill={"#1DBF73"} />
            </div>

            <div
                ref={content}
                style={{ maxHeight: `${ setHeight }` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                />  {props.content}
            </div>
        </div>

    );
}

export default Accordion;
