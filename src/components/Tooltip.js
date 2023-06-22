import React, { useState } from "react";

const Tooltip = () => {
    let [show, setShow] = useState(false)
    let [showChild, setShowChild] = useState(false)
    return (
        <div >
            <h2 className="tooltip" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                Hover over me
                <div>
                    {
                        show &&
                        <h2 className="tooltiptext">
                            This is a tooltip
                        </h2>
                    }
                </div>
            </h2>

            <p className="tooltip" onMouseEnter={() => { setShowChild(true) }} onMouseLeave={() => { setShowChild(false) }}>
                Hover over me to see another tooltip
                    <div>
                    {
                        showChild &&
                        <p className="tooltiptext">
                            This is another tooltip
                        </p>
                    }
                </div>
            </p>
        </div>
    )
}

export default Tooltip;