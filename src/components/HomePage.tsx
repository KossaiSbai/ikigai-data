import * as React from "react";
import TopBar from "./TopBar";
import SearchSection from "./SearchSection";
import PathwaysSection from "./PathwaysSection";
import CentralSection from "./CentralSection";
import {mockData} from "../mockData";
import '../styles/HomePage.css';

const o = mockData[0];
export type Job ={
    title: string,
    id: number,
    salaryRange: number[],
    hours: number,
    skills: number,
    industry: number,
}
export type Pathway =
{
    name: string,
    jobs: Job[],
}


export default class HomePage extends React.Component {
    state = {
        pathway: o,
    };


    changePathway= (index: number) => {
        if(mockData[index] == undefined) {
            alert("Pathway not valid");
            return;
        }
        this.setState({pathway:mockData[index]})
        this.changePathway = this.changePathway.bind(this)
    }

    render() {
        return (
                <div className={"HomePage"}>
                    <div>
                    <TopBar/>
                    <SearchSection/>
                    </div>
                    <CentralSection pathway={this.state.pathway}/>
                    <PathwaysSection pathway={this.state.pathway} changePathwayHandler={this.changePathway}/>
                </div>
        );
    }
}
