import React, {useState, MouseEvent} from "react";

type StarPropsType = {
    selected: boolean,
    setOnClick: () => void,
}

const Star = (props: StarPropsType) => {

    return (
        //props.selected ? <span> <b>star</b> </span> : <span>star</span> //старый тернарник
        <span onClick={ () => {props.setOnClick()} }>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )

}

type RaitingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRaiting(props: RaitingPropsType) {

    const [onClick, setOnClick] = useState<number>(0)

    // const onClickHandler = (val: 1 | 2 | 3 | 4 | 5) => {
    //     setOnClick(val)
    // }
    return (
        <div>
            {/*<Star selected={onClick > 0} setOnClick={setOnClick} value={1}/>*/}
            {/*<Star selected={onClick > 1} setOnClick={setOnClick} value={2}/>*/}
            {/*<Star selected={onClick > 2} setOnClick={setOnClick} value={3}/>*/}
            {/*<Star selected={onClick > 3} setOnClick={setOnClick} value={4}/>*/}
            {/*<Star selected={onClick > 4} setOnClick={setOnClick} value={5}/>*/}
            <Star selected={onClick > 0} setOnClick={() => {setOnClick(1)}}/>
            <Star selected={onClick > 1} setOnClick={() => {setOnClick(2)}} />
            <Star selected={onClick > 2} setOnClick={() => {setOnClick(3)}} />
            <Star selected={onClick > 3} setOnClick={() => {setOnClick(4)}} />
            <Star selected={onClick > 4} setOnClick={() => {setOnClick(5)}} />
        </div>
    )
    //
    // if (props.value === 1) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // } else if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // } else if (props.value === 3) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // } else if (props.value === 4) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // } else if(props.value === 5) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     )
    // }  else {
    //     return (
    //         <div>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>)
    // };
}