import * as React from "react";
import '../styles/CentralSection.css';

export type JobCircleProps = {
    index: number;
    top: number;
    left: number;
}

const handleClick = (id: string, i: number) => {
    console.log(id)
    console.log(document.getElementById(id));
    // @ts-ignore
    document.getElementById(id).scrollLeft += i * 150;
    // console.log(refs[id]);
    // refs[id].current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    //     inline: ,
    // });
    console.log(`clicked ${id}`);
}


export default class JobCircle extends React.Component<JobCircleProps> {
    render() {
        return (
            <div className={'div2'} id={"circle"+this.props.index} style={{
                position: "absolute",
                top: (this.props.top).toString() + "px",
                left: (this.props.left).toString() + "px"
            }} onClick={() => {
                handleClick('listContainer', this.props.index);
            }}>

            </div>
        );
    }
}
