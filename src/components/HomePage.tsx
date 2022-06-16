import * as React from "react";
import TopBar from "./TopBar";
import SearchSection from "./SearchSection";
import PathwaysSection from "./PathwaysSection";
import CentralSection from "./CentralSection";
import '../styles/HomePage.css';
// type User = {
//     name: string;
//     age?: number;
//     address?: string;
//     dob?: Date;
// }

export default class HomePage extends React.Component {
    render() {
        return (
                <div className={"HomePage"}>
                    <div>
                    <TopBar></TopBar>
                    <SearchSection></SearchSection>
                    </div>
                    <CentralSection></CentralSection>
                    <PathwaysSection></PathwaysSection>
                </div>
        );
    }
}
