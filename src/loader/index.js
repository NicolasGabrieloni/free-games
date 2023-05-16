import React from "react";
import { BiRun } from "react-icons/bi";
import './loader.css'

function Loader() {
    return (
        <div className="loader">
            <p>Loading... <BiRun /></p>
        </div>
    );
}

export { Loader };