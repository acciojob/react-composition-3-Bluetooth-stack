
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1 className="tootip">
          <Tooltip text='This is a tooltip'>
            Hover over me
          </Tooltip>
        </h1>
        <p className="tootip">
          <Tooltip text='This is another tooltip'>
            Hover over me to see another tooltip
          </Tooltip>
        </p>
    </div>
  )
}

export default App
