import * as React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoFunnel } from "react-icons/io5";
import '../styles/SearchSection.css'
import SearchBar from "./SearchBar";
import { IconContext } from "react-icons";

export default class SearchSection extends React.Component {
    render() {
        return (
            <div className={"SearchSection"}>
                <SearchBar/>
                <IoFunnel style={{backgroundColor:'#ed722f', color:'white', borderRadius:'10%'}}></IoFunnel>
            </div>
        );
    }
}
