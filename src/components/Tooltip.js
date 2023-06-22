import React, { useState } from "react";

const Tooltip = () => {
    let [show, setShow] = useState(false)
    let [showChild, setShowChild] = useState(false)
    return (
        <div >
            <h2 className="tooltip" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                Hover over me
                {
                    show &&
                    <div>This is a tooltip</div>
                }
            </h2>

            <p className="tooltip" onMouseEnter={() => { setShowChild(true) }} onMouseLeave={() => { setShowChild(false) }}>
                Hover over me to see another tooltip
                {
                    showChild &&
                    <div>This is another tooltip</div>
                }
            </p>
        </div>
    )
}

export default Tooltip;