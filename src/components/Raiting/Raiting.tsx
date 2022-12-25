import React from "react";

type StarPropsType = {
    selected: boolean,
    onClick: (value: RaitingValueType) => void,

    value: RaitingValueType
}

const StarSecret = (props: StarPropsType) => {
    return <span onClick={() => {
        props.onClick(props.value)
    }}
    >
        {props.selected ? <b>star </b> : 'star '}
    </span>
}

export const Star = React.memo(StarSecret)

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5;


type RaitingPropsType = {
    /**
     * this value to get useState
     */
    value: RaitingValueType,
    /**
     * that callback is called when any item will clicked
     * @param value must be 1-5
     */
    onClick: (value: RaitingValueType) => void

}

export function RaitingSecret(props: RaitingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

export const Raiting = React.memo(RaitingSecret)