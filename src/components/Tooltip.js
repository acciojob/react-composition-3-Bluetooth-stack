import React, {useState} from "react";

const Tooltip =  ({text, children})=>{
    let [show, setShow] = useState(false)
    return(
        <div onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
            {children}
            {
                show && 
                <div className="tooltiptext">{text}</div>
            }
        </div>
    )
}

export default Tooltip;