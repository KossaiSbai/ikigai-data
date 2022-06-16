import * as React from "react";
import '../styles/CentralSection.css';
import JobBoxesList from "./JobBoxesList";
import JobCircle from "./JobCircle";
import PathwayCircle from "./PathwayCircle";
import {Pathway} from "./HomePage";


type CentralSectionProps =
    {
        pathway: Pathway;
    }

export default class CentralSection extends React.Component<CentralSectionProps> {

    render() {

        return (
            <div className="CentralSection">
                <PathwayCircle pathway={this.props.pathway} name={this.props.pathway.name}/>
            </div>
        );
    }
}
