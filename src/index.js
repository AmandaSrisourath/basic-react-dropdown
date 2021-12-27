import React from 'react';
import { render } from "react-dom";
import { Dropdown } from "./lib/dropdown";

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <Dropdown />
    </div>
);

render(<App />, document.getElementById("root"));