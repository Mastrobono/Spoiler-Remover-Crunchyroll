import React from "react";
import {render} from "react-dom"

const Popup = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    )
}

render(<Popup/>, document.getElementById("react-target"));