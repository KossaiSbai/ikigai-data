import * as React from "react";


const list = [
    {
        id: 'a',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'b',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'c',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'd',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'e',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'f',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'z',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'g',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'h',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'i',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'j',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'k',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'l',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'm',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
];

export default function List() {

    const refs = list.reduce((acc:any, value) => {
        acc[value.id] = React.createRef();
        return acc;
    }, {});

    const handleClick = (id: string | number, i: number) => {
        // @ts-ignore
        document.getElementById(id).scrollLeft += i*150;
        // console.log(refs[id]);
        // refs[id].current.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //     inline: ,
        // });
        console.log(`clicked ${id}`);
        }

    return (
        <div>
       <button onClick={() => handleClick('listContainer', 2)}/>
        <div style={{display:'flex', flexDirection:'row', overflow:'auto', scrollBehavior:"smooth"}} id={'listContainer'}>
            {list.map((item) => (
                <div id={item.id}  key={item.id}  ref={refs[item.id]} style={{display:'flex', flexDirection:'column', flex: '0 0 300px' , height:'100px', margin:'10px' ,backgroundColor:'orange'}}>
                    {item.firstname}
                </div>
                ))}
        </div>
        </div>
    );
}