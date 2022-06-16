import * as React from "react";
import {Button} from '@mui/material';

type PathwaySectionButtonProps =
    {
        name: string,
        onClick?: (parameter:any) => void,
    }

export default class PathwaySectionButton extends React.Component<PathwaySectionButtonProps> {

    render() {
        return (
            <Button variant="contained" sx={{
                backgroundColor: '#00b469',
            }} size={"small"} onClick={this.props.onClick}>{this.props.name}</Button>
        );
    }
}