import React, {useState} from "react";

const Tooltip =  ({text, children})=>{
    let [show, setShow] = useState(false)
    return(
        <div onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
            {
                show && 
                <div className="tooltiptext">{text}</div>
            }
            {children}
        </div>
    )
}

export default Tooltip;