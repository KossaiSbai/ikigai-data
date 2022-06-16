import * as React from "react";
import '../styles/TopBar.css';
import { GiHamburgerMenu } from "react-icons/gi";
// type User = {
//     name: string;
//     age?: number;
//     address?: string;
//     dob?: Date;
// }

export default class TopBar extends React.Component {
    render() {
        return (
            <div className={'TopBar'}>
            {/*<h1> Career Pathways!</h1>*/}
            <GiHamburgerMenu></GiHamburgerMenu>
            </div>
        );
    }
}
