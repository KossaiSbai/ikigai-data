import * as React from "react";
import '../styles/CentralSection.css';
import JobCircle, {JobCircleProps} from "./JobCircle";
import {Pathway} from "./HomePage";


type PathwayCircleProps =
    {
        pathway: Pathway,
        name: string,
    }

function renderCircles(num: number) {
    var div = 360 / num;
    var radius = 150;
    var jobCircles: JobCircleProps[] = []

    var offsetToParentCenter = parseInt(String(150 / 2));
    var offsetToChildCenter = 20;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 1; i <= num; ++i) {

        const index = i;
        var y = Math.sin((div * (num - i)) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * (num - i)) * (Math.PI / 180)) * radius;

        var childdivProps = {index: i, top: y + totalOffset, left: x + totalOffset}
        jobCircles.push(childdivProps);
    }
    return jobCircles
}


export default class PathwayCircle extends React.Component<PathwayCircleProps> {

    render() {
        const list = this.props.pathway.jobs;
        const jobCircleProps = renderCircles(list.length);
        const handleClick = (id: string) => {
            const selectedCircle = document.getElementById("circle" + id) as HTMLButtonElement
            selectedCircle.style.backgroundColor = 'white'
            selectedCircle.style.color = '#ed722f'
            for (var j = 1; j <= list.length; j++) {
                if (j != Number.parseInt(id)) {
                    const otherCircle = document.getElementById("circle" + j) as HTMLButtonElement
                    otherCircle.style.backgroundColor = '#ed722f'
                    otherCircle.style.color = 'white'
                }
            }
            const jobBoxElement = document.getElementById(id) as HTMLButtonElement
            jobBoxElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
        return (
            <div id="pathway-circle" style={{textAlign:'center'}}>
                {jobCircleProps.map((child) => (
                    <JobCircle key={child.index} index={child.index} top={child.top} left={child.left}
                               clickFunction={() => {
                                   handleClick(child.index.toString());
                               }}/>))}
                <div style={{top:'50px', position:'absolute', fontSize:'20px'}}> {this.props.name}</div>

            </div>
        );
    }
}
