import PathwaySectionButton from "./PathwaySectionButton";
import * as React from "react";
import {Job} from "./HomePage";


type JobBoxProps =
{
    job : Job;
    changePathwayHandler: (index:number) => void
}

export default class JobBox extends React.Component<JobBoxProps> {
    render() {
        return (
            <div id={this.props.job.id.toString()} key={this.props.job.id} style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '0 0 500px',
                margin: '10px',
                backgroundColor: '#3f6785',
                padding: 10,
            }}>
                <div>
                    {this.props.job.title}
                </div>
                <div>
                    £{this.props.job.salaryRange[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - {this.props.job.salaryRange[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}£
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 10,
                    }}>
                        <h6 style={{margin: 0}}>Hours</h6>
                        <h6 style={{margin: 0}}>{this.props.job.hours}</h6>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <h6 style={{margin: 0}}> Skills</h6>
                        <h6 style={{margin: 0}}> {this.props.job.skills}%</h6>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 10,
                    }}>
                        <h6 style={{margin: 0}}>Industry</h6>
                        <h6 style={{margin: 0}}> {this.props.job.industry}%</h6>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                }}>
                    <PathwaySectionButton name={"Summary"}/>
                    <PathwaySectionButton onClick={() => this.props.changePathwayHandler(this.props.job.id)} name={"Pathways"}/>
                    <PathwaySectionButton name={"Vacancies"}/>
                </div>
            </div>
        )
    }
}