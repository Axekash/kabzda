import React, {useState, MouseEvent} from "react";

type StarPropsType = {
    selected: boolean,
    setOnClick: () => void,
}

const StarSecret = (props: StarPropsType) => {

    return (
        //props.selected ? <span> <b>star</b> </span> : <span>star</span> //старый тернарник
        <span onClick={ () => {props.setOnClick()} }>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}

export const Star = React.memo(StarSecret)

type RaitingPropsType = {
    defaultValue: 0 | 1 | 2 | 3 | 4 | 5,
    onChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void

}

export function UncontrolledRaitingSecret(props: RaitingPropsType) {

    const [onClick, setOnClick] = useState<0 | 1 | 2 | 3 | 4 | 5>(props.defaultValue ? props.defaultValue : 0)
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

            <Star selected={onClick > 0} setOnClick={() => {setOnClick(1); props.onChange(1)}}/>
            <Star selected={onClick > 1} setOnClick={() => {setOnClick(2); props.onChange(2)}} />
            <Star selected={onClick > 2} setOnClick={() => {setOnClick(3); props.onChange(3)}} />
            <Star selected={onClick > 3} setOnClick={() => {setOnClick(4); props.onChange(4)}} />
            <Star selected={onClick > 4} setOnClick={() => {setOnClick(5); props.onChange(5)}} />
        </div>
    )
}

export const UncontrolledRaiting = React.memo(UncontrolledRaitingSecret)