import * as React from "react";
import '../styles/TopBar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../images/Ikigai Logo.png'
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
                <img src={logo} style={{marginLeft: '20px'}} alt={"Logo"}/>
                <h6>Career Pathways</h6>
            <GiHamburgerMenu style={{marginRight: '20px'}}/>
            </div>
        );
    }
}
