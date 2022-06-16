import * as React from "react";
import {Pathway} from "./HomePage";
import JobBox from "./JobBox";


type ListProps =
    {
        pathway: Pathway,
        changePathwayHandler: (index: number) => void
    }

export default class JobBoxesList extends React.Component<ListProps> {

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/*<button onClick={() => handleClick('listContainer', 2)}/>*/}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'auto',
                    scrollBehavior: "smooth",
                    maxWidth: '60%'
                }}
                     id={'listContainer'}>
                    {this.props.pathway.jobs.map((job) => (
                        <JobBox job={job} changePathwayHandler={this.props.changePathwayHandler}/>
                    ))}
                </div>
            </div>
        );
    }
}