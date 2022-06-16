import * as React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoFunnelOutline } from "react-icons/io5";

export default class SearchSection extends React.Component {
    render() {
        return (
            <div>
                <h2>Search Section</h2>
                <GiMagnifyingGlass></GiMagnifyingGlass>
                <IoFunnelOutline></IoFunnelOutline>
            </div>
        );
    }
}
