import React from "react";


type AccordionType = {
    title: string,
    collapsed: boolean,
    onChange: () => void
}

type AccordionTitleType = {
    title: string,
    setAccordionCollapsed: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h2 onClick={() => {
            props.setAccordionCollapsed()
        }}>{props.title}</h2>
    )
}

const AccordionBody = function () {
    console.log('AccordionBody rendering')
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

export const Accordion = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.title} setAccordionCollapsed={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
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




