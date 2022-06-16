import * as React from "react";
import '../styles/CentralSection.css';
import List from "./List";
import JobCircle from "./JobCircle";
import PathwayCircle from "./PathwayCircle";


export default class CentralSection extends React.Component {

    render() {

        return (
            <div className="CentralSection">
                <h2>Main Section</h2>
            <PathwayCircle></PathwayCircle>
            </div>
        );
    }
}
