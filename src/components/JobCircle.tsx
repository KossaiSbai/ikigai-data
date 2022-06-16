import * as React from "react";
import '../styles/CentralSection.css';

export type JobCircleProps = {
    index: number;
    top: number;
    left: number;
    clickFunction?: () => void
}


const handleClick = (refs:  React.RefObject<any>[], id: number) => {
    // @ts-ignore
    refs[id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}



export default class JobCircle extends React.Component<JobCircleProps> {

    state = {
        isSelected: false,
    };


    render() {

        const clickHandler = () =>
        {
            // @ts-ignore
            this.props.clickFunction();
        }

        return (
            <button className={'job-circle'} id={"circle"+this.props.index} style={{
                position: "absolute",
                top: (this.props.top).toString() + "px",
                left: (this.props.left).toString() + "px",
                color: "white",
            }} onClick={clickHandler}>
                0{this.props.index}
            </button>
        );
    }
}
