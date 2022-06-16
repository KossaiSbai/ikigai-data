import React from "react";
import {TextField} from "@mui/material";
import '../styles/SearchBar.css'
import {GiMagnifyingGlass} from "react-icons/gi";

export default class SearchBar extends React.Component {
    render() {
        return (
                <div className="search">
                    <TextField
                        style={{backgroundColor:'#3f6785', color:'white'}}
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        defaultValue = "Explore pathways, for other job types..."
                    />
                    <GiMagnifyingGlass style={{backgroundColor:'white', color:'#ed722f', borderRadius:'10%'}}></GiMagnifyingGlass>
                </div>
        );
    }
}
