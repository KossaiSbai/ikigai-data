import * as React from "react";
import '../styles/CentralSection.css';
import JobCircle, {JobCircleProps} from "./JobCircle";



function renderCircles() {
    var div = 360 / 4;
    var radius = 150;
    var jobCircles: JobCircleProps[]= []

    // @ts-ignore
    var offsetToParentCenter = parseInt(String(150 / 2)); //assumes parent is square
    var offsetToChildCenter = 20;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 1; i <= 4; ++i) {

        const index = i;
        var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;

        var childdivProps = {index : i, top: y+totalOffset, left:x+totalOffset}
        jobCircles.push(childdivProps);
    }
    return jobCircles
}

export default class PathwayCircle extends React.Component {

    render() {
        return (
            <div id="parentdiv">
                {renderCircles().map((child) => (<JobCircle index={child.index} top={child.top} left={child.left} />               ))}
            </div>
        );
    }
}
