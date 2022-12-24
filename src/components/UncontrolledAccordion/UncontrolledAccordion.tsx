import React, {useReducer} from "react";
import {reducer} from "./Reducer";


type UncontrolledAccordionType = {
    title: string,
    // collapsed: boolean
}

type AccordionTitleType = {
    title: string,
    onclickHandler: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('Accordion title rendering')
    return (
        <h2 onClick={props.onclickHandler}>{props.title}</h2>
    )
}

const AccordionBody = function () {
    console.log('Accordion body rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

// type ActionType = {
//     type:
// }

export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {
    console.log('uncontrolled accordion rendering')
    const [state, dispatch] = useReducer(reducer, {collapsed: true})


    const onclickHandler = () => {
        //setCollapsed(!collapsed)
        dispatch({type: 'CHANGE-COLLAPSE'})
    }

    return (
        <div>
            <AccordionTitle title={props.title} onclickHandler={onclickHandler}/>
            {state.collapsed && <AccordionBody/>}
        </div>
    )
    //
    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.title}/>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.title}/>
    //             <AccordionBody/>
    //         </div>
    //     )
    // }
}




