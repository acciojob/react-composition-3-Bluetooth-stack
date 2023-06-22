import React, { useState } from "react";

const Tooltip = ({ text }) => {
    let [show, setShow] = useState(false)
    let [showChild, setShowChild] = useState(false)
    return (
        <div >
            {/* {children} */}
            <h2 className="tooltip" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                Hover over me
                {
                    show &&
                    <div className="tooltiptext">This is a tooltip</div>
                }
            </h2>

            <p className="tooltip" onMouseEnter={() => { setShowChild(true) }} onMouseLeave={() => { setShowChild(false) }}>
                Hover over me to see another tooltip
                {
                    showChild &&
                    <div className="tooltiptext">This is another tooltip</div>
                }
            </p>
        </div>
    )
}

export default Tooltip;