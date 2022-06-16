import * as React from "react";
import JobBoxesList from "./JobBoxesList";
import {Pathway} from "./HomePage";
import '../styles/PathwaysSection.css'


type PathwaysSectionProps =
    {
        pathway: Pathway;
        changePathwayHandler: (index:number) => void
    }
export default class PathwaysSection extends React.Component<PathwaysSectionProps> {
    render() {
        return (
            <div className={"PathwaysSection"}>
                <JobBoxesList pathway={this.props.pathway} changePathwayHandler={this.props.changePathwayHandler}/>
            </div>
        );
    }
}
